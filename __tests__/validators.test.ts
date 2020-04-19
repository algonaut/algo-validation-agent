import {
  exactByteLength,
  maxByteLength,
  minByteLength
} from '../src/utils/validators';

it('validates exact byte length', () => {
  expect(exactByteLength(4)('test')).toBe(true);
  expect(exactByteLength(4)('🔥')).toBe(true);
  expect(exactByteLength(3)('🔥')).toBe(false);
  expect(exactByteLength(1)('test')).toBe(false);
});

it('validates max byte length', () => {
  expect(maxByteLength(2)('a')).toBe(true);
  expect(maxByteLength(4)('test')).toBe(true);
  expect(maxByteLength(3)('🔥')).toBe(false);
  expect(maxByteLength(4)('false')).toBe(false);
});

it('validates min byte length', () => {
  expect(minByteLength(4)('🔥')).toBe(true);
  expect(minByteLength(4)('test')).toBe(true);
  expect(minByteLength(4)('a')).toBe(false);
  expect(minByteLength(5)('🔥')).toBe(false);
});
