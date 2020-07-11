'use strict';

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var Rule = function () {
  function Rule(name, fn, args, modifiers) {
    classCallCheck(this, Rule);

    this.name = name;
    this.fn = fn;
    this.args = args;
    this.modifiers = modifiers;
  }

  createClass(Rule, [{
    key: "_test",
    value: function _test(value) {
      var fn = this.fn;

      try {
        testAux(this.modifiers.slice(), fn)(value);
      } catch (ex) {
        fn = function fn() {
          return false;
        };
      }

      try {
        return testAux(this.modifiers.slice(), fn)(value);
      } catch (ex) {
        return false;
      }
    }
  }, {
    key: "_check",
    value: function _check(value) {
      try {
        testAux(this.modifiers.slice(), this.fn)(value);
      } catch (ex) {
        if (testAux(this.modifiers.slice(), function (it) {
          return it;
        })(false)) {
          return;
        }
      }

      if (!testAux(this.modifiers.slice(), this.fn)(value)) {
        throw null;
      }
    }
  }, {
    key: "_testAsync",
    value: function _testAsync(value) {
      var _this = this;

      return new Promise(function (resolve, reject) {
        testAsyncAux(_this.modifiers.slice(), _this.fn)(value).then(function (valid) {
          if (valid) {
            resolve(value);
          } else {
            reject(null);
          }
        }).catch(function (ex) {
          return reject(ex);
        });
      });
    }
  }]);
  return Rule;
}();

function pickFn(fn) {
  var variant = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "simple";

  return typeof fn === "object" ? fn[variant] : fn;
}

function testAux(modifiers, fn) {
  if (modifiers.length) {
    var modifier = modifiers.shift();
    var nextFn = testAux(modifiers, fn);
    return modifier.perform(nextFn);
  } else {
    return pickFn(fn);
  }
}

function testAsyncAux(modifiers, fn) {
  if (modifiers.length) {
    var modifier = modifiers.shift();
    var nextFn = testAsyncAux(modifiers, fn);
    return modifier.performAsync(nextFn);
  } else {
    return function (value) {
      return Promise.resolve(pickFn(fn, "async")(value));
    };
  }
}

var Modifier = function Modifier(name, perform, performAsync) {
  classCallCheck(this, Modifier);

  this.name = name;
  this.perform = perform;
  this.performAsync = performAsync;
};

var ValidationError = function (_Error) {
  inherits(ValidationError, _Error);

  function ValidationError(rule, value, cause, target) {
    classCallCheck(this, ValidationError);

    for (var _len = arguments.length, remaining = Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++) {
      remaining[_key - 4] = arguments[_key];
    }

    var _this = possibleConstructorReturn(this, (ValidationError.__proto__ || Object.getPrototypeOf(ValidationError)).call(this, remaining));

    if (Error.captureStackTrace) {
      Error.captureStackTrace(_this, ValidationError);
    }
    _this.rule = rule;
    _this.value = value;
    _this.cause = cause;
    _this.target = target;
    return _this;
  }

  return ValidationError;
}(Error);

var Context = function () {
  function Context() {
    var chain = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var nextRuleModifiers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    classCallCheck(this, Context);

    this.chain = chain;
    this.nextRuleModifiers = nextRuleModifiers;
  }

  createClass(Context, [{
    key: "_applyRule",
    value: function _applyRule(ruleFn, name) {
      var _this = this;

      return function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this.chain.push(new Rule(name, ruleFn.apply(_this, args), args, _this.nextRuleModifiers));
        _this.nextRuleModifiers = [];
        return _this;
      };
    }
  }, {
    key: "_applyModifier",
    value: function _applyModifier(modifier, name) {
      this.nextRuleModifiers.push(new Modifier(name, modifier.simple, modifier.async));
      return this;
    }
  }, {
    key: "_clone",
    value: function _clone() {
      return new Context(this.chain.slice(), this.nextRuleModifiers.slice());
    }
  }, {
    key: "test",
    value: function test(value) {
      return this.chain.every(function (rule) {
        return rule._test(value);
      });
    }
  }, {
    key: "testAll",
    value: function testAll(value) {
      var err = [];
      this.chain.forEach(function (rule) {
        try {
          rule._check(value);
        } catch (ex) {
          err.push(new ValidationError(rule, value, ex));
        }
      });
      return err;
    }
  }, {
    key: "check",
    value: function check(value) {
      this.chain.forEach(function (rule) {
        try {
          rule._check(value);
        } catch (ex) {
          throw new ValidationError(rule, value, ex);
        }
      });
    }
  }, {
    key: "testAsync",
    value: function testAsync(value) {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        executeAsyncRules(value, _this2.chain.slice(), resolve, reject);
      });
    }
  }]);
  return Context;
}();

