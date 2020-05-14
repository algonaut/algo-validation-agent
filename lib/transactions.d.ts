/**
 * Test for a valid payment transaction payload
 * @category Transactions
 * @param {object}
 * @returns {boolean}
 */
export declare function payment(txn: object): boolean;
/**
 * Test for a valid close account transaction payload
 * @category Transactions
 * @param {object}
 * @returns {boolean}
 */
export declare function close(txn: object): boolean;
/**
 * Test for a valid online key registration transaction payload
 * @category Transactions
 * @param {object}
 * @returns {boolean}
 */
export declare function registerKeyOnline(txn: object): boolean;
/**
 * Test for a valid offline key registration transaction payload
 * @category Transactions
 * @param {object}
 * @returns {boolean}
 */
export declare function registerKeyOffline(txn: object): boolean;
/**
 * Test for a valid asset creation transaction payload
 * @category Transactions
 * @param {object}
 * @returns {boolean}
 */
export declare function assetCreate(txn: object): boolean;
/**
 * Test for a valid asset configuration transaction payload
 * @category Transactions
 * @param {object}
 * @returns {boolean}
 */
export declare function assetConfigure(txn: object): boolean;
/**
 * Test for a valid asset destroy transaction payload
 * @category Transactions
 * @param {object}
 * @returns {boolean}
 */
export declare function assetDestroy(txn: object): boolean;
/**
 * Test for a valid asset opt-in transaction payload
 * @category Transactions
 * @param {object}
 * @returns {boolean}
 */
export declare function assetOptIn(txn: object): boolean;
/**
 * Test for a valid asset transfer transaction payload
 * @category Transactions
 * @param {object}
 * @returns {boolean}
 */
export declare function assetTransfer(txn: object): boolean;
/**
 * Test for a valid revoke asset transaction payload
 * @category Transactions
 * @param {object}
 * @returns {boolean}
 */
export declare function assetRevoke(txn: object): boolean;
/**
 * Test for a valid freeze asset transaction payload
 * @category Transactions
 * @param {object}
 * @returns {boolean}
 */
export declare function assetFreeze(txn: object): boolean;
declare const _default: {
    payment: typeof payment;
    close: typeof close;
    registerKeyOnline: typeof registerKeyOnline;
    registerKeyOffline: typeof registerKeyOffline;
    assetCreate: typeof assetCreate;
    assetConfigure: typeof assetConfigure;
    assetDestroy: typeof assetDestroy;
    assetOptIn: typeof assetOptIn;
    assetTransfer: typeof assetTransfer;
    assetRevoke: typeof assetRevoke;
    assetFreeze: typeof assetFreeze;
};
export default _default;
