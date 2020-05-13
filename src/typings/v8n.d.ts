// Type definitions for v8n 1.0
// Project: https://github.com/imbrn/v8n#readme
// Definitions by: Sebastian Barfurth <https://github.com/sebastianbarfurth>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'v8n' {
  function v8n(): v8n.Validation;

  namespace v8n {
    // function extend(newRules: { [key: string]: () => boolean }): void;
    interface passesAnyOf {}
    interface Validation {
      chain: Rule[];
      invert?: boolean;
      extend(newRules: { [key: string]: () => boolean }): void;
      test(value: any): boolean;
      check(value: any): never;
      pattern(pattern: RegExp): Validation;
      equal(expected: any): Validation;
      exact(expected: any): Validation;
      string(): Validation;
      number(): Validation;
      boolean(): Validation;
      undefined(): Validation;
      null(): Validation;
      array(): Validation;
      lowercase(): Validation;
      vowel(): Validation;
      consonant(): Validation;
      first(item: any): Validation;
      last(item: any): Validation;
      empty(): Validation;
      length(min: number, max?: number): Validation;
      minLength(min: number): Validation;
      maxLength(max: number): Validation;
      negative(): Validation;
      positive(): Validation;
      between(min: number, max: number): Validation;
      range(min: number, max: number): Validation;
      lessThan(bound: number): Validation;
      lessThanOrEqual(bound: number): Validation;
      greaterThan(bound: number): Validation;
      greaterThanOrEqual(bound: number): Validation;
      even(): Validation;
      odd(): Validation;
      includes(expected: any): Validation;
      integer(): Validation;
      object(): Validation;
      schema(expected: object): Validation;
      passesAnyOf(...args: Validation[]): Validation;

      // Custom rules
      minByteLength(min: number): Validation;
      maxByteLength(max: number): Validation;
      exactByteLength(expected: number): Validation;
      base32CharsOnly(): Validation;
      isTransactionPayload(expected: object): Validation;
    }
    class Rule {
      constructor(
        name: string,
        fn: () => boolean,
        args?: any,
        invert?: boolean
      );
      name: string;
      fn: () => boolean;
      args?: any;
      invert?: boolean;
    }
  }
  export = v8n;
}
