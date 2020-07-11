import {
  from,
  amount,
  fee,
  firstRound,
  lastRound,
  note,
  genesisID,
  genesisHash,
  group,
  type,
  to,
  closeRemainderTo
} from '../src/transactionFieldValidators';
import {
  VALID_ALGORAND_ADDRESS,
  MAINNET_GENESIS_ID,
  TESTNET_GENESIS_ID,
  BETANET_GENESIS_ID,
  MAINNET_GENESIS_HASH,
  TESTNET_GENESIS_HASH,
  BETANET_GENESIS_HASH
} from '../src/utils/constants';

it('Validates from', () => {
  expect(from(VALID_ALGORAND_ADDRESS)).toEqual(true);
  expect(from('test')).toEqual(false);
  expect(from(true)).toEqual(false);
  expect(from(12345)).toEqual(false);
  expect(from({})).toEqual(false);
});

it('Validates fee', () => {
  expect(fee(Number.MAX_SAFE_INTEGER)).toEqual(true);
  expect(fee(Number.MAX_SAFE_INTEGER + 1)).toEqual(false);
  expect(fee(0)).toEqual(false);
  expect(fee(1000)).toEqual(true);
  expect(fee(-1)).toEqual(false);
  expect(fee({})).toEqual(false);
  expect(fee('a')).toEqual(false);
  expect(fee('12345')).toEqual(false);
});

it('Validates first round', () => {
  expect(firstRound(Number.MAX_SAFE_INTEGER)).toEqual(true);
  expect(firstRound(Number.MAX_SAFE_INTEGER + 1)).toEqual(false);
  expect(firstRound(-1)).toEqual(false);
  expect(firstRound({})).toEqual(false);
  expect(firstRound('a')).toEqual(false);
  expect(firstRound('12345')).toEqual(false);
});

it('Validates last round', () => {
  expect(lastRound(Number.MAX_SAFE_INTEGER)).toEqual(true);
  expect(lastRound(Number.MAX_SAFE_INTEGER + 1)).toEqual(false);
  expect(lastRound(-1)).toEqual(false);
  expect(lastRound({})).toEqual(false);
  expect(lastRound('a')).toEqual(false);
  expect(lastRound('12345')).toEqual(false);
});

it('Validates txn note field', () => {
  expect(note('a'.repeat(1001))).toEqual(false);
  expect(note(12345)).toEqual(false);
});

it('Validates genesisID field', () => {
  expect(genesisID(MAINNET_GENESIS_ID)).toEqual(true);
  expect(genesisID(TESTNET_GENESIS_ID)).toEqual(true);
  expect(genesisID(BETANET_GENESIS_ID)).toEqual(true);
});

it('Validates genesis hash field', () => {
  expect(genesisHash(MAINNET_GENESIS_HASH)).toEqual(true);
  expect(genesisHash(TESTNET_GENESIS_HASH)).toEqual(true);
  expect(genesisHash(BETANET_GENESIS_HASH)).toEqual(true);
});

it('Validates group', () => {
  expect(group(MAINNET_GENESIS_HASH)).toEqual(true);
});

it('Validates transaction type', () => {
  const TYPE_SEND = 'pay';
  const TYPE_KEY_REG = 'keyreg';
  const TYPE_ASSET_CONFIG = 'acfg';
  const TYPE_TRANSFER = 'axfer';
  const TYPE_FREEZE = 'afrz';
  const TYPE_FALSE = 'foo';

  expect(type(TYPE_SEND)).toEqual(true);
  expect(type(TYPE_KEY_REG)).toEqual(true);
  expect(type(TYPE_ASSET_CONFIG)).toEqual(true);
  expect(type(TYPE_TRANSFER)).toEqual(true);
  expect(type(TYPE_FREEZE)).toEqual(true);
  expect(type(TYPE_FALSE)).toEqual(false);
});

it('Validates transaction to', () => {
  expect(to(VALID_ALGORAND_ADDRESS)).toEqual(true);
  expect(to('test')).toEqual(false);
  expect(to(true)).toEqual(false);
  expect(to(12345)).toEqual(false);
  expect(to({})).toEqual(false);
});

it('Validates transaction amt', () => {
  expect(amount(Number.MAX_SAFE_INTEGER)).toEqual(true);
  expect(amount(Number.MAX_SAFE_INTEGER + 1)).toEqual(false);
  expect(amount(0)).toEqual(true);
  expect(amount(-1)).toEqual(false);
  expect(amount({})).toEqual(false);
  expect(amount('a')).toEqual(false);
  expect(amount('12345')).toEqual(false);
});

it('Validates transaction closeRemainderTo', () => {
  expect(closeRemainderTo(VALID_ALGORAND_ADDRESS)).toEqual(true);
  expect(closeRemainderTo('test')).toEqual(false);
  expect(closeRemainderTo(true)).toEqual(false);
  expect(closeRemainderTo(12345)).toEqual(false);
  expect(closeRemainderTo({})).toEqual(false);
});
