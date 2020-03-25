// 编写一个函数来查找字符串数组中的最长公共前缀。

// 如果不存在公共前缀，返回空字符串 ""。

// 示例 1:

// 输入: ["flower","flow","flight"]
// 输出: "fl"
// 示例 2:

// 输入: ["dog","racecar","car"]
// 输出: ""
// 解释: 输入不存在公共前缀。
// 说明:

// 所有输入只包含小写字母 a-z 。
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) {
    return "";
  }
  let arr = [];
  let x = 0;
  let temp;
  let flag = true;
  while (flag) {
    strs.map((i) => {
      arr.push(i.substring(0, x + 1));
    });
    temp = [...new Set(arr)];
    if (temp.length > 1) {
      flag = false;
    } else {
      x += 1;
      arr = [];
    }
  }
  return temp.length > 0 ? temp[0].substring(0,x) : "";
};

// var a = ["dog", "racecar", "car"];
var a = ["dobg", "dobcecar", "dobr"];
var b = longestCommonPrefix(a);
console.log(b)