// 写一个把字符串大小写切换的方法

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

