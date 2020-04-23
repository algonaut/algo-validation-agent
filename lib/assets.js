"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assetTotalIssuance = assetTotalIssuance;
exports.assetDecimalPlaces = assetDecimalPlaces;
exports.defaultFrozen = defaultFrozen;
exports.assetMetadataHash = assetMetadataHash;
exports.assetName = assetName;
exports.unitName = unitName;
exports.assetUrl = assetUrl;
exports.assetIndex = assetIndex;
exports["default"] = void 0;

var _v8n = _interopRequireDefault(require("v8n"));

var _validators = require("./utils/validators");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// For full typing support on the extend function,
// v8n should use context instead of a global variable
// Details: https://github.com/imbrn/v8n/issues/28
// @ts-ignore
_v8n["default"].extend({
  maxByteLength: _validators.maxByteLength
});
/**
 * Validate total issuance amount when creating an asset
 * @category Assets
 * @param {number}
 * @returns {boolean}
 */


function assetTotalIssuance(total) {
  return (0, _v8n["default"])().integer().between(1, Number.MAX_SAFE_INTEGER).test(total);
}
/**
 * Validate asset decimal places when creating an asset
 * @category Assets
 * @param {number}
 * @returns {boolean}
 */


function assetDecimalPlaces(decimals) {
  return (0, _v8n["default"])().integer().between(0, 19).test(decimals);
}
/**
 * Validate defaultFrozen has a boolean value when creating an asset
 * @category Assets
 * @param {boolean}
 * @returns {boolean}
 */


function defaultFrozen(defaultFrozen) {
  return (0, _v8n["default"])()["boolean"]().test(defaultFrozen);
}
/**
 * Validate for a metadata hash string when creating an asset
 * @category Assets
 * @param {string}
 * @returns {boolean}
 */


function assetMetadataHash(hash) {
  return (0, _v8n["default"])().string().maxByteLength(32).test(hash);
}
/**
 * Validate asset name when creating an asset
 * @category Assets
 * @param {string}
 * @returns {boolean}
 */


function assetName(assetName) {
  return (0, _v8n["default"])().string().maxByteLength(32).test(assetName);
}
/**
 * Validate unit name when creating an asset
 * @category Assets
 * @param {string}
 * @returns {boolean}
 */


function unitName(unitName) {
  return (0, _v8n["default"])().string().maxByteLength(8).test(unitName);
}
/**
 * Validate asset url when creating an asset
 * @category Assets
 * @param {string}
 * @returns {boolean}
 */


function assetUrl(url) {
  return (0, _v8n["default"])().string().maxByteLength(32).test(url);
}
/**
 * Validate asset index value
 * @category Assets
 * @param {number}
 * @returns {boolean}
 */


function assetIndex(assetIndex) {
  return (0, _v8n["default"])().number().positive().lessThanOrEqual(Number.MAX_SAFE_INTEGER).test(assetIndex);
}

