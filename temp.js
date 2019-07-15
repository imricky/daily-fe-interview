// 一道算法题，一个数组中找出所有相同的元素，并且做出分类，在彩笔白板上写完，面试官笑了一下，js写还真方便。

function sameElement(arr){
  var final = arr.reduce((total,curValue,curIndex,arr)=>{
    total[curValue] != void 0 ? total[curValue] += 1 : total[curValue] = 1
    return total;
  },{})
  return final
}

var a = ['12','qw','12','qw','asd','qw','asd','asq']

var result = sameElement(a);
console.log(result)