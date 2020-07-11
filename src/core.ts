import v8n from 'v8n';
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

/**
 * Test for basic valid Algorand transaction payload shape
 * @category Core
 * @param {object}
 * @returns {boolean}
 */
export function isTransactionPayload(txnPayload: object) {
  const isTxn = v8n().schema({
    txn: v8n().object()
  });
  return isTxn.test(txnPayload);
}

export default {
  isAlgorandAddress,
  isTransactionId,
  isTransactionPayload
};
