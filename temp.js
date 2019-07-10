// 写一个方法去掉字符串中的空格

function removeBlankSpace(str){
  var string = str.split(" ").join("")
  return string
}
// Regex: string.replace(/\s/g, '')
// join: string.split(' ').join('')
var a = '123 we rweqw qwe qw'
var s = removeBlankSpace(a)
console.log(s)