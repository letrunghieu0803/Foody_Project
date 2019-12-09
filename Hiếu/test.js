const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const picture = document.getElementById("monan-table");
// console.log(picture);
const db = firebase.firestore();
searchButton.addEventListener("click", () => {
  window.open("file:///C:/Users/Admin/Desktop/Baitap/project/post.html");
});

const demoDoc = db.collection("anh").get();
demoDoc
  .then(data => {
    console.log(data);
    data.forEach(element => {
      for (i = 0; i < 1; i++) {
        picture.innerHTML += `
              <img
                  class="anh-table"
                  src="${element.data().anh}"
                  alt=""
              />`;
      }
    });
    picture.addEventListener("click", event => {
      event.preventDefault();
      if (event.target.classList.contains("anh-table")) {
        console.log(event.target);
        window.localStorage.setItem("currentBlog", event.target.id);
        // window.location.href = "/Foody_Project/project-thao/banhmy.html";
      }
    });
  })
  .catch(function(error) {});
