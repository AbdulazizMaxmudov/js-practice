let arr = [1, 2, 3, 4, 5];
// console.log(arr.length)
arr.push(6);
// console.log(arr.length)
arr.pop();
// console.log(arr.length)
arr.unshift(0);
// console.log(arr.length)     
arr.shift();
// console.log(arr.length)


// console.log(fruits.indexOf('banana')); // 1
// console.log(fruits.indexOf('grape'));  // -1
// console.log(fruits.lastIndexOf('banana')); // 2
// console.log(fruits.includes('cherry')); // true
// console.log(fruits.includes('grape'));  // false

let fruits = ["apple", "banana", "cherry", "date", "elderberry"];

let found = fruits.find(function(item) {
    return item === 'banana';
})
let foundArrow = fruits.find(item => {
    return item === 'banana'
} );

// console.log(foundArrow || found
// ); // 'banana'

let foundIndex = fruits.findIndex(function(item) {
    return item === 'banana';
})
let foundIndexArrow = fruits.findIndex(item => item === 'banana');          
// console.log(foundIndexArrow || foundIndex); // 1

const users = [
  { id: 1, name: "Ali", active: true },
  { id: 2, name: "Laylo", active: false },
  { id: 3, name: "Nodir", active: true }
];

let activeUsers = users.filter(function(user , index, array) {
    // console.log(index);
    // console.log(array); 
    // console.log(user);
    return user.active === true;
});
let activeUsersArrow = users.filter(user => user.active);       
// console.log( activeUsers);


let nums = [1, 2, 3, 4, 5];
let doubled = nums.map(function(num) {  
    // return num * 2;
});
// console.log(doubled); // [2, 4, 6, 8, 10]
let doubledArrow = nums.map(num => num * 2);        
// console.log(doubledArrow); // [2, 4, 6, 8, 10]

let result = nums.forEach(function(num, index) {
    // console.log(num, index);
});
// console.log(result); // undefined
// let resultArrow = nums.forEach((num, index) => console.log(num, index));    
// console.log(resultArrow); // undefined

// Reduce 
// array.reduce(callback(accumulator, currentValue, currentIndex, array), initialValue)
// Parameters:
// accumulator - yig'ilgan natija (har iteratsiyada yangilanadi)
// currentValue - joriy element
// currentIndex - joriy elementning index i (optional)
// array - original array (optional)
// initialValue - boshlang'ich qiymat (optional)

let numbers = [1, 2, 3, 4];
// let sum = numbers.reduce(function(accumulator, currentValue) {
//     return accumulator + currentValue;
// }, 0);

// let product = numbers.reduce((akumlator , hozirgiQiymat) =>{
//     return akumlator * hozirgiQiymat;
// }, 1);  
// console.log(product); 
// let leftToRight = numbers.reduce((acc, curr) => {
//   console.log(`acc: ${acc}, curr: ${curr}`);
//   return acc - curr;
// }, 0);

// console.log('Left to Right:', leftToRight); // -10


// let sortedArr = [1, 4, 44 ,  6 ].sort((a, b) => a - b); // [1, 4, 6]
// console.log(sortedArr);

// let reversedArr = [1, 2, 3].reverse(); // [3, 2, 1]
// console.log(reversedArr);




// 1. Oddiy qism olish: 
// array.slice(start, end)  // end inclusive emas!
// Index 1 dan 3 gacha (3 kirmaydi)
let slice1 = fruits.slice(1, 3);
// console.log(slice1); // ["banana", "cherry"]
// console.log(fruits); // ["apple", "banana", "cherry", "date", "elderberry"] - o'zgarmas!

// Index 2 dan oxirigacha
let slice2 = fruits.slice(2);
// console.log(slice2); // ["cherry", "date", "elderberry"]

// Birinchi 3 ta
let slice3 = fruits.slice(0, 3);
// console.log(slice3); // ["apple", "banana", "cherry"]


// 2. Negative indexes:
// Oxirgi 3 ta
let last3 = numbers.slice(-3);
// console.log(last3); // [8, 9, 10]

// Oxirdan 5-chi dan oxirdan 2-chi gacha
let slice4 = numbers.slice(-5, -2);
// console.log(slice4); // [6, 7, 8]

