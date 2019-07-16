// 简要描述下什么是回调函数并写一个例子出来

function callbackFun(data){
  return Object.prototype.toString.call(data).replace(/\[object\s|\]/g,'')
}

var a = ['12','qw','12','qw','asd','qw','asd','asq']

var result = callbackFun(a);
console.log(result)