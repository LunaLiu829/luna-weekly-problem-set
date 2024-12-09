// Encode and Decode Strings
// Design an algorithm to encode a list of strings to a single string. The encoded string is then decoded back to the original list of strings.
// Please implement encode and decode
// Example 1:
// Input: ["neet","code","love","you"]
// Output:["neet","code","love","you"]
// Example 2:
// Input: ["we","say",":","yes"]
// Output: ["we","say",":","yes"]
let encode = (strs) => {
  //
  // let count = new Map();
  // for (const str of strs) {
  //   count.set(str, str.length);
  // }
  // // { 'neet' => 4, 'code' => 4, 'love' => 4, 'you' => 3 }
  // // console.log(count);
  // const newArray = [...count.entries()];
  // //[ [ 'neet', 4 ], [ 'code', 4 ], [ 'love', 4 ], [ 'you', 3 ] ]
  // // console.log(newArray);
  // const result = newArray.map(([key, value]) => `${value}#${key}`).join("");

  const result = strs.map((str) => `${str.length}#${str}`).join("");
  return result;
};
let decode = (str) => {
  const array = [];
  let i = 0;
  while (i < str.length) {
    // Find the position of the delimiter #
    const j = str.indexOf("#", i);
    console.log(j);
    // Extract the length of the string
    const length = parseInt(str.substring(i, j), 10);
    console.log(length);
    // Extract the string using the length
    const s = str.substring(j + 1, j + 1 + length);
    console.log(s);
    // Add the string to the result
    array.push(s);
    // Move the pointer past the current string
    i = j + 1 + length;
  }
  return array;
};

console.log(encode(["neet", "code", "love", "you"]));
console.log(encode(["we", "say", ":", "yes"]));
console.log(decode("4#neet4#code4#love3#you"));
console.log(decode("2#we3#say1#:3#yes"));
