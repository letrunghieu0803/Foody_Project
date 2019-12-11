const searchInput = document.getElementById("search-input")
const searchButton = document.getElementById("search-button")


// const db = firebase.firestore().collection("food").orderBy("lastname");
searchButton.addEventListener('click', () => {
    console.log(searchInput.value)
    window.localStorage.setItem("searchValue", searchInput.value)
    window.open = 'C:/Users/PC/Desktop/Foody_Project/hieu/userSearch.html'
})