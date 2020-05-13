import v8n from 'v8n';
import {
  algoAddress,
  assetIndex,
  assetCreateParams,
  assetConfigureParams,
  isTransactionPayload
} from './core';
import { TRANSACTION_TYPES } from './utils/constants';

/**
 * Test for a valid payment transaction payload
 * @category Transactions
 * @param {object}
 * @returns {boolean}
 */
export function payment(txn: object) {
  if (!isTransactionPayload(txn)) {
    return false;
  }
  const isValid = v8n().schema({
    amt: v8n().integer(),
    fee: v8n().integer(),
    fv: v8n().integer(),
    gen: v8n().string(),
    gh: v8n().string(),
    lv: v8n().integer(),
    note: v8n().string(),
    rcv: algoAddress,
    snd: algoAddress,
    type: v8n()
      .string()
      .exact(TRANSACTION_TYPES.PAY)
  });
  return isValid.test(txn.txn);
}

/**
 * Test for a valid close account transaction payload
 * @category Transactions
 * @param {object}
 * @returns {boolean}
 */
export function close(txn: object) {
  if (!isTransactionPayload(txn)) {
    return false;
  }
  const isValid = v8n().schema({
    close: algoAddress,
    fee: v8n().integer(),
    fv: v8n().integer(),
    gen: v8n().string(),
    gh: v8n().string(),
    lv: v8n().integer(),
    rcv: algoAddress,
    snd: algoAddress,
    type: v8n()
      .string()
      .exact(TRANSACTION_TYPES.PAY)
  });
  return isValid.test(txn.txn);
}

/**
 * Test for a valid online key registration transaction payload
 * @category Transactions
 * @param {object}
 * @returns {boolean}
 */
export function registerKeyOnline(txn: object) {
  if (!isTransactionPayload(txn)) {
    return false;
  }
  const isValid = v8n().schema({
    fee: v8n().integer(),
    fv: v8n().integer(),
    gh: v8n().string(),
    lv: v8n().integer(),
    selkey: v8n().string(),
    snd: algoAddress,
    votefst: v8n().integer(),
    votekd: v8n().integer(),
    votekey: v8n().string(),
    votelst: v8n().integer(),
    type: v8n()
      .string()
      .exact(TRANSACTION_TYPES.KEYREG)
  });
  return isValid.test(txn.txn);
}

/**
 * Test for a valid offline key registration transaction payload
 * @category Transactions
 * @param {object}
 * @returns {boolean}
 */
export function registerKeyOffline(txn: object) {
  if (!isTransactionPayload(txn)) {
    return false;
  }
  const isValid = v8n().schema({
    fee: v8n().integer(),
    fv: v8n().integer(),
    gh: v8n().string(),
    lv: v8n().integer(),
    snd: algoAddress,
    type: v8n()
      .string()
      .exact(TRANSACTION_TYPES.KEYREG)
  });
  return isValid.test(txn.txn);
}

/**
 * Test for a valid asset creation transaction payload
 * @category Transactions
 * @param {object}
 * @returns {boolean}
 */
export function assetCreate(txn: object) {
  if (!isTransactionPayload(txn)) {
    return false;
  }
  const isValid = v8n().schema({
    apar: assetCreateParams,
    fee: v8n().integer(),
    fv: v8n().integer(),
    gh: v8n().string(),
    lv: v8n().integer(),
    snd: algoAddress,
    type: v8n()
      .string()
      .exact(TRANSACTION_TYPES.ACFG)
  });
  return isValid.test(txn.txn);
}

/**
 * Test for a valid asset configuration transaction payload
 * @category Transactions
 * @param {object}
 * @returns {boolean}
 */
export function assetConfigure(txn: object) {
  if (!isTransactionPayload(txn)) {
    return false;
  }
  const isValid = v8n().schema({
    apar: assetConfigureParams,
    caid: assetIndex,
    fee: v8n().integer(),
    fv: v8n().integer(),
    gh: v8n().string(),
    lv: v8n().integer(),
    snd: algoAddress,
    type: v8n()
      .string()
      .exact(TRANSACTION_TYPES.ACFG)
  });
  return isValid.test(txn.txn);
}

/**
 * Test for a valid asset destroy transaction payload
 * @category Transactions
 * @param {object}
 * @returns {boolean}
 */
export function assetDestroy(txn: object) {
  if (!isTransactionPayload(txn)) {
    return false;
  }
  const isValid = v8n().schema({
    caid: assetIndex,
    fee: v8n().integer(),
    fv: v8n().integer(),
    gh: v8n().string(),
    lv: v8n().integer(),
    snd: algoAddress,
    type: v8n()
      .string()
      .exact(TRANSACTION_TYPES.ACFG)
  });
  return isValid.test(txn.txn);
}

/**
 * Test for a valid asset opt-in transaction payload
 * @category Transactions
 * @param {object}
 * @returns {boolean}
 */
export function assetOptIn(txn: object) {
  if (!isTransactionPayload(txn)) {
    return false;
  }
  const isValid = v8n().schema({
    arcv: algoAddress,
    fee: v8n().integer(),
    fv: v8n().integer(),
    gh: v8n().string(),
    lv: v8n().integer(),
    snd: algoAddress,
    type: v8n()
      .string()
      .exact(TRANSACTION_TYPES.AXFER),
    xaid: assetIndex
  });
  return isValid.test(txn.txn);
}

/**
 * Test for a valid asset transfer transaction payload
 * @category Transactions
 * @param {object}
 * @returns {boolean}
 */
export function assetTransfer(txn: object) {
  if (!isTransactionPayload(txn)) {
    return false;
  }
  const isValid = v8n().schema({
    aamt: v8n().integer(),
    arcv: algoAddress,
    fee: v8n().integer(),
    fv: v8n().integer(),
    gh: v8n().string(),
    lv: v8n().integer(),
    snd: algoAddress,
    type: v8n()
      .string()
      .exact(TRANSACTION_TYPES.AXFER),
    xaid: assetIndex
  });
  return isValid.test(txn.txn);
}

/**
 * Test for a valid revoke asset transaction payload
 * @category Transactions
 * @param {object}
 * @returns {boolean}
 */
export function assetRevoke(txn: object) {
  if (!isTransactionPayload(txn)) {
    return false;
  }
  const isValid = v8n().schema({
    aamt: v8n().integer(),
    arcv: algoAddress,
    asnd: algoAddress,
    fee: v8n().integer(),
    fv: v8n().integer(),
    gh: v8n().string(),
    lv: v8n().integer(),
    snd: algoAddress,
    type: v8n()
      .string()
      .exact(TRANSACTION_TYPES.AXFER),
    xaid: assetIndex
  });
  return isValid.test(txn.txn);
}

/**
 * Test for a valid freeze asset transaction payload
 * @category Transactions
 * @param {object}
 * @returns {boolean}
 */
export function assetFreeze(txn: object) {
  if (!isTransactionPayload(txn)) {
    return false;
  }
  const isValid = v8n().schema({
    afrz: v8n().boolean(),
    fadd: algoAddress,
    faid: assetIndex,
    fee: v8n().integer(),
    fv: v8n().integer(),
    gh: v8n().string(),
    lv: v8n().integer(),
    snd: algoAddress,
    type: v8n()
      .string()
      .exact(TRANSACTION_TYPES.AFRZ)
  });
  return isValid.test(txn.txn);
}

export default {
  payment,
  close,
  registerKeyOnline,
  registerKeyOffline,
  assetCreate,
  assetConfigure,
  assetDestroy,
  assetOptIn,
  assetTransfer,
  assetRevoke,
  assetFreeze
};
