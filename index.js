function hasTargetSum(array, target) {
  // Write your algorithm here
  let numbersSet = new Set();
  for (let num of array){
    let complement = target - num;
    if (numbersSet.has(complement)){
      return true;
    }
    numbersSet.add(num);
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  function hasTargetSum(nums, target):
    numbersSet = empty Set
    
    for each num in nums:
        complement = target - num
        if complement exists in numbersSet:
            return true
        add num to numbersSet
    
    else return false

*/

/*
  Add written explanation of your solution here
  in this function, I used a set called numbersSet to store the numbers in the array.
  i then iterate through the array and for each num, I calculate its complement by subracting it from the target.
  if the complement is already in num_set, it means the pair of numbers that add up to teh target exists in the array, so it returns true.
  Otherwise, teh current number 'num' is added to numbersSet and continue iterating through the array. When there is no marching pair that adds to target,
  returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