function executeAsyncRules(value, rules, resolve, reject) {
  if (rules.length) {
    var rule = rules.shift();
    rule._testAsync(value).then(function () {
      executeAsyncRules(value, rules, resolve, reject);
    }, function (cause) {
      reject(new ValidationError(rule, value, cause));
    });
  } else {
    resolve(value);
  }
}

function v8n() {
  return proxyContext(new Context());
}

// Custom rules
var customRules = {};

v8n.extend = function (newRules) {
  Object.assign(customRules, newRules);
};

v8n.clearCustomRules = function () {
  customRules = {};
};

function proxyContext(context) {
  return new Proxy(context, {
    get: function get(obj, prop) {
      if (prop in obj) {
        return obj[prop];
      }

      var newContext = proxyContext(context._clone());

      if (prop in availableModifiers) {
        return newContext._applyModifier(availableModifiers[prop], prop);
      }
      if (prop in customRules) {
        return newContext._applyRule(customRules[prop], prop);
      }
      if (prop in availableRules) {
        return newContext._applyRule(availableRules[prop], prop);
      }
    }
  });
}

var availableModifiers = {
  not: {
    simple: function simple(fn) {
      return function (value) {
        return !fn(value);
      };
    },
    async: function async(fn) {
      return function (value) {
        return Promise.resolve(fn(value)).then(function (result) {
          return !result;
        }).catch(function (e) {
          return true;
        });
      };
    }
  },

  some: {
    simple: function simple(fn) {
      return function (value) {
        return split(value).some(function (item) {
          try {
            return fn(item);
          } catch (ex) {
            return false;
          }
        });
      };
    },
    async: function async(fn) {
      return function (value) {
        return Promise.all(split(value).map(function (item) {
          try {
            return fn(item).catch(function (e) {
              return false;
            });
          } catch (ex) {
            return false;
          }
        })).then(function (result) {
          return result.some(Boolean);
        });
      };
    }
  },

  every: {
    simple: function simple(fn) {
      return function (value) {
        return split(value).every(fn);
      };
    },
    async: function async(fn) {
      return function (value) {
        return Promise.all(split(value).map(fn)).then(function (result) {
          return result.every(Boolean);
        });
      };
    }
  }
};

function split(value) {
  if (typeof value === "string") {
    return value.split("");
  }
  return value;
}

