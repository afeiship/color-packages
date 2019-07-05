(function() {
  var nx = require('next-js-core2');

  var NxColor = require('../src/next-color');

  describe('NxColor.methods', function() {
    test('methods: rgba', function() {
      expect(NxColor.rgba('#f00', 0.5).string()).toBe('rgba(255, 0, 0, 0.5)');
      expect(NxColor.rgba('#000000', 0.1).string()).toBe('rgba(0, 0, 0, 0.1)');
      expect(NxColor.rgba([255, 255, 255], 0.1).string()).toBe('rgba(255, 255, 255, 0.1)');
    });

    test('methods: lighten/darken', function() {
      expect(NxColor.lighten('#000', 0.1).hex()).toBe('#1A1A1A');
      expect(NxColor.lighten('#F06D06', 0.2).hex()).toBe('#FBA561');
      expect(NxColor.darken('#F06D06', 0.1).hex()).toBe('#BE5605');
      // console.log(NxColor.lighten('#F06D06', 0.2).hex());
    });

    test('methods: hsl/hsla', function() {
      expect(NxColor.hsl(200, 0.2, 0.2).hex()).toBe('#010101');
      expect(NxColor.hsla(200, 0.4, 0.8, 0.1).hex()).toBe('#020202');
    });

    test('methods: hue/saturation/lightness', function() {
      expect(NxColor.hue('#f00')).toBe(0);
      expect(NxColor.saturation('#f00')).toBe(100);
      expect(NxColor.lightness('#f00')).toBe(50);
    });
  });
})();
