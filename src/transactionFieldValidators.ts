import rules from './rules';

/**
 * Test sender field for a valid Algorand address
 * @category All Transactions
 * @param {string}
 * @returns {boolean}
 */
export function from(senderAddr: string) {
  return rules.algoAddress.test(senderAddr);
}

/**
 * Test for a valid transaction fee
 * @category All Transactions
 * @param {number}
 * @returns {boolean}
 */
export function fee(txnFee: number) {
  return rules.fee.test(txnFee);
}

/**
 * Test for a valid first round
 * @category All Transactions
 * @param {number}
 * @returns {boolean}
 */
export function firstRound(firstValid: number) {
  return rules.firstRound.test(firstValid);
}

/**
 * Test for a valid first round
 * @category All Transactions
 * @param {number}
 * @returns {boolean}
 */
export function lastRound(lastValid: number) {
  return rules.lastRound.test(lastValid);
}

/**
 * Test for a valid note field
 * @category All Transactions
 * @param {string}
 * @returns {boolean}
 */
export function note(note: string) {
  return rules.note.test(note);
}

/**
 * Test for a valid genesis id
 * @category All Transactions
 * @param {string}
 * @returns {boolean}
 */
export function genesisID(genesisId: string) {
  return rules.genesisID.test(genesisId);
}

/**
 * Test for a valid genesis hash
 * @category All Transactions
 * @param {string}
 * @returns {boolean}
 */
export function genesisHash(genesisHash: string) {
  return rules.genesisHash.test(genesisHash);
}

/**
 * Test for a valid group
 * @category All Transactions
 * @param {string}
 * @returns {boolean}
 */
export function group(genesisHash: string) {
  return rules.group.test(genesisHash);
}

/**
 * Test for a valid transaction type
 * @category All Transactions
 * @param {string}
 * @returns {boolean}
 */
export function type(type: string) {
  return rules.type.test(type);
}

/**
 * Test for a valid transaction receiver account
 * @category Payment Transactions
 * @param {string}
 * @returns {boolean}
 */
export function to(receiverAddr: string) {
  return rules.algoAddress.test(receiverAddr);
}

/**
 * Test for a valid algo amount to be sent
 * @category Payment Transactions
 * @param {number}
 * @returns {boolean}
 */
export function amount(txnAmount: number) {
  return rules.amount.test(txnAmount);
}

/**
 * Test for a valid algo amount to be sent
 * @category Payment Transactions
 * @param {number}
 * @returns {boolean}
 */
export function closeRemainderTo(address: number) {
  return rules.closeRemainderTo.test(address);
}

export default {
  from,
  fee,
  firstRound,
  lastRound,
  note,
  genesisID,
  genesisHash,
  group,
  type,
  to,
  amount,
  closeRemainderTo
};
