import v8n from 'v8n';
import { maxByteLength } from './custom';

// For full typing support on the extend function,
// v8n should use context instead of a global variable
// Details: https://github.com/imbrn/v8n/issues/28
// @ts-ignore
v8n.extend({ maxByteLength });

/** ASSET CREATION & CONFIGURATION */

export function assetTotalIssuance(total: number) {
  return v8n()
    .integer()
    .between(1, Number.MAX_SAFE_INTEGER)
    .test(total);
}

export function assetDecimalPlaces(decimals: number) {
  return v8n()
    .integer()
    .between(0, 19)
    .test(decimals);
}

export function defaultFrozen(defaultFrozen: boolean) {
  return v8n()
    .boolean()
    .test(defaultFrozen);
}

export function assetMetadataHash(hash: string) {
  return v8n()
    .string()
    .maxByteLength(32)
    .test(hash);
}

export function assetName(assetName: string) {
  return v8n()
    .string()
    .maxByteLength(32)
    .test(assetName);
}

export function unitName(unitName: string) {
  return v8n()
    .string()
    .maxByteLength(8)
    .test(unitName);
}

export function assetUrl(url: string) {
  return v8n()
    .string()
    .maxByteLength(32)
    .test(url);
}

/* ASSET TRANSACTION */

export function assetIndex(assetIndex: number) {
  return v8n()
    .number()
    .positive()
    .lessThanOrEqual(Number.MAX_SAFE_INTEGER)
    .test(assetIndex);
}

export default {
  assetTotalIssuance,
  assetDecimalPlaces,
  defaultFrozen,
  assetIndex,
  assetName,
  unitName,
  assetUrl,
  assetMetadataHash
};