// Birinchi va oxirgi ni tashlab, qolganini olish
let middle = numbers.slice(1, -1);
// console.log(middle); // [2, 3, 4, 5, 6, 7, 8, 9]


// array.splice(start, deleteCount, item1, item2, ..., itemN)

// Index 2 dan 1 ta element o'chirish
let removed = fruits.splice(2, 1);
// console.log(removed); // ["cherry"] - o'chirilgan elementlar
// console.log(fruits); // ["apple", "banana", "date", "elderberry"] - original o'zgargan!

// Index 1 dan 2 ta element o'chirish
let removed2 = fruits.splice(1, 2);
// console.log(removed2); // ["banana", "date"]
// console.log(fruits); // ["apple", "elderberry"]

// let numbers = [1, 2, 5, 6];

// // Index 2 ga yangi elementlar qo'shish (hech narsa o'chirmasdan)
// numbers.splice(2, 0, 3, 4);
// console.log(numbers); // [1, 2, 3, 4, 5, 6]

// // Boshiga qo'shish
// numbers.splice(0, 0, 0);
// console.log(numbers); // [0, 1, 2, 3, 4, 5, 6]

// // Oxiriga qo'shish
// numbers.splice(numbers.length, 0, 7, 8);
// console.log(numbers); // [0, 1, 2, 3, 4, 5, 6, 7, 8]


// Join and toString
let fruits2 = ["apple", "banana", "cherry"];
let joined = fruits2.join(", "); // "apple, banana, cherry"
// console.log(joined);
// let asString = fruits2.join(" "); // "apple,banana,cherry"
// console.log(asString);
// console.log(fruits2.join(" - ")); // "apple - banana - cherry"


let nested = [[1, 2], [3, 4], [5, 6]];
// console.log(nested.toString().split(","))

// numbers = [2, 4, 6, 8, 10];
// let allEven = numbers.every(function(num) {
//     return num % 2 === 0            
// });
// console.log(allEven); // true

// // Hamması musbatmi?
// let allPositive = numbers.every(num => num > 0);
// console.log(allPositive); // true

// // Hamması 5 dan kattami?
// let allGreaterThan5 = numbers.every(num => num > 5);
// console.log(allGreaterThan5); 

// 1 level nested
let arr1 = [1, 2, [3, 4], 5, [6, 7]];
let flattened1 = arr1.flat();
// console.log(flattened1); // [1, 2, 3, 4, 5, 6, 7]

// 2 level nested
let arr2 = [1, [2, [3, 4]], 5];
// console.log(arr2.flat()); // [1, 2, [3, 4], 5] - faqat 1 level
// console.log(arr2.flat(2)); // [1, 2, 3, 4, 5] - 2 level

// 3 level nested
let arr3 = [1, [2, [3, [4, 5]]], 6];
// console.log(arr3.flat(1)); // [1, 2, [3, [4, 5]], 6]
// console.log(arr3.flat(2)); // [1, 2, 3, [4, 5], 6]
// console.log(arr3.flat(3)); // [1, 2, 3, 4, 5, 6]

let sentences = ["Hello world", "How are you", "JavaScript is great"];

// Har bir sentence ni so'zlarga bo'lish
let words1 = sentences.map(s => s.split(" "));
console.log(words1); // [["Hello", "world"], ["How", "are", "you"], ["JavaScript", "is", "great"]]

let words2 = sentences.map(s => s.split(" ")).flat();
console.log(words2); // ["Hello", "world", "How", "are", "you", "JavaScript", "is", "great"]

// flatMap bilan bir qadamda
let words3 = sentences.flatMap(s => s.split(" "));
console.log(words3); // ["Hello", "world", "How", "are", "you", "JavaScript", "is", "great"]



// Fill array.fill(value, start, end)

// Bo'sh array yaratish va to'ldirish
// let arrr1 = new Array(5);
// console.log(arrr1); // [empty × 5]

// arrr1.fill(0);
// console.log(arrr1); // [0, 0, 0, 0, 0]

// // Mavjud array ni to'ldirish
// let arrr2 = [1, 2, 3, 4, 5];
// arr2.fill(99);
// console.log(arrr2); // [99, 99, 99, 99, 99] - original o'zgargan!

