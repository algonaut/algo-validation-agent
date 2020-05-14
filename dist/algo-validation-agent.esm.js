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

var a="undefined"==typeof global?"undefined"===typeof self?{}:self:global,m=String.fromCharCode,n={}.toString,q=a.SharedArrayBuffer,t=q?n.call(q):"",u=a.Uint8Array,w=u?n.call(ArrayBuffer.prototype):"",x=a.Buffer;try{!x&&a.require&&(x=a.require("Buffer"));var y=x.prototype,z=n.call(y);}catch(c){}var A=!!u&&!x,B=/[\x80-\uD7ff\uDC00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]?/g,C=new Uint16Array(32),E=!x||!!u&&u.prototype.isPrototypeOf(y),G=F.prototype;function I(c){var b=c&&c.buffer||c,e=n.call(b);if(e!==w&&e!==z&&e!==t&&"[object ArrayBuffer]"!==e&&void 0!==c)throw TypeError("Failed to execute 'decode' on 'TextDecoder': The provided value is not of type '(ArrayBuffer or ArrayBufferView)'");c=E?new u(b):b||[];e=b="";for(var d=0,r=c.length|0,D=r-32|0,v,f,g=0,p=0,k,h=0,l=-1;d<r;){for(v=d<=D?32:r-d|0;h<v;d=d+1|0,h=h+1|0){f=c[d]&255;switch(f>>4){case 15:k=c[d=d+1|0]&255;if(2!==k>>6||247<f){d=d-1|0;break}g=(f&7)<<6|k&63;p=5;f=256;case 14:k=c[d=d+1|0]&
255,g<<=6,g|=(f&15)<<6|k&63,p=2===k>>6?p+4|0:24,f=f+256&768;case 13:case 12:k=c[d=d+1|0]&255,g<<=6,g|=(f&31)<<6|k&63,p=p+7|0,d<r&&2===k>>6&&g>>p&&1114112>g?(f=g,g=g-65536|0,0<=g&&(l=(g>>10)+55296|0,f=(g&1023)+56320|0,31>h?(C[h]=l,h=h+1|0,l=-1):(k=l,l=f,f=k))):(f>>=8,d=d-f-1|0,f=65533),g=p=0,v=d<=D?32:r-d|0;default:C[h]=f;continue;case 11:case 10:case 9:case 8:}C[h]=65533;}e+=m(C[0],C[1],C[2],C[3],C[4],C[5],C[6],C[7],C[8],C[9],C[10],C[11],C[12],C[13],C[14],C[15],C[16],C[17],C[18],C[19],C[20],C[21],
C[22],C[23],C[24],C[25],C[26],C[27],C[28],C[29],C[30],C[31]);32>h&&(e=e.slice(0,h-32|0));if(d<r){if(C[0]=l,h=~l>>>31,l=-1,e.length<b.length)continue}else -1!==l&&(e+=m(l));b+=e;e="";}return b}function J(c){var b=c.charCodeAt(0)|0;if(55296<=b&&56319>=b)if(c=c.charCodeAt(1)|0,56320<=c&&57343>=c){if(b=(b<<10)+c-56613888|0,65535<b)return m(240|b>>18,128|b>>12&63,128|b>>6&63,128|b&63)}else b=65533;return 2047>=b?m(192|b>>6,128|b&63):m(224|b>>12,128|b>>6&63,128|b&63)}function F(){}
function K(c){c=void 0===c?"":(""+c).replace(B,J);for(var b=c.length|0,e=A?new u(b):x.allocUnsafe?x.allocUnsafe(b):new x(b),d=0;d<b;d=d+1|0)e[d]=c.charCodeAt(d)|0;return e}G.encode=K;function L(c,b){var e=c[b];return function(){return e.apply(c,arguments)}}var M=a.TextDecoder,N=a.TextEncoder;var TextEncoder=N||F,decode=M?L(new M,"decode"):I,encode=N?L(new N,"encode"):K;

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
var assetIndex = v8n().number().positive().lessThanOrEqual(Number.MAX_SAFE_INTEGER);
var assetCreateParams = v8n().schema({
  am: v8n().string(),
  an: v8n().string(),
  au: v8n().string(),
  c: algoAddress,
  dc: v8n().integer(),
  f: algoAddress,
  m: algoAddress,
  r: algoAddress,
  t: v8n().integer(),
  un: v8n().string()
});
var assetConfigureParams = v8n().schema({
  c: algoAddress,
  f: algoAddress,
  m: algoAddress,
  r: algoAddress
});
/**
 * Test a string for valid Algorand address requirements
 * @category Core
 * @param {string}
 * @returns {boolean}
 */

