## [html] 为什么HTML5只需要写<!DOCTYPE HTML>就可以？

doctype是一种标准通用标记语言的文档类型声明，目的是告诉标准通用标记语言解析器要使用什么样的文档类型定义（DTD）来解析文档。

<!DOCTYPE>声明是用来指示web浏览器关于页面使用哪个HTML版本进行编写的指令。

<!DOCTYPE>声明必须是HTML文档的第一行，位于html标签之前。

浏览器本身分为两种模式，一种是标准模式，一种是怪异模式，浏览器通过doctype来区分这两种模式，doctype在html中的作用就是触发浏览器的标准模式，如果html中省略了doctype，浏览器就会进入到Quirks模式的怪异状态，在这种模式下，有些样式会和标准模式存在差异，而html标准和dom标准值规定了标准模式下的行为，没有对怪异模式做出规定，因此不同浏览器在怪异模式下的处理也是不同的，所以一定要在html开头使用doctype。

HTML5的doctype

HTML5不基于SGML，所以不需要引用DTD。在HTML5中<!DOCTYPE>只有一种

```html
<！DOCTYPE html>
```


## [css] position:fixed;在ios下无效该怎么办？

把需要用手滑动的内容用clss为.content（名字随便起）的div包起来，样式代码如下：
```css
.content {
position: fixed;
top: 0;
left: 0;
bottom: 180px; /距离底部的距离为底部盒子的高度，自己也可以设置/
overflow-y: scroll;
width: 100%;
height: auto;
-webkit-overflow-scrolling: touch; /这句是为了滑动更顺畅/
}
```
-webkit-overflow-scrolling: touch; /这句是为了滑动更顺畅/
这句代码一定得写，要不上下滑动起来有些卡顿，亲自体验过的。
然后把需要固定在底部的内容用class为.footer（名字随便起）的div包起来，样式代码如下：

```css
.footer {
position: fixed;
bottom: 0;
height: 180px;
}
```
这样，在真机上再次测试就没有问题了。如有更好的解决办法，希望大家互相交流。

## [js] 什么是闭包？优缺点分别是什么？

**JavaScript 闭包的本质源自两点，词法作用域和函数当作值传递。**

词法作用域，就是，按照代码书写时的样子，内部函数可以访问函数外面的变量。引擎通过数据结构和算法表示一个函数，使得在代码解释执行时按照词法作用域的规则，可以访问外围的变量，这些变量就登记在相应的数据结构中。

函数当作值传递，即所谓的first class对象。就是可以把函数当作一个值来赋值，当作参数传给别的函数，也可以把函数当作一个值 return。一个函数被当作值返回时，也就相当于返回了一个通道，这个通道可以访问这个函数词法作用域中的变量，即函数所需要的数据结构保存了下来，数据结构中的值在外层函数执行时创建，外层函数执行完毕时理因销毁，但由于内部函数作为值返回出去，这些值得以保存下来。而且无法直接访问，必须通过返回的函数。这也就是私有性。

本来执行过程和词法作用域是封闭的，这种返回的函数就好比是一个虫洞，开了挂。也就是 @秋月凉 答案中轮子哥那句话的意思。

显然，闭包的形成很简单，在执行过程完毕后，返回函数，或者将函数得以保留下来，即形成闭包。实际上在 JavaScript 代码中闭包不要太常见。函数作为第一等对象之后 JavaScript 灵活得不要不要的。


回归闭包的本质：基于词法作用域和将函数按值传递

无论函数在哪里被调用或者如何被调用，它的词法作用域都只由函数被声明时所处的位置决定，所以，函数所能访问变量的"权限"只由声明位置决定，利用这个特性就可以利用闭包(将这个函数return出去，该函数声明位置不变，所以可访问变量的"权限"依然不变)使函数外部可以访问函数内部的变量。

权威指南上说，延长作用域链的叫做闭包，之前理解起来好费解


闭包作用：1.可以使用同级的作用域
闭包作用：2.读取其他元素的内部变量
闭包作用：3.延长作用域

闭包的缺点1，作用域没有那么直观
闭包的缺点2，因为变量不会被垃圾回收所以有一定的内存占用问题。



代码片段一。
```js
　　var name = "The Window";

　　var object = {
　　　　name : "My Object",

　　　　getNameFunc : function(){
　　　　　　return function(){
　　　　　　　　return this.name;
　　　　　　};

　　　　}

　　};

　　alert(object.getNameFunc()());
```

代码片段二。
```js
　　var name = "The Window";

　　var object = {
　　　　name : "My Object",

　　　　getNameFunc : function(){
　　　　　　var that = this;
　　　　　　return function(){
　　　　　　　　return that.name;
　　　　　　};

　　　　}

　　};

　　alert(object.getNameFunc()());
```

尝试解答代码段一：
```js
getNameFunc: function() {//假设函数名为Ａ
return function()/*假设函数名为Ｂ*/ { return this.name; };
}
```
在函数里面构建函数的时候，闭包产生。
在函数Ｂ内调用函数Ａ的this.name,由于函数Ａ没有name属性，所以就去找全局变量name，找到了，所以返回“The Window”，要是没有找到，则返回“undefined”。

## [软技能] 你最喜欢用哪些编辑器？喜欢它的理由是什么？

webstorm ，功能及其强大而且很全