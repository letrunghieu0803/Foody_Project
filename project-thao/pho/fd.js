const talkBig = document.getElementById("talkshow")
const talkSmall = document.getElementById("talk")
const talks = document.getElementById("talks")
const danhSach = document.getElementById("danhsach")

talkSmall.addEventListener("click",()=>{
    if(talkBig.value ===""){
        talks.innerHTML
    }
    else{
        talks.innerHTML += talkBig.value
        talkBig.value = ""
        talks.innerHTML += "</br>"
    }
})

