// 用递归算法实现，数组长度为5且元素的随机数在2-32间不重复的值

function buildArray(arr,length,min,max){
  var num = Math.floor(Math.random()*(max-min+1)) + min;
  if(!arr.includes(num)){
    arr.push(num)
  }
  return arr.length === length ? arr : buildArray(arr,length,min,max)
}

var s = buildArray([],5,2,32)
console.log(s)