"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.byteLength = void 0;

var _util = require("util");

// Custom validator for byteLength
var byteLength = function byteLength(validLength) {
  return function (val) {
    return new _util.TextEncoder().encode(val).length === validLength;
  };
};

exports.byteLength = byteLength;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jdXN0b20udHMiXSwibmFtZXMiOlsiYnl0ZUxlbmd0aCIsInZhbGlkTGVuZ3RoIiwidmFsIiwiVGV4dEVuY29kZXIiLCJlbmNvZGUiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQTtBQUNPLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLFdBQUQ7QUFBQSxTQUF5QixVQUFDQyxHQUFEO0FBQUEsV0FDakQsSUFBSUMsaUJBQUosR0FBa0JDLE1BQWxCLENBQXlCRixHQUF6QixFQUE4QkcsTUFBOUIsS0FBeUNKLFdBRFE7QUFBQSxHQUF6QjtBQUFBLENBQW5CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGV4dEVuY29kZXIgfSBmcm9tICd1dGlsJztcblxuLy8gQ3VzdG9tIHZhbGlkYXRvciBmb3IgYnl0ZUxlbmd0aFxuZXhwb3J0IGNvbnN0IGJ5dGVMZW5ndGggPSAodmFsaWRMZW5ndGg6IG51bWJlcikgPT4gKHZhbDogc3RyaW5nKSA9PlxuICBuZXcgVGV4dEVuY29kZXIoKS5lbmNvZGUodmFsKS5sZW5ndGggPT09IHZhbGlkTGVuZ3RoO1xuIl19