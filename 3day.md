##  HTML全局属性(global attribute)有哪些（包含H5）
```html

```

## 在页面上隐藏元素的方法有哪些？
```css

```

## 去除字符串中最后一个指定的字符
```javascript
function removeString(str,removeStr){
  var index = str.lastIndexOf(removeStr);
  var final = str.substring(0,index)+str.substring(index+1,str.length)
  return final
}

var result = removeString('qwetqwetqwe','t')
console.log(result)


解法二：
function delLast(str, target) {
  return str.split('').reverse().join('').replace(target, '').split('').reverse().join('');
}

const str = delLast('asdfghhj', 'h')

console.log(str) // asdfghj 
```