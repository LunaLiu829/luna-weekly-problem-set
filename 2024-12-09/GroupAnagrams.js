// Group Anagrams
// Given an array of strings strs, group the anagrams together. You can return the answer in any order.
// Example 1:
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:
// Input: strs = [""]
// Output: [[""]]
// Example 3:
// Input: strs = ["a"]
// Output: [["a"]]
const groupAngrams = (strs) => {
  let result = new Map();
  for (let str of strs) {
    //sort the string by each character
    let newString = str.split("").sort().join("");
    if (!result.has(newString)) {
      result.set(newString, Array.isArray(str) ? str : [str]);
    } else {
      let currentValue = result.get(newString);
      currentValue.push(...[str]);
      result.set(newString, currentValue);
    }
  }
  const valuesArray = [...result.values()];
  return valuesArray;

  //another solution:
  //     let result  = {};
  //     for (let str of strs) {
  //     if (!result[newString]) {
  //       result[newString] = [str];
  //     } else {
  //       result[newString].push(str);
  //     }
  //   }
  //     }
  //   return Object.values(result);
};
console.log(groupAngrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log(groupAngrams([""]));
console.log(groupAngrams(["a"]));
