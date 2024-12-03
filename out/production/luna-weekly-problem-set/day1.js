// 1. Contains Duplicate
//  Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
// Example 1:
// Input: nums = [1,2,3,1]
// Output: true
// Explanation:
// The element 1 occurs at the indices 0 and 3.
let containDuplicate = function (nums) {
  let newArray = new Set(nums);
  // set() use .size not .length
  if (newArray.size !== nums.length) {
    return true;
  }
  return false;
};
console.log(containDuplicate([1, 2, 3, 1]));
console.log(containDuplicate([1, 2, 3, 4]));
console.log(containDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));

//2. Two sum
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.
// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]
// I am thinking to loop the array first, then use the target number - current number to see if the remainder is in the array
let twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const remainder = target - nums[i];
    //check if the nums contains the remainder except the number itself
    if (nums.indexOf(remainder) !== -1 && nums.indexOf(remainder) !== i) {
      //   console.log(i, nums.indexOf(remainder));
      return [i, nums.indexOf(remainder)];
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));

// ChapGpt: also we can use Map() to solve it
function twoSum2(nums, target) {
  const numMap = new Map(); // To store numbers and their indices

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]; // Find the complement
    if (numMap.has(complement)) {
      // If complement exists in the map, return the indices
      return [numMap.get(complement), i];
    }
    // Store the current number and its index in the map
    numMap.set(nums[i], i);
    console.log(numMap);
  }
  return []; // Should not reach here, as the problem guarantees one solution
}
console.log(twoSum2([2, 7, 11, 15], 9));
console.log(twoSum2([3, 2, 4], 6));
console.log(twoSum2([3, 3], 6));
