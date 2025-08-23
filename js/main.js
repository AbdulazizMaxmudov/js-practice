// Map - kalit va qiymat juftligini saqlaydi
// kalit har qanday tipda bo'lishi mumkin

let newMap = new Map()
newMap.set(23 , "age")
newMap.set("andijan" , "region")
// console.log(newMap)
newMap.delete("andijan")
// console.log(newMap.size)
// console.log(newMap)
newMap.clear()
// console.log(newMap)


// Set - faqat qiymatni saqlaydi
// faqat noyob qiymatlarni saqlaydi

let newSet = new Set()
newSet.add("apple")     
newSet.add("banana")
newSet.add("apple")     // takroriy qiymat qo'shilmaydi     
// console.log(newSet)
// console.log(newSet.size)
newSet.delete("banana")
// console.log(newSet)
newSet.clear()
// console.log(newSet)


// WeakMap - faqat obyektlarni kalit sifatida qabul qiladi
// kalit bo'lgan obyektlar faqatgina WeakMap ichida mavjud bo'lsagina saqlanadi
// kalit bo'lgan obyektlar boshqa joyda mavjud bo'lmasa, avtomatik olib tashlanadi  
// WeakMap da forEach va size yo'q
let weakMap = new WeakMap()
let obj = {name: "John"}        
weakMap.set(obj , "value1")
console.log(weakMap)
// obj = null          // endi obj boshqa joyda mavjud emas
console.log(weakMap)
// weakMap ichidagi kalit bo'lgan obyekt endi mavjud emasligi sababli avtomatik olib tashlanadi



// WeakSet - faqat obyektlarni saqlaydi
// obyektlar faqatgina WeakSet ichida mavjud bo'lsagina saqlanadi
// obyektlar boshqa joyda mavjud bo'lmasa, avtomatik olib tashlanadi        
// WeakSet da forEach va size yo'q
let weakSet = new WeakSet()     
let obj1 = {name: "Alice"}
weakSet.add(obj1)
console.log(weakSet)
// obj1 = null         // endi obj1 boshqa joyda mavjud emas
console.log(weakSet)                                