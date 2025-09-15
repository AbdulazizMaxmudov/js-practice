// const xhr = new XMLHttpRequest();

// // So‘rovni tayyorlash
// xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1");

// // Javobni tinglash
// xhr.onload = function () {
//   if (xhr.status === 200) {
//     console.log("✅ Javob:", xhr.responseText);
//   } else {
//     console.error("❌ Xato:", xhr.status);
//   }
// };

// // Xato yuz bersa
// xhr.onerror = function () {
//   console.error("❌ Tarmoq xatosi");
// };

// // So‘rovni jo‘natish
// xhr.send();

// const xhr = new XMLHttpRequest();

// xhr.open("POST", "https://jsonplaceholder.typicode.com/posts");
// xhr.setRequestHeader("Content-Type", "application/json");

// xhr.onload = function () {
//   if (xhr.status === 201) {
//     console.log("✅ Yaratildi:", xhr.responseText);
//   }
// };

// xhr.onerror = function () {
//   console.error("❌ Tarmoq xatosi");
// };

// const data = JSON.stringify({
//   title: "Hello",
//   body: "World",
//   userId: 1
// });

// xhr.send(data);




// fetch


fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(res => res.json()) // JSON ga parse qilish
  .then(data => console.log("✅ Javob:", data))
  .catch(err => console.error("❌ Xato:", err));


  fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    title: "Hello",
    body: "World",
    userId: 1
  })
})
  .then(res => res.json())
  .then(data => console.log("✅ Yaratildi:", data))
  .catch(err => console.error("❌ Xato:", err));



  async function getPost() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await res.json();
    console.log("✅ Javob:", data);
  } catch (e) {
    console.error("❌ Xato:", e);
  }
}

getPost();

