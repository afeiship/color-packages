import Color from 'color';

export default (inValue, inAlpha) => {
  return Color(inValue).alpha(inAlpha).toString();
};
