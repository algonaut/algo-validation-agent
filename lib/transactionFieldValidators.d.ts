/**
 * Test sender field for a valid Algorand address
 * @category All Transactions
 * @param {string}
 * @returns {boolean}
 */
export declare function from(senderAddr: string): any;
/**
 * Test for a valid transaction fee
 * @category All Transactions
 * @param {number}
 * @returns {boolean}
 */
export declare function fee(txnFee: number): any;
/**
 * Test for a valid first round
 * @category All Transactions
 * @param {number}
 * @returns {boolean}
 */
export declare function firstRound(firstValid: number): any;
/**
 * Test for a valid first round
 * @category All Transactions
 * @param {number}
 * @returns {boolean}
 */
export declare function lastRound(lastValid: number): any;
/**
 * Test for a valid note field
 * @category All Transactions
 * @param {string}
 * @returns {boolean}
 */
export declare function note(note: string): any;
/**
 * Test for a valid genesis id
 * @category All Transactions
 * @param {string}
 * @returns {boolean}
 */
export declare function genesisID(genesisId: string): any;
/**
 * Test for a valid genesis hash
 * @category All Transactions
 * @param {string}
 * @returns {boolean}
 */
export declare function genesisHash(genesisHash: string): any;
/**
 * Test for a valid group
 * @category All Transactions
 * @param {string}
 * @returns {boolean}
 */
export declare function group(genesisHash: string): any;
/**
 * Test for a valid transaction type
 * @category All Transactions
 * @param {string}
 * @returns {boolean}
 */
export declare function type(type: string): any;
/**
 * Test for a valid transaction receiver account
 * @category Payment Transactions
 * @param {string}
 * @returns {boolean}
 */
export declare function to(receiverAddr: string): any;
/**
 * Test for a valid algo amount to be sent
 * @category Payment Transactions
 * @param {number}
 * @returns {boolean}
 */
export declare function amount(txnAmount: number): any;
/**
 * Test for a valid algo amount to be sent
 * @category Payment Transactions
 * @param {number}
 * @returns {boolean}
 */
export declare function closeRemainderTo(address: number): any;
declare const _default: {
    from: typeof from;
    fee: typeof fee;
    firstRound: typeof firstRound;
    lastRound: typeof lastRound;
    note: typeof note;
    genesisID: typeof genesisID;
    genesisHash: typeof genesisHash;
    group: typeof group;
    type: typeof type;
    to: typeof to;
    amount: typeof amount;
    closeRemainderTo: typeof closeRemainderTo;
};
export default _default;
