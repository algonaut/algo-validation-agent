import assets from '../src/assets';

it('Validates assetTotalIssuance', () => {
  expect(assets.assetTotalIssuance(0)).toBe(false);
  expect(assets.assetTotalIssuance('100')).toBe(false);
  expect(assets.assetTotalIssuance(1)).toBe(true);
  expect(assets.assetTotalIssuance(Number.MAX_SAFE_INTEGER)).toBe(true);
  expect(assets.assetTotalIssuance(9007199254740992)).toBe(false);
  expect(assets.assetTotalIssuance(null)).toBe(false);
});

it('Validates assetDecimalPlaces', () => {
  expect(assets.assetDecimalPlaces(0)).toBe(true);
  expect(assets.assetDecimalPlaces(19)).toBe(true);
  expect(assets.assetDecimalPlaces(20)).toBe(false);
  expect(assets.assetDecimalPlaces('0')).toBe(false);
  expect(assets.assetDecimalPlaces(null)).toBe(false);
});

it('Validates defaultFrozen', () => {
  expect(assets.defaultFrozen(true)).toBe(true);
  expect(assets.defaultFrozen(false)).toBe(true);
  expect(assets.defaultFrozen('false')).toBe(false);
  expect(assets.defaultFrozen('true')).toBe(false);
  expect(assets.defaultFrozen(null)).toBe(false);
});

it('Validates assetMetadataHash', () => {});

it('Validates assetName', () => {
  expect(assets.assetName('Foo')).toBe(true);
  expect(assets.assetName('')).toBe(false);
  expect(assets.assetName('a'.repeat(37))).toBe(false);
});

it('Validates unitName', () => {
  expect(assets.unitName('Unit')).toBe(true);
  expect(assets.unitName('')).toBe(false);
  expect(assets.unitName('a'.repeat(9))).toBe(false);
});

it('Validates assetUrl', () => {
  // expect(assets.unitName('Unit')).toBe(true);
});

it('Validates assetIndex', () => {});
