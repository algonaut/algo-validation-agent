import v8n from 'v8n';
import { maxByteLength } from './utils/validators';

// For full typing support on the extend function,
// v8n should use context instead of a global variable
// Details: https://github.com/imbrn/v8n/issues/28
// @ts-ignore
v8n.extend({ maxByteLength });

/**
 * Validate total issuance amount when creating an asset
 * @category Assets
 * @param {number}
 * @returns {boolean}
 */
export function assetTotalIssuance(total: number) {
  return v8n()
    .integer()
    .between(1, Number.MAX_SAFE_INTEGER)
    .test(total);
}

/**
 * Validate asset decimal places when creating an asset
 * @category Assets
 * @param {number}
 * @returns {boolean}
 */
export function assetDecimalPlaces(decimals: number) {
  return v8n()
    .integer()
    .between(0, 19)
    .test(decimals);
}

/**
 * Validate defaultFrozen has a boolean value when creating an asset
 * @category Assets
 * @param {boolean}
 * @returns {boolean}
 */
export function defaultFrozen(defaultFrozen: boolean) {
  return v8n()
    .boolean()
    .test(defaultFrozen);
}

/**
 * Validate for a metadata hash string when creating an asset
 * @category Assets
 * @param {string}
 * @returns {boolean}
 */
export function assetMetadataHash(hash: string) {
  return v8n()
    .string()
    .maxByteLength(32)
    .test(hash);
}

/**
 * Validate asset name when creating an asset
 * @category Assets
 * @param {string}
 * @returns {boolean}
 */
export function assetName(assetName: string) {
  return v8n()
    .string()
    .maxByteLength(32)
    .test(assetName);
}

/**
 * Validate unit name when creating an asset
 * @category Assets
 * @param {string}
 * @returns {boolean}
 */
export function unitName(unitName: string) {
  return v8n()
    .string()
    .maxByteLength(8)
    .test(unitName);
}

/**
 * Validate asset url when creating an asset
 * @category Assets
 * @param {string}
 * @returns {boolean}
 */
export function assetUrl(url: string) {
  return v8n()
    .string()
    .maxByteLength(32)
    .test(url);
}

/**
 * Validate asset index value
 * @category Assets
 * @param {number}
 * @returns {boolean}
 */
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