var availableRules = {
  // Value

  equal: function equal(expected) {
    return function (value) {
      return value == expected;
    };
  },

  exact: function exact(expected) {
    return function (value) {
      return value === expected;
    };
  },

  // Types

  number: function number() {
    var allowInfinite = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    return function (value) {
      return typeof value === "number" && (allowInfinite || isFinite(value));
    };
  },

  integer: function integer() {
    return function (value) {
      var isInteger = Number.isInteger || isIntegerPolyfill;
      return isInteger(value);
    };
  },

  numeric: function numeric() {
    return function (value) {
      return !isNaN(parseFloat(value)) && isFinite(value);
    };
  },

  string: function string() {
    return testType("string");
  },

  boolean: function boolean() {
    return testType("boolean");
  },

  undefined: function undefined$1() {
    return testType("undefined");
  },

  null: function _null() {
    return testType("null");
  },

  array: function array() {
    return testType("array");
  },

  object: function object() {
    return testType("object");
  },

  instanceOf: function instanceOf(instance) {
    return function (value) {
      return value instanceof instance;
    };
  },

  // Pattern

  pattern: function pattern(expected) {
    return function (value) {
      return expected.test(value);
    };
  },

  lowercase: function lowercase() {
    return function (value) {
      return (/^([a-z]+\s*)+$/.test(value)
      );
    };
  },

  uppercase: function uppercase() {
    return function (value) {
      return (/^([A-Z]+\s*)+$/.test(value)
      );
    };
  },

  vowel: function vowel() {
    return function (value) {
      return (/^[aeiou]+$/i.test(value)
      );
    };
  },

  consonant: function consonant() {
    return function (value) {
      return (/^(?=[^aeiou])([a-z]+)$/i.test(value)
      );
    };
  },

  // Value at

  first: function first(expected) {
    return function (value) {
      return value[0] == expected;
    };
  },

  last: function last(expected) {
    return function (value) {
      return value[value.length - 1] == expected;
    };
  },

  // Length

  empty: function empty() {
    return function (value) {
      return value.length === 0;
    };
  },

  length: function length(min, max) {
    return function (value) {
      return value.length >= min && value.length <= (max || min);
    };
  },

  minLength: function minLength(min) {
    return function (value) {
      return value.length >= min;
    };
  },

  maxLength: function maxLength(max) {
    return function (value) {
      return value.length <= max;
    };
  },

  // Range

  negative: function negative() {
    return function (value) {
      return value < 0;
    };
  },

  positive: function positive() {
    return function (value) {
      return value >= 0;
    };
  },

  between: function between(a, b) {
    return function (value) {
      return value >= a && value <= b;
    };
  },

  range: function range(a, b) {
    return function (value) {
      return value >= a && value <= b;
    };
  },

  lessThan: function lessThan(n) {
    return function (value) {
      return value < n;
    };
  },

  lessThanOrEqual: function lessThanOrEqual(n) {
    return function (value) {
      return value <= n;
    };
  },

  greaterThan: function greaterThan(n) {
    return function (value) {
      return value > n;
    };
  },

  greaterThanOrEqual: function greaterThanOrEqual(n) {
    return function (value) {
      return value >= n;
    };
  },

  // Divisible

  even: function even() {
    return function (value) {
      return value % 2 === 0;
    };
  },

  odd: function odd() {
    return function (value) {
      return value % 2 !== 0;
    };
  },

  includes: function includes(expected) {
    return function (value) {
      return ~value.indexOf(expected);
    };
  },

  schema: function schema(_schema) {
    return testSchema(_schema);
  },

  // branching

  passesAnyOf: function passesAnyOf() {
    for (var _len = arguments.length, validations = Array(_len), _key = 0; _key < _len; _key++) {
      validations[_key] = arguments[_key];
    }

    return function (value) {
      return validations.some(function (validation) {
        return validation.test(value);
      });
    };
  },

  optional: function optional(validation) {
    var considerTrimmedEmptyString = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    return function (value) {
      if (considerTrimmedEmptyString && typeof value === "string" && value.trim() === "") {
        return true;
      }

      if (value !== undefined && value !== null) validation.check(value);
      return true;
    };
  }
};

function testType(expected) {
  return function (value) {
    return Array.isArray(value) && expected === "array" || value === null && expected === "null" || typeof value === expected;
  };
}

function isIntegerPolyfill(value) {
  return typeof value === "number" && isFinite(value) && Math.floor(value) === value;
}

function testSchema(schema) {
  return {
    simple: function simple(value) {
      var causes = [];
      Object.keys(schema).forEach(function (key) {
        var nestedValidation = schema[key];
        try {
          nestedValidation.check((value || {})[key]);
        } catch (ex) {
          ex.target = key;
          causes.push(ex);
        }
      });
      if (causes.length > 0) {
        throw causes;
      }
      return true;
    },
    async: function async(value) {
      var causes = [];
      var nested = Object.keys(schema).map(function (key) {
        var nestedValidation = schema[key];
        return nestedValidation.testAsync((value || {})[key]).catch(function (ex) {
          ex.target = key;
          causes.push(ex);
        });
      });
      return Promise.all(nested).then(function (values) {
        if (causes.length > 0) {
          throw causes;
        }

        return true;
      });
    }
  };
}

