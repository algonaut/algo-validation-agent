import { algoAddress } from '../src/core';
import { VALID_ALGORAND_ADDRESS } from '../src/constants';

test.todo('test address for valid characters');

it('detects a valid algorand address', () => {
  expect(algoAddress(VALID_ALGORAND_ADDRESS)).toEqual(true);
  expect(algoAddress('test')).toEqual(false);
  expect(algoAddress(true)).toEqual(false);
  expect(algoAddress(12345)).toEqual(false);
  expect(algoAddress({})).toEqual(false);
});
