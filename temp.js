// 写一个获取当前url查询字符串中的参数的方法

//方法1：
function getUrlParam(str) {
  var temp = str.split('?')[1]  //a=1&b=2&c=3#target
  if(temp.indexOf('#')){
    temp = temp.split('#')[0] //a=1&b=2&c=3
  }
  var final = temp.split('&').reduce((total,curValue,cueIndex,arr)=>{
    var key = curValue.split('=')[0];
    var value = curValue.split('=')[1];
    total[key] = value;
    return total;
  },{})
  return final;
}

var a = "https://github.com/kk?tab=stars&assetId=311&page=DETAIL&projectPhase=2";
var result = getUrlParam(a)
console.log(result)



//方法2：
function urlParam(str){
  const param = {};
  str.replace(/([^&=?]+)=([^&]+)/g,(m,$1,$2)=> param[$1] = $2);
  return param;
}
var b = "https://github.com/kk?tab=stars&assetId=311&page=DETAIL&projectPhase=2";
var result1 = urlParam(b)
console.log(result1)
