import { algoAddress } from '../src/core';
import { VALID_ALGORAND_ADDRESS } from '../src/utils/constants';

it('detects a valid algorand address', () => {
  expect(algoAddress(VALID_ALGORAND_ADDRESS)).toEqual(true);
  expect(algoAddress('test')).toEqual(false);
  expect(algoAddress(true)).toEqual(false);
  expect(algoAddress(12345)).toEqual(false);
  expect(algoAddress({})).toEqual(false);
});
