import assets from '../src/assetFieldValidators';

it('Validates assetIndex', () => {
  expect(assets.assetIndex(1)).toBe(true);
  expect(assets.assetIndex(Number.MAX_SAFE_INTEGER)).toBe(true);
  expect(assets.assetIndex(Number.MAX_SAFE_INTEGER + 1)).toBe(false);
  expect(assets.assetIndex(-1)).toBe(false);
  expect(assets.assetIndex('1')).toBe(false);
});

it('Validates asset total issuance', () => {
  expect(assets.assetTotal(0)).toBe(false);
  expect(assets.assetTotal('100')).toBe(false);
  expect(assets.assetTotal(1)).toBe(true);
  expect(assets.assetTotal(-1)).toBe(false);
  expect(assets.assetTotal(Number.MAX_SAFE_INTEGER)).toBe(true);
  expect(assets.assetTotal(Number.MAX_SAFE_INTEGER + 1)).toBe(false);
  expect(assets.assetTotal(null)).toBe(false);
});

it('Validates assetDecimals', () => {
  expect(assets.assetDecimals(0)).toBe(true);
  expect(assets.assetDecimals(19)).toBe(true);
  expect(assets.assetDecimals(-1)).toBe(false);
  expect(assets.assetDecimals(20)).toBe(false);
  expect(assets.assetDecimals('0')).toBe(false);
  expect(assets.assetDecimals(null)).toBe(false);
});

it('Validates assetDefaultFrozen', () => {
  expect(assets.assetDefaultFrozen(true)).toBe(true);
  expect(assets.assetDefaultFrozen(false)).toBe(true);
  expect(assets.assetDefaultFrozen('false')).toBe(false);
  expect(assets.assetDefaultFrozen('true')).toBe(false);
  expect(assets.assetDefaultFrozen(null)).toBe(false);
});

it('Validates assetMetadataHash', () => {
  expect(assets.assetMetadataHash({})).toBe(false);
  expect(assets.assetMetadataHash('🔥'.repeat(8))).toBe(true);
});

it('Validates assetName', () => {
  expect(assets.assetName('Asset')).toBe(true);
  expect(assets.assetName('🔥'.repeat(8))).toBe(true);
  expect(assets.assetName('🔥'.repeat(15))).toBe(false);
  expect(assets.assetName('a'.repeat(33))).toBe(false);
});

it('Validates assetUnitName', () => {
  expect(assets.assetUnitName('Unit')).toBe(true);
  expect(assets.assetUnitName('u'.repeat(8))).toBe(true);
  expect(assets.assetUnitName('🔥'.repeat(2))).toBe(true);
  expect(assets.assetUnitName('🔥'.repeat(3))).toBe(false);
  expect(assets.assetUnitName('a'.repeat(9))).toBe(false);
});

it('Validates assetUrl', () => {
  expect(assets.assetURL({})).toBe(false);
  expect(assets.assetURL('🔥'.repeat(15))).toBe(false);
});
