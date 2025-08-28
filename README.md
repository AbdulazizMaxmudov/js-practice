| **Metod / Property**                  | **Vazifasi**                                        | **Misol (kod)**                                |
| ------------------------------------- | --------------------------------------------------- | ---------------------------------------------- |
| `.length`                             | Massiv uzunligini qaytaradi                         | `[1,2,3].length // 3`                          |
| `.push(item)`                         | Oxiriga element qo‘shadi                            | `[1,2].push(3) // [1,2,3]`                     |
| `.pop()`                              | Oxiridan elementni o‘chiradi                        | `[1,2,3].pop() // [1,2]`                       |
| `.unshift(item)`                      | Boshiga element qo‘shadi                            | `[2,3].unshift(1) // [1,2,3]`                  |
| `.shift()`                            | Boshidan elementni o‘chiradi                        | `[1,2,3].shift() // [2,3]`                     |
| `.indexOf(val)`                       | Birinchi indeksni qaytaradi                         | `[1,2,3].indexOf(2) // 1`                      |
| `.lastIndexOf(val)`                   | Oxirgi indeksni qaytaradi                           | `[1,2,2].lastIndexOf(2) // 2`                  |
| `.includes(val)`                      | Qiymat mavjudmi? (true/false)                       | `[1,2,3].includes(2) // true`                  |
| `.find(cb)`                           | Shartga mos birinchi elementni qaytaradi            | `[1,4,6].find(x=>x>3) // 4`                    |
| `.findIndex(cb)`                      | Shartga mos birinchi indeksni qaytaradi             | `[1,4,6].findIndex(x=>x>3) // 1`               |
| `.filter(cb)`                         | Shartga mos barcha elementlarni qaytaradi           | `[1,2,3,4].filter(x=>x>2) // [3,4]`            |
| `.map(cb)`                            | Har bir elementni o‘zgartirib yangi array qaytaradi | `[1,2,3].map(x=>x*2) // [2,4,6]`               |
| `.forEach(cb)`                        | Elementlar bo‘yicha yuradi (natija qaytarmaydi)     | `[1,2].forEach(x=>console.log(x))`             |
| `.reduce(cb,init)`                    | Massivni bitta qiymatga kamaytiradi                 | `[1,2,3].reduce((a,b)=>a+b,0) // 6`            |
| `.reduceRight(cb,init)`               | Chapdan o‘ngga emas, o‘ngdan chapga hisoblaydi      | `["a","b"].reduceRight((a,b)=>a+b) // "ba"`    |
| `.sort(cb)`                           | Elementlarni tartiblaydi                            | `[3,1,2].sort() // [1,2,3]`                    |
| `.reverse()`                          | Teskari tartib qiladi                               | `[1,2,3].reverse() // [3,2,1]`                 |
| `.slice(start,end)`                   | Massivdan bo‘lak qaytaradi                          | `[1,2,3,4].slice(1,3) // [2,3]`                |
| `.splice(start,deleteCount,...items)` | O‘chiradi/qo‘shadi/almashtiradi                     | `[1,2,3].splice(1,1,"X") // [1,"X",3]`         |
| `.join(sep)`                          | Massivni string qiladi                              | `[1,2,3].join("-") // "1-2-3"`                 |
| `.toString()`                         | Massivni string qiladi                              | `[1,2,3].toString() // "1,2,3"`                |
| `.every(cb)`                          | Hammasi shartga mosmi?                              | `[2,4,6].every(x=>x%2===0) // true`            |
| `.some(cb)`                           | Kamida bittasi shartga mosmi?                       | `[1,2,3].some(x=>x>2) // true`                 |
| `.flat(depth)`                        | Ichma-ich arraylarni yoyadi                         | `[1,[2,[3]]].flat(2) // [1,2,3]`               |
| `.flatMap(cb)`                        | map + flat birga                                    | `[1,2,3].flatMap(x=>[x,x*2]) // [1,2,2,4,3,6]` |
| `.fill(val,start,end)`                | Massivni qiymat bilan to‘ldiradi                    | `[1,2,3].fill(0) // [0,0,0]`                   |
| `.copyWithin(target,start,end)`       | Elementlarni massiv ichida nusxa qiladi             | `[1,2,3,4].copyWithin(1,2) // [1,3,4,4]`       |
| `.keys()`                             | Indekslar iteratorini qaytaradi                     | `[10,20].keys() // 0,1`                        |
| `.values()`                           | Qiymatlar iteratorini qaytaradi                     | `[10,20].values() // 10,20`                    |
| `.entries()`                          | Indeks-qiymat juftliklari iteratori                 | `[10,20].entries() // [0,10],[1,20]`           |
