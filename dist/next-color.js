(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var Color = require('color');

  var NxColor = nx.declare('nx.Color', {
    statics: {
      rgba: function(inValue, inAlpha) {
        return Color(inValue).alpha(inAlpha);
      },
      lighten: function(inValue, inAmount) {
        var colors = Color(inValue).negate().color;
        return Color(
          colors.map(function(color) {
            return color * inAmount;
          })
        );
      },
      darken: function(inValue, inAmount) {
        var colors = Color(inValue).color;
        return Color(
          colors.map(function(color) {
            return color * (1 - inAmount);
          })
        );
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxColor;
  }
})();