var _default = {
  assetTotalIssuance: assetTotalIssuance,
  assetDecimalPlaces: assetDecimalPlaces,
  defaultFrozen: defaultFrozen,
  assetIndex: assetIndex,
  assetName: assetName,
  unitName: unitName,
  assetUrl: assetUrl,
  assetMetadataHash: assetMetadataHash
};
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hc3NldHMudHMiXSwibmFtZXMiOlsidjhuIiwiZXh0ZW5kIiwibWF4Qnl0ZUxlbmd0aCIsImFzc2V0VG90YWxJc3N1YW5jZSIsInRvdGFsIiwiaW50ZWdlciIsImJldHdlZW4iLCJOdW1iZXIiLCJNQVhfU0FGRV9JTlRFR0VSIiwidGVzdCIsImFzc2V0RGVjaW1hbFBsYWNlcyIsImRlY2ltYWxzIiwiZGVmYXVsdEZyb3plbiIsImFzc2V0TWV0YWRhdGFIYXNoIiwiaGFzaCIsInN0cmluZyIsImFzc2V0TmFtZSIsInVuaXROYW1lIiwiYXNzZXRVcmwiLCJ1cmwiLCJhc3NldEluZGV4IiwibnVtYmVyIiwicG9zaXRpdmUiLCJsZXNzVGhhbk9yRXF1YWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQUEsZ0JBQUlDLE1BQUosQ0FBVztBQUFFQyxFQUFBQSxhQUFhLEVBQWJBO0FBQUYsQ0FBWDtBQUVBOzs7Ozs7OztBQU1PLFNBQVNDLGtCQUFULENBQTRCQyxLQUE1QixFQUEyQztBQUNoRCxTQUFPLHVCQUNKQyxPQURJLEdBRUpDLE9BRkksQ0FFSSxDQUZKLEVBRU9DLE1BQU0sQ0FBQ0MsZ0JBRmQsRUFHSkMsSUFISSxDQUdDTCxLQUhELENBQVA7QUFJRDtBQUVEOzs7Ozs7OztBQU1PLFNBQVNNLGtCQUFULENBQTRCQyxRQUE1QixFQUE4QztBQUNuRCxTQUFPLHVCQUNKTixPQURJLEdBRUpDLE9BRkksQ0FFSSxDQUZKLEVBRU8sRUFGUCxFQUdKRyxJQUhJLENBR0NFLFFBSEQsQ0FBUDtBQUlEO0FBRUQ7Ozs7Ozs7O0FBTU8sU0FBU0MsYUFBVCxDQUF1QkEsYUFBdkIsRUFBK0M7QUFDcEQsU0FBTyxvQ0FFSkgsSUFGSSxDQUVDRyxhQUZELENBQVA7QUFHRDtBQUVEOzs7Ozs7OztBQU1PLFNBQVNDLGlCQUFULENBQTJCQyxJQUEzQixFQUF5QztBQUM5QyxTQUFPLHVCQUNKQyxNQURJLEdBRUpiLGFBRkksQ0FFVSxFQUZWLEVBR0pPLElBSEksQ0FHQ0ssSUFIRCxDQUFQO0FBSUQ7QUFFRDs7Ozs7Ozs7QUFNTyxTQUFTRSxTQUFULENBQW1CQSxTQUFuQixFQUFzQztBQUMzQyxTQUFPLHVCQUNKRCxNQURJLEdBRUpiLGFBRkksQ0FFVSxFQUZWLEVBR0pPLElBSEksQ0FHQ08sU0FIRCxDQUFQO0FBSUQ7QUFFRDs7Ozs7Ozs7QUFNTyxTQUFTQyxRQUFULENBQWtCQSxRQUFsQixFQUFvQztBQUN6QyxTQUFPLHVCQUNKRixNQURJLEdBRUpiLGFBRkksQ0FFVSxDQUZWLEVBR0pPLElBSEksQ0FHQ1EsUUFIRCxDQUFQO0FBSUQ7QUFFRDs7Ozs7Ozs7QUFNTyxTQUFTQyxRQUFULENBQWtCQyxHQUFsQixFQUErQjtBQUNwQyxTQUFPLHVCQUNKSixNQURJLEdBRUpiLGFBRkksQ0FFVSxFQUZWLEVBR0pPLElBSEksQ0FHQ1UsR0FIRCxDQUFQO0FBSUQ7QUFFRDs7Ozs7Ozs7QUFNTyxTQUFTQyxVQUFULENBQW9CQSxVQUFwQixFQUF3QztBQUM3QyxTQUFPLHVCQUNKQyxNQURJLEdBRUpDLFFBRkksR0FHSkMsZUFISSxDQUdZaEIsTUFBTSxDQUFDQyxnQkFIbkIsRUFJSkMsSUFKSSxDQUlDVyxVQUpELENBQVA7QUFLRDs7ZUFFYztBQUNiakIsRUFBQUEsa0JBQWtCLEVBQWxCQSxrQkFEYTtBQUViTyxFQUFBQSxrQkFBa0IsRUFBbEJBLGtCQUZhO0FBR2JFLEVBQUFBLGFBQWEsRUFBYkEsYUFIYTtBQUliUSxFQUFBQSxVQUFVLEVBQVZBLFVBSmE7QUFLYkosRUFBQUEsU0FBUyxFQUFUQSxTQUxhO0FBTWJDLEVBQUFBLFFBQVEsRUFBUkEsUUFOYTtBQU9iQyxFQUFBQSxRQUFRLEVBQVJBLFFBUGE7QUFRYkwsRUFBQUEsaUJBQWlCLEVBQWpCQTtBQVJhLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdjhuIGZyb20gJ3Y4bic7XG5pbXBvcnQgeyBtYXhCeXRlTGVuZ3RoIH0gZnJvbSAnLi91dGlscy92YWxpZGF0b3JzJztcblxuLy8gRm9yIGZ1bGwgdHlwaW5nIHN1cHBvcnQgb24gdGhlIGV4dGVuZCBmdW5jdGlvbixcbi8vIHY4biBzaG91bGQgdXNlIGNvbnRleHQgaW5zdGVhZCBvZiBhIGdsb2JhbCB2YXJpYWJsZVxuLy8gRGV0YWlsczogaHR0cHM6Ly9naXRodWIuY29tL2ltYnJuL3Y4bi9pc3N1ZXMvMjhcbi8vIEB0cy1pZ25vcmVcbnY4bi5leHRlbmQoeyBtYXhCeXRlTGVuZ3RoIH0pO1xuXG4vKipcbiAqIFZhbGlkYXRlIHRvdGFsIGlzc3VhbmNlIGFtb3VudCB3aGVuIGNyZWF0aW5nIGFuIGFzc2V0XG4gKiBAY2F0ZWdvcnkgQXNzZXRzXG4gKiBAcGFyYW0ge251bWJlcn1cbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gYXNzZXRUb3RhbElzc3VhbmNlKHRvdGFsOiBudW1iZXIpIHtcbiAgcmV0dXJuIHY4bigpXG4gICAgLmludGVnZXIoKVxuICAgIC5iZXR3ZWVuKDEsIE51bWJlci5NQVhfU0FGRV9JTlRFR0VSKVxuICAgIC50ZXN0KHRvdGFsKTtcbn1cblxuLyoqXG4gKiBWYWxpZGF0ZSBhc3NldCBkZWNpbWFsIHBsYWNlcyB3aGVuIGNyZWF0aW5nIGFuIGFzc2V0XG4gKiBAY2F0ZWdvcnkgQXNzZXRzXG4gKiBAcGFyYW0ge251bWJlcn1cbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gYXNzZXREZWNpbWFsUGxhY2VzKGRlY2ltYWxzOiBudW1iZXIpIHtcbiAgcmV0dXJuIHY4bigpXG4gICAgLmludGVnZXIoKVxuICAgIC5iZXR3ZWVuKDAsIDE5KVxuICAgIC50ZXN0KGRlY2ltYWxzKTtcbn1cblxuLyoqXG4gKiBWYWxpZGF0ZSBkZWZhdWx0RnJvemVuIGhhcyBhIGJvb2xlYW4gdmFsdWUgd2hlbiBjcmVhdGluZyBhbiBhc3NldFxuICogQGNhdGVnb3J5IEFzc2V0c1xuICogQHBhcmFtIHtib29sZWFufVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWZhdWx0RnJvemVuKGRlZmF1bHRGcm96ZW46IGJvb2xlYW4pIHtcbiAgcmV0dXJuIHY4bigpXG4gICAgLmJvb2xlYW4oKVxuICAgIC50ZXN0KGRlZmF1bHRGcm96ZW4pO1xufVxuXG4vKipcbiAqIFZhbGlkYXRlIGZvciBhIG1ldGFkYXRhIGhhc2ggc3RyaW5nIHdoZW4gY3JlYXRpbmcgYW4gYXNzZXRcbiAqIEBjYXRlZ29yeSBBc3NldHNcbiAqIEBwYXJhbSB7c3RyaW5nfVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhc3NldE1ldGFkYXRhSGFzaChoYXNoOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHY4bigpXG4gICAgLnN0cmluZygpXG4gICAgLm1heEJ5dGVMZW5ndGgoMzIpXG4gICAgLnRlc3QoaGFzaCk7XG59XG5cbi8qKlxuICogVmFsaWRhdGUgYXNzZXQgbmFtZSB3aGVuIGNyZWF0aW5nIGFuIGFzc2V0XG4gKiBAY2F0ZWdvcnkgQXNzZXRzXG4gKiBAcGFyYW0ge3N0cmluZ31cbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gYXNzZXROYW1lKGFzc2V0TmFtZTogc3RyaW5nKSB7XG4gIHJldHVybiB2OG4oKVxuICAgIC5zdHJpbmcoKVxuICAgIC5tYXhCeXRlTGVuZ3RoKDMyKVxuICAgIC50ZXN0KGFzc2V0TmFtZSk7XG59XG5cbi8qKlxuICogVmFsaWRhdGUgdW5pdCBuYW1lIHdoZW4gY3JlYXRpbmcgYW4gYXNzZXRcbiAqIEBjYXRlZ29yeSBBc3NldHNcbiAqIEBwYXJhbSB7c3RyaW5nfVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1bml0TmFtZSh1bml0TmFtZTogc3RyaW5nKSB7XG4gIHJldHVybiB2OG4oKVxuICAgIC5zdHJpbmcoKVxuICAgIC5tYXhCeXRlTGVuZ3RoKDgpXG4gICAgLnRlc3QodW5pdE5hbWUpO1xufVxuXG4vKipcbiAqIFZhbGlkYXRlIGFzc2V0IHVybCB3aGVuIGNyZWF0aW5nIGFuIGFzc2V0XG4gKiBAY2F0ZWdvcnkgQXNzZXRzXG4gKiBAcGFyYW0ge3N0cmluZ31cbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gYXNzZXRVcmwodXJsOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHY4bigpXG4gICAgLnN0cmluZygpXG4gICAgLm1heEJ5dGVMZW5ndGgoMzIpXG4gICAgLnRlc3QodXJsKTtcbn1cblxuLyoqXG4gKiBWYWxpZGF0ZSBhc3NldCBpbmRleCB2YWx1ZVxuICogQGNhdGVnb3J5IEFzc2V0c1xuICogQHBhcmFtIHtudW1iZXJ9XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFzc2V0SW5kZXgoYXNzZXRJbmRleDogbnVtYmVyKSB7XG4gIHJldHVybiB2OG4oKVxuICAgIC5udW1iZXIoKVxuICAgIC5wb3NpdGl2ZSgpXG4gICAgLmxlc3NUaGFuT3JFcXVhbChOdW1iZXIuTUFYX1NBRkVfSU5URUdFUilcbiAgICAudGVzdChhc3NldEluZGV4KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBhc3NldFRvdGFsSXNzdWFuY2UsXG4gIGFzc2V0RGVjaW1hbFBsYWNlcyxcbiAgZGVmYXVsdEZyb3plbixcbiAgYXNzZXRJbmRleCxcbiAgYXNzZXROYW1lLFxuICB1bml0TmFtZSxcbiAgYXNzZXRVcmwsXG4gIGFzc2V0TWV0YWRhdGFIYXNoXG59O1xuIl19