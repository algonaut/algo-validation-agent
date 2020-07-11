/**
 * Test for a valid Algorand asset index
 * @category Core
 * @param {number}
 * @returns {boolean}
 */
export declare function assetIndex(assetId: number): any;
/**
 * Validate total issuance amount when creating an asset
 * @category Assets
 * @param {number}
 * @returns {boolean}
 */
export declare function assetTotal(total: number): any;
/**
 * Validate asset decimal places when creating an asset
 * @category Assets
 * @param {number}
 * @returns {boolean}
 */
export declare function assetDecimals(decimals: number): any;
/**
 * Validate defaultFrozen has a boolean value when creating an asset
 * @category Assets
 * @param {boolean}
 * @returns {boolean}
 */
export declare function assetDefaultFrozen(defaultFrozen: boolean): any;
/**
 * Validate for a metadata hash string when creating an asset
 * @category Assets
 * @param {string}
 * @returns {boolean}
 */
export declare function assetMetadataHash(hash: string): any;
/**
 * Validate asset name when creating an asset
 * @category Assets
 * @param {string}
 * @returns {boolean}
 */
export declare function assetName(assetName: string): any;
/**
 * Validate unit name when creating an asset
 * @category Assets
 * @param {string}
 * @returns {boolean}
 */
export declare function assetUnitName(unitName: string): any;
/**
 * Validate asset url when creating an asset
 * @category Assets
 * @param {string}
 * @returns {boolean}
 */
export declare function assetURL(url: string): any;
declare const _default: {
    assetIndex: typeof assetIndex;
    assetTotal: typeof assetTotal;
    assetDecimals: typeof assetDecimals;
    assetDefaultFrozen: typeof assetDefaultFrozen;
    assetName: typeof assetName;
    assetUnitName: typeof assetUnitName;
    assetURL: typeof assetURL;
    assetMetadataHash: typeof assetMetadataHash;
};
export default _default;
