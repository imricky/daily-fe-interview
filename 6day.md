##  label都有哪些作用？并举相应的例子说明
```html
前面那些同学已经说到input与label互相关联的机制，这里我就说一下具体实例：

利用label"模拟"button来解决不同浏览器原生button样式不同的问题
<input type="button" id="btn">
<label for="btn">Button</label>

<style>
input[type='button'] {
  display: none;
}

label {
  display: inline-block;
  padding: 10px 20px;
  background: #456;
  color: #fff;
  cursor: pointer;
  box-shadow: 2px 2px 4px 0 rgba(0,0,0,.3);
  border-radius: 2px;
}
</style>
结合checkbox表单元素实现纯CSS状态控制，这个实例就太多了。比如控制CSS动画播放和停止。下面是一部分代码。详细实例地址
<input type="checkbox" id="controller">
<label class="icon" for="controller">
  <div class="play"></div>
  <div class="pause"></div>
</label>
<div class="animation"></div>

<style>
...
#controller:checked ~ .animation {
  animation-play-state: paused;
}
...
</style>
input的focus事件会触发锚点定位，我们可以利用label当触发器实现选项卡切换效果。下面代码选自张鑫旭《CSS世界》。实际效果链接
<div class="box">
  <div class="list"><input id="one" readonly>1</div>
  <div class="list"><input id="two" readonly>2</div>
  <div class="list"><input id="three" readonly>3</div>
  <div class="list"><input id="four" readonly>4</div>
</div>
<div class="link">
  <label class="click" for="one">1</label>
  <label class="click" for="two">2</label>
  <label class="click" for="three">3</label>
  <label class="click" for="four">4</label>
</div>

<style>
.box {
  width: 20em;
  height: 10em;
  border: 1px solid #ddd;
  overflow: hidden;
}
.list {
  height: 100%;
  background: #ddd;
  text-align: center;
  position: relative;
}
.list > input { 
  position: absolute; top:0; 
  height: 100%; width: 1px;
  border:0; padding: 0; margin: 0;
  clip: rect(0 0 0 0);
}
</style>
```

## 用css创建一个三角形，并简述原理
```css
<body>
  <div id="tran"></div>
</body>
#tran{
  width:0;
  height:0;
  border-top:20px solid green;
  border-right:15px solid transparent;
  border-left:15px solid transparent;
  border-bottom:20px solid transparent;
}
原理：一边有颜色，其他三个边都是透明的 就可以成为一个三角形
创建一个div，宽高都为0，实现效果如下，发现border的四个边都是一个三角形，要实现三角形只需将其中几个边background设置为transparent，即可得到三角形
```

## 写一个去除制表符和换行符的方法  \t(Tabs)   \n(Newline)
```javascript
function removeTabsAndNewline(str) {
  // var temp = str.replace(/\t/g,'');
  // var final = temp.replace(/\n/g,'')
  var final = str.replace(/\t|\n|\r/g,'')
  return final
}
var a = 'qwe\tqweqwe\nqwe\t\n'
var result = removeTabsAndNewline(a)
console.log(result)
```