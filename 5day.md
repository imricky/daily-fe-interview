##  简述超链接target属性的取值和作用
```html
target这个属性指定所链接的页面在浏览器窗口中的打开方式。
它的参数值主要有：
a、 _blank ：在新浏览器窗口中打开链接文件
b、 _parent ：将链接的文件载入含有该链接框架的父框架集或父窗口中。如果含有该链接的框架不是嵌套的，则在浏览器全屏窗口中载入链接的文件，就象 _self 参数一。
c、 _self ：在同一框架或窗口中打开所链接的文档。此参数为默认值，通常不用指定。但是我不太理解。
d、 _top ：在当前的整个浏览器窗口中打开所链接的文档，因而会删除所有框架。
```

## CSS3新增伪类有哪些并简要描述
```css
:not 
:nth-child()
:first-child
:last-child
:disabled
:checked
:empty
:only-child
```

## 写一个把字符串大小写切换的方法
```javascript
//方法1：
function changeStr(str) {
  let arr = str.split('')
  let finalArr = [];
  for (let item of arr) {
    if(item.toUpperCase() === item){
      finalArr.push(item.toLowerCase())
    }else{
      finalArr.push(item.toUpperCase())
    }
  }
  return finalArr.join('')
}

var s = changeStr('aBcdE')
console.log(s)

//方法2：
function caseConvert(str) {
  return str.split('').map(s => {
    const code = s.charCodeAt();
    if (code < 65 || code > 122 || code > 90 && code < 97) return s;
    
    if (code <= 90) {
      return String.fromCharCode(code + 32)
    } else {
      return String.fromCharCode(code - 32)
    }
  }).join('')
}

console.log(caseConvert('AbCdE')) // aBcDe 

function caseConvertEasy(str) {
  return str.split('').map(s => {
    if (s.charCodeAt() <= 90) {
      return s.toLowerCase()
    }
    return s.toUpperCase()
  }).join('')
}

console.log(caseConvertEasy('AbCxYz')) // aBcXyZ 
```