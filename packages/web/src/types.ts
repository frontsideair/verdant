import { Operation, OperationPatch } from '@lo-fi/common';

export interface LocalOperation extends Operation {
	inverse: OperationPatch;
}

export type LogFunction = (...args: any[]) => void;
