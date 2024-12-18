// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.
// Example 1:
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:
// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:
// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters. Since an empty string reads the same forward and backward, it is a palindrome.
const isPalindrome = (s) => {
  //   let array = [];
  //   const lowerStr = s.toLowerCase();
  //   for (const char of lowerStr) {
  //     if (/^[a-zA-Z]$/.test(char)) {
  //       array.push(char);
  //     }
  //   }
  //   if (array.length === 0) {
  //     return true;
  //   } else {
  //     const newStr = array.join("");
  //     const reversedStr = [...array].reverse().join("");
  //     return newStr === reversedStr;
  //   }
  const filteredStr = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversedStr = filteredStr.split("").reverse().join("");
  return filteredStr === reversedStr;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome(" "));
console.log(isPalindrome("0P"));
