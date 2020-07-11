import rules from './rules';

/**
 * Test for a valid Algorand asset index
 * @category Core
 * @param {number}
 * @returns {boolean}
 */
export function isAssetIndex(assetId: number) {
  return rules.assetIndex.test(assetId);
}

/**
 * Validate total issuance amount when creating an asset
 * @category Assets
 * @param {number}
 * @returns {boolean}
 */
export function assetTotalIssuance(total: number) {
  return rules.assetTotal.test(total);
}

/**
 * Validate asset decimal places when creating an asset
 * @category Assets
 * @param {number}
 * @returns {boolean}
 */
export function assetDecimalPlaces(decimals: number) {
  return rules.assetDecimals.test(decimals);
}

/**
 * Validate defaultFrozen has a boolean value when creating an asset
 * @category Assets
 * @param {boolean}
 * @returns {boolean}
 */
export function defaultFrozen(defaultFrozen: boolean) {
  return rules.assetDefaultFrozen.test(defaultFrozen);
}

/**
 * Validate for a metadata hash string when creating an asset
 * @category Assets
 * @param {string}
 * @returns {boolean}
 */
export function assetMetadataHash(hash: string) {
  return rules.assetMetadataHash.test(hash);
}

/**
 * Validate asset name when creating an asset
 * @category Assets
 * @param {string}
 * @returns {boolean}
 */
export function assetName(assetName: string) {
  return rules.assetName.test(assetName);
}

/**
 * Validate unit name when creating an asset
 * @category Assets
 * @param {string}
 * @returns {boolean}
 */
export function unitName(unitName: string) {
  return rules.assetUnitName.test(unitName);
}

/**
 * Validate asset url when creating an asset
 * @category Assets
 * @param {string}
 * @returns {boolean}
 */
export function assetUrl(url: string) {
  return rules.assetURL.test(url);
}

export default {
  isAssetIndex,
  assetTotalIssuance,
  assetDecimalPlaces,
  defaultFrozen,
  assetName,
  unitName,
  assetUrl,
  assetMetadataHash
};
