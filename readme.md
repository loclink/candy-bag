# CandyBag

candy-bag，一个`javascript`工具库。用了都说香。

## 安装：

使用`npm`或`yarn`包管理工具安装：

``` shell
npm install candy-bag
```

在`node`项目中使用`CommonJS`导入方式：

``` js
const { firstUpperCase } = require('candy-bag')
```

在`webpack`或`vite`构建项目中使用ESM导入方式：

``` js
import { firstUpperCase } from 'candy-bag'
```

在`html`静态页面中使用`cdn`方式导入，同过该方式导入，将暴露一个全局对象`CandyBag`所有的方法均可以从该对象中取出：

``` html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <!-- 通过cdn方式引入全局对象：CandyBag -->
  <script src="https://cdn.jsdelivr.net/npm/candy-bag"></script>
  <script>
    const { firstUpperCase } = CandyBag
    console.log(firstUpperCase('hello')) // Hello
  </script>
</body>
</html>
```



## 快速使用：

### "Array" Methods：

1. 获取一个number数组的求和： `numArraySum`

   #### Arguments:

   `array :Number[]`：需要处理的数组，要求必须为`number`类型组成，长度不限。

   

   #### Returns:

   `Number` ：数组的总和

   

   #### Example:

``` js
import { numArraySum }  from 'candy-bag'
console.log(numArraySum([99, -1, 20])) // 118
```



### "String"  Methods：

1. 将字符串的首字母转化为大写： `firstUpperCase`

   #### Arguments:

   `message: String`：需要处理的字符串，由字母组成。

   

   #### Returns:

   `String` ：首个字母被转化为大写的字符串

   

   #### Example:

``` js
import { firstUpperCase }  from 'candy-bag'
console.log(firstUpperCase('hello')) // Hello
```



### "Higher" Methods：

1. 防抖函数：`debounce`

   #### Arguments:

   `fn: Function`：需要被执行的函数体， 必传

   `delay: Number`：每次触发函数延时多久，单位ms（毫秒），必传

   `immed: Boolean`：是否在首次立即执行，可选

   `resultCallback: Function`：执行后的回调函数，`(result) => void` 可从回调函数中拿到执行函数的返回值

   

   #### Returns:

   `Promise <any>` ：返回`Promise`，从`then()`中可取出函数执行结果

   

   #### Example:

``` js
import { debounce }  from 'candy-bag'
const foo = () => {
  console.log('foo 函数被执行');
};

const fooDebounce = debounce(foo, 500, true);
fooDebounce().then((res) => {
  console.log(res); // "foo 函数被执行"
});
```



2. 节流函数：`throttle`

   #### Arguments:

   `fn: Function`：需要被执行的函数体， 必传

   `interval: Number`：每次触发间隔市场，单位ms（毫秒），必传

   `options: { leading: Boolean;  trailing: Boolean; resultCallback?: (result: any) => void)}`：选项，可选。

   - leading：是否立即执行 
   - trailing：最后是否执行一次
   - resultCallback：执行后的回调函数，`(result) => void` 可从回调函数中拿到执行函数的返回值

   

   #### Returns:

   `Promise <any>` ：返回`Promise`，从`then()`中可取出函数执行结果

   

   #### Example:

``` js
import { throttle }  from 'candy-bag'

const foo = () => {
  return 'foo 函数被执行';
};

const fooThrottle = throttle(foo, 1000, {
  leading: true,
  trailing: false
});

fooThrottle().then(res => {
  console.log(res) // "foo 函数被执行"
})
```



## 关于：

本项目基于[tools-base](https://github.com/loclink/tools-base)开发。

**另招募大佬一起维护本项目。一起造轮子，我们不仅制造轮子，我们还要做轮子的搬运工**

*联系方式：wx：coder7915*

> 觉得还不戳的话请留下一个star吧~

## 日志：

### v0.0.3 更新于 2022/07/18：

1. 加入数组求和方法
2. 完善项目文档
3. 完善部分参数类型

