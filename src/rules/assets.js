import v8n from 'v8n';
import { maxByteLength } from '../utils/extensions';

// For full typing support on the extend function,
// v8n should use context instead of a global variable
// Details: https://github.com/imbrn/v8n/issues/28
// @ts-ignore
v8n.extend({ maxByteLength });

export const assetDecimals = v8n()
  .integer()
  .between(0, 19);

export const assetTotal = v8n()
  .integer()
  .between(1, Number.MAX_SAFE_INTEGER);

export const assetDefaultFrozen = v8n().boolean();

export const assetMetadataHash = v8n().string();

export const assetName = v8n()
  .string()
  .maxByteLength(32);

export const assetUnitName = v8n()
  .string()
  .maxByteLength(8);

export const assetURL = v8n()
  .string()
  .maxByteLength(32);

export const assetIndex = v8n()
  .number()
  .positive()
  .lessThanOrEqual(Number.MAX_SAFE_INTEGER);

export const freezeState = v8n().boolean();

export default {
  assetIndex,
  assetDecimals,
  assetTotal,
  assetDefaultFrozen,
  assetMetadataHash,
  assetName,
  assetUnitName,
  assetURL,
  freezeState
};
