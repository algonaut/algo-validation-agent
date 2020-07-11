"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.from = from;
exports.fee = fee;
exports.firstRound = firstRound;
exports.lastRound = lastRound;
exports.note = note;
exports.genesisID = genesisID;
exports.genesisHash = genesisHash;
exports.group = group;
exports.type = type;
exports.to = to;
exports.amount = amount;
exports.closeRemainderTo = closeRemainderTo;
exports["default"] = void 0;

var _rules = _interopRequireDefault(require("./rules"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Test sender field for a valid Algorand address
 * @category All Transactions
 * @param {string}
 * @returns {boolean}
 */
function from(senderAddr) {
  return _rules["default"].algoAddress.test(senderAddr);
}
/**
 * Test for a valid transaction fee
 * @category All Transactions
 * @param {number}
 * @returns {boolean}
 */


function fee(txnFee) {
  return _rules["default"].fee.test(txnFee);
}
/**
 * Test for a valid first round
 * @category All Transactions
 * @param {number}
 * @returns {boolean}
 */


function firstRound(firstValid) {
  return _rules["default"].firstRound.test(firstValid);
}
/**
 * Test for a valid first round
 * @category All Transactions
 * @param {number}
 * @returns {boolean}
 */


function lastRound(lastValid) {
  return _rules["default"].lastRound.test(lastValid);
}
/**
 * Test for a valid note field
 * @category All Transactions
 * @param {string}
 * @returns {boolean}
 */


function note(note) {
  return _rules["default"].note.test(note);
}
/**
 * Test for a valid genesis id
 * @category All Transactions
 * @param {string}
 * @returns {boolean}
 */


function genesisID(genesisId) {
  return _rules["default"].genesisID.test(genesisId);
}
/**
 * Test for a valid genesis hash
 * @category All Transactions
 * @param {string}
 * @returns {boolean}
 */


function genesisHash(genesisHash) {
  return _rules["default"].genesisHash.test(genesisHash);
}
/**
 * Test for a valid group
 * @category All Transactions
 * @param {string}
 * @returns {boolean}
 */


function group(genesisHash) {
  return _rules["default"].group.test(genesisHash);
}
/**
 * Test for a valid transaction type
 * @category All Transactions
 * @param {string}
 * @returns {boolean}
 */


function type(type) {
  return _rules["default"].type.test(type);
}
/**
 * Test for a valid transaction receiver account
 * @category Payment Transactions
 * @param {string}
 * @returns {boolean}
 */


function to(receiverAddr) {
  return _rules["default"].algoAddress.test(receiverAddr);
}
/**
 * Test for a valid algo amount to be sent
 * @category Payment Transactions
 * @param {number}
 * @returns {boolean}
 */


function amount(txnAmount) {
  return _rules["default"].amount.test(txnAmount);
}
/**
 * Test for a valid algo amount to be sent
 * @category Payment Transactions
 * @param {number}
 * @returns {boolean}
 */


function closeRemainderTo(address) {
  return _rules["default"].closeRemainderTo.test(address);
}

var _default = {
  from: from,
  fee: fee,
  firstRound: firstRound,
  lastRound: lastRound,
  note: note,
  genesisID: genesisID,
  genesisHash: genesisHash,
  group: group,
  type: type,
  to: to,
  amount: amount,
  closeRemainderTo: closeRemainderTo
};
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90cmFuc2FjdGlvbkZpZWxkVmFsaWRhdG9ycy50cyJdLCJuYW1lcyI6WyJmcm9tIiwic2VuZGVyQWRkciIsInJ1bGVzIiwiYWxnb0FkZHJlc3MiLCJ0ZXN0IiwiZmVlIiwidHhuRmVlIiwiZmlyc3RSb3VuZCIsImZpcnN0VmFsaWQiLCJsYXN0Um91bmQiLCJsYXN0VmFsaWQiLCJub3RlIiwiZ2VuZXNpc0lEIiwiZ2VuZXNpc0lkIiwiZ2VuZXNpc0hhc2giLCJncm91cCIsInR5cGUiLCJ0byIsInJlY2VpdmVyQWRkciIsImFtb3VudCIsInR4bkFtb3VudCIsImNsb3NlUmVtYWluZGVyVG8iLCJhZGRyZXNzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFFQTs7Ozs7O0FBTU8sU0FBU0EsSUFBVCxDQUFjQyxVQUFkLEVBQWtDO0FBQ3ZDLFNBQU9DLGtCQUFNQyxXQUFOLENBQWtCQyxJQUFsQixDQUF1QkgsVUFBdkIsQ0FBUDtBQUNEO0FBRUQ7Ozs7Ozs7O0FBTU8sU0FBU0ksR0FBVCxDQUFhQyxNQUFiLEVBQTZCO0FBQ2xDLFNBQU9KLGtCQUFNRyxHQUFOLENBQVVELElBQVYsQ0FBZUUsTUFBZixDQUFQO0FBQ0Q7QUFFRDs7Ozs7Ozs7QUFNTyxTQUFTQyxVQUFULENBQW9CQyxVQUFwQixFQUF3QztBQUM3QyxTQUFPTixrQkFBTUssVUFBTixDQUFpQkgsSUFBakIsQ0FBc0JJLFVBQXRCLENBQVA7QUFDRDtBQUVEOzs7Ozs7OztBQU1PLFNBQVNDLFNBQVQsQ0FBbUJDLFNBQW5CLEVBQXNDO0FBQzNDLFNBQU9SLGtCQUFNTyxTQUFOLENBQWdCTCxJQUFoQixDQUFxQk0sU0FBckIsQ0FBUDtBQUNEO0FBRUQ7Ozs7Ozs7O0FBTU8sU0FBU0MsSUFBVCxDQUFjQSxJQUFkLEVBQTRCO0FBQ2pDLFNBQU9ULGtCQUFNUyxJQUFOLENBQVdQLElBQVgsQ0FBZ0JPLElBQWhCLENBQVA7QUFDRDtBQUVEOzs7Ozs7OztBQU1PLFNBQVNDLFNBQVQsQ0FBbUJDLFNBQW5CLEVBQXNDO0FBQzNDLFNBQU9YLGtCQUFNVSxTQUFOLENBQWdCUixJQUFoQixDQUFxQlMsU0FBckIsQ0FBUDtBQUNEO0FBRUQ7Ozs7Ozs7O0FBTU8sU0FBU0MsV0FBVCxDQUFxQkEsV0FBckIsRUFBMEM7QUFDL0MsU0FBT1osa0JBQU1ZLFdBQU4sQ0FBa0JWLElBQWxCLENBQXVCVSxXQUF2QixDQUFQO0FBQ0Q7QUFFRDs7Ozs7Ozs7QUFNTyxTQUFTQyxLQUFULENBQWVELFdBQWYsRUFBb0M7QUFDekMsU0FBT1osa0JBQU1hLEtBQU4sQ0FBWVgsSUFBWixDQUFpQlUsV0FBakIsQ0FBUDtBQUNEO0FBRUQ7Ozs7Ozs7O0FBTU8sU0FBU0UsSUFBVCxDQUFjQSxJQUFkLEVBQTRCO0FBQ2pDLFNBQU9kLGtCQUFNYyxJQUFOLENBQVdaLElBQVgsQ0FBZ0JZLElBQWhCLENBQVA7QUFDRDtBQUVEOzs7Ozs7OztBQU1PLFNBQVNDLEVBQVQsQ0FBWUMsWUFBWixFQUFrQztBQUN2QyxTQUFPaEIsa0JBQU1DLFdBQU4sQ0FBa0JDLElBQWxCLENBQXVCYyxZQUF2QixDQUFQO0FBQ0Q7QUFFRDs7Ozs7Ozs7QUFNTyxTQUFTQyxNQUFULENBQWdCQyxTQUFoQixFQUFtQztBQUN4QyxTQUFPbEIsa0JBQU1pQixNQUFOLENBQWFmLElBQWIsQ0FBa0JnQixTQUFsQixDQUFQO0FBQ0Q7QUFFRDs7Ozs7Ozs7QUFNTyxTQUFTQyxnQkFBVCxDQUEwQkMsT0FBMUIsRUFBMkM7QUFDaEQsU0FBT3BCLGtCQUFNbUIsZ0JBQU4sQ0FBdUJqQixJQUF2QixDQUE0QmtCLE9BQTVCLENBQVA7QUFDRDs7ZUFFYztBQUNidEIsRUFBQUEsSUFBSSxFQUFKQSxJQURhO0FBRWJLLEVBQUFBLEdBQUcsRUFBSEEsR0FGYTtBQUdiRSxFQUFBQSxVQUFVLEVBQVZBLFVBSGE7QUFJYkUsRUFBQUEsU0FBUyxFQUFUQSxTQUphO0FBS2JFLEVBQUFBLElBQUksRUFBSkEsSUFMYTtBQU1iQyxFQUFBQSxTQUFTLEVBQVRBLFNBTmE7QUFPYkUsRUFBQUEsV0FBVyxFQUFYQSxXQVBhO0FBUWJDLEVBQUFBLEtBQUssRUFBTEEsS0FSYTtBQVNiQyxFQUFBQSxJQUFJLEVBQUpBLElBVGE7QUFVYkMsRUFBQUEsRUFBRSxFQUFGQSxFQVZhO0FBV2JFLEVBQUFBLE1BQU0sRUFBTkEsTUFYYTtBQVliRSxFQUFBQSxnQkFBZ0IsRUFBaEJBO0FBWmEsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBydWxlcyBmcm9tICcuL3J1bGVzJztcblxuLyoqXG4gKiBUZXN0IHNlbmRlciBmaWVsZCBmb3IgYSB2YWxpZCBBbGdvcmFuZCBhZGRyZXNzXG4gKiBAY2F0ZWdvcnkgQWxsIFRyYW5zYWN0aW9uc1xuICogQHBhcmFtIHtzdHJpbmd9XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyb20oc2VuZGVyQWRkcjogc3RyaW5nKSB7XG4gIHJldHVybiBydWxlcy5hbGdvQWRkcmVzcy50ZXN0KHNlbmRlckFkZHIpO1xufVxuXG4vKipcbiAqIFRlc3QgZm9yIGEgdmFsaWQgdHJhbnNhY3Rpb24gZmVlXG4gKiBAY2F0ZWdvcnkgQWxsIFRyYW5zYWN0aW9uc1xuICogQHBhcmFtIHtudW1iZXJ9XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZlZSh0eG5GZWU6IG51bWJlcikge1xuICByZXR1cm4gcnVsZXMuZmVlLnRlc3QodHhuRmVlKTtcbn1cblxuLyoqXG4gKiBUZXN0IGZvciBhIHZhbGlkIGZpcnN0IHJvdW5kXG4gKiBAY2F0ZWdvcnkgQWxsIFRyYW5zYWN0aW9uc1xuICogQHBhcmFtIHtudW1iZXJ9XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZpcnN0Um91bmQoZmlyc3RWYWxpZDogbnVtYmVyKSB7XG4gIHJldHVybiBydWxlcy5maXJzdFJvdW5kLnRlc3QoZmlyc3RWYWxpZCk7XG59XG5cbi8qKlxuICogVGVzdCBmb3IgYSB2YWxpZCBmaXJzdCByb3VuZFxuICogQGNhdGVnb3J5IEFsbCBUcmFuc2FjdGlvbnNcbiAqIEBwYXJhbSB7bnVtYmVyfVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsYXN0Um91bmQobGFzdFZhbGlkOiBudW1iZXIpIHtcbiAgcmV0dXJuIHJ1bGVzLmxhc3RSb3VuZC50ZXN0KGxhc3RWYWxpZCk7XG59XG5cbi8qKlxuICogVGVzdCBmb3IgYSB2YWxpZCBub3RlIGZpZWxkXG4gKiBAY2F0ZWdvcnkgQWxsIFRyYW5zYWN0aW9uc1xuICogQHBhcmFtIHtzdHJpbmd9XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5vdGUobm90ZTogc3RyaW5nKSB7XG4gIHJldHVybiBydWxlcy5ub3RlLnRlc3Qobm90ZSk7XG59XG5cbi8qKlxuICogVGVzdCBmb3IgYSB2YWxpZCBnZW5lc2lzIGlkXG4gKiBAY2F0ZWdvcnkgQWxsIFRyYW5zYWN0aW9uc1xuICogQHBhcmFtIHtzdHJpbmd9XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdlbmVzaXNJRChnZW5lc2lzSWQ6IHN0cmluZykge1xuICByZXR1cm4gcnVsZXMuZ2VuZXNpc0lELnRlc3QoZ2VuZXNpc0lkKTtcbn1cblxuLyoqXG4gKiBUZXN0IGZvciBhIHZhbGlkIGdlbmVzaXMgaGFzaFxuICogQGNhdGVnb3J5IEFsbCBUcmFuc2FjdGlvbnNcbiAqIEBwYXJhbSB7c3RyaW5nfVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZW5lc2lzSGFzaChnZW5lc2lzSGFzaDogc3RyaW5nKSB7XG4gIHJldHVybiBydWxlcy5nZW5lc2lzSGFzaC50ZXN0KGdlbmVzaXNIYXNoKTtcbn1cblxuLyoqXG4gKiBUZXN0IGZvciBhIHZhbGlkIGdyb3VwXG4gKiBAY2F0ZWdvcnkgQWxsIFRyYW5zYWN0aW9uc1xuICogQHBhcmFtIHtzdHJpbmd9XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdyb3VwKGdlbmVzaXNIYXNoOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHJ1bGVzLmdyb3VwLnRlc3QoZ2VuZXNpc0hhc2gpO1xufVxuXG4vKipcbiAqIFRlc3QgZm9yIGEgdmFsaWQgdHJhbnNhY3Rpb24gdHlwZVxuICogQGNhdGVnb3J5IEFsbCBUcmFuc2FjdGlvbnNcbiAqIEBwYXJhbSB7c3RyaW5nfVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0eXBlKHR5cGU6IHN0cmluZykge1xuICByZXR1cm4gcnVsZXMudHlwZS50ZXN0KHR5cGUpO1xufVxuXG4vKipcbiAqIFRlc3QgZm9yIGEgdmFsaWQgdHJhbnNhY3Rpb24gcmVjZWl2ZXIgYWNjb3VudFxuICogQGNhdGVnb3J5IFBheW1lbnQgVHJhbnNhY3Rpb25zXG4gKiBAcGFyYW0ge3N0cmluZ31cbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gdG8ocmVjZWl2ZXJBZGRyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHJ1bGVzLmFsZ29BZGRyZXNzLnRlc3QocmVjZWl2ZXJBZGRyKTtcbn1cblxuLyoqXG4gKiBUZXN0IGZvciBhIHZhbGlkIGFsZ28gYW1vdW50IHRvIGJlIHNlbnRcbiAqIEBjYXRlZ29yeSBQYXltZW50IFRyYW5zYWN0aW9uc1xuICogQHBhcmFtIHtudW1iZXJ9XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFtb3VudCh0eG5BbW91bnQ6IG51bWJlcikge1xuICByZXR1cm4gcnVsZXMuYW1vdW50LnRlc3QodHhuQW1vdW50KTtcbn1cblxuLyoqXG4gKiBUZXN0IGZvciBhIHZhbGlkIGFsZ28gYW1vdW50IHRvIGJlIHNlbnRcbiAqIEBjYXRlZ29yeSBQYXltZW50IFRyYW5zYWN0aW9uc1xuICogQHBhcmFtIHtudW1iZXJ9XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsb3NlUmVtYWluZGVyVG8oYWRkcmVzczogbnVtYmVyKSB7XG4gIHJldHVybiBydWxlcy5jbG9zZVJlbWFpbmRlclRvLnRlc3QoYWRkcmVzcyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZnJvbSxcbiAgZmVlLFxuICBmaXJzdFJvdW5kLFxuICBsYXN0Um91bmQsXG4gIG5vdGUsXG4gIGdlbmVzaXNJRCxcbiAgZ2VuZXNpc0hhc2gsXG4gIGdyb3VwLFxuICB0eXBlLFxuICB0byxcbiAgYW1vdW50LFxuICBjbG9zZVJlbWFpbmRlclRvXG59O1xuIl19