import {
  transactionSender,
  transactionAmount,
  transactionFee,
  firstValidRound,
  lastValidRound,
  transactionNote,
  transactionGenesisId,
  transactionGenesisHash,
  transactionGroup,
  transactionType,
  transactionReceiver,
  closeRemainderTo
} from '../src/transactionFields';
import { VALID_ALGORAND_ADDRESS } from '../src/utils/constants';

it('Validates transactionSender', () => {
  expect(transactionSender(VALID_ALGORAND_ADDRESS)).toEqual(true);
  expect(transactionSender('test')).toEqual(false);
  expect(transactionSender(true)).toEqual(false);
  expect(transactionSender(12345)).toEqual(false);
  expect(transactionSender({})).toEqual(false);
});

it('Validates transaction fee', () => {
  expect(transactionFee(Number.MAX_SAFE_INTEGER)).toEqual(true);
  expect(transactionFee(Number.MAX_SAFE_INTEGER + 1)).toEqual(false);
  expect(transactionFee(0)).toEqual(false);
  expect(transactionFee(1000)).toEqual(true);
  expect(transactionFee(-1)).toEqual(false);
  expect(transactionFee({})).toEqual(false);
  expect(transactionFee('a')).toEqual(false);
  expect(transactionFee('12345')).toEqual(false);
});

test.todo('check if valid rounds are strings or numeric in the algo js SDK');

it('Validates first valid round', () => {
  expect(firstValidRound(Number.MAX_SAFE_INTEGER)).toEqual(true);
  expect(firstValidRound(Number.MAX_SAFE_INTEGER + 1)).toEqual(false);
  expect(firstValidRound(-1)).toEqual(false);
  expect(firstValidRound({})).toEqual(false);
  expect(firstValidRound('a')).toEqual(false);
  expect(firstValidRound('12345')).toEqual(false);
});

it('Validates last valid round', () => {
  expect(lastValidRound(Number.MAX_SAFE_INTEGER)).toEqual(true);
  expect(lastValidRound(Number.MAX_SAFE_INTEGER + 1)).toEqual(false);
  expect(lastValidRound(-1)).toEqual(false);
  expect(lastValidRound({})).toEqual(false);
  expect(lastValidRound('a')).toEqual(false);
  expect(lastValidRound('12345')).toEqual(false);
});

it('Validates txn note field', () => {
  expect(transactionNote('a'.repeat(1001))).toEqual(false);
  expect(transactionNote(12345)).toEqual(false);
});

it('Validates genesis id field', () => {
  const MAINNET_GENESIS_ID = 'mainnet-v1.0';
  const TESTNET_GENESIS_ID = 'testnet-v1.0';
  const BETANET_GENESIS_ID = 'betanet-v1.0';

  expect(transactionGenesisId(MAINNET_GENESIS_ID)).toEqual(true);
  expect(transactionGenesisId(TESTNET_GENESIS_ID)).toEqual(true);
  expect(transactionGenesisId(BETANET_GENESIS_ID)).toEqual(true);
});

test.todo('Docs say 32 byte length, but all the hashes are larger');

it('Validates genesis hash field', () => {
  const MAINNET_GENESIS_HASH = 'wGHE2Pwdvd7S12BL5FaOP20EGYesN73ktiC1qzkkit8=';
  const TESTNET_GENESIS_HASH = 'SGO1GKSzyE7IEPItTxCByw9x8FmnrCDexi9/cOUJOiI=';
  const BETANET_GENESIS_HASH = 'mFgazF+2uRS1tMiL9dsj01hJGySEmPN28B/TjjvpVW0=';

  expect(transactionGenesisHash(MAINNET_GENESIS_HASH)).toEqual(true);
  expect(transactionGenesisHash(TESTNET_GENESIS_HASH)).toEqual(true);
  expect(transactionGenesisHash(BETANET_GENESIS_HASH)).toEqual(true);
});

test.todo('validate group with exact 32-byte string');
it('Validates group', () => {
  // expect(transactionGroup(MAINNET_GENESIS_HASH)).toEqual(true);
});

it('Validates transactionType', () => {
  const TYPE_SEND = 'pay';
  const TYPE_KEY_REG = 'keyreg';
  const TYPE_ASSET_CONFIG = 'acfg';
  const TYPE_TRANSFER = 'axfer';
  const TYPE_FREEZE = 'afrz';

  expect(transactionType(TYPE_SEND)).toEqual(true);
  expect(transactionType(TYPE_KEY_REG)).toEqual(true);
  expect(transactionType(TYPE_ASSET_CONFIG)).toEqual(true);
  expect(transactionType(TYPE_TRANSFER)).toEqual(true);
  expect(transactionType(TYPE_FREEZE)).toEqual(true);
});

it('Validates transaction receiver', () => {
  expect(transactionReceiver(VALID_ALGORAND_ADDRESS)).toEqual(true);
  expect(transactionReceiver('test')).toEqual(false);
  expect(transactionReceiver(true)).toEqual(false);
  expect(transactionReceiver(12345)).toEqual(false);
  expect(transactionReceiver({})).toEqual(false);
});

it('Validates transaction amt', () => {
  expect(transactionAmount(Number.MAX_SAFE_INTEGER)).toEqual(true);
  expect(transactionAmount(Number.MAX_SAFE_INTEGER + 1)).toEqual(false);
  expect(transactionAmount(0)).toEqual(true);
  expect(transactionAmount(-1)).toEqual(false);
  expect(transactionAmount({})).toEqual(false);
  expect(transactionAmount('a')).toEqual(false);
  expect(transactionAmount('12345')).toEqual(false);
});

it('Validates transaction closeRemainderTo', () => {
  expect(closeRemainderTo(VALID_ALGORAND_ADDRESS)).toEqual(true);
  expect(closeRemainderTo('test')).toEqual(false);
  expect(closeRemainderTo(true)).toEqual(false);
  expect(closeRemainderTo(12345)).toEqual(false);
  expect(closeRemainderTo({})).toEqual(false);
});
