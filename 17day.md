## [html] 你认为table的作用和优缺点是什么呢？

优点：写表格方便快捷，样式统一，居中对齐，减少使用div，seo较好
缺点：需要写的内容较多

## [css] 解释下 CSS sprites的原理和优缺点分别是什么？
sprites 雪碧图

我来说下我的观点
原理：
多张图合并成一张图

#### 优点&解决的问题

1. hover效果，如果是多个图片，网络正常的情况下首次会闪烁一下。如果是断网情况下，就没图片了。sprites 就很好的解决了这个问题（第一次就加载好了）。
2. 合并了请求数
3. 制作帧动画方便


#### 缺点

1. 位置不好控制，有时候容易露底。。比如说3030的按钮，图片只有1212保不齐就漏出其他图片了。
2. 合成时候比较费时（有工具代替）
3. 位置计算费时（有工具代替）
4. 更新一部分的时候，需要重新加载整个图片，缓存失效。

## [js] typeof('abc')和typeof 'abc'都是string, 那么typeof是操作符还是函数？
是操作符,加上括号用于确定数据类型
语法中需要括号
```js
// Parentheses will be very much useful to determine the data type for expressions.
var iData = 99;

typeof iData + ' Wisen'; // It will return 'number Wisen'
typeof (iData + ' Wisen'); // It will return 'string'
```

## [软技能] 说说你对SVN和GIT的理解和区别
