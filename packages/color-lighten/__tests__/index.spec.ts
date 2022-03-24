import fn from '../src';

describe('api.basic', () => {
  test('lighten for sass', () => {
    expect(fn('#000', 0.1)).toBe('#1A1A1A');
    expect(fn('#F06D06', 0.2)).toBe('#FBA561');
  });
});
