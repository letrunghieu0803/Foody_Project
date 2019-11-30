const button = document.getElementById("button")
const search = document.getElementById("search")
const post = document.getElementById("post")

button.addEventListener("click",()=>{
    if(search.value ==="phở" || search.value === "pho" || search.value ==="p"){
        window.open("file:///C:/Users/Admin/Desktop/Baitap/project/timkiem.html");
    }
    else if(search.value ==="bánh mỳ" || search.value ==="bánh" || search.value ==="Bánh mì" || search.value ==="bánh mì" || search.value ==="Bánh mỳ"){
        window.open("file:///C:/Users/Admin/Desktop/Baitap/project/timkiem1.html");
    }
    else{
        alert("Không tìm thấy món ăn bàn cần tìm")
    }
})

post.addEventListener("click",()=>{
    window.open("file:///C:/Users/Admin/Desktop/Baitap/project/post.html")

})

