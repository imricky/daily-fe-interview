// 上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。 感谢 Marcos 贡献此图。

// 示例:

// 输入: [0,1,0,2,1,0,1,3,2,1,2,1]
// 输出: 6
// 第一版，暴力解法
// var trap = function (height) {
//   let f = 0;
//   for (let i = 0; i < height.length -1 ; i++) {
//     let l_max = 0;
//     let r_max = 0;
//     // 左侧最大
//     for (let j = i; j >= 0; j--) {
//       l_max = Math.max(height[j], l_max);
//     }
//     // 右侧最大
//     for (let j = i; j < height.length; j++) {
//       r_max = Math.max(height[j], r_max);
//     }
//     f += Math.min(l_max, r_max) - height[i];
//   }
//   return f;
// };

var trap = function (height) {
  let f = 0; // 最后的值
  let l = 0; // 左指针
  let r = height.length - 1; // 右边指针

  let l_max = height[0];
  let r_max = height[height.length - 1];
  while (l <= r) {
    l_max = Math.max(l_max, height[l]);
    r_max = Math.max(r_max, height[r]);

    if (l_max < r_max) {
      f += l_max - height[l];
      l++;
    }else{
      f += r_max-height[r];
      r--;
    }
  }
  return f;
}


var a = [5, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
var b = trap(a);
console.log(b);