import assets from '../src/assets';

it('Validates assetName', () => {
  expect(assets.assetName('')).toBe(false);
  expect(assets.assetName('a'.repeat(37))).toBe(false);
});

it('Validates unit name', () => {
  expect(assets.unitName('')).toBe(false);
  expect(assets.unitName('a'.repeat(9))).toBe(false);
});
