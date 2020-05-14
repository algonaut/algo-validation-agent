/**
 * Validate total issuance amount when creating an asset
 * @category Assets
 * @param {number}
 * @returns {boolean}
 */
export declare function assetTotalIssuance(total: number): boolean;
/**
 * Validate asset decimal places when creating an asset
 * @category Assets
 * @param {number}
 * @returns {boolean}
 */
export declare function assetDecimalPlaces(decimals: number): boolean;
/**
 * Validate defaultFrozen has a boolean value when creating an asset
 * @category Assets
 * @param {boolean}
 * @returns {boolean}
 */
export declare function defaultFrozen(defaultFrozen: boolean): boolean;
/**
 * Validate for a metadata hash string when creating an asset
 * @category Assets
 * @param {string}
 * @returns {boolean}
 */
export declare function assetMetadataHash(hash: string): boolean;
/**
 * Validate asset name when creating an asset
 * @category Assets
 * @param {string}
 * @returns {boolean}
 */
export declare function assetName(assetName: string): boolean;
/**
 * Validate unit name when creating an asset
 * @category Assets
 * @param {string}
 * @returns {boolean}
 */
export declare function unitName(unitName: string): boolean;
/**
 * Validate asset url when creating an asset
 * @category Assets
 * @param {string}
 * @returns {boolean}
 */
export declare function assetUrl(url: string): boolean;
declare const _default: {
    assetTotalIssuance: typeof assetTotalIssuance;
    assetDecimalPlaces: typeof assetDecimalPlaces;
    defaultFrozen: typeof defaultFrozen;
    assetName: typeof assetName;
    unitName: typeof unitName;
    assetUrl: typeof assetUrl;
    assetMetadataHash: typeof assetMetadataHash;
};
export default _default;
