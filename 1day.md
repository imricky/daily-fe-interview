## CSS 
```
页面导入样式时，使用link和@import有什么区别？
```

```
1. link是HTML标签，@import是CSS提供的
2. 页面加载时，link会被同时加载，而@import引用的CSS会等到页面结束后才加载
3. link是HTML标签，没有兼容性，@import是CSS2.1才出现的，支持IE5+
4. link可以通过JS操作DOM 来引入样式表，而@import不可以
```


## CSS 
```
圣杯布局和双飞翼布局的理解和区别，并用代码实现
```

### 圣杯布局
基本思路：
```
1.三者都设置向左浮动。
2.设置main宽度为100%。
3.设置 负边距，left设置负左边距为100%，right设置负左边距为负的自身宽度。
4.设置main的padding值给左右两个子面板留出空间。
5.设置两个子面板为相对定位，left的left值为负的sub宽度，right的right值为负的extra宽度。
```

代码：
```html
  <div class="header">header</div>
  <div class="main clearfix">
    <div class="center">中间</div>
    <div class="left">左边</div>
    <div class="right">右边</div>
  </div>
  <div class="footer">footer</div>
```
```css
.header {
  height: 40px;
  background: lightblue;
}
.footer {
  height: 40px;
  background: lightcoral;
}
.center{
  width:100%;
  height:300px;
  background: lightgray;
  float:left;
}
.left{
  width:200px;
  height:300px;
  background: lightpink;
  float:left;
  margin-left:-100%;
  position:relative;
  left:-200px;
}
.right{
  width:100px;
  height:300px;
  background: lightgreen; 
  float:left;
  margin-left:-100px;
  position:relative;
  right:-100px;
  
}

.main{
  padding-left:200px;
  padding-right:100px;
}

.clearfix:after{
  clear:both;
  content:"";
  display:block;
}
```

> 但是,圣杯布局有个问题,当面板的main部分比两边的子面板宽度小的时候，布局就会乱掉。因此也就有了双飞翼布局来克服这个问题。如果不增加任何标签，想实现更完美的布局非常困难，因此双飞翼布局在主面板上选择了添加一个标签。

### 双飞翼布局
基本思路：
```
1.三者都设置向左浮动。
2.设置main宽度为100%。
3.设置 负边距，left设置负左边距为100%，right设置负左边距为负的自身宽度。
4.设置main-content的margin值给左右两个子面板留出空间。
```

代码：
```html
  <div class="header">header</div>
  <div class="main clearfix">
    <div class="center">
      <div class="inner">中间自适应</div>
    </div>
    <div class="left">左边</div>
    <div class="right">右边</div>
  </div>
  <div class="footer">footer</div>
```

```css
.header {
  height: 40px;
  background: lightblue;
}
.footer {
  height: 40px;
  background: lightcoral;
}
.center{
  width:100%;
  height:300px;
  background: lightgray;
  float:left;
}
.left{
  width:200px;
  height:300px;
  background: lightpink;
  float:left;
  margin-left:-100%;

}
.right{
  width:100px;
  height:300px;
  background: lightgreen; 
  float:left;
  margin-left:-100px;
  
}
.inner{
  margin-left:200px;
  margin-right:100px;
  height: 300px;
  border: 1px solid red;
  margin-top: 10px;
}

.clearfix:after{
  clear:both;
  content:"";
  display:block;
}
```

参考资料：
> https://zhuanlan.zhihu.com/p/58355168?tdsourcetag=s_pcqq_aiomsg
> https://www.zhihu.com/question/21504052

## JS
```
用递归算法实现，数组长度为5且元素的随机数在2-32间不重复的值
```

```javascript
function buildArray(arr,length,min,max) {
  var num = Math.floor(Math.random()*(max-min+1)) + min;
  if(!arr.includes(num)){
    arr.push(num);
  }
  return arr.length === length ? arr : buildArray(arr,length,min,max)
}
var result = buildArray([],5,2,32)
console.log(result)
```
