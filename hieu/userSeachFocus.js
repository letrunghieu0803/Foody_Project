const button = document.getElementById("element.id");
const danhSach = document.getElementById("danhsach");
const db = firebase.firestore();
const id = window.localStorage.getItem("currentBlog");
if (id) {
    const demoDoc = db
        .collection("food")
        .doc(id)
        .get();
    demoDoc
        .then(data => {
            danhSach.innerHTML = `<ul>
      <li><b>Tên món ăn:</b> ${data.data().ten}} </li>
               <li><b>Địa điểm:</b> ${data.data().diadiem} </li>
               <li><b>Thời gian mở:</b> ${data.data().thoigian} </li>
               <li><b>Số điện thoại:</b> ${data.data().sdt}</li>
               <li><b>Giá:</b> ${data.data().gia}</li>
               <li><b>Hình ảnh, video về quán:</b></li> 
               <img src= ${data.data().hinhanh1} width="280px" height="150px">
               <img src= ${data.data().hinhanh2} width="280px" height="150px">
               <img src= ${data.data().hinhanh3} width="280px" height="150px">
               <img src= ${data.data().hinhanh4} width="280px" height="150px">
               </ul>`;
        })
        .catch(function (error) {});
}