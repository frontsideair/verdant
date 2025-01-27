const migrations = [version1, version2, version3, version4];

export function openMetadataDatabase(
	namespace: string,
	{
		indexedDB = window.indexedDB,
		databaseName,
		log,
	}: {
		indexedDB?: IDBFactory;
		databaseName: string;
		log?: (...args: any[]) => void;
	},
): Promise<{ wasInitialized: boolean; db: IDBDatabase }> {
	return new Promise<{ wasInitialized: boolean; db: IDBDatabase }>(
		(resolve, reject) => {
			const request = indexedDB.open(databaseName, 4);
			let wasInitialized = false;
			request.onupgradeneeded = async (event) => {
				const db = request.result;
				const tx = request.transaction!;

				const toRun = migrations.slice(event.oldVersion);
				for (const migration of toRun) {
					await migration(db, tx);
				}

				if (!event.oldVersion) {
					wasInitialized = true;
				}
			};
			request.onerror = () => {
				console.error('Error opening database', request.error);
				reject(request.error);
			};
			request.onsuccess = () => {
				resolve({ db: request.result, wasInitialized });
			};
		},
	);
}

async function version1(db: IDBDatabase, tx: IDBTransaction) {
	const baselinesStore = db.createObjectStore('baselines', {
		keyPath: 'oid',
	});
	const operationsStore = db.createObjectStore('operations', {
		keyPath: 'oid_timestamp',
	});
	const infoStore = db.createObjectStore('info', { keyPath: 'type' });
	baselinesStore.createIndex('timestamp', 'timestamp');
	operationsStore.createIndex('isLocal_timestamp', 'isLocal_timestamp');
	operationsStore.createIndex('documentOid_timestamp', 'documentOid_timestamp');
}

/**
 * 1 -> 2 changes:
 *
 * Consolidate compound index names:
 *
 * Operations:
 * - isLocal_timestamp -> l_t
 * - documentOid_timestamp -> d_t
 */
async function version2(db: IDBDatabase, tx: IDBTransaction) {
	const operations = tx.objectStore('operations');
	await new Promise<void>((resolve, reject) => {
		const cursorReq = operations.openCursor();
		cursorReq.onsuccess = () => {
			// rename the consolidated fields
			const cursor = cursorReq.result;
			if (cursor) {
				const { isLocal_timestamp, documentOid_timestamp, ...value } =
					cursor.value;
				cursor.update({
					...value,
					l_t: isLocal_timestamp,
					d_t: documentOid_timestamp,
				});
				cursor.continue();
			} else {
				resolve();
			}
		};
		cursorReq.onerror = (event) => {
			reject(cursorReq.error);
		};
	});
	// remove the old indexes
	operations.deleteIndex('isLocal_timestamp');
	operations.deleteIndex('documentOid_timestamp');
	// create the new indexes
	operations.createIndex('l_t', 'l_t', { unique: false });
	operations.createIndex('o_t', 'o_t', { unique: false });
	operations.createIndex('d_t', 'd_t', { unique: false });
}

/**
 * 2 -> 3 changes:
 *
 * Add timestamp index to operations
 */
async function version3(db: IDBDatabase, tx: IDBTransaction) {
	const operations = tx.objectStore('operations');
	operations.createIndex('timestamp', 'timestamp');
}

async function version4(db: IDBDatabase, tx: IDBTransaction) {
	const files = db.createObjectStore('files', {
		keyPath: 'id',
	});
	files.createIndex('remote', 'remote');
	files.createIndex('deletedAt', 'deletedAt');
}
