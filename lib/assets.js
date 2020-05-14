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
exports["default"] = void 0;

var _v8n = _interopRequireDefault(require("v8n"));

var _extensions = require("./utils/extensions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// For full typing support on the extend function,
// v8n should use context instead of a global variable
// Details: https://github.com/imbrn/v8n/issues/28
// @ts-ignore
_v8n["default"].extend({
  maxByteLength: _extensions.maxByteLength
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

var _default = {
  assetTotalIssuance: assetTotalIssuance,
  assetDecimalPlaces: assetDecimalPlaces,
  defaultFrozen: defaultFrozen,
  assetName: assetName,
  unitName: unitName,
  assetUrl: assetUrl,
  assetMetadataHash: assetMetadataHash
};
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hc3NldHMudHMiXSwibmFtZXMiOlsidjhuIiwiZXh0ZW5kIiwibWF4Qnl0ZUxlbmd0aCIsImFzc2V0VG90YWxJc3N1YW5jZSIsInRvdGFsIiwiaW50ZWdlciIsImJldHdlZW4iLCJOdW1iZXIiLCJNQVhfU0FGRV9JTlRFR0VSIiwidGVzdCIsImFzc2V0RGVjaW1hbFBsYWNlcyIsImRlY2ltYWxzIiwiZGVmYXVsdEZyb3plbiIsImFzc2V0TWV0YWRhdGFIYXNoIiwiaGFzaCIsInN0cmluZyIsImFzc2V0TmFtZSIsInVuaXROYW1lIiwiYXNzZXRVcmwiLCJ1cmwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBQSxnQkFBSUMsTUFBSixDQUFXO0FBQUVDLEVBQUFBLGFBQWEsRUFBYkE7QUFBRixDQUFYO0FBRUE7Ozs7Ozs7O0FBTU8sU0FBU0Msa0JBQVQsQ0FBNEJDLEtBQTVCLEVBQTJDO0FBQ2hELFNBQU8sdUJBQ0pDLE9BREksR0FFSkMsT0FGSSxDQUVJLENBRkosRUFFT0MsTUFBTSxDQUFDQyxnQkFGZCxFQUdKQyxJQUhJLENBR0NMLEtBSEQsQ0FBUDtBQUlEO0FBRUQ7Ozs7Ozs7O0FBTU8sU0FBU00sa0JBQVQsQ0FBNEJDLFFBQTVCLEVBQThDO0FBQ25ELFNBQU8sdUJBQ0pOLE9BREksR0FFSkMsT0FGSSxDQUVJLENBRkosRUFFTyxFQUZQLEVBR0pHLElBSEksQ0FHQ0UsUUFIRCxDQUFQO0FBSUQ7QUFFRDs7Ozs7Ozs7QUFNTyxTQUFTQyxhQUFULENBQXVCQSxhQUF2QixFQUErQztBQUNwRCxTQUFPLG9DQUVKSCxJQUZJLENBRUNHLGFBRkQsQ0FBUDtBQUdEO0FBRUQ7Ozs7Ozs7O0FBTU8sU0FBU0MsaUJBQVQsQ0FBMkJDLElBQTNCLEVBQXlDO0FBQzlDLFNBQU8sdUJBQ0pDLE1BREksR0FFSmIsYUFGSSxDQUVVLEVBRlYsRUFHSk8sSUFISSxDQUdDSyxJQUhELENBQVA7QUFJRDtBQUVEOzs7Ozs7OztBQU1PLFNBQVNFLFNBQVQsQ0FBbUJBLFNBQW5CLEVBQXNDO0FBQzNDLFNBQU8sdUJBQ0pELE1BREksR0FFSmIsYUFGSSxDQUVVLEVBRlYsRUFHSk8sSUFISSxDQUdDTyxTQUhELENBQVA7QUFJRDtBQUVEOzs7Ozs7OztBQU1PLFNBQVNDLFFBQVQsQ0FBa0JBLFFBQWxCLEVBQW9DO0FBQ3pDLFNBQU8sdUJBQ0pGLE1BREksR0FFSmIsYUFGSSxDQUVVLENBRlYsRUFHSk8sSUFISSxDQUdDUSxRQUhELENBQVA7QUFJRDtBQUVEOzs7Ozs7OztBQU1PLFNBQVNDLFFBQVQsQ0FBa0JDLEdBQWxCLEVBQStCO0FBQ3BDLFNBQU8sdUJBQ0pKLE1BREksR0FFSmIsYUFGSSxDQUVVLEVBRlYsRUFHSk8sSUFISSxDQUdDVSxHQUhELENBQVA7QUFJRDs7ZUFFYztBQUNiaEIsRUFBQUEsa0JBQWtCLEVBQWxCQSxrQkFEYTtBQUViTyxFQUFBQSxrQkFBa0IsRUFBbEJBLGtCQUZhO0FBR2JFLEVBQUFBLGFBQWEsRUFBYkEsYUFIYTtBQUliSSxFQUFBQSxTQUFTLEVBQVRBLFNBSmE7QUFLYkMsRUFBQUEsUUFBUSxFQUFSQSxRQUxhO0FBTWJDLEVBQUFBLFFBQVEsRUFBUkEsUUFOYTtBQU9iTCxFQUFBQSxpQkFBaUIsRUFBakJBO0FBUGEsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB2OG4gZnJvbSAndjhuJztcbmltcG9ydCB7IG1heEJ5dGVMZW5ndGggfSBmcm9tICcuL3V0aWxzL2V4dGVuc2lvbnMnO1xuXG4vLyBGb3IgZnVsbCB0eXBpbmcgc3VwcG9ydCBvbiB0aGUgZXh0ZW5kIGZ1bmN0aW9uLFxuLy8gdjhuIHNob3VsZCB1c2UgY29udGV4dCBpbnN0ZWFkIG9mIGEgZ2xvYmFsIHZhcmlhYmxlXG4vLyBEZXRhaWxzOiBodHRwczovL2dpdGh1Yi5jb20vaW1icm4vdjhuL2lzc3Vlcy8yOFxuLy8gQHRzLWlnbm9yZVxudjhuLmV4dGVuZCh7IG1heEJ5dGVMZW5ndGggfSk7XG5cbi8qKlxuICogVmFsaWRhdGUgdG90YWwgaXNzdWFuY2UgYW1vdW50IHdoZW4gY3JlYXRpbmcgYW4gYXNzZXRcbiAqIEBjYXRlZ29yeSBBc3NldHNcbiAqIEBwYXJhbSB7bnVtYmVyfVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhc3NldFRvdGFsSXNzdWFuY2UodG90YWw6IG51bWJlcikge1xuICByZXR1cm4gdjhuKClcbiAgICAuaW50ZWdlcigpXG4gICAgLmJldHdlZW4oMSwgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIpXG4gICAgLnRlc3QodG90YWwpO1xufVxuXG4vKipcbiAqIFZhbGlkYXRlIGFzc2V0IGRlY2ltYWwgcGxhY2VzIHdoZW4gY3JlYXRpbmcgYW4gYXNzZXRcbiAqIEBjYXRlZ29yeSBBc3NldHNcbiAqIEBwYXJhbSB7bnVtYmVyfVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhc3NldERlY2ltYWxQbGFjZXMoZGVjaW1hbHM6IG51bWJlcikge1xuICByZXR1cm4gdjhuKClcbiAgICAuaW50ZWdlcigpXG4gICAgLmJldHdlZW4oMCwgMTkpXG4gICAgLnRlc3QoZGVjaW1hbHMpO1xufVxuXG4vKipcbiAqIFZhbGlkYXRlIGRlZmF1bHRGcm96ZW4gaGFzIGEgYm9vbGVhbiB2YWx1ZSB3aGVuIGNyZWF0aW5nIGFuIGFzc2V0XG4gKiBAY2F0ZWdvcnkgQXNzZXRzXG4gKiBAcGFyYW0ge2Jvb2xlYW59XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlZmF1bHRGcm96ZW4oZGVmYXVsdEZyb3plbjogYm9vbGVhbikge1xuICByZXR1cm4gdjhuKClcbiAgICAuYm9vbGVhbigpXG4gICAgLnRlc3QoZGVmYXVsdEZyb3plbik7XG59XG5cbi8qKlxuICogVmFsaWRhdGUgZm9yIGEgbWV0YWRhdGEgaGFzaCBzdHJpbmcgd2hlbiBjcmVhdGluZyBhbiBhc3NldFxuICogQGNhdGVnb3J5IEFzc2V0c1xuICogQHBhcmFtIHtzdHJpbmd9XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFzc2V0TWV0YWRhdGFIYXNoKGhhc2g6IHN0cmluZykge1xuICByZXR1cm4gdjhuKClcbiAgICAuc3RyaW5nKClcbiAgICAubWF4Qnl0ZUxlbmd0aCgzMilcbiAgICAudGVzdChoYXNoKTtcbn1cblxuLyoqXG4gKiBWYWxpZGF0ZSBhc3NldCBuYW1lIHdoZW4gY3JlYXRpbmcgYW4gYXNzZXRcbiAqIEBjYXRlZ29yeSBBc3NldHNcbiAqIEBwYXJhbSB7c3RyaW5nfVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhc3NldE5hbWUoYXNzZXROYW1lOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHY4bigpXG4gICAgLnN0cmluZygpXG4gICAgLm1heEJ5dGVMZW5ndGgoMzIpXG4gICAgLnRlc3QoYXNzZXROYW1lKTtcbn1cblxuLyoqXG4gKiBWYWxpZGF0ZSB1bml0IG5hbWUgd2hlbiBjcmVhdGluZyBhbiBhc3NldFxuICogQGNhdGVnb3J5IEFzc2V0c1xuICogQHBhcmFtIHtzdHJpbmd9XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVuaXROYW1lKHVuaXROYW1lOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHY4bigpXG4gICAgLnN0cmluZygpXG4gICAgLm1heEJ5dGVMZW5ndGgoOClcbiAgICAudGVzdCh1bml0TmFtZSk7XG59XG5cbi8qKlxuICogVmFsaWRhdGUgYXNzZXQgdXJsIHdoZW4gY3JlYXRpbmcgYW4gYXNzZXRcbiAqIEBjYXRlZ29yeSBBc3NldHNcbiAqIEBwYXJhbSB7c3RyaW5nfVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhc3NldFVybCh1cmw6IHN0cmluZykge1xuICByZXR1cm4gdjhuKClcbiAgICAuc3RyaW5nKClcbiAgICAubWF4Qnl0ZUxlbmd0aCgzMilcbiAgICAudGVzdCh1cmwpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGFzc2V0VG90YWxJc3N1YW5jZSxcbiAgYXNzZXREZWNpbWFsUGxhY2VzLFxuICBkZWZhdWx0RnJvemVuLFxuICBhc3NldE5hbWUsXG4gIHVuaXROYW1lLFxuICBhc3NldFVybCxcbiAgYXNzZXRNZXRhZGF0YUhhc2hcbn07XG4iXX0=