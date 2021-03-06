##  viewport常见设置都有哪些？
```html
width 设置的布局视口的宽度
initial-scale 设置初始缩放比例和布局视口的宽度
minimun-scale 设置最小缩放比例
maximum-scale 设置最大缩放比例
height 设置布局视口的高度，但是好像没有作用
user-scalable 是否允许用户缩放 no为不允许
```

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1.0, user-scalable=no">
```

## 对比下px、em、rem有什么不同？

#### px
1. IE无法调整那些使用px作为单位的字体大小

2. 国外的大部分网站能够调整的原因在于其使用了em或rem作为字体单位

3. px像素（Pixel）。相对长度单位。像素px是相对于显示器屏幕分辨率而言的。

#### em
```
em指字体高，任意浏览器的默认字体高都是16px。所以未经调整的浏览器都符合: 1em=16px。那么12px=0.75em,
1px=0.0625em,10px=0.625em。为简化font -size的换算，需要在css中的body选择器中声明Font-size=62.5%，
这就使em值变为16px*62.5%=10px, 这样10px=1em, 也就是说只需要将你的原来的px数值除以10，然后换上em作
为单位就行了。em有如下特点：

1. em的值并不是固定的，em是相对长度单位。相对于当前对象内文本的字体尺寸。如当前对行内文本的字体尺
寸未被人为设置，则相对于浏览器的默认字体尺寸

2. em会继承父级元素的字体大小。

```

所以我们在写CSS的时候，需要注意两点：

1. body选择器中声明Font-size=62.5%；

2. 将你的原来的px数值除以10，然后换上em作为单位；

3. 重新计算那些被放大的字体的em数值。避免字体大小的重复声明。

 

 

 

       也就是避免1.2 * 1.2= 1.44的现象。比如说你在#content中声明了字体大小为1.2em，那么在声明p的字体大小时就只能是1em，而不是1.2em, 因为此em非彼em，它因继承#content的字体高而变为了1em=12px。

#### rem
```
rem是CSS3新增的一个相对单位（root em，根em），这个单位引起了广泛关注。这个单位与em有什么区别呢？
区别在于使用rem为元素设定字体大小时，仍然是相对大小，但相对的只是HTML根元素。这个单位可谓集相对大
小和绝对大小的优点于一身，通过它既可以做到只修改根元素就成比例地调整所有字体大小，又可以避免字体大
小逐层复合的连锁反应。目前，除了IE8及更早版本外，所有浏览器均已支持rem。对于不支持它的浏览器，应对
方法也很简单，就是多写一个绝对单位的声明。这些浏览器会忽略用rem设定的字体大小。下面就是一个例子：

body {font-size:14px; font-size:.875rem;}
```

## 简要描述下什么是回调函数并写一个例子出来

> 你到一个商店买东西，刚好你要的东西没有货，于是你在店员那里留下了你的电话，过了几天店里有货了，店员就打了你的电话，然后你接到电话后就到店里去取了货。在这个例子里，你的电话号码就叫回调函数，你把电话留给店员就叫登记回调函数，店里后来有货了叫做触发了回调关联的事件，店员给你打电话叫做调用回调函数，你到店里去取货叫做响应回调事件。回答完毕。

```javascript
function callback() {
    alert("I am in the callback!");
}

function work(func) {
    alert("I am calling the callback!");
    func(); 
}

work(callback);
```