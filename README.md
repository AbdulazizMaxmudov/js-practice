# strings 
| **Metod / Property**         | **Vazifasi**                                        | **Misol (kod)**                                                    |
| ---------------------------- | --------------------------------------------------- | ------------------------------------------------------------------ |
| `.length`                    | String uzunligini qaytaradi                         | `"Hello".length // 5`                                              |
| `str[index]`                 | Indeks bo‘yicha belgi olish                         | `"Hi"[0] // "H"`                                                   |
| `.charAt(i)`                 | Indeks bo‘yicha belgi                               | `"Hi".charAt(1) // "i"`                                            |
| `.charCodeAt(i)`             | Belgining UTF-16 kodini qaytaradi                   | `"A".charCodeAt(0) // 65`                                          |
| `.at(i)`                     | Indeks bo‘yicha belgi (manfiy ham bo‘lishi mumkin)  | `"Hi".at(-1) // "i"`                                               |
| `.slice(start,end)`          | Stringdan bo‘lak kesib olish                        | `"Hello".slice(0,2) // "He"`                                       |
| `.substring(start,end)`      | slice’ga o‘xshaydi, manfiy indeksni 0 deb oladi     | `"Hello".substring(1,3) // "el"`                                   |
| `.substr(start,len)`         | start va uzunlik bo‘yicha bo‘lak (eskirgan)         | `"Hello".substr(1,3) // "ell"`                                     |
| `.indexOf(substr)`           | Birinchi topilgan indeks                            | `"Hello".indexOf("l") // 2`                                        |
| `.lastIndexOf(substr)`       | Oxirgi topilgan indeks                              | `"Hello".lastIndexOf("l") // 3`                                    |
| `.includes(substr)`          | String ichida bormi? (true/false)                   | `"Hello".includes("ell") // true`                                  |
| `.startsWith(substr)`        | Shu bilan boshlanadimi?                             | `"Hello".startsWith("He") // true`                                 |
| `.endsWith(substr)`          | Shu bilan tugaydimi?                                | `"Hello".endsWith("lo") // true`                                   |
| `.toUpperCase()`             | Hammasini katta harf qiladi                         | `"Hello".toUpperCase() // "HELLO"`                                 |
| `.toLowerCase()`             | Hammasini kichik harf qiladi                        | `"Hello".toLowerCase() // "hello"`                                 |
| `.trim()`                    | Boshi va oxiridagi bo‘sh joylarni o‘chiradi         | `"  hi  ".trim() // "hi"`                                          |
| `.trimStart()`               | Faqat boshidan bo‘sh joylarni olib tashlaydi        | `"  hi".trimStart() // "hi"`                                       |
| `.trimEnd()`                 | Faqat oxiridan bo‘sh joylarni olib tashlaydi        | `"hi  ".trimEnd() // "hi"`                                         |
| `.padStart(len,char)`        | Uzunlikni char bilan to‘ldirib, boshidan qo‘shadi   | `"5".padStart(3,"0") // "005"`                                     |
| `.padEnd(len,char)`          | Uzunlikni char bilan to‘ldirib, oxiridan qo‘shadi   | `"5".padEnd(3,"0") // "500"`                                       |
| `.repeat(n)`                 | Stringni n marta takrorlaydi                        | `"ha".repeat(3) // "hahaha"`                                       |
| `.replace(old,new)`          | Birinchi topilganini almashtiradi                   | `"JS JS".replace("JS","JavaScript") // "JavaScript JS"`            |
| `.replaceAll(old,new)`       | Barcha topilganlarini almashtiradi                  | `"JS JS".replaceAll("JS","JavaScript") // "JavaScript JavaScript"` |
| `.split(delimiter)`          | Stringni massivga ajratadi                          | `"a,b,c".split(",") // ["a","b","c"]`                              |
| `.concat(str)`               | Stringlarni qo‘shadi                                | `"Hello".concat(" ","World") // "Hello World"`                     |
| `.match(regex)`              | Regex bo‘yicha mos keladigan qismlarni qaytaradi    | `"abc123".match(/\d+/) // ["123"]`                                 |
| `.matchAll(regex)`           | Regex bo‘yicha barcha mosliklarni iteratsiya qilish | `[... "abc123".matchAll(/\d/)] // ["1","2","3"]`                   |
| `.search(regex)`             | Regex bo‘yicha birinchi indeksni qaytaradi          | `"abc123".search(/\d/) // 3`                                       |
| `.localeCompare(str)`        | Ikki stringni solishtiradi (0, 1, -1)               | `"a".localeCompare("b") // -1`                                     |
| `.normalize()`               | Unicode normalization                               | `"\u00E9".normalize() // "é"`                                      |
| `String.fromCharCode(code)`  | UTF-16 koddan string yaratadi                       | `String.fromCharCode(65) // "A"`                                   |
| `String.fromCodePoint(code)` | Unicode’dan string yaratadi                         | `String.fromCodePoint(128512) // 😀`                               |


