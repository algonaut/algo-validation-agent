'use strict';

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
    // Algorand strips off padding and
    var b32_regex = new RegExp(/^[A-Z2-7]*$/);
    return b32_regex.test(val);
  };
};

var ALGORAND_ADDRESS_LENGTH = 58;

// v8n should use context instead of a global variable
// Details: https://github.com/imbrn/v8n/issues/28
// @ts-ignore

v8n.extend({
  exactByteLength: exactByteLength,
  base32CharsOnly: base32CharsOnly
});
/**
 * Test for a valid Algorand address
 * @category Core
 * @param {string}
 * @returns {boolean}
 */

function algoAddress(algoAddress) {
  return v8n().string().exactByteLength(ALGORAND_ADDRESS_LENGTH).length(ALGORAND_ADDRESS_LENGTH).base32CharsOnly().test(algoAddress);
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

var core = {
  algoAddress: algoAddress
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
/**
 * Validate asset index value
 * @category Assets
 * @param {number}
 * @returns {boolean}
 */

function assetIndex(assetIndex) {
  return v8n().number().positive().lessThanOrEqual(Number.MAX_SAFE_INTEGER).test(assetIndex);
}
var assets = {
  assetTotalIssuance: assetTotalIssuance,
  assetDecimalPlaces: assetDecimalPlaces,
  defaultFrozen: defaultFrozen,
  assetIndex: assetIndex,
  assetName: assetName,
  unitName: unitName,
  assetUrl: assetUrl,
  assetMetadataHash: assetMetadataHash
};

var index = {
  core: core,
  assets: assets
};

module.exports = index;
