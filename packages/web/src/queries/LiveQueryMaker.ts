import { CollectionFilter, StorageSchema } from '@lo-fi/common';
import { ObjectEntity } from '../index.js';
import { LiveQuery } from './LiveQuery.js';
import { BaseQueryStore } from './QueryStore.js';
import { getRange } from './ranges.js';

export class LiveQueryMaker<
	Result extends ObjectEntity<any, any, any>,
	Store extends BaseQueryStore<LiveQuery<any>>,
> {
	constructor(
		private readonly queryStore: Store,
		private readonly schema: StorageSchema,
	) {}

	get = (collection: string, primaryKey: string): LiveQuery<Result> => {
		return this.queryStore.get({
			collection: collection as string,
			range: primaryKey,
			single: true,
		});
	};

	findOne = (
		collection: string,
		query?: CollectionFilter,
	): LiveQuery<Result> => {
		return this.queryStore.get({
			collection,
			range: this.getRange(collection, query),
			single: true,
			index: query?.where,
			direction: query?.order === 'desc' ? 'prev' : 'next',
		});
	};

	findAll = (
		collection: string,
		query?: CollectionFilter,
	): LiveQuery<Result[]> => {
		return this.queryStore.get({
			collection,
			range: this.getRange(collection, query),
			index: query?.where,
			direction: query?.order === 'desc' ? 'prev' : 'next',
		});
	};

	private getRange = (collection: string, index?: CollectionFilter) => {
		return getRange(this.schema, collection, index);
	};
}
