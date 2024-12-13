// Valid Anagram
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:
// Input: s = "rat", t = "car"
// Output: false
const isAnagram = (s, t) => {
  const sLength = s.length;
  const tLength = t.length;
  sMap = new Map();
  tMap = new Map();
  if (sLength === tLength) {
    for (const char of s) {
      sMap.set(char, (sMap.get(char) || 0) + 1);
    }
    for (const char of t) {
      tMap.set(char, (tMap.get(char) || 0) + 1);
    }
    // Check if each key in map1 exists in map2 with the same value
    for (let [key, value] of sMap) {
      if (!tMap.has(key) || tMap.get(key) !== value) {
        return false;
      }
    }
    return true;
  } else return false;
};

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));
