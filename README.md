# next-color
> Color wrapper for next

## install:
```bash
npm install -S afeiship/next-color --registry=https://registry.npm.taobao.org
```

## apis:
| api     | params              | description  |
|---------|---------------------|--------------|
| rgba    | (inColor, inAlpha)  | sass.rgba    |
| lighten | (inColor, inAmount) | sass.lighten |
| darken  | (inColor, inAmount) | sass.darken  |

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
```

## resources:
- http://sass-lang.com/documentation/Sass/Script/Functions.html#darken-instance_method
- https://github.com/Qix-/color
