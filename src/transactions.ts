import v8n from 'v8n';
import rules from './rules';
import { TRANSACTION_TYPES } from './utils/constants';

// Fields that are optional for any txn
const TXN_OPTIONAL_FIELDS = {
  genesisID: v8n().optional(rules.genesisID),
  fee: v8n().optional(rules.fee),
  note: v8n().optional(rules.note),
  lease: v8n().optional(rules.lease),
  group: v8n().optional(rules.group),
  reKeyTo: v8n().optional(rules.algoAddress)
};

// Fields required for any txn
const TXN_REQUIRED_FIELDS = {
  firstRound: rules.firstRound,
  lastRound: rules.lastRound,
  genesisHash: rules.genesisHash
};

// Standard checks for all transactions
function standardTxnValidation(txn: TransactionPayload) {
  const roundsValid = txn.lastRound > txn.firstRound;
  return roundsValid;
}

/**
 * Test for a valid payment transaction payload
 * @category Transactions
 * @param {object}
 * @returns {boolean}
 */
export function payment(txn: TransactionPayload) {
  const PAY_TXN_SCHEMA = v8n().schema({
    to: v8n().optional(rules.algoAddress),
    amount: v8n().optional(rules.amount),
    from: rules.algoAddress,
    type: v8n()
      .string()
      .exact(TRANSACTION_TYPES.PAY),
    ...TXN_REQUIRED_FIELDS,
    ...TXN_OPTIONAL_FIELDS
  });

  return PAY_TXN_SCHEMA.test(txn) && standardTxnValidation(txn);
}

/**
 * Test for a valid close account transaction payload
 * @category Transactions
 * @param {object}
 * @returns {boolean}
 */
export function close(txn: TransactionPayload) {
  const CLOSE_TXN_SCHEMA = v8n().schema({
    closeRemainderTo: rules.algoAddress,
    from: rules.algoAddress,
    to: rules.algoAddress,
    type: v8n()
      .string()
      .exact(TRANSACTION_TYPES.PAY),
    ...TXN_REQUIRED_FIELDS,
    ...TXN_OPTIONAL_FIELDS
  });
  // No closing and sending from the same address
  const isNotSameAddress = txn.closeRemainderTo !== txn.from;
  return (
    CLOSE_TXN_SCHEMA.test(txn) && standardTxnValidation(txn) && isNotSameAddress
  );
}

/**
 * Test for a valid online key registration transaction payload
 * @category Transactions
 * @param {object}
 * @returns {boolean}
 */
export function registerKeyOnline(txn: TransactionPayload) {
  const isValid = v8n().schema({
    selectionKey: rules.selectionKey,
    from: rules.algoAddress,
    voteFirst: rules.voteFirst,
    voteKeyDilution: rules.voteKeyDilution,
    voteKey: rules.voteKey,
    voteLast: rules.voteLast,
    type: v8n()
      .string()
      .exact(TRANSACTION_TYPES.KEYREG),
    ...TXN_REQUIRED_FIELDS,
    ...TXN_OPTIONAL_FIELDS
  });

  // Vote first must be less than vote last
  const isNotSameAddress = txn.voteFirst < txn.voteLast;
  return isValid.test(txn) && standardTxnValidation(txn);
}

/**
 * Test for a valid offline key registration transaction payload
 * @category Transactions
 * @param {object}
 * @returns {boolean}
 */
export function registerKeyOffline(txn: TransactionPayload) {
  const isValid = v8n().schema({
    from: rules.algoAddress,
    type: v8n()
      .string()
      .exact(TRANSACTION_TYPES.KEYREG),
    ...TXN_REQUIRED_FIELDS,
    ...TXN_OPTIONAL_FIELDS
  });
  return isValid.test(txn) && standardTxnValidation(txn);
}

/**
 * Test for a valid asset creation transaction payload
 * @category Transactions
 * @param {object}
 * @returns {boolean}
 */
export function assetCreate(txn: TransactionPayload) {
  const isValid = v8n().schema({
    assetMetadataHash: v8n().string(),
    assetName: rules.assetName,
    assetURL: rules.assetURL,
    assetClawback: rules.algoAddress,
    assetDecimals: rules.assetDecimals,
    assetFreeze: rules.algoAddress,
    assetManager: rules.algoAddress,
    assetReserve: rules.algoAddress,
    assetTotal: rules.assetTotal,
    assetUnitName: rules.assetUnitName,
    from: rules.algoAddress,
    type: v8n()
      .string()
      .exact(TRANSACTION_TYPES.ACFG),
    ...TXN_REQUIRED_FIELDS,
    ...TXN_OPTIONAL_FIELDS
  });

  return isValid.test(txn) && standardTxnValidation(txn);
}

