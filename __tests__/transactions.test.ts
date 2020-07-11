import {
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
} from '../src/transactions';
import {
  VALID_PAY_TRANSACTION,
  INVALID_ROUND_TRANSACTION,
  VALID_CLOSE_TRANSACTION,
  REGISTER_KEY_ONLINE_TRANSACTION,
  REGISTER_KEY_OFFLINE_TRANSACTION,
  CREATE_ASSET_TRANSACTION,
  CONFIGURE_ASSET_TRANSACTION,
  DESTROY_ASSET_TRANSACTION,
  OPT_IN_ASSET_TRANSACTION,
  TRANSFER_ASSET_TRANSACTION,
  REVOKE_ASSET_TRANSACTION,
  FREEZE_ASSET_TRANSACTION
} from '../src/utils/constants';

it('Validates pay transaction payload', () => {
  expect(payment(VALID_PAY_TRANSACTION)).toBe(true);
  expect(payment({ foo: {} })).toBe(false);
});

it('Validates that firstRound comes before lastRound', () => {
  expect(payment(INVALID_ROUND_TRANSACTION)).toBe(false);
});

it('Validates close transaction payload', () => {
  expect(close(VALID_CLOSE_TRANSACTION)).toBe(true);
  expect(close({ foo: {} })).toBe(false);
});

it('Validates online key registration transaction payload', () => {
  expect(registerKeyOnline(REGISTER_KEY_ONLINE_TRANSACTION)).toBe(true);
  expect(registerKeyOnline({ foo: {} })).toBe(false);
});

it('Validates offline key registration transaction payload', () => {
  expect(registerKeyOffline(REGISTER_KEY_OFFLINE_TRANSACTION)).toBe(true);
  expect(registerKeyOffline({ foo: {} })).toBe(false);
});

it('Validates asset creation transaction payload', () => {
  expect(assetCreate(CREATE_ASSET_TRANSACTION)).toBe(true);
  expect(assetCreate({ foo: {} })).toBe(false);
  expect(assetCreate({ txn: {} })).toBe(false);
  expect(assetCreate({ txn: { apar: {} } })).toBe(false);
});

it('Validates asset configuration transaction payload', () => {
  expect(assetConfigure(CONFIGURE_ASSET_TRANSACTION)).toBe(true);
  expect(assetConfigure({ foo: {} })).toBe(false);
  expect(assetConfigure({ txn: {} })).toBe(false);
  expect(assetConfigure({ txn: { apar: {} } })).toBe(false);
});

it('Validates asset destroy transaction payload', () => {
  expect(assetDestroy(DESTROY_ASSET_TRANSACTION)).toBe(true);
  expect(assetDestroy({ foo: {} })).toBe(false);
  expect(assetDestroy({ txn: {} })).toBe(false);
  expect(assetDestroy({ txn: { apar: {} } })).toBe(false);
});

it('Validates asset opt in transaction payload', () => {
  expect(assetOptIn(OPT_IN_ASSET_TRANSACTION)).toBe(true);
  expect(assetOptIn({ foo: {} })).toBe(false);
  expect(assetOptIn({ txn: {} })).toBe(false);
  expect(assetOptIn({ txn: { apar: {} } })).toBe(false);
});

it('Validates asset transfer transaction payload', () => {
  expect(assetTransfer(TRANSFER_ASSET_TRANSACTION)).toBe(true);
  expect(assetTransfer({ foo: {} })).toBe(false);
  expect(assetTransfer({ txn: {} })).toBe(false);
  expect(assetTransfer({ txn: { apar: {} } })).toBe(false);
});

it('Validates asset revoke transaction payload', () => {
  expect(assetRevoke(REVOKE_ASSET_TRANSACTION)).toBe(true);
  expect(assetRevoke({ foo: {} })).toBe(false);
  expect(assetRevoke({ txn: {} })).toBe(false);
  expect(assetRevoke({ txn: { apar: {} } })).toBe(false);
});

it('Validates asset revoke transaction payload', () => {
  expect(assetFreeze(FREEZE_ASSET_TRANSACTION)).toBe(true);
  expect(assetFreeze({ foo: {} })).toBe(false);
  expect(assetFreeze({ txn: {} })).toBe(false);
  expect(assetFreeze({ txn: { apar: {} } })).toBe(false);
});
