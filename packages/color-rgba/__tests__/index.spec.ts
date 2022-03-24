import rgba from '../src';

describe('api.basic', () => {
  test('hex / red string should be translate to rgba string like sass functions', () => {
    expect(rgba('red', 0.2)).toBe('rgba(255, 0, 0, 0.2)');
    expect(rgba('#fff', 0.1)).toBe('rgba(255, 255, 255, 0.1)');
  });
});
