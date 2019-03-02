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
      expect(NxColor.darken('#fff', 0.1).hex()).toBe('#E6E6E6');
    });
  });
})();
