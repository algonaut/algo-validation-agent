"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.algoAddress = algoAddress;
exports.txnAmount = txnAmount;
exports["default"] = void 0;

var _v8n = _interopRequireDefault(require("v8n"));

var _custom = require("./utils/custom");

var _constants = require("./utils/constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// For full typing support on the extend function,
// v8n should use context instead of a global variable
// Details: https://github.com/imbrn/v8n/issues/28
// @ts-ignore
_v8n["default"].extend({
  exactByteLength: _custom.exactByteLength
});
/**
 * Test for a valid Algorand address
 * @category Core
 * @param {string}
 * @returns {boolean}
 */


function algoAddress(algoAddress) {
  return (0, _v8n["default"])().string().exactByteLength(_constants.ALGORAND_ADDRESS_LENGTH).length(_constants.ALGORAND_ADDRESS_LENGTH).test(algoAddress);
}
/**
 * Test for a valid Algorand amount
 * @category Core
 * @param {number}
 * @returns {boolean}
 */


function txnAmount(txnAmount) {
  return (0, _v8n["default"])().number().lessThanOrEqual(Number.MAX_SAFE_INTEGER).test(txnAmount);
}

var _default = {
  algoAddress: algoAddress
};
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb3JlLnRzIl0sIm5hbWVzIjpbInY4biIsImV4dGVuZCIsImV4YWN0Qnl0ZUxlbmd0aCIsImFsZ29BZGRyZXNzIiwic3RyaW5nIiwiQUxHT1JBTkRfQUREUkVTU19MRU5HVEgiLCJsZW5ndGgiLCJ0ZXN0IiwidHhuQW1vdW50IiwibnVtYmVyIiwibGVzc1RoYW5PckVxdWFsIiwiTnVtYmVyIiwiTUFYX1NBRkVfSU5URUdFUiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBQSxnQkFBSUMsTUFBSixDQUFXO0FBQUVDLEVBQUFBLGVBQWUsRUFBZkE7QUFBRixDQUFYO0FBRUE7Ozs7Ozs7O0FBTU8sU0FBU0MsV0FBVCxDQUFxQkEsV0FBckIsRUFBMEM7QUFDL0MsU0FBTyx1QkFDSkMsTUFESSxHQUVKRixlQUZJLENBRVlHLGtDQUZaLEVBR0pDLE1BSEksQ0FHR0Qsa0NBSEgsRUFJSkUsSUFKSSxDQUlDSixXQUpELENBQVA7QUFLRDtBQUVEOzs7Ozs7OztBQU1PLFNBQVNLLFNBQVQsQ0FBbUJBLFNBQW5CLEVBQXNDO0FBQzNDLFNBQU8sdUJBQ0pDLE1BREksR0FFSkMsZUFGSSxDQUVZQyxNQUFNLENBQUNDLGdCQUZuQixFQUdKTCxJQUhJLENBR0NDLFNBSEQsQ0FBUDtBQUlEOztlQUVjO0FBQ2JMLEVBQUFBLFdBQVcsRUFBWEE7QUFEYSxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHY4biBmcm9tICd2OG4nO1xuaW1wb3J0IHsgZXhhY3RCeXRlTGVuZ3RoIH0gZnJvbSAnLi91dGlscy9jdXN0b20nO1xuaW1wb3J0IHsgQUxHT1JBTkRfQUREUkVTU19MRU5HVEggfSBmcm9tICcuL3V0aWxzL2NvbnN0YW50cyc7XG5cbi8vIEZvciBmdWxsIHR5cGluZyBzdXBwb3J0IG9uIHRoZSBleHRlbmQgZnVuY3Rpb24sXG4vLyB2OG4gc2hvdWxkIHVzZSBjb250ZXh0IGluc3RlYWQgb2YgYSBnbG9iYWwgdmFyaWFibGVcbi8vIERldGFpbHM6IGh0dHBzOi8vZ2l0aHViLmNvbS9pbWJybi92OG4vaXNzdWVzLzI4XG4vLyBAdHMtaWdub3JlXG52OG4uZXh0ZW5kKHsgZXhhY3RCeXRlTGVuZ3RoIH0pO1xuXG4vKipcbiAqIFRlc3QgZm9yIGEgdmFsaWQgQWxnb3JhbmQgYWRkcmVzc1xuICogQGNhdGVnb3J5IENvcmVcbiAqIEBwYXJhbSB7c3RyaW5nfVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhbGdvQWRkcmVzcyhhbGdvQWRkcmVzczogc3RyaW5nKSB7XG4gIHJldHVybiB2OG4oKVxuICAgIC5zdHJpbmcoKVxuICAgIC5leGFjdEJ5dGVMZW5ndGgoQUxHT1JBTkRfQUREUkVTU19MRU5HVEgpXG4gICAgLmxlbmd0aChBTEdPUkFORF9BRERSRVNTX0xFTkdUSClcbiAgICAudGVzdChhbGdvQWRkcmVzcyk7XG59XG5cbi8qKlxuICogVGVzdCBmb3IgYSB2YWxpZCBBbGdvcmFuZCBhbW91bnRcbiAqIEBjYXRlZ29yeSBDb3JlXG4gKiBAcGFyYW0ge251bWJlcn1cbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gdHhuQW1vdW50KHR4bkFtb3VudDogbnVtYmVyKSB7XG4gIHJldHVybiB2OG4oKVxuICAgIC5udW1iZXIoKVxuICAgIC5sZXNzVGhhbk9yRXF1YWwoTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIpXG4gICAgLnRlc3QodHhuQW1vdW50KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBhbGdvQWRkcmVzc1xufTtcbiJdfQ==