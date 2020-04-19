import { algoAddress } from '../src/core';
import { VALID_ALGORAND_ADDRESS } from '../src/constants';

test.todo('test for valid characters');

it('detects a valid algorand address', () => {
  expect(algoAddress(VALID_ALGORAND_ADDRESS)).toEqual(true);
  expect(algoAddress('foo')).toEqual(false);
  expect(algoAddress(12345)).toEqual(false);
  expect(algoAddress({})).toEqual(false);
  expect(algoAddress('🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥')).toEqual(false);
});
