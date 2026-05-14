//array copy
const arr1 = [1, 2, 3];

const arr2 = [...arr1];

console.log(arr2);

//merge arrays
const arr3 = [4, 5, 6];
const mergedArr = [...arr1, ...arr3];

console.log(mergedArr);

//object copy
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1 };

console.log(obj2);