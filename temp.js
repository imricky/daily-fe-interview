// 写一个去除制表符和换行符的方法  \t(Tabs)   \n(Newline)

//方法1：
function removeTabsAndNewline(str) {
  // var temp = str.replace(/\t/g,'');
  // var final = temp.replace(/\n/g,'')
  var final = str.replace(/\t|\n|\r/g,'')
  return final
}
var a = 'qwe\tqweqwe\nqwe\t\n'
var result = removeTabsAndNewline(a)
console.log(result)