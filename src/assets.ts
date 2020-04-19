import v8n from 'v8n';
import { byteLength } from './custom';

// For full typing support on the extend function,
// v8n should use context instead of a global variable
// Details: https://github.com/imbrn/v8n/issues/28
// @ts-ignore
v8n.extend({ byteLength });

export function assetId(assetId: number) {
  return v8n()
    .number()
    .test(assetId);
}

export function assetName(assetName: string) {
  return v8n()
    .string()
    .between(1, 32)
    .test(assetName);
}

export function unitName(unitName: string) {
  return v8n()
    .string()
    .between(1, 8)
    .test(unitName);
}

export function assetDecimalPlaces(decimals: string) {
  return v8n()
    .integer()
    .between(0, 19)
    .test(decimals);
}

export function defaultFrozen(isFrozen: boolean) {
  return v8n()
    .boolean()
    .test(isFrozen);
}

export function assetTotalIssuance(total: number) {
  // Max safe integer?
  return v8n()
    .integer()
    .between(1, Number.MAX_SAFE_INTEGER)
    .test(total);
}

export function assetUrl(url: string) {
  // Length?
  return v8n()
    .string()
    .test(url);
}

export function assetMetadataHash(hash: string) {
  // Length?
  // Encoding?
  return v8n()
    .string()
    .length(32)
    .test(hash);
}

export default {
  assetId,
  assetName,
  unitName,
  assetDecimalPlaces,
  defaultFrozen,
  assetTotalIssuance,
  assetUrl,
  assetMetadataHash
};
