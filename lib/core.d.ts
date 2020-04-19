/**
 * Test for a valid Algorand address
 * @category Core
 * @param {string}
 * @returns {boolean}
 */
export declare function algoAddress(algoAddress: string): boolean;
/**
 * Test for a valid Algorand amount
 * @category Core
 * @param {number}
 * @returns {boolean}
 */
export declare function txnAmount(txnAmount: number): boolean;
declare const _default: {
    algoAddress: typeof algoAddress;
};
export default _default;
