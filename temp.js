// 写一个方法把下划线命名转成大驼峰命名

// 方法一
function changeString(str) {
  var temp = str.split('');
  var flag = false;
  var finalStr = '';
  for (let i = 0; i < temp.length; i++) {
    if (temp[i] === "_") {
      flag = true;
      continue;
    } else {
      if (flag === true) {
        temp[i] = temp[i].toUpperCase();
        flag = false;
      }
      finalStr += temp[i]
    }
  }
  return finalStr
}
var result = changeString('_______a_bc_d__')
console.log(result)

// 方法二
function changeStr1(str) {
  var final = str.split('_').reduce((total, curValue, curIndex, arr) => {
    return total + curValue.substring(0, 1).toUpperCase() + curValue.substring(1);
  })
  return final;

}
var result1 = changeStr1('a_c_def__')
console.log(result1)
