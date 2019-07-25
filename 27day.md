## [html] 说说你对影子(Shadow)DOM的了解
Shadow DOM 的诞生是为了解决样式冲突和选择器失效的问题。它类似于一种新的 DOM 节点，或者说它可以封装了 HTML，可以用于封装一些小的组件，比如一个表单提交，我们可以创建一个 shadow 然后独立的完整的呈现一个表单组件，而它不受外界影响。

[了解 Shadow DOM v1](https://juejin.im/post/5cd4c5eaf265da037129b930)

## [css] 怎样修改chrome记住密码后自动填充表单的黄色背景？


## [js] 说说你对arguments的理解，它是数组吗？
arguments是一个对象。

js不能像java一样实现重载，arguments对象可以模拟重载。

js中每个函数都会有arguments这个实例，它引用着函数的实参，可以用数组下标的方式"[]"引用arguments的元素。arguments.length为函数实参个数，arguments.callee引用函数自身。

arguments他的特性和使用方法

特性：

1.arguments对象和Function是分不开的。

2.因为arguments这个对象不能显式创建。

3.arguments对象只有函数开始时才可用。

使用方法：

虽然arguments对象并不是一个数组，但是访问单个参数的方式与访问数组元素的方式相同

例如：

arguments[0],arguments[1]...

## [软技能] 你为什么离职呢？