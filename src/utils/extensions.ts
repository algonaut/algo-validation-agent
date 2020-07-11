import { TextEncoder } from 'fastestsmallesttextencoderdecoder';

export const exactByteLength = (validLength: number) => (val: string) =>
  new TextEncoder().encode(val).length === validLength;

export const maxByteLength = (maxLength: number) => (val: string) =>
  new TextEncoder().encode(val).length <= maxLength;

export const minByteLength = (minLength: number) => (val: string) =>
  new TextEncoder().encode(val).length >= minLength;

export const base32CharsOnly = () => (val: string) => {
  // Algorand strips off padding and doesn't adhere to multiples of 8 length constraint
  const b32_regex = new RegExp(/^[A-Z2-7]*$/);
  return b32_regex.test(val);
};

export const isUint8Array = () => (val: Uint8Array) => {
  return val.constructor === Uint8Array;
};
