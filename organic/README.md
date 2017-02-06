# Organic

## Usage
This example is already built, but if you want build it by yourself, here is a guide:

`npm i`

`npm i grunt -g`

`grunt`

You'll see warnings like this:
```
WARNING on line 28, column 12 of ../src/common.scss:
You probably don't mean to use the color value `black' in interpolation here.
It may end up represented as #000000, which will likely produce invalid CSS.
Always quote color names when using them as strings (for example, "black").
If you really want to use the color value here, use `"" + $el'.
```
Ignore, the same warnings are present in official Organic CSS repository :)