function isAlgorandAddress(input) {
  return algoAddress.test(input);
}
/**
 * Test for a valid Algorand transaction ID
 * @category Core
 * @param {string}
 * @returns {boolean}
 */

function isTransactionId(txId) {
  return algoTxn.test(txId);
}
/**
 * Test for a valid Algorand asset index
 * @category Core
 * @param {number}
 * @returns {boolean}
 */

function isAssetIndex(assetId) {
  return assetIndex.test(assetId);
}
/**
 * Test for basic valid Algorand transaction payload shape
 * @category Core
 * @param {object}
 * @returns {boolean}
 */

function isTransactionPayload(txnPayload) {
  var isTxn = v8n().schema({
    txn: v8n().object()
  });
  return isTxn.test(txnPayload);
}
var core = {
  assetIndex: assetIndex,
  algoAddress: algoAddress,
  algoTxn: algoTxn,
  assetCreateParams: assetCreateParams,
  assetConfigureParams: assetConfigureParams,
  isAlgorandAddress: isAlgorandAddress,
  isTransactionId: isTransactionId,
  isAssetIndex: isAssetIndex,
  isTransactionPayload: isTransactionPayload
};

// v8n should use context instead of a global variable
// Details: https://github.com/imbrn/v8n/issues/28
// @ts-ignore

v8n.extend({
  maxByteLength: maxByteLength
});
/**
 * Validate total issuance amount when creating an asset
 * @category Assets
 * @param {number}
 * @returns {boolean}
 */

function assetTotalIssuance(total) {
  return v8n().integer().between(1, Number.MAX_SAFE_INTEGER).test(total);
}
/**
 * Validate asset decimal places when creating an asset
 * @category Assets
 * @param {number}
 * @returns {boolean}
 */

function assetDecimalPlaces(decimals) {
  return v8n().integer().between(0, 19).test(decimals);
}
/**
 * Validate defaultFrozen has a boolean value when creating an asset
 * @category Assets
 * @param {boolean}
 * @returns {boolean}
 */

function defaultFrozen(defaultFrozen) {
  return v8n()["boolean"]().test(defaultFrozen);
}
/**
 * Validate for a metadata hash string when creating an asset
 * @category Assets
 * @param {string}
 * @returns {boolean}
 */

function assetMetadataHash(hash) {
  return v8n().string().maxByteLength(32).test(hash);
}
/**
 * Validate asset name when creating an asset
 * @category Assets
 * @param {string}
 * @returns {boolean}
 */

function assetName(assetName) {
  return v8n().string().maxByteLength(32).test(assetName);
}
/**
 * Validate unit name when creating an asset
 * @category Assets
 * @param {string}
 * @returns {boolean}
 */

function unitName(unitName) {
  return v8n().string().maxByteLength(8).test(unitName);
}
/**
 * Validate asset url when creating an asset
 * @category Assets
 * @param {string}
 * @returns {boolean}
 */

function assetUrl(url) {
  return v8n().string().maxByteLength(32).test(url);
}
var assets = {
  assetTotalIssuance: assetTotalIssuance,
  assetDecimalPlaces: assetDecimalPlaces,
  defaultFrozen: defaultFrozen,
  assetName: assetName,
  unitName: unitName,
  assetUrl: assetUrl,
  assetMetadataHash: assetMetadataHash
};

// v8n should use context instead of a global variable
// Details: https://github.com/imbrn/v8n/issues/28
// @ts-ignore

v8n.extend({
  exactByteLength: exactByteLength,
  maxByteLength: maxByteLength
});
/**
 * Test sender field for a valid Algorand address
 * @category All Transactions
 * @param {string}
 * @returns {boolean}
 */