var e="undefined"==typeof global?"undefined"===typeof self?{}:self:global,f=String.fromCharCode,g={}.toString,h=e.SharedArrayBuffer,k=h?g.call(h):"",m=e.Uint8Array,n=m?g.call(ArrayBuffer.prototype):"",p=e.Buffer;try{!p&&e.require&&(p=e.require("Buffer"));var q=p.prototype,r=g.call(q);}catch(b){}var t=!!m&&!p,v=!p||!!m&&m.prototype.isPrototypeOf(q),x=w.prototype;
function y(b){var a=b.charCodeAt(0),c=1114112,d=0,u=b.length|0,l="";switch(a>>>4){case 12:case 13:c=(a&31)<<6|b.charCodeAt(1)&63;d=128>c?0:2;break;case 14:c=(a&15)<<12|(b.charCodeAt(1)&63)<<6|b.charCodeAt(2)&63;d=2048>c?0:3;break;case 15:30===a>>>3&&(c=(a&7)<<18|(b.charCodeAt(1)&63)<<12|(b.charCodeAt(2)&63)<<6|b.charCodeAt(3),d=65536>c?0:4);}d&&(u<d?d=0:65536>c?l=f(c):1114112>c?(c=c-65664|0,l=f((c>>>10)+55296|0,(c&1023)+56320|0)):d=0);for(;d<u;d=d+1|0)l+="\ufffd";return l}function A(b){var a=b&&b.buffer||b,c=g.call(a);if(c!==n&&c!==r&&c!==k&&"[object ArrayBuffer]"!==c&&void 0!==b)throw TypeError("Failed to execute 'decode' on 'TextDecoder': The provided value is not of type '(ArrayBuffer or ArrayBufferView)'");b=v?new m(a):a||[];a="";c=0;for(var d=b.length|0;c<d;c=c+32768|0)a+=f.apply(0,b[v?"subarray":"slice"](c,c+32768|0));return a.replace(/[\xc0-\xff][\x80-\xbf]+|[\x80-\xff]/g,y)}function B(b){var a=b.charCodeAt(0)|0;if(55296<=a&&56319>=a)if(b=b.charCodeAt(1)|0,56320<=b&&57343>=b){if(a=(a<<10)+b-56613888|0,65535<a)return f(240|a>>>18,128|a>>>12&63,128|a>>>6&63,128|a&63)}else a=65533;return 2047>=a?f(192|a>>>6,128|a&63):f(224|a>>>12,128|a>>>6&63,128|a&63)}function w(){}
function C(b){b=void 0===b?"":(""+b).replace(/[\x80-\uD7ff\uDC00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]?/g,B);for(var a=b.length|0,c=t?new m(a):p.allocUnsafe?p.allocUnsafe(a):new p(a),d=0;d<a;d=d+1|0)c[d]=b.charCodeAt(d)|0;return c}x.encode=C;function D(b,a){var c=b[a];return function(){return c.apply(b,arguments)}}var E=e.TextDecoder,F=e.TextEncoder;
var TextEncoder=F||w,decode=E?D(new E,"decode"):A,encode=F?D(new F,"encode"):C;

var exactByteLength = function exactByteLength(validLength) {
  return function (val) {
    return new TextEncoder().encode(val).length === validLength;
  };
};
var maxByteLength = function maxByteLength(maxLength) {
  return function (val) {
    return new TextEncoder().encode(val).length <= maxLength;
  };
};
var base32CharsOnly = function base32CharsOnly() {
  return function (val) {
    // Algorand strips off padding and doesn't adhere to multiples of 8 length constraint
    var b32_regex = new RegExp(/^[A-Z2-7]*$/);
    return b32_regex.test(val);
  };
};
var isUint8Array = function isUint8Array() {
  return function (val) {
    return val.constructor === Uint8Array;
  };
};

var ALGORAND_ADDRESS_LENGTH = 58;
var ALGORAND_TRANSACTION_LENGTH = 52;
var TRANSACTION_TYPES = {
  PAY: 'pay',
  KEYREG: 'keyreg',
  ACFG: 'acfg',
  AXFER: 'axfer',
  AFRZ: 'afrz'
};

// v8n should use context instead of a global variable
// Details: https://github.com/imbrn/v8n/issues/28
// @ts-ignore

v8n.extend({
  exactByteLength: exactByteLength,
  base32CharsOnly: base32CharsOnly
});
var algoAddress = v8n().string().exactByteLength(ALGORAND_ADDRESS_LENGTH).length(ALGORAND_ADDRESS_LENGTH).base32CharsOnly();
var algoTxn = v8n().string().exactByteLength(ALGORAND_TRANSACTION_LENGTH).length(ALGORAND_TRANSACTION_LENGTH).base32CharsOnly();
var core = {
  algoAddress: algoAddress,
  algoTxn: algoTxn
};

