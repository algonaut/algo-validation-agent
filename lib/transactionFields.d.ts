/**
 * Test sender field for a valid Algorand address
 * @category All Transactions
 * @param {string}
 * @returns {boolean}
 */
export declare function transactionSender(senderAddr: string): boolean;
/**
 * Test for a valid transaction fee
 * @category All Transactions
 * @param {number}
 * @returns {boolean}
 */
export declare function transactionFee(txnFee: number): boolean;
/**
 * Test for a valid first round
 * @category All Transactions
 * @param {number}
 * @returns {boolean}
 */
export declare function firstValidRound(firstValid: number): boolean;
/**
 * Test for a valid first round
 * @category All Transactions
 * @param {number}
 * @returns {boolean}
 */
export declare function lastValidRound(lastValid: number): boolean;
/**
 * Test for a valid note field
 * @category All Transactions
 * @param {string}
 * @returns {boolean}
 */
export declare function transactionNote(note: string): boolean;
/**
 * Test for a valid genesis id
 * @category All Transactions
 * @param {string}
 * @returns {boolean}
 */
export declare function transactionGenesisId(genesisId: string): boolean;
/**
 * Test for a valid genesis hash
 * @category All Transactions
 * @param {string}
 * @returns {boolean}
 */
export declare function transactionGenesisHash(genesisHash: string): boolean;
/**
 * Test for a valid group
 * @category All Transactions
 * @param {string}
 * @returns {boolean}
 */
export declare function transactionGroup(genesisHash: string): boolean;
/**
 * Test for a valid transaction type
 * @category All Transactions
 * @param {string}
 * @returns {boolean}
 */
export declare function transactionType(type: string): boolean;
/**
 * Test for a valid transaction receiver account
 * @category Payment Transactions
 * @param {string}
 * @returns {boolean}
 */
export declare function transactionReceiver(receiverAddr: string): boolean;
/**
 * Test for a valid algo amount to be sent
 * @category Payment Transactions
 * @param {number}
 * @returns {boolean}
 */
export declare function transactionAmount(txnAmount: number): boolean;
/**
 * Test for a valid algo amount to be sent
 * @category Payment Transactions
 * @param {number}
 * @returns {boolean}
 */
export declare function closeRemainderTo(address: number): boolean;
declare const _default: {
    transactionSender: typeof transactionSender;
    transactionFee: typeof transactionFee;
    firstValidRound: typeof firstValidRound;
    lastValidRound: typeof lastValidRound;
    transactionNote: typeof transactionNote;
    transactionGenesisId: typeof transactionGenesisId;
    transactionGenesisHash: typeof transactionGenesisHash;
    transactionGroup: typeof transactionGroup;
    transactionType: typeof transactionType;
    transactionReceiver: typeof transactionReceiver;
    transactionAmount: typeof transactionAmount;
    closeRemainderTo: typeof closeRemainderTo;
};
export default _default;
