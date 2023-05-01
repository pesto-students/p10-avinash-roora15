// Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate.

function hasDuplicate(myArray) {
  return myArray.length != new Set(myArray).size;
}

let uniqueArray = [1, 2, 3, 4, 5];
console.log(` Array has duplicate? : ${hasDuplicate(uniqueArray)}`);

let nonUniqueArray = [1, 1, 2, 3, 4, 5];
console.log(` Array has duplicate? : ${hasDuplicate(nonUniqueArray)}`);
