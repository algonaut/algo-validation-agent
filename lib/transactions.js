"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.payment = payment;
exports.close = close;
exports.registerKeyOnline = registerKeyOnline;
exports.registerKeyOffline = registerKeyOffline;
exports.assetCreate = assetCreate;
exports.assetConfigure = assetConfigure;
exports.assetDestroy = assetDestroy;
exports.assetOptIn = assetOptIn;
exports.assetTransfer = assetTransfer;
exports.assetRevoke = assetRevoke;
exports.assetFreeze = assetFreeze;
exports["default"] = void 0;

var _v8n = _interopRequireDefault(require("v8n"));

var _core = require("./core");

var _constants = require("./utils/constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Test for a valid payment transaction payload
 * @category Transactions
 * @param {object}
 * @returns {boolean}
 */
function payment(txn) {
  if (!(0, _core.isTransactionPayload)(txn)) {
    return false;
  }

  var isValid = (0, _v8n["default"])().schema({
    amt: (0, _v8n["default"])().integer(),
    fee: (0, _v8n["default"])().integer(),
    fv: (0, _v8n["default"])().integer(),
    gen: (0, _v8n["default"])().string(),
    gh: (0, _v8n["default"])().string(),
    lv: (0, _v8n["default"])().integer(),
    note: (0, _v8n["default"])().string(),
    rcv: _core.algoAddress,
    snd: _core.algoAddress,
    type: (0, _v8n["default"])().string().exact(_constants.TRANSACTION_TYPES.PAY)
  });
  return isValid.test(txn.txn);
}
/**
 * Test for a valid close account transaction payload
 * @category Transactions
 * @param {object}
 * @returns {boolean}
 */


function close(txn) {
  if (!(0, _core.isTransactionPayload)(txn)) {
    return false;
  }

  var isValid = (0, _v8n["default"])().schema({
    close: _core.algoAddress,
    fee: (0, _v8n["default"])().integer(),
    fv: (0, _v8n["default"])().integer(),
    gen: (0, _v8n["default"])().string(),
    gh: (0, _v8n["default"])().string(),
    lv: (0, _v8n["default"])().integer(),
    rcv: _core.algoAddress,
    snd: _core.algoAddress,
    type: (0, _v8n["default"])().string().exact(_constants.TRANSACTION_TYPES.PAY)
  });
  return isValid.test(txn.txn);
}
/**
 * Test for a valid online key registration transaction payload
 * @category Transactions
 * @param {object}
 * @returns {boolean}
 */


function registerKeyOnline(txn) {
  if (!(0, _core.isTransactionPayload)(txn)) {
    return false;
  }

  var isValid = (0, _v8n["default"])().schema({
    fee: (0, _v8n["default"])().integer(),
    fv: (0, _v8n["default"])().integer(),
    gh: (0, _v8n["default"])().string(),
    lv: (0, _v8n["default"])().integer(),
    selkey: (0, _v8n["default"])().string(),
    snd: _core.algoAddress,
    votefst: (0, _v8n["default"])().integer(),
    votekd: (0, _v8n["default"])().integer(),
    votekey: (0, _v8n["default"])().string(),
    votelst: (0, _v8n["default"])().integer(),
    type: (0, _v8n["default"])().string().exact(_constants.TRANSACTION_TYPES.KEYREG)
  });
  return isValid.test(txn.txn);
}
/**
 * Test for a valid offline key registration transaction payload
 * @category Transactions
 * @param {object}
 * @returns {boolean}
 */


function registerKeyOffline(txn) {
  if (!(0, _core.isTransactionPayload)(txn)) {
    return false;
  }

  var isValid = (0, _v8n["default"])().schema({
    fee: (0, _v8n["default"])().integer(),
    fv: (0, _v8n["default"])().integer(),
    gh: (0, _v8n["default"])().string(),
    lv: (0, _v8n["default"])().integer(),
    snd: _core.algoAddress,
    type: (0, _v8n["default"])().string().exact(_constants.TRANSACTION_TYPES.KEYREG)
  });
  return isValid.test(txn.txn);
}
/**
 * Test for a valid asset creation transaction payload
 * @category Transactions
 * @param {object}
 * @returns {boolean}
 */


function assetCreate(txn) {
  if (!(0, _core.isTransactionPayload)(txn)) {
    return false;
  }

  var isValid = (0, _v8n["default"])().schema({
    apar: _core.assetCreateParams,
    fee: (0, _v8n["default"])().integer(),
    fv: (0, _v8n["default"])().integer(),
    gh: (0, _v8n["default"])().string(),
    lv: (0, _v8n["default"])().integer(),
    snd: _core.algoAddress,
    type: (0, _v8n["default"])().string().exact(_constants.TRANSACTION_TYPES.ACFG)
  });
  return isValid.test(txn.txn);
}
/**
 * Test for a valid asset configuration transaction payload
 * @category Transactions
 * @param {object}
 * @returns {boolean}
 */


function assetConfigure(txn) {
  if (!(0, _core.isTransactionPayload)(txn)) {
    return false;
  }

  var isValid = (0, _v8n["default"])().schema({
    apar: _core.assetConfigureParams,
    caid: _core.assetIndex,
    fee: (0, _v8n["default"])().integer(),
    fv: (0, _v8n["default"])().integer(),
    gh: (0, _v8n["default"])().string(),
    lv: (0, _v8n["default"])().integer(),
    snd: _core.algoAddress,
    type: (0, _v8n["default"])().string().exact(_constants.TRANSACTION_TYPES.ACFG)
  });
  return isValid.test(txn.txn);
}
/**
 * Test for a valid asset destroy transaction payload
 * @category Transactions
 * @param {object}
 * @returns {boolean}
 */


function assetDestroy(txn) {
  if (!(0, _core.isTransactionPayload)(txn)) {
    return false;
  }

  var isValid = (0, _v8n["default"])().schema({
    caid: _core.assetIndex,
    fee: (0, _v8n["default"])().integer(),
    fv: (0, _v8n["default"])().integer(),
    gh: (0, _v8n["default"])().string(),
    lv: (0, _v8n["default"])().integer(),
    snd: _core.algoAddress,
    type: (0, _v8n["default"])().string().exact(_constants.TRANSACTION_TYPES.ACFG)
  });
  return isValid.test(txn.txn);
}
/**
 * Test for a valid asset opt-in transaction payload
 * @category Transactions
 * @param {object}
 * @returns {boolean}
 */


function assetOptIn(txn) {
  if (!(0, _core.isTransactionPayload)(txn)) {
    return false;
  }

  var isValid = (0, _v8n["default"])().schema({
    arcv: _core.algoAddress,
    fee: (0, _v8n["default"])().integer(),
    fv: (0, _v8n["default"])().integer(),
    gh: (0, _v8n["default"])().string(),
    lv: (0, _v8n["default"])().integer(),
    snd: _core.algoAddress,
    type: (0, _v8n["default"])().string().exact(_constants.TRANSACTION_TYPES.AXFER),
    xaid: _core.assetIndex
  });
  return isValid.test(txn.txn);
}
/**
 * Test for a valid asset transfer transaction payload
 * @category Transactions
 * @param {object}
 * @returns {boolean}
 */


function assetTransfer(txn) {
  if (!(0, _core.isTransactionPayload)(txn)) {
    return false;
  }

  var isValid = (0, _v8n["default"])().schema({
    aamt: (0, _v8n["default"])().integer(),
    arcv: _core.algoAddress,
    fee: (0, _v8n["default"])().integer(),
    fv: (0, _v8n["default"])().integer(),
    gh: (0, _v8n["default"])().string(),
    lv: (0, _v8n["default"])().integer(),
    snd: _core.algoAddress,
    type: (0, _v8n["default"])().string().exact(_constants.TRANSACTION_TYPES.AXFER),
    xaid: _core.assetIndex
  });
  return isValid.test(txn.txn);
}
/**
 * Test for a valid revoke asset transaction payload
 * @category Transactions
 * @param {object}
 * @returns {boolean}
 */


function assetRevoke(txn) {
  if (!(0, _core.isTransactionPayload)(txn)) {
    return false;
  }

  var isValid = (0, _v8n["default"])().schema({
    aamt: (0, _v8n["default"])().integer(),
    arcv: _core.algoAddress,
    asnd: _core.algoAddress,
    fee: (0, _v8n["default"])().integer(),
    fv: (0, _v8n["default"])().integer(),
    gh: (0, _v8n["default"])().string(),
    lv: (0, _v8n["default"])().integer(),
    snd: _core.algoAddress,
    type: (0, _v8n["default"])().string().exact(_constants.TRANSACTION_TYPES.AXFER),
    xaid: _core.assetIndex
  });
  return isValid.test(txn.txn);
}
/**
 * Test for a valid freeze asset transaction payload
 * @category Transactions
 * @param {object}
 * @returns {boolean}
 */


function assetFreeze(txn) {
  if (!(0, _core.isTransactionPayload)(txn)) {
    return false;
  }

  var isValid = (0, _v8n["default"])().schema({
    afrz: (0, _v8n["default"])()["boolean"](),
    fadd: _core.algoAddress,
    faid: _core.assetIndex,
    fee: (0, _v8n["default"])().integer(),
    fv: (0, _v8n["default"])().integer(),
    gh: (0, _v8n["default"])().string(),
    lv: (0, _v8n["default"])().integer(),
    snd: _core.algoAddress,
    type: (0, _v8n["default"])().string().exact(_constants.TRANSACTION_TYPES.AFRZ)
  });
  return isValid.test(txn.txn);
}

var _default = {
  payment: payment,
  close: close,
  registerKeyOnline: registerKeyOnline,
  registerKeyOffline: registerKeyOffline,
  assetCreate: assetCreate,
  assetConfigure: assetConfigure,
  assetDestroy: assetDestroy,
  assetOptIn: assetOptIn,
  assetTransfer: assetTransfer,
  assetRevoke: assetRevoke,
  assetFreeze: assetFreeze
};
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90cmFuc2FjdGlvbnMudHMiXSwibmFtZXMiOlsicGF5bWVudCIsInR4biIsImlzVmFsaWQiLCJzY2hlbWEiLCJhbXQiLCJpbnRlZ2VyIiwiZmVlIiwiZnYiLCJnZW4iLCJzdHJpbmciLCJnaCIsImx2Iiwibm90ZSIsInJjdiIsImFsZ29BZGRyZXNzIiwic25kIiwidHlwZSIsImV4YWN0IiwiVFJBTlNBQ1RJT05fVFlQRVMiLCJQQVkiLCJ0ZXN0IiwiY2xvc2UiLCJyZWdpc3RlcktleU9ubGluZSIsInNlbGtleSIsInZvdGVmc3QiLCJ2b3Rla2QiLCJ2b3Rla2V5Iiwidm90ZWxzdCIsIktFWVJFRyIsInJlZ2lzdGVyS2V5T2ZmbGluZSIsImFzc2V0Q3JlYXRlIiwiYXBhciIsImFzc2V0Q3JlYXRlUGFyYW1zIiwiQUNGRyIsImFzc2V0Q29uZmlndXJlIiwiYXNzZXRDb25maWd1cmVQYXJhbXMiLCJjYWlkIiwiYXNzZXRJbmRleCIsImFzc2V0RGVzdHJveSIsImFzc2V0T3B0SW4iLCJhcmN2IiwiQVhGRVIiLCJ4YWlkIiwiYXNzZXRUcmFuc2ZlciIsImFhbXQiLCJhc3NldFJldm9rZSIsImFzbmQiLCJhc3NldEZyZWV6ZSIsImFmcnoiLCJmYWRkIiwiZmFpZCIsIkFGUloiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQU9BOzs7O0FBRUE7Ozs7OztBQU1PLFNBQVNBLE9BQVQsQ0FBaUJDLEdBQWpCLEVBQTBDO0FBQy9DLE1BQUksQ0FBQyxnQ0FBcUJBLEdBQXJCLENBQUwsRUFBZ0M7QUFDOUIsV0FBTyxLQUFQO0FBQ0Q7O0FBQ0QsTUFBTUMsT0FBTyxHQUFHLHVCQUFNQyxNQUFOLENBQWE7QUFDM0JDLElBQUFBLEdBQUcsRUFBRSx1QkFBTUMsT0FBTixFQURzQjtBQUUzQkMsSUFBQUEsR0FBRyxFQUFFLHVCQUFNRCxPQUFOLEVBRnNCO0FBRzNCRSxJQUFBQSxFQUFFLEVBQUUsdUJBQU1GLE9BQU4sRUFIdUI7QUFJ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LGNBQWMsRUFBZEEsY0FOYTtBQU9iSSxFQUFBQSxZQUFZLEVBQVpBLFlBUGE7QUFRYkMsRUFBQUEsVUFBVSxFQUFWQSxVQVJhO0FBU2JJLEVBQUFBLGFBQWEsRUFBYkEsYUFUYTtBQVViRSxFQUFBQSxXQUFXLEVBQVhBLFdBVmE7QUFXYkUsRUFBQUEsV0FBVyxFQUFYQTtBQVhhLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdjhuIGZyb20gJ3Y4bic7XG5pbXBvcnQge1xuICBhbGdvQWRkcmVzcyxcbiAgYXNzZXRJbmRleCxcbiAgYXNzZXRDcmVhdGVQYXJhbXMsXG4gIGFzc2V0Q29uZmlndXJlUGFyYW1zLFxuICBpc1RyYW5zYWN0aW9uUGF5bG9hZFxufSBmcm9tICcuL2NvcmUnO1xuaW1wb3J0IHsgVFJBTlNBQ1RJT05fVFlQRVMgfSBmcm9tICcuL3V0aWxzL2NvbnN0YW50cyc7XG5cbi8qKlxuICogVGVzdCBmb3IgYSB2YWxpZCBwYXltZW50IHRyYW5zYWN0aW9uIHBheWxvYWRcbiAqIEBjYXRlZ29yeSBUcmFuc2FjdGlvbnNcbiAqIEBwYXJhbSB7b2JqZWN0fVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXltZW50KHR4bjogVHJhbnNhY3Rpb25QYXlsb2FkKSB7XG4gIGlmICghaXNUcmFuc2FjdGlvblBheWxvYWQodHhuKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBpc1ZhbGlkID0gdjhuKCkuc2NoZW1hKHtcbiAgICBhbXQ6IHY4bigpLmludGVnZXIoKSxcbiAgICBmZWU6IHY4bigpLmludGVnZXIoKSxcbiAgICBmdjogdjhuKCkuaW50ZWdlcigpLFxuICAgIGdlbjogdjhuKCkuc3RyaW5nKCksXG4gICAgZ2g6IHY4bigpLnN0cmluZygpLFxuICAgIGx2OiB2OG4oKS5pbnRlZ2VyKCksXG4gICAgbm90ZTogdjhuKCkuc3RyaW5nKCksXG4gICAgcmN2OiBhbGdvQWRkcmVzcyxcbiAgICBzbmQ6IGFsZ29BZGRyZXNzLFxuICAgIHR5cGU6IHY4bigpXG4gICAgICAuc3RyaW5nKClcbiAgICAgIC5leGFjdChUUkFOU0FDVElPTl9UWVBFUy5QQVkpXG4gIH0pO1xuICByZXR1cm4gaXNWYWxpZC50ZXN0KHR4bi50eG4pO1xufVxuXG4vKipcbiAqIFRlc3QgZm9yIGEgdmFsaWQgY2xvc2UgYWNjb3VudCB0cmFuc2FjdGlvbiBwYXlsb2FkXG4gKiBAY2F0ZWdvcnkgVHJhbnNhY3Rpb25zXG4gKiBAcGFyYW0ge29iamVjdH1cbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gY2xvc2UodHhuOiBUcmFuc2FjdGlvblBheWxvYWQpIHtcbiAgaWYgKCFpc1RyYW5zYWN0aW9uUGF5bG9hZCh0eG4pKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IGlzVmFsaWQgPSB2OG4oKS5zY2hlbWEoe1xuICAgIGNsb3NlOiBhbGdvQWRkcmVzcyxcbiAgICBmZWU6IHY4bigpLmludGVnZXIoKSxcbiAgICBmdjogdjhuKCkuaW50ZWdlcigpLFxuICAgIGdlbjogdjhuKCkuc3RyaW5nKCksXG4gICAgZ2g6IHY4bigpLnN0cmluZygpLFxuICAgIGx2OiB2OG4oKS5pbnRlZ2VyKCksXG4gICAgcmN2OiBhbGdvQWRkcmVzcyxcbiAgICBzbmQ6IGFsZ29BZGRyZXNzLFxuICAgIHR5cGU6IHY4bigpXG4gICAgICAuc3RyaW5nKClcbiAgICAgIC5leGFjdChUUkFOU0FDVElPTl9UWVBFUy5QQVkpXG4gIH0pO1xuICByZXR1cm4gaXNWYWxpZC50ZXN0KHR4bi50eG4pO1xufVxuXG4vKipcbiAqIFRlc3QgZm9yIGEgdmFsaWQgb25saW5lIGtleSByZWdpc3RyYXRpb24gdHJhbnNhY3Rpb24gcGF5bG9hZFxuICogQGNhdGVnb3J5IFRyYW5zYWN0aW9uc1xuICogQHBhcmFtIHtvYmplY3R9XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyS2V5T25saW5lKHR4bjogVHJhbnNhY3Rpb25QYXlsb2FkKSB7XG4gIGlmICghaXNUcmFuc2FjdGlvblBheWxvYWQodHhuKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBpc1ZhbGlkID0gdjhuKCkuc2NoZW1hKHtcbiAgICBmZWU6IHY4bigpLmludGVnZXIoKSxcbiAgICBmdjogdjhuKCkuaW50ZWdlcigpLFxuICAgIGdoOiB2OG4oKS5zdHJpbmcoKSxcbiAgICBsdjogdjhuKCkuaW50ZWdlcigpLFxuICAgIHNlbGtleTogdjhuKCkuc3RyaW5nKCksXG4gICAgc25kOiBhbGdvQWRkcmVzcyxcbiAgICB2b3RlZnN0OiB2OG4oKS5pbnRlZ2VyKCksXG4gICAgdm90ZWtkOiB2OG4oKS5pbnRlZ2VyKCksXG4gICAgdm90ZWtleTogdjhuKCkuc3RyaW5nKCksXG4gICAgdm90ZWxzdDogdjhuKCkuaW50ZWdlcigpLFxuICAgIHR5cGU6IHY4bigpXG4gICAgICAuc3RyaW5nKClcbiAgICAgIC5leGFjdChUUkFOU0FDVElPTl9UWVBFUy5LRVlSRUcpXG4gIH0pO1xuICByZXR1cm4gaXNWYWxpZC50ZXN0KHR4bi50eG4pO1xufVxuXG4vKipcbiAqIFRlc3QgZm9yIGEgdmFsaWQgb2ZmbGluZSBrZXkgcmVnaXN0cmF0aW9uIHRyYW5zYWN0aW9uIHBheWxvYWRcbiAqIEBjYXRlZ29yeSBUcmFuc2FjdGlvbnNcbiAqIEBwYXJhbSB7b2JqZWN0fVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlcktleU9mZmxpbmUodHhuOiBUcmFuc2FjdGlvblBheWxvYWQpIHtcbiAgaWYgKCFpc1RyYW5zYWN0aW9uUGF5bG9hZCh0eG4pKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IGlzVmFsaWQgPSB2OG4oKS5zY2hlbWEoe1xuICAgIGZlZTogdjhuKCkuaW50ZWdlcigpLFxuICAgIGZ2OiB2OG4oKS5pbnRlZ2VyKCksXG4gICAgZ2g6IHY4bigpLnN0cmluZygpLFxuICAgIGx2OiB2OG4oKS5pbnRlZ2VyKCksXG4gICAgc25kOiBhbGdvQWRkcmVzcyxcbiAgICB0eXBlOiB2OG4oKVxuICAgICAgLnN0cmluZygpXG4gICAgICAuZXhhY3QoVFJBTlNBQ1RJT05fVFlQRVMuS0VZUkVHKVxuICB9KTtcbiAgcmV0dXJuIGlzVmFsaWQudGVzdCh0eG4udHhuKTtcbn1cblxuLyoqXG4gKiBUZXN0IGZvciBhIHZhbGlkIGFzc2V0IGNyZWF0aW9uIHRyYW5zYWN0aW9uIHBheWxvYWRcbiAqIEBjYXRlZ29yeSBUcmFuc2FjdGlvbnNcbiAqIEBwYXJhbSB7b2JqZWN0fVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhc3NldENyZWF0ZSh0eG46IFRyYW5zYWN0aW9uUGF5bG9hZCkge1xuICBpZiAoIWlzVHJhbnNhY3Rpb25QYXlsb2FkKHR4bikpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3QgaXNWYWxpZCA9IHY4bigpLnNjaGVtYSh7XG4gICAgYXBhcjogYXNzZXRDcmVhdGVQYXJhbXMsXG4gICAgZmVlOiB2OG4oKS5pbnRlZ2VyKCksXG4gICAgZnY6IHY4bigpLmludGVnZXIoKSxcbiAgICBnaDogdjhuKCkuc3RyaW5nKCksXG4gICAgbHY6IHY4bigpLmludGVnZXIoKSxcbiAgICBzbmQ6IGFsZ29BZGRyZXNzLFxuICAgIHR5cGU6IHY4bigpXG4gICAgICAuc3RyaW5nKClcbiAgICAgIC5leGFjdChUUkFOU0FDVElPTl9UWVBFUy5BQ0ZHKVxuICB9KTtcbiAgcmV0dXJuIGlzVmFsaWQudGVzdCh0eG4udHhuKTtcbn1cblxuLyoqXG4gKiBUZXN0IGZvciBhIHZhbGlkIGFzc2V0IGNvbmZpZ3VyYXRpb24gdHJhbnNhY3Rpb24gcGF5bG9hZFxuICogQGNhdGVnb3J5IFRyYW5zYWN0aW9uc1xuICogQHBhcmFtIHtvYmplY3R9XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFzc2V0Q29uZmlndXJlKHR4bjogVHJhbnNhY3Rpb25QYXlsb2FkKSB7XG4gIGlmICghaXNUcmFuc2FjdGlvblBheWxvYWQodHhuKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBpc1ZhbGlkID0gdjhuKCkuc2NoZW1hKHtcbiAgICBhcGFyOiBhc3NldENvbmZpZ3VyZVBhcmFtcyxcbiAgICBjYWlkOiBhc3NldEluZGV4LFxuICAgIGZlZTogdjhuKCkuaW50ZWdlcigpLFxuICAgIGZ2OiB2OG4oKS5pbnRlZ2VyKCksXG4gICAgZ2g6IHY4bigpLnN0cmluZygpLFxuICAgIGx2OiB2OG4oKS5pbnRlZ2VyKCksXG4gICAgc25kOiBhbGdvQWRkcmVzcyxcbiAgICB0eXBlOiB2OG4oKVxuICAgICAgLnN0cmluZygpXG4gICAgICAuZXhhY3QoVFJBTlNBQ1RJT05fVFlQRVMuQUNGRylcbiAgfSk7XG4gIHJldHVybiBpc1ZhbGlkLnRlc3QodHhuLnR4bik7XG59XG5cbi8qKlxuICogVGVzdCBmb3IgYSB2YWxpZCBhc3NldCBkZXN0cm95IHRyYW5zYWN0aW9uIHBheWxvYWRcbiAqIEBjYXRlZ29yeSBUcmFuc2FjdGlvbnNcbiAqIEBwYXJhbSB7b2JqZWN0fVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhc3NldERlc3Ryb3kodHhuOiBUcmFuc2FjdGlvblBheWxvYWQpIHtcbiAgaWYgKCFpc1RyYW5zYWN0aW9uUGF5bG9hZCh0eG4pKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IGlzVmFsaWQgPSB2OG4oKS5zY2hlbWEoe1xuICAgIGNhaWQ6IGFzc2V0SW5kZXgsXG4gICAgZmVlOiB2OG4oKS5pbnRlZ2VyKCksXG4gICAgZnY6IHY4bigpLmludGVnZXIoKSxcbiAgICBnaDogdjhuKCkuc3RyaW5nKCksXG4gICAgbHY6IHY4bigpLmludGVnZXIoKSxcbiAgICBzbmQ6IGFsZ29BZGRyZXNzLFxuICAgIHR5cGU6IHY4bigpXG4gICAgICAuc3RyaW5nKClcbiAgICAgIC5leGFjdChUUkFOU0FDVElPTl9UWVBFUy5BQ0ZHKVxuICB9KTtcbiAgcmV0dXJuIGlzVmFsaWQudGVzdCh0eG4udHhuKTtcbn1cblxuLyoqXG4gKiBUZXN0IGZvciBhIHZhbGlkIGFzc2V0IG9wdC1pbiB0cmFuc2FjdGlvbiBwYXlsb2FkXG4gKiBAY2F0ZWdvcnkgVHJhbnNhY3Rpb25zXG4gKiBAcGFyYW0ge29iamVjdH1cbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gYXNzZXRPcHRJbih0eG46IFRyYW5zYWN0aW9uUGF5bG9hZCkge1xuICBpZiAoIWlzVHJhbnNhY3Rpb25QYXlsb2FkKHR4bikpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3QgaXNWYWxpZCA9IHY4bigpLnNjaGVtYSh7XG4gICAgYXJjdjogYWxnb0FkZHJlc3MsXG4gICAgZmVlOiB2OG4oKS5pbnRlZ2VyKCksXG4gICAgZnY6IHY4bigpLmludGVnZXIoKSxcbiAgICBnaDogdjhuKCkuc3RyaW5nKCksXG4gICAgbHY6IHY4bigpLmludGVnZXIoKSxcbiAgICBzbmQ6IGFsZ29BZGRyZXNzLFxuICAgIHR5cGU6IHY4bigpXG4gICAgICAuc3RyaW5nKClcbiAgICAgIC5leGFjdChUUkFOU0FDVElPTl9UWVBFUy5BWEZFUiksXG4gICAgeGFpZDogYXNzZXRJbmRleFxuICB9KTtcbiAgcmV0dXJuIGlzVmFsaWQudGVzdCh0eG4udHhuKTtcbn1cblxuLyoqXG4gKiBUZXN0IGZvciBhIHZhbGlkIGFzc2V0IHRyYW5zZmVyIHRyYW5zYWN0aW9uIHBheWxvYWRcbiAqIEBjYXRlZ29yeSBUcmFuc2FjdGlvbnNcbiAqIEBwYXJhbSB7b2JqZWN0fVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhc3NldFRyYW5zZmVyKHR4bjogVHJhbnNhY3Rpb25QYXlsb2FkKSB7XG4gIGlmICghaXNUcmFuc2FjdGlvblBheWxvYWQodHhuKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBpc1ZhbGlkID0gdjhuKCkuc2NoZW1hKHtcbiAgICBhYW10OiB2OG4oKS5pbnRlZ2VyKCksXG4gICAgYXJjdjogYWxnb0FkZHJlc3MsXG4gICAgZmVlOiB2OG4oKS5pbnRlZ2VyKCksXG4gICAgZnY6IHY4bigpLmludGVnZXIoKSxcbiAgICBnaDogdjhuKCkuc3RyaW5nKCksXG4gICAgbHY6IHY4bigpLmludGVnZXIoKSxcbiAgICBzbmQ6IGFsZ29BZGRyZXNzLFxuICAgIHR5cGU6IHY4bigpXG4gICAgICAuc3RyaW5nKClcbiAgICAgIC5leGFjdChUUkFOU0FDVElPTl9UWVBFUy5BWEZFUiksXG4gICAgeGFpZDogYXNzZXRJbmRleFxuICB9KTtcbiAgcmV0dXJuIGlzVmFsaWQudGVzdCh0eG4udHhuKTtcbn1cblxuLyoqXG4gKiBUZXN0IGZvciBhIHZhbGlkIHJldm9rZSBhc3NldCB0cmFuc2FjdGlvbiBwYXlsb2FkXG4gKiBAY2F0ZWdvcnkgVHJhbnNhY3Rpb25zXG4gKiBAcGFyYW0ge29iamVjdH1cbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gYXNzZXRSZXZva2UodHhuOiBUcmFuc2FjdGlvblBheWxvYWQpIHtcbiAgaWYgKCFpc1RyYW5zYWN0aW9uUGF5bG9hZCh0eG4pKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IGlzVmFsaWQgPSB2OG4oKS5zY2hlbWEoe1xuICAgIGFhbXQ6IHY4bigpLmludGVnZXIoKSxcbiAgICBhcmN2OiBhbGdvQWRkcmVzcyxcbiAgICBhc25kOiBhbGdvQWRkcmVzcyxcbiAgICBmZWU6IHY4bigpLmludGVnZXIoKSxcbiAgICBmdjogdjhuKCkuaW50ZWdlcigpLFxuICAgIGdoOiB2OG4oKS5zdHJpbmcoKSxcbiAgICBsdjogdjhuKCkuaW50ZWdlcigpLFxuICAgIHNuZDogYWxnb0FkZHJlc3MsXG4gICAgdHlwZTogdjhuKClcbiAgICAgIC5zdHJpbmcoKVxuICAgICAgLmV4YWN0KFRSQU5TQUNUSU9OX1RZUEVTLkFYRkVSKSxcbiAgICB4YWlkOiBhc3NldEluZGV4XG4gIH0pO1xuICByZXR1cm4gaXNWYWxpZC50ZXN0KHR4bi50eG4pO1xufVxuXG4vKipcbiAqIFRlc3QgZm9yIGEgdmFsaWQgZnJlZXplIGFzc2V0IHRyYW5zYWN0aW9uIHBheWxvYWRcbiAqIEBjYXRlZ29yeSBUcmFuc2FjdGlvbnNcbiAqIEBwYXJhbSB7b2JqZWN0fVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhc3NldEZyZWV6ZSh0eG46IFRyYW5zYWN0aW9uUGF5bG9hZCkge1xuICBpZiAoIWlzVHJhbnNhY3Rpb25QYXlsb2FkKHR4bikpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3QgaXNWYWxpZCA9IHY4bigpLnNjaGVtYSh7XG4gICAgYWZyejogdjhuKCkuYm9vbGVhbigpLFxuICAgIGZhZGQ6IGFsZ29BZGRyZXNzLFxuICAgIGZhaWQ6IGFzc2V0SW5kZXgsXG4gICAgZmVlOiB2OG4oKS5pbnRlZ2VyKCksXG4gICAgZnY6IHY4bigpLmludGVnZXIoKSxcbiAgICBnaDogdjhuKCkuc3RyaW5nKCksXG4gICAgbHY6IHY4bigpLmludGVnZXIoKSxcbiAgICBzbmQ6IGFsZ29BZGRyZXNzLFxuICAgIHR5cGU6IHY4bigpXG4gICAgICAuc3RyaW5nKClcbiAgICAgIC5leGFjdChUUkFOU0FDVElPTl9UWVBFUy5BRlJaKVxuICB9KTtcbiAgcmV0dXJuIGlzVmFsaWQudGVzdCh0eG4udHhuKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBwYXltZW50LFxuICBjbG9zZSxcbiAgcmVnaXN0ZXJLZXlPbmxpbmUsXG4gIHJlZ2lzdGVyS2V5T2ZmbGluZSxcbiAgYXNzZXRDcmVhdGUsXG4gIGFzc2V0Q29uZmlndXJlLFxuICBhc3NldERlc3Ryb3ksXG4gIGFzc2V0T3B0SW4sXG4gIGFzc2V0VHJhbnNmZXIsXG4gIGFzc2V0UmV2b2tlLFxuICBhc3NldEZyZWV6ZVxufTtcbiJdfQ==