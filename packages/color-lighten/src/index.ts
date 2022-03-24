import Color from 'color';

export default (inValue, inAmount) => {
  var color = Color(inValue);
  var colors = color.hsl().color.slice();
  colors[2] += inAmount * 100;
  return Color.hsl(colors).hex();
};
