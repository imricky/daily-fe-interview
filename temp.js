// 写一个加密字符串的方法

//方法1：encrypt/Decrypt
function encrypt(str) {
  var final = str.split('').map((s) => {
    return String.fromCharCode(s.charCodeAt() +1)
  }).join('')
  return final;
}

var str = 'qw'
var result = encrypt(str)
console.log(result)


function decrypt(str) {
  var final = str.split('').map((s) => {
    return String.fromCharCode(s.charCodeAt() - 1)
  }).join('')
  return final;
}

var str = 'rx'
var result = decrypt(str)
console.log(result)