function transactionSender(senderAddr) {
  return algoAddress.test(senderAddr);
}
/**
 * Test for a valid transaction fee
 * @category All Transactions
 * @param {number}
 * @returns {boolean}
 */

function transactionFee(txnFee) {
  return v8n().number().positive().greaterThanOrEqual(1000).lessThanOrEqual(Number.MAX_SAFE_INTEGER).test(txnFee);
}
/**
 * Test for a valid first round
 * @category All Transactions
 * @param {number}
 * @returns {boolean}
 */

function firstValidRound(firstValid) {
  return v8n().number().positive().lessThanOrEqual(Number.MAX_SAFE_INTEGER).test(firstValid);
}
/**
 * Test for a valid first round
 * @category All Transactions
 * @param {number}
 * @returns {boolean}
 */

function lastValidRound(lastValid) {
  return v8n().number().positive().lessThanOrEqual(Number.MAX_SAFE_INTEGER).test(lastValid);
}
/**
 * Test for a valid note field
 * @category All Transactions
 * @param {string}
 * @returns {boolean}
 */

function transactionNote(note) {
  return v8n().string().maxByteLength(1000).test(note);
}
/**
 * Test for a valid genesis id
 * @category All Transactions
 * @param {string}
 * @returns {boolean}
 */

function transactionGenesisId(genesisId) {
  return v8n().string().test(genesisId);
}
/**
 * Test for a valid genesis hash
 * @category All Transactions
 * @param {string}
 * @returns {boolean}
 */

function transactionGenesisHash(genesisHash) {
  return v8n().string().test(genesisHash);
}
/**
 * Test for a valid group
 * @category All Transactions
 * @param {string}
 * @returns {boolean}
 */

function transactionGroup(genesisHash) {
  return v8n().string().test(genesisHash);
}
/**
 * Test for a valid transaction type
 * @category All Transactions
 * @param {string}
 * @returns {boolean}
 */

function transactionType(type) {
  return v8n().string().test(type);
}
/**
 * Test for a valid transaction receiver account
 * @category Payment Transactions
 * @param {string}
 * @returns {boolean}
 */

function transactionReceiver(receiverAddr) {
  return algoAddress.test(receiverAddr);
}
/**
 * Test for a valid algo amount to be sent
 * @category Payment Transactions
 * @param {number}
 * @returns {boolean}
 */

function transactionAmount(txnAmount) {
  return v8n().number().positive().lessThanOrEqual(Number.MAX_SAFE_INTEGER).test(txnAmount);
}
/**
 * Test for a valid algo amount to be sent
 * @category Payment Transactions
 * @param {number}
 * @returns {boolean}
 */

function closeRemainderTo(address) {
  return algoAddress.test(address);
}
var transactionFields = {
  transactionSender: transactionSender,
  transactionFee: transactionFee,
  firstValidRound: firstValidRound,
  lastValidRound: lastValidRound,
  transactionNote: transactionNote,
  transactionGenesisId: transactionGenesisId,
  transactionGenesisHash: transactionGenesisHash,
  transactionGroup: transactionGroup,
  transactionType: transactionType,
  transactionReceiver: transactionReceiver,
  transactionAmount: transactionAmount,
  closeRemainderTo: closeRemainderTo
};

/**
 * Test for a valid payment transaction payload
 * @category Transactions
 * @param {object}
 * @returns {boolean}
 */

