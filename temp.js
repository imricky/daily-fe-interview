// 写一个判断数据类型的方法
// /\[object\s|\]/g,
function judgeDataType(data){
  return Object.prototype.toString.call(data).replace(/\[object\s|\]/g,'')
}

var a = ['12','qw','12','qw','asd','qw','asd','asq']

var result = judgeDataType(a);
console.log(result)