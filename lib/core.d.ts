import v8n from 'v8n';
export declare const algoAddress: v8n.Validation;
export declare const algoTxn: v8n.Validation;
export declare const assetIndex: v8n.Validation;
export declare const assetCreateParams: v8n.Validation;
export declare const assetConfigureParams: v8n.Validation;
/**
 * Test a string for valid Algorand address requirements
 * @category Core
 * @param {string}
 * @returns {boolean}
 */
export declare function isAlgorandAddress(input: string): boolean;
/**
 * Test for a valid Algorand transaction ID
 * @category Core
 * @param {string}
 * @returns {boolean}
 */
export declare function isTransactionId(txId: string): boolean;
/**
 * Test for a valid Algorand asset index
 * @category Core
 * @param {number}
 * @returns {boolean}
 */
export declare function isAssetIndex(assetId: number): boolean;
/**
 * Test for basic valid Algorand transaction payload shape
 * @category Core
 * @param {object}
 * @returns {boolean}
 */
export declare function isTransactionPayload(txnPayload: object): boolean;
declare const _default: {
    assetIndex: v8n.Validation;
    algoAddress: v8n.Validation;
    algoTxn: v8n.Validation;
    assetCreateParams: v8n.Validation;
    assetConfigureParams: v8n.Validation;
    isAlgorandAddress: typeof isAlgorandAddress;
    isTransactionId: typeof isTransactionId;
    isAssetIndex: typeof isAssetIndex;
    isTransactionPayload: typeof isTransactionPayload;
};
export default _default;
