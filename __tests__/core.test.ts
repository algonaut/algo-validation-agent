import {
  isAlgorandAddress,
  isAssetIndex,
  isTransactionId,
  isTransactionPayload
} from '../src/core';
import {
  VALID_ALGORAND_ADDRESS,
  VALID_ALGORAND_TRANSACTION
} from '../src/utils/constants';

it('detects a valid algorand address', () => {
  expect(isAlgorandAddress(VALID_ALGORAND_ADDRESS)).toEqual(true);
  expect(isAlgorandAddress('test')).toEqual(false);
  expect(isAlgorandAddress(true)).toEqual(false);
  expect(isAlgorandAddress(12345)).toEqual(false);
  expect(isAlgorandAddress({})).toEqual(false);
});

it('Validates transactionId', () => {
  expect(isTransactionId(VALID_ALGORAND_TRANSACTION)).toBe(true);
  expect(isTransactionId('a')).toBe(false);
  expect(isTransactionId(-1)).toBe(false);
  expect(isTransactionId('1')).toBe(false);
});

it('Validates assetIndex', () => {
  expect(isAssetIndex(1)).toBe(true);
  expect(isAssetIndex(Number.MAX_SAFE_INTEGER)).toBe(true);
  expect(isAssetIndex(Number.MAX_SAFE_INTEGER + 1)).toBe(false);
  expect(isAssetIndex(-1)).toBe(false);
  expect(isAssetIndex('1')).toBe(false);
});

it('Validates basic transaction schema', () => {
  expect(isTransactionPayload({})).toBe(false);
  expect(isTransactionPayload({ foo: {} })).toBe(false);
  expect(isTransactionPayload({ txn: {} })).toBe(true);
});
