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
  const stack = [];
  const bracketMap = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let char of s) {
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char); // Push opening brackets to the stack
    } else if (char === ")" || char === "}" || char === "]") {
      // Check if the stack top matches the current closing bracket
      if (stack.pop() !== bracketMap[char]) {
        return false;
      }
    }
  }

  // If the stack is empty, all brackets are matched
  return stack.length === 0;

  //   const stack = [];
  //   let closeToOpen = {
  //     "(": ")",
  //     "{": "}",
  //     "[": "]",
  //   };
  //   for (let char of s) {
  //     if (closeToOpen[char]) {
  //       stack.push(closeToOpen[char]); // Push closing brackets to the stack
  //     } else {
  //       // Check if the stack top matches the current closing bracket
  //       if (stack.pop() !== char) return false;
  //     }
  //   }
  //   // If the stack is empty, all brackets are matched
  //   return !stack.length;
};

// console.log(isValid("()"));
// console.log(isValid("()[]{}"));
// console.log(isValid("(]"));
console.log(isValid("([])"));
console.log(isValid(")("));
console.log(isValid("([)]"));