/**
 * Test for a valid asset configuration transaction payload
 * @category Transactions
 * @param {object}
 * @returns {boolean}
 */
export function assetConfigure(txn: TransactionPayload) {
  const isValid = v8n().schema({
    assetClawback: rules.algoAddress,
    assetFreeze: rules.algoAddress,
    assetManager: rules.algoAddress,
    assetReserve: rules.algoAddress,
    assetIndex: rules.assetIndex,
    from: rules.algoAddress,
    type: v8n()
      .string()
      .exact(TRANSACTION_TYPES.ACFG),
    ...TXN_REQUIRED_FIELDS,
    ...TXN_OPTIONAL_FIELDS
  });

  return isValid.test(txn) && standardTxnValidation(txn);
}

/**
 * Test for a valid asset destroy transaction payload
 * @category Transactions
 * @param {object}
 * @returns {boolean}
 */
export function assetDestroy(txn: TransactionPayload) {
  const isValid = v8n().schema({
    assetIndex: rules.assetIndex,
    from: rules.algoAddress,
    type: v8n()
      .string()
      .exact(TRANSACTION_TYPES.ACFG),
    ...TXN_REQUIRED_FIELDS,
    ...TXN_OPTIONAL_FIELDS
  });
  return isValid.test(txn) && standardTxnValidation(txn);
}

/**
 * Test for a valid asset opt-in transaction payload
 * @category Transactions
 * @param {object}
 * @returns {boolean}
 */
export function assetOptIn(txn: TransactionPayload) {
  const isValid = v8n().schema({
    to: rules.algoAddress,
    from: rules.algoAddress,
    type: v8n()
      .string()
      .exact(TRANSACTION_TYPES.AXFER),
    assetIndex: rules.assetIndex,
    ...TXN_REQUIRED_FIELDS,
    ...TXN_OPTIONAL_FIELDS
  });
  return isValid.test(txn) && standardTxnValidation(txn);
}

/**
 * Test for a valid asset transfer transaction payload
 * @category Transactions
 * @param {object}
 * @returns {boolean}
 */
export function assetTransfer(txn: TransactionPayload) {
  const isValid = v8n().schema({
    amount: rules.amount,
    to: rules.algoAddress,
    from: rules.algoAddress,
    assetIndex: rules.assetIndex,
    type: v8n()
      .string()
      .exact(TRANSACTION_TYPES.AXFER),
    ...TXN_REQUIRED_FIELDS,
    ...TXN_OPTIONAL_FIELDS
  });
  return isValid.test(txn) && standardTxnValidation(txn);
}

/**
 * Test for a valid revoke asset transaction payload
 * @category Transactions
 * @param {object}
 * @returns {boolean}
 */
export function assetRevoke(txn: TransactionPayload) {
  const isValid = v8n().schema({
    amount: rules.amount,
    to: rules.algoAddress,
    assetRevocationTarget: rules.algoAddress,
    from: rules.algoAddress,
    assetIndex: rules.assetIndex,
    type: v8n()
      .string()
      .exact(TRANSACTION_TYPES.AXFER),
    ...TXN_REQUIRED_FIELDS,
    ...TXN_OPTIONAL_FIELDS
  });
  return isValid.test(txn) && standardTxnValidation(txn);
}

/**
 * Test for a valid freeze asset transaction payload
 * @category Transactions
 * @param {object}
 * @returns {boolean}
 */
export function assetFreeze(txn: TransactionPayload) {
  const isValid = v8n().schema({
    freezeState: rules.freezeState,
    freezeAccount: rules.algoAddress,
    assetIndex: rules.assetIndex,
    from: rules.algoAddress,
    type: v8n()
      .string()
      .exact(TRANSACTION_TYPES.AFRZ),
    ...TXN_REQUIRED_FIELDS,
    ...TXN_OPTIONAL_FIELDS
  });
  return isValid.test(txn) && standardTxnValidation(txn);
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
