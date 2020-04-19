import { TextEncoder } from 'util';

export const exactByteLength = (validLength: number) => (val: string) =>
  new TextEncoder().encode(val).length === validLength;

export const maxByteLength = (maxLength: number) => (val: string) =>
  new TextEncoder().encode(val).length <= maxLength;

export const minByteLength = (minLength: number) => (val: string) =>
  new TextEncoder().encode(val).length >= minLength;
