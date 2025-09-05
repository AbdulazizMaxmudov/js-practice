// Function declaration
function sayHello() {
  console.log("Hello!");
}
sayHello(); // Hello!


// Function Expression
const greet = function(name) {
  return "Hi " + name;
};
console.log(greet("Ali")); // Hi Ali


// Arrow Function
const square = x => {
    return x * x
};
console.log(square(4)); // 16




//  Default va Rest Params
function multiply(a, b=2) {
  return a*b;
}
console.log(multiply(5)); // 10

function sum(...nums) {
  return nums.reduce((a,b)=>a+b,0);
}
console.log(sum(1,2,3,4)); // 10

//



