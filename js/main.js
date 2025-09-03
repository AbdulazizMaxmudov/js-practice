// for loop klassik
for(let i = 0 ; i < 5 ; i++){
    // console.log(i)
}

// while loop 
// let i = 0;
// while(i<7){
//    console.log(i)
//    i++
// }

// do while loop 
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);

let user = {name: "Ali", age: 25};
for (let key in user) {
  console.log(key, ":", user[key]);
}


let arr = ["a", "b", "c"];
for (let value of arr) {
  console.log(value);
}


for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  if (i === 4) break;
  console.log(i);
}
// 0 1 3
