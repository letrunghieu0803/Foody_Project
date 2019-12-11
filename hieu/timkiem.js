const searchInput = document.getElementById("search-input")
const searchButton = document.getElementById("search-button")


// const db = firebase.firestore().collection("food").orderBy("lastname");
searchButton.addEventListener('click', () => {
    console.log(searchInput.value)
    // window.localStorage.setItem("searchValue", searchInput.value)
    // window.open = 'http://127.0.0.1:5500/hieu/userSearch.html'
})