/**
 * Test a string for valid Algorand address requirements
 * @category Core
 * @param {string}
 * @returns {boolean}
 */
export declare function isAlgorandAddress(input: string): any;
/**
 * Test for a valid Algorand transaction ID
 * @category Core
 * @param {string}
 * @returns {boolean}
 */
export declare function isTransactionId(txId: string): any;
declare const _default: {
    isAlgorandAddress: typeof isAlgorandAddress;
    isTransactionId: typeof isTransactionId;
};
export default _default;
