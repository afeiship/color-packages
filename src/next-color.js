(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var Color = require('color');

  function clamp(val) {
    return Math.min(1, Math.max(0, val));
  }

  // function lighten(color, amount) {
  //   var hsl = this.hsl();

  //   hsl.l += amount.value / 100;
  //   hsl.l = clamp(hsl.l);
  //   return hsla(color, hsl);
  // }

  var NxColor = nx.declare('nx.Color', {
    statics: {
      rgba: function(inValue, inAlpha) {
        return Color(inValue).alpha(inAlpha);
      },
      lighten: function(inValue, inAmount) {
        var color = Color(inValue);
        var colors = color.hsl().color.slice();
        colors[2] += inAmount * 100;
        return Color.hsl(colors);
      },
      darken: function(inValue, inAmount) {
        var color = Color(inValue);
        var colors = color.hsl().color.slice();
        colors[2] -= inAmount * 100;
        return Color.hsl(colors);
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxColor;
  }
})();
