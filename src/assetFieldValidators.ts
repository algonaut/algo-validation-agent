import rules from './rules';

/**
 * Test for a valid Algorand asset index
 * @category Core
 * @param {number}
 * @returns {boolean}
 */
export function assetIndex(assetId: number) {
  return rules.assetIndex.test(assetId);
}

/**
 * Validate total issuance amount when creating an asset
 * @category Assets
 * @param {number}
 * @returns {boolean}
 */
export function assetTotal(total: number) {
  return rules.assetTotal.test(total);
}

/**
 * Validate asset decimal places when creating an asset
 * @category Assets
 * @param {number}
 * @returns {boolean}
 */
export function assetDecimals(decimals: number) {
  return rules.assetDecimals.test(decimals);
}

/**
 * Validate defaultFrozen has a boolean value when creating an asset
 * @category Assets
 * @param {boolean}
 * @returns {boolean}
 */
export function assetDefaultFrozen(defaultFrozen: boolean) {
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
export function assetUnitName(unitName: string) {
  return rules.assetUnitName.test(unitName);
}

/**
 * Validate asset url when creating an asset
 * @category Assets
 * @param {string}
 * @returns {boolean}
 */
export function assetURL(url: string) {
  return rules.assetURL.test(url);
}

export default {
  assetIndex,
  assetTotal,
  assetDecimals,
  assetDefaultFrozen,
  assetName,
  assetUnitName,
  assetURL,
  assetMetadataHash
};
