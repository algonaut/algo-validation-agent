/**
 * Test for a valid payment transaction payload
 * @category Transactions
 * @param {object}
 * @returns {boolean}
 */
export declare function payment(txn: TransactionPayload): boolean;
/**
 * Test for a valid close account transaction payload
 * @category Transactions
 * @param {object}
 * @returns {boolean}
 */
export declare function close(txn: TransactionPayload): boolean;
/**
 * Test for a valid online key registration transaction payload
 * @category Transactions
 * @param {object}
 * @returns {boolean}
 */
export declare function registerKeyOnline(txn: TransactionPayload): boolean;
/**
 * Test for a valid offline key registration transaction payload
 * @category Transactions
 * @param {object}
 * @returns {boolean}
 */
export declare function registerKeyOffline(txn: TransactionPayload): boolean;
/**
 * Test for a valid asset creation transaction payload
 * @category Transactions
 * @param {object}
 * @returns {boolean}
 */
export declare function assetCreate(txn: TransactionPayload): boolean;
/**
 * Test for a valid asset configuration transaction payload
 * @category Transactions
 * @param {object}
 * @returns {boolean}
 */
export declare function assetConfigure(txn: TransactionPayload): boolean;
/**
 * Test for a valid asset destroy transaction payload
 * @category Transactions
 * @param {object}
 * @returns {boolean}
 */
export declare function assetDestroy(txn: TransactionPayload): boolean;
/**
 * Test for a valid asset opt-in transaction payload
 * @category Transactions
 * @param {object}
 * @returns {boolean}
 */
export declare function assetOptIn(txn: TransactionPayload): boolean;
/**
 * Test for a valid asset transfer transaction payload
 * @category Transactions
 * @param {object}
 * @returns {boolean}
 */
export declare function assetTransfer(txn: TransactionPayload): boolean;
/**
 * Test for a valid revoke asset transaction payload
 * @category Transactions
 * @param {object}
 * @returns {boolean}
 */
export declare function assetRevoke(txn: TransactionPayload): boolean;
/**
 * Test for a valid freeze asset transaction payload
 * @category Transactions
 * @param {object}
 * @returns {boolean}
 */
export declare function assetFreeze(txn: TransactionPayload): boolean;
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
