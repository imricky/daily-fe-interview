<!-- 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。

注意：答案中不可以包含重复的三元组。

 

示例：

给定数组 nums = [-1, 0, 1, 2, -1, -4]，

满足要求的三元组集合为：
[
  [-1, 0, 1],
  [-1, -1, 2]
] -->

```javascript
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
```