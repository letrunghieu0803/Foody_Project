const banhMy = document.getElementById("banhmy");
const button1 = document.getElementById("element.id");
const db = firebase.firestore();
const timkiem = document.getElementById("search-button");
const nhap = document.getElementById("search-input");

let id = window.localStorage.getItem("currentBlog");
// console.log(id);
db.collection("food")
  .get()
  .then(data => {
    data.forEach(element => {
      console.log(element.data().ten);
      banhMy.innerHTML += `
        <ul>
        <img src="${element.data().hinhanh4}"  height="50px" weight="100px">
        <p><b>Tên món:</b> ${element.data().ten} </p>
        <p><b>Địa điểm:</b> ${element.data().diadiem} </p>
        <button class="abc" id="${element.id}">Xem thêm...</button>
        <hr>
        </ul>`;

      //tim kiem
      timkiem.addEventListener("click", event => {
        event.preventDefault();
        console.log(element.data().ten.search(/nhap.value/i));
        if (element.data().ten.search(/nhap.value/i) > -1) {
          // window.localStorage.setItem("currentBlog", nhap.value);
          window.location.href = "/timkiembanhmy.js";
        }
      });
    });
    document.querySelector("#banhmy").addEventListener("click", event => {
      event.preventDefault();
      if (event.target.classList.contains("abc")) {
        console.log(event.target);
        window.localStorage.setItem("currentBlog", event.target.id);
        window.location.href = "/Foody_Project/project-thao/banhmy.html";
      }
    });
  });