// v8n should use context instead of a global variable
// Details: https://github.com/imbrn/v8n/issues/28
// @ts-ignore

v8n.extend({
  maxByteLength: maxByteLength
});
var assetDecimals = v8n().integer().between(0, 19);
var assetTotal = v8n().integer().between(1, Number.MAX_SAFE_INTEGER);
var assetDefaultFrozen = v8n()["boolean"]();
var assetMetadataHash = v8n().string();
var assetName = v8n().string().maxByteLength(32);
var assetUnitName = v8n().string().maxByteLength(8);
var assetURL = v8n().string().maxByteLength(32);
var assetIndex = v8n().number().positive().lessThanOrEqual(Number.MAX_SAFE_INTEGER);
var freezeState = v8n()["boolean"]();
var assets = {
  assetIndex: assetIndex,
  assetDecimals: assetDecimals,
  assetTotal: assetTotal,
  assetDefaultFrozen: assetDefaultFrozen,
  assetMetadataHash: assetMetadataHash,
  assetName: assetName,
  assetUnitName: assetUnitName,
  assetURL: assetURL,
  freezeState: freezeState
};

// v8n should use context instead of a global variable
// Details: https://github.com/imbrn/v8n/issues/28
// @ts-ignore

v8n.extend({
  isUint8Array: isUint8Array
});
var genesisID = v8n().string();
var lease = v8n().isUint8Array();
var fee = v8n().integer().positive().greaterThanOrEqual(1000).lessThanOrEqual(Number.MAX_SAFE_INTEGER);
var note = v8n().string().maxByteLength(1000);
var group = v8n().string();
var reKeyTo = algoAddress;
var firstRound = v8n().integer().positive().lessThanOrEqual(Number.MAX_SAFE_INTEGER);
var lastRound = v8n().integer().positive().greaterThan(0).lessThanOrEqual(Number.MAX_SAFE_INTEGER);
var genesisHash = v8n().string();
var amount = v8n().integer().lessThanOrEqual(Number.MAX_SAFE_INTEGER).greaterThanOrEqual(0);
var closeRemainderTo = algoAddress;
var voteFirst = v8n().integer().greaterThan(0);
var voteKeyDilution = v8n().integer().greaterThan(0);
var voteLast = v8n().integer().greaterThan(0);
var voteKey = v8n().string();
var selectionKey = v8n().string();
var type = v8n().string().passesAnyOf(v8n().equal('pay'), v8n().equal('keyreg'), v8n().equal('acfg'), v8n().equal('axfer'), v8n().equal('afrz'));
var transaction = {
  genesisID: genesisID,
  lease: lease,
  fee: fee,
  note: note,
  group: group,
  reKeyTo: reKeyTo,
  firstRound: firstRound,
  lastRound: lastRound,
  genesisHash: genesisHash,
  amount: amount,
  closeRemainderTo: closeRemainderTo,
  voteFirst: voteFirst,
  voteKeyDilution: voteKeyDilution,
  voteLast: voteLast,
  voteKey: voteKey,
  selectionKey: selectionKey,
  type: type
};

var rules = _objectSpread2({}, core, {}, assets, {}, transaction);

/**
 * Test a string for valid Algorand address requirements
 * @category Core
 * @param {string}
 * @returns {boolean}
 */

function isAlgorandAddress(input) {
  return rules.algoAddress.test(input);
}
/**
 * Test for a valid Algorand transaction ID
 * @category Core
 * @param {string}
 * @returns {boolean}
 */

function isTransactionId(txId) {
  return rules.algoTxn.test(txId);
}
var core$1 = {
  isAlgorandAddress: isAlgorandAddress,
  isTransactionId: isTransactionId
};

/**
 * Test for a valid Algorand asset index
 * @category Core
 * @param {number}
 * @returns {boolean}
 */

function assetIndex$1(assetId) {
  return rules.assetIndex.test(assetId);
}
/**
 * Validate total issuance amount when creating an asset
 * @category Assets
 * @param {number}
 * @returns {boolean}
 */

function assetTotal$1(total) {
  return rules.assetTotal.test(total);
}
/**
 * Validate asset decimal places when creating an asset
 * @category Assets
 * @param {number}
 * @returns {boolean}
 */

