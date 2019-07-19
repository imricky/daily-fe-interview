//写一个方法验证是否为中文 

function isCHN(str){
  var reg = /^[\u4e00-\u9fa5]+$/;
  return reg.test(str);
}

var a = '你哈'
var result = isCHN(a)
console.log(result)