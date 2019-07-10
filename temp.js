// 去除字符串中最后一个指定的字符

function removeString(str,removeStr){
  var index = str.lastIndexOf(removeStr);
  var final = str.substring(0,index)+str.substring(index+1,str.length)
  return final
}

var result = removeString('qwetqwetqwe','t')
console.log(result)