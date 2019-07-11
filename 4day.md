##  HTML5的文件离线储存怎么使用，工作原理是什么？
```html
什么是Manifest：
其实Manifest是一个简单的 文本文件，它的扩展名是任意的，定义需要缓存的文件、资源，当第一次打开时，浏览器会自动缓存相应的资源。
Manifest 的特点：
离线浏览：即当网络断开时，可以继续访问你的页面。
访问速度快：将文件缓存到本地，不需每次都从网络上请求。
稳定性：做了Manifest缓存，遇到突发网络故障或者服务器故障，继续访问本地缓存。

离线存储的manifest一般由三个部分组成:

1.CACHE:表示需要离线存储的资源列表，由于包含manifest文件的页面将被自动离线存储，所以不需要把页面自身也列出来。
2.NETWORK:表示在它下面列出来的资源只有在在线的情况下才能访问，他们不会被离线存储，所以在离线情况下无法使用这些资源。不过，如果在CACHE和NETWORK中有一个相同的资源，那么这个资源还是会被离线存储，也就是说CACHE的优先级更高。
3.FALLBACK:表示如果访问第一个资源失败，那么就使用第二个资源来替换他，比如上面这个文件表示的就是如果访问根目录下任何一个资源失败了，那么就去访问offline.html。

CACHE MANIFEST
#v0.11

CACHE:

js/app.js
css/style.css

NETWORK:
resourse/logo.png

FALLBACK:
/ /offline.html
```

## CSS选择器有哪些？哪些属性可以继承？
```css
选择器
通配符
id
class
标签
后代选择器
子选择器
兄弟选择器
属性选择器
伪类选择器
伪元素选择器



可以继承的属性
font-size
font-weight
font-style
font-family
color

属性继承好像只要有inherit属性都可以继承，详情自查
```

## 写一个方法把下划线命名转成大驼峰命名
```javascript
方法一
function changeString(str) {
  var temp = str.split('');
  var flag = false;
  var finalStr = '';
  for (let i = 0; i < temp.length; i++) {
    if (temp[i] === "_") {
      flag = true;
      continue;
    } else {
      if (flag === true) {
        temp[i] = temp[i].toUpperCase();
        flag = false;
      }
      finalStr += temp[i]
    }
  }
  return finalStr
}
var result = changeString('a_c_def_')
console.log(result)

方法二
function changeStr1(str) {
  var final = str.split('_').reduce((total, curValue, curIndex, arr) => {
    return total + curValue.substring(0, 1).toUpperCase() + curValue.substring(1);
  })
  return final;

}
var result1 = changeStr1('a_c_def__')
console.log(result1)
```