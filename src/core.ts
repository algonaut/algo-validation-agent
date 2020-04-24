import v8n from 'v8n';
import { exactByteLength, base32CharsOnly } from './utils/extensions';
import {
  ALGORAND_ADDRESS_LENGTH,
  ALGORAND_TRANSACTION_LENGTH
} from './utils/constants';

// For full typing support on the extend function,
// v8n should use context instead of a global variable
// Details: https://github.com/imbrn/v8n/issues/28
// @ts-ignore
v8n.extend({ exactByteLength, base32CharsOnly });

export const algoAddress = v8n()
  .string()
  .exactByteLength(ALGORAND_ADDRESS_LENGTH)
  .length(ALGORAND_ADDRESS_LENGTH)
  .base32CharsOnly();

export const algoTxn = v8n()
  .string()
  .exactByteLength(ALGORAND_TRANSACTION_LENGTH)
  .length(ALGORAND_TRANSACTION_LENGTH)
  .base32CharsOnly();

/**
 * Test a string for valid Algorand address requirements
 * @category Core
 * @param {string}
 * @returns {boolean}
 */
export function isAlgorandAddress(input: string) {
  return algoAddress.test(input);
}

/**
 * Test for a valid Algorand transaction ID
 * @category Core
 * @param {string}
 * @returns {boolean}
 */
export function isTransactionId(txId: string) {
  return algoTxn.test(txId);
}

export default {
  algoAddress
};
