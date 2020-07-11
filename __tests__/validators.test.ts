import { TextEncoder } from 'fastestsmallesttextencoderdecoder';
import { VALID_ALGORAND_ADDRESS } from '../src/utils/constants';
import {
  exactByteLength,
  maxByteLength,
  minByteLength,
  base32CharsOnly
} from '../src/utils/extensions';

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

it('validates base32 string', () => {
  const invalidBase32 = 'klajcii298slja018alksdjl';
  const validBase32Padding = 'AJU3JX7ZIA54EZQ=';
  const validBase32NoPadding = 'AJU3JX7ZIA54EZQF';

  expect(base32CharsOnly()(invalidBase32)).toBe(false);
  expect(base32CharsOnly()(validBase32Padding)).toBe(false);
  expect(base32CharsOnly()(validBase32NoPadding)).toBe(true);
  expect(base32CharsOnly()(VALID_ALGORAND_ADDRESS)).toBe(true);
});
