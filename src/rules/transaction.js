import v8n from 'v8n';
import { algoAddress } from './core';
import { isUint8Array } from '../utils/extensions';

// For full typing support on the extend function,
// v8n should use context instead of a global variable
// Details: https://github.com/imbrn/v8n/issues/28
// @ts-ignore
v8n.extend({ isUint8Array });

export const genesisID = v8n().string();
export const lease = v8n().isUint8Array();
export const fee = v8n()
  .integer()
  .positive()
  .greaterThanOrEqual(1000)
  .lessThanOrEqual(Number.MAX_SAFE_INTEGER);
export const note = v8n()
  .string()
  .maxByteLength(1000);
export const group = v8n().string();
export const reKeyTo = algoAddress;
export const firstRound = v8n()
  .integer()
  .positive()
  .lessThanOrEqual(Number.MAX_SAFE_INTEGER);
export const lastRound = v8n()
  .integer()
  .positive()
  .greaterThan(0)
  .lessThanOrEqual(Number.MAX_SAFE_INTEGER);
export const genesisHash = v8n().string();
export const amount = v8n()
  .integer()
  .lessThanOrEqual(Number.MAX_SAFE_INTEGER)
  .greaterThanOrEqual(0);

export const voteFirst = v8n()
  .integer()
  .greaterThan(0);

export const voteKeyDilution = v8n()
  .integer()
  .greaterThan(0);

export const voteLast = v8n()
  .integer()
  .greaterThan(0);

export const voteKey = v8n().string();
export const selectionKey = v8n().string();

export const type = v8n()
  .string()
  .passesAnyOf(
    v8n().equal('pay'),
    v8n().equal('keyreg'),
    v8n().equal('acfg'),
    v8n().equal('axfer'),
    v8n().equal('afrz')
  );

export default {
  genesisID,
  lease,
  fee,
  note,
  group,
  reKeyTo,
  firstRound,
  lastRound,
  genesisHash,
  amount,
  voteFirst,
  voteKeyDilution,
  voteLast,
  voteKey,
  selectionKey,
  type
};
