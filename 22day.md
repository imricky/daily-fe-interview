## [html] js放在html的<body>和<head>有什么区别？
浏览器解析html从上往下执行，放在head先执行js了，会造成dom树还没有生成就执行js。

## [css] 说说浏览器解析CSS选择器的过程？
```css
div > div.jartto p span.yellow{
   color:yellow;
}
```

### 错误
对于上述例子，如果按从左到右的方式进行查找：
1.先找到所有 div 节点；

2.在 div 节点内找到所有的子 div ,并且是 class = “jartto”；

3.然后再依次匹配 p span.yellow 等情况；

4.遇到不匹配的情况，就必须回溯到一开始搜索的 div 或者 p 节点，然后去搜索下个节点，重复这样的过程。


这样的搜索过程对于一个只是匹配很少节点的选择器来说，效率是极低的，因为我们花费了大量的时间在回溯匹配不符合规则的节点。
### 正确
如果换个思路，我们一开始过滤出跟目标节点最符合的集合出来，再在这个集合进行搜索，大大降低了搜索空间。来看看从右到左来解析选择器：

1.首先就查找到 的元素；

2.紧接着我们判断这些节点中的前兄弟节点是否符合 P 这个规则，这样就又减少了集合的元素，只有符合当前的子规则才会匹配再上一条子规则。

结果显而易见了，众所周知，在 DOM 树中一个元素可能有若干子元素，如果每一个都去判断一下显然性能太差。而一个子元素只有一个父元素，所以找起来非常方便。

试想一下，如果采用从左至右的方式读取 CSS 规则，那么大多数规则读到最后（最右）才会发现是不匹配的，这样会做费时耗能，最后有很多都是无用的；而如果采取从右向左的方式，那么只要发现最右边选择器不匹配，就可以直接舍弃了，避免了许多无效匹配。

浏览器 CSS 匹配核心算法的规则是以从右向左方式匹配节点的。这样做是为了减少无效匹配次数，从而匹配快、性能更优。


## [js] 你对new操作符的理解是什么？手动实现一个new方法
```js
function objectFactory() {

    var obj = new Object(),

    Constructor = [].shift.call(arguments);

    obj.__proto__ = Constructor.prototype;

    var ret = Constructor.apply(obj, arguments);

    return typeof ret === 'object' ? ret : obj;

};
```

1. 用new Object() 的方式新建了一个对象 obj
2. 取出第一个参数，就是我们要传入的构造函数。此外因为 shift 会修改原数组，所以 arguments 会被去除第一个参数
3. 将 obj 的原型指向构造函数，这样 obj 就可以访问到构造函数原型中的属性
4. 使用 apply，改变构造函数 this 的指向到新建的对象，这样 obj 就可以访问到构造函数中的属性
5. 返回 obj


## [软技能] 前端工程师这个职位你是怎么样理解的？聊聊它的前景？

[写给想成为前端工程师的同学们](https://www.h5jun.com/post/to-be-a-good-frontend-engineer.html)