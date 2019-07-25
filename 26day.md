## [html] 解释下你对GBK和UTF-8的理解？并说说页面上产生乱码的可能原因
#### gbk和utf8的理解

我们这里将以最简单最容易理解的方式来描述GBK和UTF8的区别，以及它们分别是什么。

GBK编码：是指中国的中文字符，其它它包含了简体中文与繁体中文字符，另外还有一种字符“gb2312”，这种字符仅能存储简体中文字符。

UTF-8编码：它是一种全国家通过的一种编码，如果你的网站涉及到多个国家的语言，那么建议你选择UTF-8编码。

#### GBK和UTF8有什么区别？

UTF8编码格式很强大，支持所有国家的语言，正是因为它的强大，才会导致它占用的空间大小要比GBK大，对于网站打开速度而言，也是有一定影响的。

GBK编码格式，它的功能少，仅限于中文字符，当然它所占用的空间大小会随着它的功能而减少，打开网页的速度比较快。

## [css] 说说你对z-index的理解


当网页上出现多个由绝对定位（position:absolute）或固定定位（position:fixed）所产生的浮动层时，必然就会产生一个问题，就是当这些层的位置产生重合时，谁在谁的上面呢？或者说谁看得见、谁看不见呢？这时候就可以通过设置z-index的值来解决，这个值较大的就在上面，较小的在下面。


> z-index的意思就是在z轴的顺序，如果说网页是由x轴和y轴所决定的一个平面，那么z轴就是垂直于屏幕的一条虚拟坐标轴，浮动层就在这个坐标轴上，那么它们的顺序号就决定了谁上谁下了。

## [js] 说说bind、call、apply的区别？并手写实现一个bind的方法
```js

//实现bind方法
//第一版,bind不传参数
Function.prototype.bind0 = function (context) {
  var self = this;
  return function(){
    return self.apply(context);
  }
}

//bind传参数  .bind(foo,'test')
Function.prototype.bind1 = function (context) {
  var self = this;
  var args = Array.prototype.slice.call(arguments,1);
  return function () {
    // 这个时候的arguments是指bind返回的函数传入的参数
    var bindArgs = Array.prototype.slice.call(arguments);
    return self.apply(context,args.concat(bindArgs));
  }
}

Function.prototype.bind2 = function (context) {  
  var self = this;
  var args = Array.prototype.call(arguments,1);
  var fBound = function(){
    var bindArgs = Array.prototype.call(arguments);
    return self.apply(this instanceof fBound ? this:context,args.concat(bindArgs));
  }
  fBound.prototype = self.prototype;
  return fBound;
}

//完全版本
Function.prototype.bind3 = function (context) {
  if (typeof this !== "function") {
    throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
  }
  var self = this;
  var args = Array.prototype.slice.call(arguments, 1);
  var fNOP = function () { };
  var fBound = function () {
    var bindArgs = Array.prototype.slice.call(arguments);
    return self.apply(this instanceof fNOP ? this : context, args.concat(bindArgs));
  }
  fNOP.prototype = this.prototype;
  fBound.prototype = new fNOP();
  return fBound;
}

```


## [软技能] 你对Git的branch及工作流的理解是什么？
