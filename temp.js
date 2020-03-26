// 三数之和
// 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。

// 注意：答案中不可以包含重复的三元组。



// 示例：

// 给定数组 nums = [-1, 0, 1, 2, -1, -4]，

// 满足要求的三元组集合为：
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

// var threeSum = function (nums) {
//   if (nums.length < 3) {
//     return [];
//   }
//   if (nums.length === 3) {
//     if (nums[0] + nums[1] + nums[2] === 0) {
//       return [nums];
//     } else {
//       return [];
//     }
//   }
//   //如果全是大于0
//   let flagAll = nums.every((i) => {
//     i >= 0;
//   });
//   if (flagAll) {
//     return [];
//   }


//   let final = [];
//   let ab = [];
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 1; j < nums.length; j++) {
//       for (let k = 2; k < nums.length; k++) {
//         if (j !== k && i !== j && k !== i) {
//           if (nums[i] + nums[j] + nums[k] === 0) {
//             let re = [nums[i], nums[j], nums[k]];
//             if(!ab.includes(re.sort().toString())){
//               ab.push(re.sort().toString());
//               final.push(re);
//             }
//           }
//         }
//       }
//     }
//   }
//   return final;
// };

// var threeSum = function(nums) {
//   let result = [];
//   let uniqueMap = {};
//   //由小到大排序
//   nums = nums.sort((x, y) => x - y);
//   for(let i = 0; i < nums.length - 2; i++){
//       //排序之后会有很多重复数字，直接跳过可以省去不少时间
//       if( i > 0 && nums[i] === nums[i-1]) continue;
//       let L = i + 1,
//           R = nums.length -1;
//       while(L < R){
//           //判断是否是答案，并避免重复
//           if(L < R && nums[L] + nums[R] + nums[i] === 0 && !uniqueMap[`${nums[i]}${nums[L]}${nums[R]}`]) {
//               result.push([nums[i], nums[L], nums[R]]);
//               uniqueMap[`${nums[i]}${nums[L]}${nums[R]}`] = true;
//           }

//           if(nums[L] + nums[R] + nums[i] < 0) {
//               L++
//           } else {
//               R--;
//           }
//       }
//   }
//   return result;
// };

var threeSum = function (nums) {
  nums = nums.sort((x, y) =>  {return (x - y)} );
  let ab = {};
  let final = [];
  for (let i = 0; i < nums.length - 2 ; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let l = i + 1;
    let r = nums.length - 1;
    while (l < r) {
      if (l < r && nums[l] + nums[r] + nums[i] === 0 && !ab[`${nums[i]}${nums[l]}${nums[r]}`]) {
        final.push([nums[i], nums[l], nums[r]]);
        ab[`${nums[i]}${nums[l]}${nums[r]}`] = true;
      }
      if (nums[l] + nums[r] + nums[i] < 0) {
        l++;
      } else {
        r--;
      }
    }
  }
  return final;

};



var a = [-1, 0, 1, 2, -1, -4];
// var a = [0,0,0];
// var a = [0,7,-4,-7,0,14,-6,-4,-12,11,4,9,7,4,-10,8,10,5,4,14,6,0,-9,5,6,6,-11,1,-8,-1,2,-1,13,5,-1,-2,4,9,9,-1,-3,-1,-7,11,10,-2,-4,5,10,-15,-4,-6,-8,2,14,13,-7,11,-9,-8,-13,0,-1,-15,-10,13,-2,1,-1,-15,7,3,-9,7,-1,-14,-10,2,6,8,-6,-12,-13,1,-3,8,-9,-2,4,-2,-3,6,5,11,6,11,10,12,-11,-14];
// var a = [2, 13, -2, -5, -1, 10, 6, -8, 5, -5, 7, -5, -14, -4, -5, 10, -15, -2, -14, -6, 10, 6, -14, -14, -9, -11, 8, -3, -2, 12, -9, -14, 3, 5, -12, -13, -8, 1, -14, 12, 12, 0, 14, 5, 4, -14, -8, 4, -9, -7, 14, -13, 6, 7, -12, 5, 12, 11, -13, -5, 0, -6, -12, -12, 6, 13, 12, 13, 0, 5, 2, -11, 13, 1, 9, 2, 2, -14, 13, 8, -14, 4, 2, 8, -3, -3, -10, -14, -15, 14, -12, 1, -15, 14, -4, 6, 12, -6, -4, -3, 6, 5];

var b = threeSum(a);
console.log(b)

// console.log([1,2,3].sort().toString())