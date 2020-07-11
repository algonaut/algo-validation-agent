import rules from './rules';

/**
 * Test a string for valid Algorand address requirements
 * @category Core
 * @param {string}
 * @returns {boolean}
 */
export function isAlgorandAddress(input: string) {
  return rules.algoAddress.test(input);
}

/**
 * Test for a valid Algorand transaction ID
 * @category Core
 * @param {string}
 * @returns {boolean}
 */
export function isTransactionId(txId: string) {
  return rules.algoTxn.test(txId);
}

export default {
  isAlgorandAddress,
  isTransactionId
};
