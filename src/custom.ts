import { TextEncoder } from 'util';

// Custom validator for byteLength
export const byteLength = (validLength: number) => (val: string) =>
  new TextEncoder().encode(val).length === validLength;
