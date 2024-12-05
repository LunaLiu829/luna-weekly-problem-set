// 347. Top K Frequent Elements
// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
// Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
let topKFrequent = (nums, k) => {
  // my solution
  nums.sort();
  let count = new Map();
  for (const number of nums) {
    count.set(number, (count.get(number) || 0) + 1);
  }
  //   console.log(count);
  // Convert Map to an array of [key, value] pairs
  const sortedArray = Array.from(count.entries()).sort((a, b) => b[1] - a[1]);
  //   console.log(sortedArray);

  // Create a new Map from the sorted array
  const sortedMap = new Map(sortedArray.slice(0, k));
  //   console.log(sortedMap);
  return [...sortedMap.keys()];

  //solution 2
  let map = {};
  for (const num of nums) {
    if (!map[num]) {
      map[num] = 0;
    }
    map[num]++;
  }
  //map that looks like{ element:count, element:count,element:count}
  //   console.log(map);

  // [[],[],[],[]] length n+1;
  let bucket = [];
  for (let i = 0; i < nums.length + 1; i++) {
    bucket.push([]);
  }

  for (const key in map) {
    bucket[map[key]].push(key);
  }
  let solution = [];
  for (let i = bucket.length - 1; i >= 0; i--) {
    if (bucket[i].length > 0) {
      solution = [...solution, ...bucket[i]];
      if (solution.length === k) {
        return solution;
      }
    }
  }
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3, 100], 2));
console.log(topKFrequent([1], 1));
