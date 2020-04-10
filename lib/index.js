"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Validator = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Validator class
 */
var Validator = /*#__PURE__*/function () {
  function Validator() {
    _classCallCheck(this, Validator);

    _defineProperty(this, "value", 1);

    _defineProperty(this, "props", {
      x: 0,
      y: 0
    });
  }

  _createClass(Validator, [{
    key: "getValue",
    value: function getValue() {
      return this.value;
    }
  }, {
    key: "setValue",
    value: function setValue(value) {
      this.value = value;
    }
  }]);

  return Validator;
}();

exports.Validator = Validator;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJWYWxpZGF0b3IiLCJ4IiwieSIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFLQTs7O0lBR2FBLFM7Ozs7bUNBQ0ssQzs7bUNBQ087QUFBRUMsTUFBQUEsQ0FBQyxFQUFFLENBQUw7QUFBUUMsTUFBQUEsQ0FBQyxFQUFFO0FBQVgsSzs7Ozs7K0JBRUo7QUFDakIsYUFBTyxLQUFLQyxLQUFaO0FBQ0Q7Ozs2QkFFUUEsSyxFQUFxQjtBQUM1QixXQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbn1cblxuLyoqXG4gKiBWYWxpZGF0b3IgY2xhc3NcbiAqL1xuZXhwb3J0IGNsYXNzIFZhbGlkYXRvciB7XG4gIHByaXZhdGUgdmFsdWUgPSAxO1xuICBwcml2YXRlIHByb3BzOiBQcm9wcyA9IHsgeDogMCwgeTogMCB9O1xuXG4gIGdldFZhbHVlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gIH1cblxuICBzZXRWYWx1ZSh2YWx1ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICB9XG59XG4iXX0=