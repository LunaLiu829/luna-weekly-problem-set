// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
// Example 1:
// Input: s = "()"
// Output: true
// Example 2:
// Input: s = "()[]{}"
// Output: true
// Example 3:
// Input: s = "(]"
// Output: false
// Example 4:
// Input: s = "([])"
// Output: true
// ")(" return false;
const isValid = (s) => {
  //   if (s.length % 2 === 0) {
  //     if (s.includes("(") && s.includes(")") && s.indexOf("(") < s.indexOf(")")) {
  //       return true;
  //     } else if (
  //       s.includes("{") &&
  //       s.includes("}") &&
  //       s.indexOf("{") < s.indexOf("}")
  //     ) {
  //       return true;
  //     } else if (
  //       s.includes("[") &&
  //       s.includes("]") &&
  //       s.indexOf("[") < s.indexOf("]")
  //     ) {
  //       return true;
  //     } else return false;
  //   } else {
  //     return false;
  //   }
  const stack = [];
  let closeToOpen = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  for (let char of s) {
    if (closeToOpen[char]) {
      stack.push(closeToOpen[char]);
    } else {
      if (stack.pop() !== char) return false;
    }
  }
  return !stack.length;
};

// console.log(isValid("()"));
// console.log(isValid("()[]{}"));
// console.log(isValid("(]"));
console.log(isValid("([])"));
console.log(isValid(")("));
console.log(isValid("([)]"));