function payment(txn) {
  if (!isTransactionPayload(txn)) {
    return false;
  }

  var isValid = v8n().schema({
    amt: v8n().integer(),
    fee: v8n().integer(),
    fv: v8n().integer(),
    gen: v8n().string(),
    gh: v8n().string(),
    lv: v8n().integer(),
    note: v8n().string(),
    rcv: algoAddress,
    snd: algoAddress,
    type: v8n().string().exact(TRANSACTION_TYPES.PAY)
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
  if (!isTransactionPayload(txn)) {
    return false;
  }

  var isValid = v8n().schema({
    close: algoAddress,
    fee: v8n().integer(),
    fv: v8n().integer(),
    gen: v8n().string(),
    gh: v8n().string(),
    lv: v8n().integer(),
    rcv: algoAddress,
    snd: algoAddress,
    type: v8n().string().exact(TRANSACTION_TYPES.PAY)
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
  if (!isTransactionPayload(txn)) {
    return false;
  }

  var isValid = v8n().schema({
    fee: v8n().integer(),
    fv: v8n().integer(),
    gh: v8n().string(),
    lv: v8n().integer(),
    selkey: v8n().string(),
    snd: algoAddress,
    votefst: v8n().integer(),
    votekd: v8n().integer(),
    votekey: v8n().string(),
    votelst: v8n().integer(),
    type: v8n().string().exact(TRANSACTION_TYPES.KEYREG)
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
  if (!isTransactionPayload(txn)) {
    return false;
  }

  var isValid = v8n().schema({
    fee: v8n().integer(),
    fv: v8n().integer(),
    gh: v8n().string(),
    lv: v8n().integer(),
    snd: algoAddress,
    type: v8n().string().exact(TRANSACTION_TYPES.KEYREG)
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
  if (!isTransactionPayload(txn)) {
    return false;
  }

  var isValid = v8n().schema({
    apar: assetCreateParams,
    fee: v8n().integer(),
    fv: v8n().integer(),
    gh: v8n().string(),
    lv: v8n().integer(),
    snd: algoAddress,
    type: v8n().string().exact(TRANSACTION_TYPES.ACFG)
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
  if (!isTransactionPayload(txn)) {
    return false;
  }

  var isValid = v8n().schema({
    apar: assetConfigureParams,
    caid: assetIndex,
    fee: v8n().integer(),
    fv: v8n().integer(),
    gh: v8n().string(),
    lv: v8n().integer(),
    snd: algoAddress,
    type: v8n().string().exact(TRANSACTION_TYPES.ACFG)
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
  if (!isTransactionPayload(txn)) {
    return false;
  }

  var isValid = v8n().schema({
    caid: assetIndex,
    fee: v8n().integer(),
    fv: v8n().integer(),
    gh: v8n().string(),
    lv: v8n().integer(),
    snd: algoAddress,
    type: v8n().string().exact(TRANSACTION_TYPES.ACFG)
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
  if (!isTransactionPayload(txn)) {
    return false;
  }

  var isValid = v8n().schema({
    arcv: algoAddress,
    fee: v8n().integer(),
    fv: v8n().integer(),
    gh: v8n().string(),
    lv: v8n().integer(),
    snd: algoAddress,
    type: v8n().string().exact(TRANSACTION_TYPES.AXFER),
    xaid: assetIndex
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
  if (!isTransactionPayload(txn)) {
    return false;
  }

  var isValid = v8n().schema({
    aamt: v8n().integer(),
    arcv: algoAddress,
    fee: v8n().integer(),
    fv: v8n().integer(),
    gh: v8n().string(),
    lv: v8n().integer(),
    snd: algoAddress,
    type: v8n().string().exact(TRANSACTION_TYPES.AXFER),
    xaid: assetIndex
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
  if (!isTransactionPayload(txn)) {
    return false;
  }

  var isValid = v8n().schema({
    aamt: v8n().integer(),
    arcv: algoAddress,
    asnd: algoAddress,
    fee: v8n().integer(),
    fv: v8n().integer(),
    gh: v8n().string(),
    lv: v8n().integer(),
    snd: algoAddress,
    type: v8n().string().exact(TRANSACTION_TYPES.AXFER),
    xaid: assetIndex
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
  if (!isTransactionPayload(txn)) {
    return false;
  }

  var isValid = v8n().schema({
    afrz: v8n()["boolean"](),
    fadd: algoAddress,
    faid: assetIndex,
    fee: v8n().integer(),
    fv: v8n().integer(),
    gh: v8n().string(),
    lv: v8n().integer(),
    snd: algoAddress,
    type: v8n().string().exact(TRANSACTION_TYPES.AFRZ)
  });
  return isValid.test(txn.txn);
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
  core: core,
  assets: assets,
  transactionFields: transactionFields,
  transactions: transactions
};

export default index;
