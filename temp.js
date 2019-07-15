// 统计某一字符或字符串在另一个字符串中出现的次数

//方法1：
function timesCount(str,bigStr) {
  var replaceStr = bigStr.split(str);
  
  return replaceStr.length -1 
}
var str = 'qw'
var bigStr = 'qw12qw'
var result = timesCount(str,bigStr)
console.log(result)