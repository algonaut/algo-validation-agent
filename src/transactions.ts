import v8n from 'v8n';
import rules from './rules';
import { isTransactionPayload } from './core';
import { TRANSACTION_TYPES } from './utils/constants';

function standardTxnValidation(txn: TransactionPayload) {
  const roundsValid = v8n()
    .lessThan(txn.txn.lastRound)
    .test(txn.txn.firstRound);
  return roundsValid;
}

/**
 * Test for a valid payment transaction payload
 * @category Transactions
 * @param {object}
 * @returns {boolean}
 */
export function payment(txn: TransactionPayload) {
  if (!isTransactionPayload(txn)) {
    return false;
  }

  const PAY_TXN_SCHEMA = v8n().schema({
    amount: v8n().integer(),
    fee: v8n().integer(),
    firstRound: v8n().integer(),
    lastRound: v8n().integer(),
    note: v8n().string(),
    from: rules.algoAddress,
    to: rules.algoAddress,
    genesisID: v8n().string(),
    genesisHash: v8n().string(),
    type: v8n()
      .string()
      .exact(TRANSACTION_TYPES.PAY)
    // lease
    // group
    // reKeyTo
  });

  const isValidSchema = PAY_TXN_SCHEMA.test(txn.txn);
  return isValidSchema && standardTxnValidation(txn);
}

/**
 * Test for a valid close account transaction payload
 * @category Transactions
 * @param {object}
 * @returns {boolean}
 */
export function close(txn: TransactionPayload) {
  if (!isTransactionPayload(txn)) {
    return false;
  }
  const CLOSE_TXN_SCHEMA = v8n().schema({
    closeRemainderTo: rules.algoAddress,
    fee: v8n().integer(),
    firstRound: v8n().integer(),
    genesisID: v8n().string(),
    genesisHash: v8n().string(),
    lastRound: v8n().integer(),
    from: rules.algoAddress,
    to: rules.algoAddress,
    type: v8n()
      .string()
      .exact(TRANSACTION_TYPES.PAY)
    // lease
    // group
    // reKeyTo
  });
  // No closing and sending from the same address
  const isNotSameAddress = txn.txn.closeRemainderTo !== txn.txn.from;
  return (
    CLOSE_TXN_SCHEMA.test(txn.txn) &&
    standardTxnValidation(txn) &&
    isNotSameAddress
  );
}

/**
 * Test for a valid online key registration transaction payload
 * @category Transactions
 * @param {object}
 * @returns {boolean}
 */
export function registerKeyOnline(txn: TransactionPayload) {
  if (!isTransactionPayload(txn)) {
    return false;
  }
  const isValid = v8n().schema({
    fee: v8n().integer(),
    firstRound: v8n().integer(),
    genesisHash: v8n().string(),
    lastRound: v8n().integer(),
    selectionKey: v8n().string(),
    from: rules.algoAddress,
    voteFirst: v8n()
      .integer()
      .greaterThan(0),
    voteKeyDilution: v8n().integer(),
    voteKey: v8n().string(),
    voteLast: v8n().integer(),
    type: v8n()
      .string()
      .exact(TRANSACTION_TYPES.KEYREG)
    // lease
    // group
  });

  // Vote first must be less than vote last
  const isNotSameAddress = txn.txn.voteFirst < txn.txn.voteLast;

  return isValid.test(txn.txn) && standardTxnValidation(txn);
}

/**
 * Test for a valid offline key registration transaction payload
 * @category Transactions
 * @param {object}
 * @returns {boolean}
 */
export function registerKeyOffline(txn: TransactionPayload) {
  if (!isTransactionPayload(txn)) {
    return false;
  }
  const isValid = v8n().schema({
    fee: v8n().integer(),
    firstRound: v8n().integer(),
    genesisHash: v8n().string(),
    lastRound: v8n().integer(),
    from: rules.algoAddress,
    type: v8n()
      .string()
      .exact(TRANSACTION_TYPES.KEYREG)
  });
  return isValid.test(txn.txn) && standardTxnValidation(txn);
}

/**
 * Test for a valid asset creation transaction payload
 * @category Transactions
 * @param {object}
 * @returns {boolean}
 */
export function assetCreate(txn: TransactionPayload) {
  if (!isTransactionPayload(txn)) {
    return false;
  }
  const isValid = v8n().schema({
    assetMetadataHash: v8n().string(),
    assetName: v8n().string(),
    assetURL: v8n().string(),
    assetClawback: rules.algoAddress,
    assetDecimals: v8n().integer(),
    assetFreeze: rules.algoAddress,
    assetManager: rules.algoAddress,
    assetReserve: rules.algoAddress,
    assetTotal: v8n().integer(),
    assetUnitName: v8n().string(),
    fee: v8n().integer(),
    firstRound: v8n().integer(),
    genesisHash: v8n().string(),
    lastRound: v8n().integer(),
    from: rules.algoAddress,
    type: v8n()
      .string()
      .exact(TRANSACTION_TYPES.ACFG)
  });

  return isValid.test(txn.txn) && standardTxnValidation(txn);
}

