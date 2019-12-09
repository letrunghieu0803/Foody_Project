const button = document.getElementById("element.id")
const danhSach = document.getElementById("danhsach")
// console.log(firebase.firestore())
const db = firebase.firestore()

// const demoDoc = db.collection("banhmy1").doc("4SWYCtpnhjbZ3NmNF0sy").get();
// demoDoc.then(data =>{
//     // 
//     var banhMy = data.data()
//         danhSach.innerHTML = `<ul>
//         <li><b>Tên món ăn:</b> ${banhMy.ten} </li>
//         <li><b>Địa điểm:</b> ${banhMy.diadiem} </li>
//         <li><b>Thời gian mở:</b> ${banhMy.thoigian} </li>
//         <li><b>Số điện thoại:</b> ${banhMy.sdt}</li>
//         <li><b>Giá:</b> ${banhMy.gia}</li>
//         <li><b>Hình ảnh, video về quán:</b> </br> <img src= ${banhMy.hinhanh} width="280px" height="150px"></li> 
//     </ul>`
// })
// .catch(function(error){})

//lay tat ca database
const docArr = db.collection("pho").get()
.then(data => {
    const dataArr = [];
    data.forEach(element =>{
        console.log(element.data())
        console.log(element.id);
        danhSach.innerHTML += `
        <ul>
            <li><b>Tên món ăn:</b> ${element.data().ten} </li>
            <li><b>Địa điểm:</b> ${element.data().diadiem} </li>
            <li><b>Thời gian mở:</b> ${element.data().thoigian} </li>
            <li><b>Số điện thoại:</b> ${element.data().sdt}</li>
            <li><b>Giá:</b> ${element.data().gia}</li>
            <li><b>Hình ảnh, video về quán:</b> <a href='http://127.0.0.1:5501/banhmy.html'><img src= ${element.data().hinhanh} width="280px" height="150px"></a></li> 
        </ul>`
        
    })
})
.catch(err => console.log(err))

// button.addEventListener("click",()=>{
//     window.open("http://127.0.0.1:5501/banhmy.html/4SWYCtpnhjbZ3NmNF0sy")
// })