# next-color
> Color wrapper for next

## install:
```bash
npm install -S afeiship/next-color --registry=https://registry.npm.taobao.org
```

## apis:
| api     | params                | description  |
| ------- | --------------------- | ------------ |
| rgba    | (inColor, inAlpha)    | sass.rgba    |
| lighten | (inColor, inAmount)   | sass.lighten |
| darken  | (inColor, inAmount)   | sass.darken  |
| hsl     | (inH,inS,inL)         | sass.hsl     |
| hsla    | (inH,inS,inL,inAlpha) | sass.hsla    |

## usage:
```js
import NxColor from 'next-color';

// rgba:
NxColor.rgba('#f00', 0.5);
NxColor.rgba([255, 255, 0], 0.5);

// lighten:
NxColor.lighten('#f00', 0.5);
NxColor.lighten([255, 255, 0], 0.5);

// darken:
NxColor.darken('#f00', 0.5);
NxColor.darken([255, 255, 0], 0.5);

// hsl:
NxColor.hsl(200,0.4,0.8);
NxColor.hsla(200,0.4,0.8,0.1);

// $hue,$saturation,$lightness
NxColor.hue('#f00');
NxColor.saturation('#f00');
NxColor.lightness('#f00');
```

## resources:
- http://sass-lang.com/documentation/Sass/Script/Functions.html#darken-instance_method
- https://github.com/Qix-/color