function assetDecimals$1(decimals) {
  return rules.assetDecimals.test(decimals);
}
/**
 * Validate defaultFrozen has a boolean value when creating an asset
 * @category Assets
 * @param {boolean}
 * @returns {boolean}
 */

function assetDefaultFrozen$1(defaultFrozen) {
  return rules.assetDefaultFrozen.test(defaultFrozen);
}
/**
 * Validate for a metadata hash string when creating an asset
 * @category Assets
 * @param {string}
 * @returns {boolean}
 */

function assetMetadataHash$1(hash) {
  return rules.assetMetadataHash.test(hash);
}
/**
 * Validate asset name when creating an asset
 * @category Assets
 * @param {string}
 * @returns {boolean}
 */

function assetName$1(assetName) {
  return rules.assetName.test(assetName);
}
/**
 * Validate unit name when creating an asset
 * @category Assets
 * @param {string}
 * @returns {boolean}
 */

function assetUnitName$1(unitName) {
  return rules.assetUnitName.test(unitName);
}
/**
 * Validate asset url when creating an asset
 * @category Assets
 * @param {string}
 * @returns {boolean}
 */

function assetURL$1(url) {
  return rules.assetURL.test(url);
}
var assetFieldValidators = {
  assetIndex: assetIndex$1,
  assetTotal: assetTotal$1,
  assetDecimals: assetDecimals$1,
  assetDefaultFrozen: assetDefaultFrozen$1,
  assetName: assetName$1,
  assetUnitName: assetUnitName$1,
  assetURL: assetURL$1,
  assetMetadataHash: assetMetadataHash$1
};

/**
 * Test sender field for a valid Algorand address
 * @category All Transactions
 * @param {string}
 * @returns {boolean}
 */

function from(senderAddr) {
  return rules.algoAddress.test(senderAddr);
}
/**
 * Test for a valid transaction fee
 * @category All Transactions
 * @param {number}
 * @returns {boolean}
 */

function fee$1(txnFee) {
  return rules.fee.test(txnFee);
}
/**
 * Test for a valid first round
 * @category All Transactions
 * @param {number}
 * @returns {boolean}
 */

function firstRound$1(firstValid) {
  return rules.firstRound.test(firstValid);
}
/**
 * Test for a valid first round
 * @category All Transactions
 * @param {number}
 * @returns {boolean}
 */

function lastRound$1(lastValid) {
  return rules.lastRound.test(lastValid);
}
/**
 * Test for a valid note field
 * @category All Transactions
 * @param {string}
 * @returns {boolean}
 */

function note$1(note) {
  return rules.note.test(note);
}
/**
 * Test for a valid genesis id
 * @category All Transactions
 * @param {string}
 * @returns {boolean}
 */

function genesisID$1(genesisId) {
  return rules.genesisID.test(genesisId);
}
/**
 * Test for a valid genesis hash
 * @category All Transactions
 * @param {string}
 * @returns {boolean}
 */

function genesisHash$1(genesisHash) {
  return rules.genesisHash.test(genesisHash);
}
/**
 * Test for a valid group
 * @category All Transactions
 * @param {string}
 * @returns {boolean}
 */

function group$1(genesisHash) {
  return rules.group.test(genesisHash);
}
/**
 * Test for a valid transaction type
 * @category All Transactions
 * @param {string}
 * @returns {boolean}
 */

function type$1(type) {
  return rules.type.test(type);
}
/**
 * Test for a valid transaction receiver account
 * @category Payment Transactions
 * @param {string}
 * @returns {boolean}
 */

function to(receiverAddr) {
  return rules.algoAddress.test(receiverAddr);
}
/**
 * Test for a valid algo amount to be sent
 * @category Payment Transactions
 * @param {number}
 * @returns {boolean}
 */

function amount$1(txnAmount) {
  return rules.amount.test(txnAmount);
}
/**
 * Test for a valid algo amount to be sent
 * @category Payment Transactions
 * @param {number}
 * @returns {boolean}
 */

function closeRemainderTo$1(address) {
  return rules.closeRemainderTo.test(address);
}
var transactionFieldValidators = {
  from: from,
  fee: fee$1,
  firstRound: firstRound$1,
  lastRound: lastRound$1,
  note: note$1,
  genesisID: genesisID$1,
  genesisHash: genesisHash$1,
  group: group$1,
  type: type$1,
  to: to,
  amount: amount$1,
  closeRemainderTo: closeRemainderTo$1
};

