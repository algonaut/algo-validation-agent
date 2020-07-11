import rules from './rules';

/**
 * Test sender field for a valid Algorand address
 * @category All Transactions
 * @param {string}
 * @returns {boolean}
 */
export function transactionSender(senderAddr: string) {
  return rules.algoAddress.test(senderAddr);
}

/**
 * Test for a valid transaction fee
 * @category All Transactions
 * @param {number}
 * @returns {boolean}
 */
export function transactionFee(txnFee: number) {
  return rules.fee.test(txnFee);
}

/**
 * Test for a valid first round
 * @category All Transactions
 * @param {number}
 * @returns {boolean}
 */
export function firstValidRound(firstValid: number) {
  return rules.firstRound.test(firstValid);
}

/**
 * Test for a valid first round
 * @category All Transactions
 * @param {number}
 * @returns {boolean}
 */
export function lastValidRound(lastValid: number) {
  return rules.lastRound.test(lastValid);
}

/**
 * Test for a valid note field
 * @category All Transactions
 * @param {string}
 * @returns {boolean}
 */
export function transactionNote(note: string) {
  return rules.note.test(note);
}

/**
 * Test for a valid genesis id
 * @category All Transactions
 * @param {string}
 * @returns {boolean}
 */
export function transactionGenesisId(genesisId: string) {
  return rules.genesisID.test(genesisId);
}

/**
 * Test for a valid genesis hash
 * @category All Transactions
 * @param {string}
 * @returns {boolean}
 */
export function transactionGenesisHash(genesisHash: string) {
  return rules.genesisHash.test(genesisHash);
}

/**
 * Test for a valid group
 * @category All Transactions
 * @param {string}
 * @returns {boolean}
 */
export function transactionGroup(genesisHash: string) {
  return rules.group.test(genesisHash);
}

/**
 * Test for a valid transaction type
 * @category All Transactions
 * @param {string}
 * @returns {boolean}
 */
export function transactionType(type: string) {
  return rules.type.test(type);
}

/**
 * Test for a valid transaction receiver account
 * @category Payment Transactions
 * @param {string}
 * @returns {boolean}
 */
export function transactionReceiver(receiverAddr: string) {
  return rules.algoAddress.test(receiverAddr);
}

/**
 * Test for a valid algo amount to be sent
 * @category Payment Transactions
 * @param {number}
 * @returns {boolean}
 */
export function transactionAmount(txnAmount: number) {
  return rules.amount.test(txnAmount);
}

/**
 * Test for a valid algo amount to be sent
 * @category Payment Transactions
 * @param {number}
 * @returns {boolean}
 */
export function closeRemainderTo(address: number) {
  return rules.algoAddress.test(address);
}

export default {
  transactionSender,
  transactionFee,
  firstValidRound,
  lastValidRound,
  transactionNote,
  transactionGenesisId,
  transactionGenesisHash,
  transactionGroup,
  transactionType,
  transactionReceiver,
  transactionAmount,
  closeRemainderTo
};
