"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.algoAddress = algoAddress;
exports["default"] = void 0;

var _v8n = _interopRequireDefault(require("v8n"));

var _validators = require("./utils/validators");

var _constants = require("./utils/constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// For full typing support on the extend function,
// v8n should use context instead of a global variable
// Details: https://github.com/imbrn/v8n/issues/28
// @ts-ignore
_v8n["default"].extend({
  exactByteLength: _validators.exactByteLength,
  base32CharsOnly: _validators.base32CharsOnly
});
/**
 * Test for a valid Algorand address
 * @category Core
 * @param {string}
 * @returns {boolean}
 */


function algoAddress(algoAddress) {
  return (0, _v8n["default"])().string().exactByteLength(_constants.ALGORAND_ADDRESS_LENGTH).length(_constants.ALGORAND_ADDRESS_LENGTH).base32CharsOnly().test(algoAddress);
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


var _default = {
  algoAddress: algoAddress
};
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb3JlLnRzIl0sIm5hbWVzIjpbInY4biIsImV4dGVuZCIsImV4YWN0Qnl0ZUxlbmd0aCIsImJhc2UzMkNoYXJzT25seSIsImFsZ29BZGRyZXNzIiwic3RyaW5nIiwiQUxHT1JBTkRfQUREUkVTU19MRU5HVEgiLCJsZW5ndGgiLCJ0ZXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQUEsZ0JBQUlDLE1BQUosQ0FBVztBQUFFQyxFQUFBQSxlQUFlLEVBQWZBLDJCQUFGO0FBQW1CQyxFQUFBQSxlQUFlLEVBQWZBO0FBQW5CLENBQVg7QUFFQTs7Ozs7Ozs7QUFNTyxTQUFTQyxXQUFULENBQXFCQSxXQUFyQixFQUEwQztBQUMvQyxTQUFPLHVCQUNKQyxNQURJLEdBRUpILGVBRkksQ0FFWUksa0NBRlosRUFHSkMsTUFISSxDQUdHRCxrQ0FISCxFQUlKSCxlQUpJLEdBS0pLLElBTEksQ0FLQ0osV0FMRCxDQUFQO0FBTUQ7QUFFRDs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7ZUFFZTtBQUNiQSxFQUFBQSxXQUFXLEVBQVhBO0FBRGEsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB2OG4gZnJvbSAndjhuJztcbmltcG9ydCB7IGV4YWN0Qnl0ZUxlbmd0aCwgYmFzZTMyQ2hhcnNPbmx5IH0gZnJvbSAnLi91dGlscy92YWxpZGF0b3JzJztcbmltcG9ydCB7IEFMR09SQU5EX0FERFJFU1NfTEVOR1RIIH0gZnJvbSAnLi91dGlscy9jb25zdGFudHMnO1xuXG4vLyBGb3IgZnVsbCB0eXBpbmcgc3VwcG9ydCBvbiB0aGUgZXh0ZW5kIGZ1bmN0aW9uLFxuLy8gdjhuIHNob3VsZCB1c2UgY29udGV4dCBpbnN0ZWFkIG9mIGEgZ2xvYmFsIHZhcmlhYmxlXG4vLyBEZXRhaWxzOiBodHRwczovL2dpdGh1Yi5jb20vaW1icm4vdjhuL2lzc3Vlcy8yOFxuLy8gQHRzLWlnbm9yZVxudjhuLmV4dGVuZCh7IGV4YWN0Qnl0ZUxlbmd0aCwgYmFzZTMyQ2hhcnNPbmx5IH0pO1xuXG4vKipcbiAqIFRlc3QgZm9yIGEgdmFsaWQgQWxnb3JhbmQgYWRkcmVzc1xuICogQGNhdGVnb3J5IENvcmVcbiAqIEBwYXJhbSB7c3RyaW5nfVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhbGdvQWRkcmVzcyhhbGdvQWRkcmVzczogc3RyaW5nKSB7XG4gIHJldHVybiB2OG4oKVxuICAgIC5zdHJpbmcoKVxuICAgIC5leGFjdEJ5dGVMZW5ndGgoQUxHT1JBTkRfQUREUkVTU19MRU5HVEgpXG4gICAgLmxlbmd0aChBTEdPUkFORF9BRERSRVNTX0xFTkdUSClcbiAgICAuYmFzZTMyQ2hhcnNPbmx5KClcbiAgICAudGVzdChhbGdvQWRkcmVzcyk7XG59XG5cbi8qKlxuICogVGVzdCBmb3IgYSB2YWxpZCBBbGdvcmFuZCBhbW91bnRcbiAqIEBjYXRlZ29yeSBDb3JlXG4gKiBAcGFyYW0ge251bWJlcn1cbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG4vLyBleHBvcnQgZnVuY3Rpb24gdHhuQW1vdW50KHR4bkFtb3VudDogbnVtYmVyKSB7XG4vLyAgIHJldHVybiB2OG4oKVxuLy8gICAgIC5udW1iZXIoKVxuLy8gICAgIC5sZXNzVGhhbk9yRXF1YWwoTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIpXG4vLyAgICAgLnRlc3QodHhuQW1vdW50KTtcbi8vIH1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBhbGdvQWRkcmVzc1xufTtcbiJdfQ==