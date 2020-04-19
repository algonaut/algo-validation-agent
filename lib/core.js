"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.algoAddress = algoAddress;
exports.txnAmount = txnAmount;
exports["default"] = void 0;

var _v8n = _interopRequireDefault(require("v8n"));

var _custom = require("./custom");

var _constants = require("./constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// For full typing support on the extend function,
// v8n should use context instead of a global variable
// Details: https://github.com/imbrn/v8n/issues/28
// @ts-ignore
_v8n["default"].extend({
  byteLength: _custom.byteLength
});
/**
 * Test for a valid Algorand address
 * @category Core
 * @param {string}
 * @returns {boolean}
 */


function algoAddress(algoAddress) {
  return (0, _v8n["default"])().string().byteLength(_constants.ALGORAND_ADDRESS_LENGTH).length(_constants.ALGORAND_ADDRESS_LENGTH).test(algoAddress);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb3JlLnRzIl0sIm5hbWVzIjpbInY4biIsImV4dGVuZCIsImJ5dGVMZW5ndGgiLCJhbGdvQWRkcmVzcyIsInN0cmluZyIsIkFMR09SQU5EX0FERFJFU1NfTEVOR1RIIiwibGVuZ3RoIiwidGVzdCIsInR4bkFtb3VudCIsIm51bWJlciIsImxlc3NUaGFuT3JFcXVhbCIsIk51bWJlciIsIk1BWF9TQUZFX0lOVEVHRVIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQUEsZ0JBQUlDLE1BQUosQ0FBVztBQUFFQyxFQUFBQSxVQUFVLEVBQVZBO0FBQUYsQ0FBWDtBQUVBOzs7Ozs7OztBQU1PLFNBQVNDLFdBQVQsQ0FBcUJBLFdBQXJCLEVBQTBDO0FBQy9DLFNBQU8sdUJBQ0pDLE1BREksR0FFSkYsVUFGSSxDQUVPRyxrQ0FGUCxFQUdKQyxNQUhJLENBR0dELGtDQUhILEVBSUpFLElBSkksQ0FJQ0osV0FKRCxDQUFQO0FBS0Q7QUFFRDs7Ozs7Ozs7QUFNTyxTQUFTSyxTQUFULENBQW1CQSxTQUFuQixFQUFzQztBQUMzQyxTQUFPLHVCQUNKQyxNQURJLEdBRUpDLGVBRkksQ0FFWUMsTUFBTSxDQUFDQyxnQkFGbkIsRUFHSkwsSUFISSxDQUdDQyxTQUhELENBQVA7QUFJRDs7ZUFFYztBQUNiTCxFQUFBQSxXQUFXLEVBQVhBO0FBRGEsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB2OG4gZnJvbSAndjhuJztcbmltcG9ydCB7IGJ5dGVMZW5ndGggfSBmcm9tICcuL2N1c3RvbSc7XG5pbXBvcnQgeyBBTEdPUkFORF9BRERSRVNTX0xFTkdUSCB9IGZyb20gJy4vY29uc3RhbnRzJztcblxuLy8gRm9yIGZ1bGwgdHlwaW5nIHN1cHBvcnQgb24gdGhlIGV4dGVuZCBmdW5jdGlvbixcbi8vIHY4biBzaG91bGQgdXNlIGNvbnRleHQgaW5zdGVhZCBvZiBhIGdsb2JhbCB2YXJpYWJsZVxuLy8gRGV0YWlsczogaHR0cHM6Ly9naXRodWIuY29tL2ltYnJuL3Y4bi9pc3N1ZXMvMjhcbi8vIEB0cy1pZ25vcmVcbnY4bi5leHRlbmQoeyBieXRlTGVuZ3RoIH0pO1xuXG4vKipcbiAqIFRlc3QgZm9yIGEgdmFsaWQgQWxnb3JhbmQgYWRkcmVzc1xuICogQGNhdGVnb3J5IENvcmVcbiAqIEBwYXJhbSB7c3RyaW5nfVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhbGdvQWRkcmVzcyhhbGdvQWRkcmVzczogc3RyaW5nKSB7XG4gIHJldHVybiB2OG4oKVxuICAgIC5zdHJpbmcoKVxuICAgIC5ieXRlTGVuZ3RoKEFMR09SQU5EX0FERFJFU1NfTEVOR1RIKVxuICAgIC5sZW5ndGgoQUxHT1JBTkRfQUREUkVTU19MRU5HVEgpXG4gICAgLnRlc3QoYWxnb0FkZHJlc3MpO1xufVxuXG4vKipcbiAqIFRlc3QgZm9yIGEgdmFsaWQgQWxnb3JhbmQgYW1vdW50XG4gKiBAY2F0ZWdvcnkgQ29yZVxuICogQHBhcmFtIHtudW1iZXJ9XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHR4bkFtb3VudCh0eG5BbW91bnQ6IG51bWJlcikge1xuICByZXR1cm4gdjhuKClcbiAgICAubnVtYmVyKClcbiAgICAubGVzc1RoYW5PckVxdWFsKE51bWJlci5NQVhfU0FGRV9JTlRFR0VSKVxuICAgIC50ZXN0KHR4bkFtb3VudCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgYWxnb0FkZHJlc3Ncbn07XG4iXX0=