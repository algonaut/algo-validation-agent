import { isAlgorandAddress } from '../src/core';
import { VALID_ALGORAND_ADDRESS } from '../src/utils/constants';

it('detects a valid algorand address', () => {
  expect(isAlgorandAddress(VALID_ALGORAND_ADDRESS)).toEqual(true);
  expect(isAlgorandAddress('test')).toEqual(false);
  expect(isAlgorandAddress(true)).toEqual(false);
  expect(isAlgorandAddress(12345)).toEqual(false);
  expect(isAlgorandAddress({})).toEqual(false);
});
