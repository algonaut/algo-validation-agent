import v8n from 'v8n';
import { isUint8Array } from '../utils/extensions';

// For full typing support on the extend function,
// v8n should use context instead of a global variable
// Details: https://github.com/imbrn/v8n/issues/28
// @ts-ignore
v8n.extend({ isUint8Array });

export const lease = v8n().isUint8Array();