/**
 * Test for a valid asset configuration transaction payload
 * @category Transactions
 * @param {object}
 * @returns {boolean}
 */
export function assetConfigure(txn: TransactionPayload) {
  if (!isTransactionPayload(txn)) {
    return false;
  }
  const isValid = v8n().schema({
    assetClawback: rules.algoAddress,
    assetFreeze: rules.algoAddress,
    assetManager: rules.algoAddress,
    assetReserve: rules.algoAddress,
    assetIndex: rules.assetIndex,
    fee: v8n().integer(),
    firstRound: v8n().integer(),
    genesisHash: v8n().string(),
    lastRound: v8n().integer(),
    from: rules.algoAddress,
    type: v8n()
      .string()
      .exact(TRANSACTION_TYPES.ACFG)
  });

  return isValid.test(txn.txn) && standardTxnValidation(txn);
}

/**
 * Test for a valid asset destroy transaction payload
 * @category Transactions
 * @param {object}
 * @returns {boolean}
 */
export function assetDestroy(txn: TransactionPayload) {
  if (!isTransactionPayload(txn)) {
    return false;
  }
  const isValid = v8n().schema({
    assetIndex: rules.assetIndex,
    fee: v8n().integer(),
    firstRound: v8n().integer(),
    genesisHash: v8n().string(),
    lastRound: v8n().integer(),
    from: rules.algoAddress,
    type: v8n()
      .string()
      .exact(TRANSACTION_TYPES.ACFG)
  });
  return isValid.test(txn.txn) && standardTxnValidation(txn);
}

/**
 * Test for a valid asset opt-in transaction payload
 * @category Transactions
 * @param {object}
 * @returns {boolean}
 */
export function assetOptIn(txn: TransactionPayload) {
  if (!isTransactionPayload(txn)) {
    return false;
  }
  const isValid = v8n().schema({
    to: rules.algoAddress,
    fee: v8n().integer(),
    firstRound: v8n().integer(),
    genesisHash: v8n().string(),
    lastRound: v8n().integer(),
    from: rules.algoAddress,
    type: v8n()
      .string()
      .exact(TRANSACTION_TYPES.AXFER),
    assetIndex: rules.assetIndex
  });
  return isValid.test(txn.txn) && standardTxnValidation(txn);
}

/**
 * Test for a valid asset transfer transaction payload
 * @category Transactions
 * @param {object}
 * @returns {boolean}
 */
export function assetTransfer(txn: TransactionPayload) {
  if (!isTransactionPayload(txn)) {
    return false;
  }
  const isValid = v8n().schema({
    amount: v8n().integer(),
    to: rules.algoAddress,
    fee: v8n().integer(),
    firstRound: v8n().integer(),
    genesisHash: v8n().string(),
    lastRound: v8n().integer(),
    from: rules.algoAddress,
    type: v8n()
      .string()
      .exact(TRANSACTION_TYPES.AXFER),
    assetIndex: rules.assetIndex
  });
  return isValid.test(txn.txn) && standardTxnValidation(txn);
}

/**
 * Test for a valid revoke asset transaction payload
 * @category Transactions
 * @param {object}
 * @returns {boolean}
 */
export function assetRevoke(txn: TransactionPayload) {
  if (!isTransactionPayload(txn)) {
    return false;
  }
  const isValid = v8n().schema({
    amount: v8n().integer(),
    to: rules.algoAddress,
    assetRevocationTarget: rules.algoAddress,
    fee: v8n().integer(),
    firstRound: v8n().integer(),
    genesisHash: v8n().string(),
    lastRound: v8n().integer(),
    from: rules.algoAddress,
    type: v8n()
      .string()
      .exact(TRANSACTION_TYPES.AXFER),
    assetIndex: rules.assetIndex
  });
  return isValid.test(txn.txn) && standardTxnValidation(txn);
}

/**
 * Test for a valid freeze asset transaction payload
 * @category Transactions
 * @param {object}
 * @returns {boolean}
 */
export function assetFreeze(txn: TransactionPayload) {
  if (!isTransactionPayload(txn)) {
    return false;
  }
  const isValid = v8n().schema({
    freezeState: v8n().boolean(),
    freezeAccount: rules.algoAddress,
    assetIndex: rules.assetIndex,
    fee: v8n().integer(),
    firstRound: v8n().integer(),
    genesisHash: v8n().string(),
    lastRound: v8n().integer(),
    from: rules.algoAddress,
    type: v8n()
      .string()
      .exact(TRANSACTION_TYPES.AFRZ)
  });
  return isValid.test(txn.txn) && standardTxnValidation(txn);
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
