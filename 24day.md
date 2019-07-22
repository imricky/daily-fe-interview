## [html] 说说你对属性data-的理解
data-*属性主要是用来储存自定义数据，所存储的属性值能够在后续js中操作调用。

这个不得不提一下标准出来之前的做法。html是支持自定义attribute的，当时为了给前端传数据，大家自己定义的attribute五花八门，不好跟标准区分，js取数据方式也跟标准attribute一样。人家一看这哪行啊，你们不能再这么搞了，听我说，你们都在自定义属性前加个data-前缀

平时用的比较多的是 把必要数据绑定到某标签上然后，js、jquery 点击事件或者交互事件的时候 获取dataset里的属性值，便于 业务处理。

**注意一点，data-attr attr不支持驼峰命名法，只能用小写命名，被坑过很多次**

## [css] 你有用过CSS预处理器吗？喜欢用哪个？原理是什么？
scss

1、嵌套：反映层级和约束

2、变量和计算： 减少重复代码

3、Extend 和 Mixin 代码片段 (用的少)

4、循环：适用于复杂有规律的样式

5、import css 文件模块化

**面试官应该不会问太过细节的东西。这道题能说出AST（抽象语法树）并能知道大概AST的原理就OK了**
[AST抽象语法树——最基础的javascript重点知识，99%的人根本不了解](https://segmentfault.com/a/1190000016231512)



## [js] 如何快速让一个数组乱序，写出来
Fisher-Yates-shuffle 洗牌算法

```js
function shuffle(array) {
  var _array = array.concat();

  for (var i = _array.length -1 ; i>0; i-- ) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = _array[i];
    _array[i] = _array[j];
    _array[j] = temp;
  }

  return _array;
}

var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var res = shuffle(a);
console.log(res)
```

## [软技能] 你经历过老板要求兼容IE吗？IE几？有什么感悟？
