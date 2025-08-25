// String yaratish 
let str1 = "Hello, World!";
let str2 = 'JavaScript is fun!';    
let str3 = `Template literals are powerful!`;
let str4 = new String("This is a string object.");


let str = "Maxmudov Abdulaziz";
console.log(str.length); // uzunligi
console.log(str[0]); // birinchi harf
console.log(str.charAt(1)); // ikkinchi harf  
console.log(str.at(-1)); // oxirgi harf

// Qidirish metodlari 

console.log(str.indexOf("a")); // 1 - harfning indexini qaytaradi
console.log(str.lastIndexOf("a")); // oxirgi a harfining indexini qaytaradi
console.log(str.includes("z")); // true yoki false qaytaradi            
console.log(str.startsWith("M")); // true yoki false qaytaradi
console.log(str.endsWith("z")); // true yoki false qaytaradi


// Qism olish metodlari
console.log(str.slice(0 , 5)); // 0 dan 5 gacha kesib oladi
console.log(str.substring(0 , 5)); // 0 dan 5 gacha kesib oladi
console.log(str.substr(0 , 5)); // 0 dan boshlab 5 ta harf kesib oladi  

// O'zgartirish metodlari
console.log(str.replace("Maxmudov" , "Abdulaziz")); // birinchi topilgan so'zni o'zgartiradi
console.log(str.toUpperCase()); // hamma harflarni katta qiladi     
console.log(str.toLowerCase()); // hamma harflarni kichik qiladi
console.log(str.concat(" - Web Developer")); // stringni qo'shadi
console.log(str.trim()); // boshidagi va oxiridagi bo'sh joylarni olib tashlaydi
console.log(str.padStart(20 , "*")); // boshiga belgilar qo'shadi       
console.log(str.padEnd(20 , "*")); // oxiriga belgilar qo'shadi
console.log(str.repeat(3)); // stringni takrorlaydi
console.log(str.split(" ")); // stringni bo'lib beradi
console.log(str.split("")); // har bir harfni alohida qilib beradi

// Bo'lish va Birlahstish
let str5 = "Hello";
let str6 = "World";     
console.log(str5 + " " + str6); // qo'shish
console.log(`${str5} ${str6}`); // template literal bilan qo'shish
console.log(str5.concat(" ", str6)); // concat bilan qo'shish
console.log([str5, str6].join(" ")); // join bilan qo'shish



console.log(str.split("")); // har bir harfni alohida qilib beradi
console.log(str.split(" ")); // so'zlarni alohida qilib beradi      
console.log(str.split("a")); // a harfi bo'yicha bo'lib beradi
console.log(str.split("z")); // z harfi bo'yicha bo'lib beradi

