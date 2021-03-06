import { isAlgorandAddress, isTransactionId } from '../src/core';
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
