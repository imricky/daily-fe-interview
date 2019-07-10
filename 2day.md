## html的元素有哪些（包含H5）
```html
块级元素：

head -
meat - 申明页面的诸多属性
title - 窗口标题
style - 样式
body - 文本内容
header - 头部块
section - 内容块
footer - 底部块
article - 文章标签
aside
nav
menu
bir
hr - 下划线
h1-h6 描述标题
div
p
ul
li
ol
oi
dl
dt
dd
form
table
theader
tbody
tr
th
行内元素

label
a
span
td
input
button
strong
b
i
去除的元素

font


H5: canvas定义图形；audio定义声音 aside定义页面之外的内容 command定义命令按钮 nav定义导航链接
output输出类型 progress 任务进度
```

## CSS3有哪些新增的特性？
```css
边框(borders):
border-radius 圆角
box-shadow 盒阴影
border-image 边框图像
背景:
background-size 背景图片的尺寸
background_origin 背景图片的定位区域
background-clip 背景图片的绘制区域
渐变：
linear-gradient 线性渐变
radial-gradient 径向渐变
文本效果;
word-break
word-wrap
text-overflow
text-shadow
text-wrap
text-outline
text-justify
转换：
2D转换属性
transform
transform-origin
2D转换方法
translate(x,y)
translateX(n)
translateY(n)
rotate(angle)
scale(n)
scaleX(n)
scaleY(n)
rotate(angle)
matrix(n,n,n,n,n,n)
3D转换：
*3D转换属性：

transform
transform-origin
transform-style
3D转换方法
translate3d(x,y,z)
translateX(x)
translateY(y)
translateZ(z)
scale3d(x,y,z)
scaleX(x)
scaleY(y)
scaleZ(z)
rotate3d(x,y,z,angle)
rotateX(x)
rotateY(y)
rotateZ(z)
perspective(n)
过渡
transition
动画
@Keyframes规则
animation
弹性盒子(flexbox)
多媒体查询@media
```

## 写一个方法去掉字符串中的空格
```javascript
function removeBlankSpace(str){
  var string = str.split(" ").join("")
  return string
}
// Regex: string.replace(/\s/g, '')
// join: string.split(' ').join('')
var a = '123 we rweqw qwe qw'
var s = removeBlankSpace(a)
console.log(s)
```