let age = 20;

if (age >= 18) {
  console.log("Voyaga yetgan");
} else {
  console.log("Voyaga yetmagan");
}

let day = 3;

switch (day) {
  case 1:
    console.log("Dushanba");
    break;
  case 2:
    console.log("Seshanba");
    break;
  case 3:
    console.log("Chorshanba");
    break;
  default:
    console.log("Boshqa kun");
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("0 ga bo‘lish mumkin emas!");
  }
  return a / b;
}

console.log(divide(10, 2)); // 5
// console.log(divide(10, 0)); // Error: 0 ga bo‘lish mumkin emas!
try {
  let result = divide(10, 0);
  console.log(result);
} catch (error) {
  console.log("Xato topildi:", error.message);
}
// Natija: "Xato topildi: 0 ga bo‘lish mumkin emas!"

try {
  console.log("Kod ishlayapti...");
  throw new Error("Xato yuz berdi!");
} catch (err) {
  console.log("Catch:", err.message);
} finally {
  console.log("Har doim ishlaydi");
}