var TXN_OPTIONAL_FIELDS = {
  genesisID: v8n().optional(rules.genesisID),
  fee: v8n().optional(rules.fee),
  note: v8n().optional(rules.note),
  lease: v8n().optional(rules.lease),
  group: v8n().optional(rules.group),
  reKeyTo: v8n().optional(rules.algoAddress)
}; // Fields required for any txn

var TXN_REQUIRED_FIELDS = {
  firstRound: rules.firstRound,
  lastRound: rules.lastRound,
  genesisHash: rules.genesisHash
}; // Standard checks for all transactions

function standardTxnValidation(txn) {
  var roundsValid = txn.lastRound > txn.firstRound;
  return roundsValid;
}
/**
 * Test for a valid payment transaction payload
 * @category Transactions
 * @param {object}
 * @returns {boolean}
 */


function payment(txn) {
  var PAY_TXN_SCHEMA = v8n().schema(_objectSpread2({
    to: v8n().optional(rules.algoAddress),
    amount: v8n().optional(rules.amount),
    from: rules.algoAddress,
    type: v8n().string().exact(TRANSACTION_TYPES.PAY)
  }, TXN_REQUIRED_FIELDS, {}, TXN_OPTIONAL_FIELDS));
  return PAY_TXN_SCHEMA.test(txn) && standardTxnValidation(txn);
}
/**
 * Test for a valid close account transaction payload
 * @category Transactions
 * @param {object}
 * @returns {boolean}
 */

function close(txn) {
  var CLOSE_TXN_SCHEMA = v8n().schema(_objectSpread2({
    closeRemainderTo: rules.algoAddress,
    from: rules.algoAddress,
    to: rules.algoAddress,
    type: v8n().string().exact(TRANSACTION_TYPES.PAY)
  }, TXN_REQUIRED_FIELDS, {}, TXN_OPTIONAL_FIELDS)); // No closing and sending from the same address

  var isNotSameAddress = txn.closeRemainderTo !== txn.from;
  return CLOSE_TXN_SCHEMA.test(txn) && standardTxnValidation(txn) && isNotSameAddress;
}
/**
 * Test for a valid online key registration transaction payload
 * @category Transactions
 * @param {object}
 * @returns {boolean}
 */

function registerKeyOnline(txn) {
  var isValid = v8n().schema(_objectSpread2({
    selectionKey: rules.selectionKey,
    from: rules.algoAddress,
    voteFirst: rules.voteFirst,
    voteKeyDilution: rules.voteKeyDilution,
    voteKey: rules.voteKey,
    voteLast: rules.voteLast,
    type: v8n().string().exact(TRANSACTION_TYPES.KEYREG)
  }, TXN_REQUIRED_FIELDS, {}, TXN_OPTIONAL_FIELDS)); // Vote first must be less than vote last

  var isNotSameAddress = txn.voteFirst < txn.voteLast;
  return isValid.test(txn) && standardTxnValidation(txn);
}
/**
 * Test for a valid offline key registration transaction payload
 * @category Transactions
 * @param {object}
 * @returns {boolean}
 */

function registerKeyOffline(txn) {
  var isValid = v8n().schema(_objectSpread2({
    from: rules.algoAddress,
    type: v8n().string().exact(TRANSACTION_TYPES.KEYREG)
  }, TXN_REQUIRED_FIELDS, {}, TXN_OPTIONAL_FIELDS));
  return isValid.test(txn) && standardTxnValidation(txn);
}
/**
 * Test for a valid asset creation transaction payload
 * @category Transactions
 * @param {object}
 * @returns {boolean}
 */

function assetCreate(txn) {
  var isValid = v8n().schema(_objectSpread2({
    assetMetadataHash: v8n().string(),
    assetName: rules.assetName,
    assetURL: rules.assetURL,
    assetClawback: rules.algoAddress,
    assetDecimals: rules.assetDecimals,
    assetFreeze: rules.algoAddress,
    assetManager: rules.algoAddress,
    assetReserve: rules.algoAddress,
    assetTotal: rules.assetTotal,
    assetUnitName: rules.assetUnitName,
    from: rules.algoAddress,
    type: v8n().string().exact(TRANSACTION_TYPES.ACFG)
  }, TXN_REQUIRED_FIELDS, {}, TXN_OPTIONAL_FIELDS));
  return isValid.test(txn) && standardTxnValidation(txn);
}
/**
 * Test for a valid asset configuration transaction payload
 * @category Transactions
 * @param {object}
 * @returns {boolean}
 */

