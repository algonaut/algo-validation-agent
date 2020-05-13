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

export const assetIndex = v8n()
  .number()
  .positive()
  .lessThanOrEqual(Number.MAX_SAFE_INTEGER);

export const assetCreateParams = v8n().schema({
  am: v8n().string(),
  an: v8n().string(),
  au: v8n().string(),
  c: algoAddress,
  dc: v8n().integer(),
  f: algoAddress,
  m: algoAddress,
  r: algoAddress,
  t: v8n().integer(),
  un: v8n().string()
});

export const assetConfigureParams = v8n().schema({
  c: algoAddress,
  f: algoAddress,
  m: algoAddress,
  r: algoAddress
});
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

/**
 * Test for a valid Algorand asset index
 * @category Core
 * @param {number}
 * @returns {boolean}
 */
export function isAssetIndex(assetId: number) {
  return assetIndex.test(assetId);
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
  assetIndex,
  algoAddress,
  algoTxn,
  assetCreateParams,
  assetConfigureParams,
  isAlgorandAddress,
  isTransactionId,
  isAssetIndex,
  isTransactionPayload
};
