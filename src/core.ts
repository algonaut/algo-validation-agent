import v8n from 'v8n';
import { exactByteLength } from './utils/validators';
import { ALGORAND_ADDRESS_LENGTH } from './utils/constants';

// For full typing support on the extend function,
// v8n should use context instead of a global variable
// Details: https://github.com/imbrn/v8n/issues/28
// @ts-ignore
v8n.extend({ exactByteLength });

/**
 * Test for a valid Algorand address
 * @category Core
 * @param {string}
 * @returns {boolean}
 */
export function algoAddress(algoAddress: string) {
  return v8n()
    .string()
    .exactByteLength(ALGORAND_ADDRESS_LENGTH)
    .length(ALGORAND_ADDRESS_LENGTH)
    .test(algoAddress);
}

/**
 * Test for a valid Algorand amount
 * @category Core
 * @param {number}
 * @returns {boolean}
 */
// export function txnAmount(txnAmount: number) {
//   return v8n()
//     .number()
//     .lessThanOrEqual(Number.MAX_SAFE_INTEGER)
//     .test(txnAmount);
// }

export default {
  algoAddress
};
