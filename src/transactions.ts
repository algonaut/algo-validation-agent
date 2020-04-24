import v8n from 'v8n';
import { exactByteLength, maxByteLength } from './utils/extensions';
import { algoAddress, assetIndex } from './core';

// For full typing support on the extend function,
// v8n should use context instead of a global variable
// Details: https://github.com/imbrn/v8n/issues/28
// @ts-ignore
v8n.extend({ exactByteLength, maxByteLength });

/**
 * Test sender field for a valid Algorand address
 * @category All Transactions
 * @param {string}
 * @returns {boolean}
 */
export function transactionSender(senderAddr: string) {
  return algoAddress.test(senderAddr);
}

/**
 * Test for a valid transaction fee
 * @category All Transactions
 * @param {number}
 * @returns {boolean}
 */
export function transactionFee(txnFee: number) {
  return v8n()
    .number()
    .positive()
    .greaterThanOrEqual(1000)
    .lessThanOrEqual(Number.MAX_SAFE_INTEGER)
    .test(txnFee);
}

/**
 * Test for a valid first round
 * @category All Transactions
 * @param {number}
 * @returns {boolean}
 */
export function firstValidRound(firstValid: number) {
  return v8n()
    .number()
    .positive()
    .lessThanOrEqual(Number.MAX_SAFE_INTEGER)
    .test(firstValid);
}

/**
 * Test for a valid first round
 * @category All Transactions
 * @param {number}
 * @returns {boolean}
 */
export function lastValidRound(lastValid: number) {
  return v8n()
    .number()
    .positive()
    .lessThanOrEqual(Number.MAX_SAFE_INTEGER)
    .test(lastValid);
}

/**
 * Test for a valid note field
 * @category All Transactions
 * @param {string}
 * @returns {boolean}
 */
export function transactionNote(note: string) {
  return v8n()
    .string()
    .maxByteLength(1000)
    .test(note);
}

/**
 * Test for a valid genesis id
 * @category All Transactions
 * @param {string}
 * @returns {boolean}
 */
export function transactionGenesisId(genesisId: string) {
  return v8n()
    .string()
    .test(genesisId);
}

/**
 * Test for a valid genesis hash
 * @category All Transactions
 * @param {string}
 * @returns {boolean}
 */
export function transactionGenesisHash(genesisHash: string) {
  return v8n()
    .string()
    .test(genesisHash);
}

/**
 * Test for a valid group
 * @category All Transactions
 * @param {string}
 * @returns {boolean}
 */
export function transactionGroup(genesisHash: string) {
  return v8n()
    .string()
    .exactByteLength(32)
    .test(genesisHash);
}

/**
 * Test for a valid transaction type
 * @category All Transactions
 * @param {string}
 * @returns {boolean}
 */
export function transactionType(type: string) {
  return v8n()
    .string()
    .test(type);
}

/**
 * Test for a valid transaction receiver account
 * @category Payment Transactions
 * @param {string}
 * @returns {boolean}
 */
export function transactionReceiver(receiverAddr: string) {
  return algoAddress.test(receiverAddr);
}

/**
 * Test for a valid algo amount to be sent
 * @category Payment Transactions
 * @param {number}
 * @returns {boolean}
 */
export function transactionAmount(txnAmount: number) {
  return v8n()
    .number()
    .positive()
    .lessThanOrEqual(Number.MAX_SAFE_INTEGER)
    .test(txnAmount);
}

/**
 * Test for a valid algo amount to be sent
 * @category Payment Transactions
 * @param {number}
 * @returns {boolean}
 */
export function closeRemainderTo(address: number) {
  return algoAddress.test(address);
}

/**
 * Test for a valid asset id
 * @category Asset Configuration
 * @param {number}
 * @returns {boolean}
 */
export function configAsset(address: number) {
  return assetIndex.test(address);
}

// INTERIM TODO:
// Asset Transfer
// Asset Accept
// Asset Clawback
// Asset Freeze
// Signed Transaction
// Key Registration Transaction

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
