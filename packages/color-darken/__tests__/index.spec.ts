import fn from '../src';

describe('api.basic', () => {
  test('Darken for sass', () => {
    expect(fn('#F06D06', 0.1)).toBe('#BE5605');
  });
});