function assetConfigure(txn) {
  var isValid = v8n().schema(_objectSpread2({
    assetClawback: rules.algoAddress,
    assetFreeze: rules.algoAddress,
    assetManager: rules.algoAddress,
    assetReserve: rules.algoAddress,
    assetIndex: rules.assetIndex,
    from: rules.algoAddress,
    type: v8n().string().exact(TRANSACTION_TYPES.ACFG)
  }, TXN_REQUIRED_FIELDS, {}, TXN_OPTIONAL_FIELDS));
  return isValid.test(txn) && standardTxnValidation(txn);
}
/**
 * Test for a valid asset destroy transaction payload
 * @category Transactions
 * @param {object}
 * @returns {boolean}
 */

function assetDestroy(txn) {
  var isValid = v8n().schema(_objectSpread2({
    assetIndex: rules.assetIndex,
    from: rules.algoAddress,
    type: v8n().string().exact(TRANSACTION_TYPES.ACFG)
  }, TXN_REQUIRED_FIELDS, {}, TXN_OPTIONAL_FIELDS));
  return isValid.test(txn) && standardTxnValidation(txn);
}
/**
 * Test for a valid asset opt-in transaction payload
 * @category Transactions
 * @param {object}
 * @returns {boolean}
 */

function assetOptIn(txn) {
  var isValid = v8n().schema(_objectSpread2({
    to: rules.algoAddress,
    from: rules.algoAddress,
    type: v8n().string().exact(TRANSACTION_TYPES.AXFER),
    assetIndex: rules.assetIndex
  }, TXN_REQUIRED_FIELDS, {}, TXN_OPTIONAL_FIELDS));
  return isValid.test(txn) && standardTxnValidation(txn);
}
/**
 * Test for a valid asset transfer transaction payload
 * @category Transactions
 * @param {object}
 * @returns {boolean}
 */

function assetTransfer(txn) {
  var isValid = v8n().schema(_objectSpread2({
    amount: rules.amount,
    to: rules.algoAddress,
    from: rules.algoAddress,
    assetIndex: rules.assetIndex,
    type: v8n().string().exact(TRANSACTION_TYPES.AXFER)
  }, TXN_REQUIRED_FIELDS, {}, TXN_OPTIONAL_FIELDS));
  return isValid.test(txn) && standardTxnValidation(txn);
}
/**
 * Test for a valid revoke asset transaction payload
 * @category Transactions
 * @param {object}
 * @returns {boolean}
 */

function assetRevoke(txn) {
  var isValid = v8n().schema(_objectSpread2({
    amount: rules.amount,
    to: rules.algoAddress,
    assetRevocationTarget: rules.algoAddress,
    from: rules.algoAddress,
    assetIndex: rules.assetIndex,
    type: v8n().string().exact(TRANSACTION_TYPES.AXFER)
  }, TXN_REQUIRED_FIELDS, {}, TXN_OPTIONAL_FIELDS));
  return isValid.test(txn) && standardTxnValidation(txn);
}
/**
 * Test for a valid freeze asset transaction payload
 * @category Transactions
 * @param {object}
 * @returns {boolean}
 */

function assetFreeze(txn) {
  var isValid = v8n().schema(_objectSpread2({
    freezeState: rules.freezeState,
    freezeAccount: rules.algoAddress,
    assetIndex: rules.assetIndex,
    from: rules.algoAddress,
    type: v8n().string().exact(TRANSACTION_TYPES.AFRZ)
  }, TXN_REQUIRED_FIELDS, {}, TXN_OPTIONAL_FIELDS));
  return isValid.test(txn) && standardTxnValidation(txn);
}
var transactions = {
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

var index = {
  core: core$1,
  assetFieldValidators: assetFieldValidators,
  transactionFieldValidators: transactionFieldValidators,
  transactions: transactions
};

module.exports = index;
