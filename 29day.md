## [css] 请描述css的权重计算规则
```css
<div class="red blue">123</div>
<div class="blue red">123</div>

.red {
  color: red;
}

.blue {
  color: blue
}
```
都是蓝色
障眼法
css计算规则和class先后顺序无关
## [js] 写一个获取数组的最大值、最小值的方法
```js
var a = [12,3,5,6,8,20,15]
var b = Math.max.apply(null,a);
console.log(b)
```
