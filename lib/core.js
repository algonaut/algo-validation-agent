"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isAlgorandAddress = isAlgorandAddress;
exports.isTransactionId = isTransactionId;
exports["default"] = void 0;

var _rules = _interopRequireDefault(require("./rules"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Test a string for valid Algorand address requirements
 * @category Core
 * @param {string}
 * @returns {boolean}
 */
function isAlgorandAddress(input) {
  return _rules["default"].algoAddress.test(input);
}
/**
 * Test for a valid Algorand transaction ID
 * @category Core
 * @param {string}
 * @returns {boolean}
 */


function isTransactionId(txId) {
  return _rules["default"].algoTxn.test(txId);
}

var _default = {
  isAlgorandAddress: isAlgorandAddress,
  isTransactionId: isTransactionId
};
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb3JlLnRzIl0sIm5hbWVzIjpbImlzQWxnb3JhbmRBZGRyZXNzIiwiaW5wdXQiLCJydWxlcyIsImFsZ29BZGRyZXNzIiwidGVzdCIsImlzVHJhbnNhY3Rpb25JZCIsInR4SWQiLCJhbGdvVHhuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7OztBQUVBOzs7Ozs7QUFNTyxTQUFTQSxpQkFBVCxDQUEyQkMsS0FBM0IsRUFBMEM7QUFDL0MsU0FBT0Msa0JBQU1DLFdBQU4sQ0FBa0JDLElBQWxCLENBQXVCSCxLQUF2QixDQUFQO0FBQ0Q7QUFFRDs7Ozs7Ozs7QUFNTyxTQUFTSSxlQUFULENBQXlCQyxJQUF6QixFQUF1QztBQUM1QyxTQUFPSixrQkFBTUssT0FBTixDQUFjSCxJQUFkLENBQW1CRSxJQUFuQixDQUFQO0FBQ0Q7O2VBRWM7QUFDYk4sRUFBQUEsaUJBQWlCLEVBQWpCQSxpQkFEYTtBQUViSyxFQUFBQSxlQUFlLEVBQWZBO0FBRmEsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBydWxlcyBmcm9tICcuL3J1bGVzJztcblxuLyoqXG4gKiBUZXN0IGEgc3RyaW5nIGZvciB2YWxpZCBBbGdvcmFuZCBhZGRyZXNzIHJlcXVpcmVtZW50c1xuICogQGNhdGVnb3J5IENvcmVcbiAqIEBwYXJhbSB7c3RyaW5nfVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0FsZ29yYW5kQWRkcmVzcyhpbnB1dDogc3RyaW5nKSB7XG4gIHJldHVybiBydWxlcy5hbGdvQWRkcmVzcy50ZXN0KGlucHV0KTtcbn1cblxuLyoqXG4gKiBUZXN0IGZvciBhIHZhbGlkIEFsZ29yYW5kIHRyYW5zYWN0aW9uIElEXG4gKiBAY2F0ZWdvcnkgQ29yZVxuICogQHBhcmFtIHtzdHJpbmd9XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzVHJhbnNhY3Rpb25JZCh0eElkOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHJ1bGVzLmFsZ29UeG4udGVzdCh0eElkKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBpc0FsZ29yYW5kQWRkcmVzcyxcbiAgaXNUcmFuc2FjdGlvbklkXG59O1xuIl19