const talkBig = document.getElementById("talkshow")
const talkSmall = document.getElementById("talk")
const talks = document.getElementById("talks")
const danhSach = document.getElementById("danhsach")
// let food = [
//     {
//         ten:"Phở",
//         diaDiem:"lý thường kiệt",
//         thoiGian:"10h",
//         phone:012222222,
//         price:2123123,
//         picture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqWFIfLuMkjdGK3Basx_ZbGUZHgKfdabpH-xbC63VDuqJaWvmr&s"
//     },{
//         ten:"Phở",
//         diaDiem:"avc",
//         thoiGian:"10h",
//         phone:012222222,
//         price:2123123,
//         picture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqWFIfLuMkjdGK3Basx_ZbGUZHgKfdabpH-xbC63VDuqJaWvmr&s"
//     },{
//         ten:"avc",
//         diaDiem:"avc",
//         thoiGian:"10h",
//         phone:012222222,
//         price:2123123,
//         picture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqWFIfLuMkjdGK3Basx_ZbGUZHgKfdabpH-xbC63VDuqJaWvmr&s"
//     }
// ]

// for(i=0;i<food.length;i++){
//     let userHTML = `
//     <div>
//     <ul>
//     <li><b>Tên món ăn:</b>${food[i].ten}</li>
//     <li><b>Địa điểm:</b> ${food[i].diaDiem}</li>
//     <li><b>Thời gian mở:</b> ${food[i].thoiGian}</li>
//     <li><b>Số điện thoại:</b> ${food[i].phone}</li>
//     <li><b>Giá:</b> ${food[i].price}</li>
//     <li><b>Hình ảnh, video về quán:<img src = ${food[i].picture}> </b></li> 
//     </br>
//     </div>`
//     danhSach.innerHTML += userHTML
// }

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

