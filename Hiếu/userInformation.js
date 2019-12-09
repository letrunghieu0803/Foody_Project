const userInformationName = document.getElementById("user-information-name");
const updateInformation = document.getElementById("update-information");
const userBirthday = document.getElementById("user-information-birthday");
const userEmail = document.getElementById("user-information-email");
const userPlace = document.getElementById("user-information-place");
const userPhone = document.getElementById("user-information-phone");
const userCMND = document.getElementById("user-information-CMND");
const mainForm = document.querySelector("#mainForm");

const gender1 = document.querySelector("#gender1");
const gender2 = document.querySelector("#gender2");
const gender3 = document.querySelector("#gender3");

var db = firebase.firestore();

const userInfo = db.collection("userInformation");

mainForm.addEventListener("click", event => {
  event.preventDefault();
  const newRecord = {
    name: userInformationName.value,
    ngay: userBirthday.value,
    gioitinh: gender1.value || gender2.value || gender3.value,
    email: userEmail.value,
    diadiem: userPlace.value,
    sdt: userPhone.value,
    cmnd: userCMND.value
  };
  userInfo
    .add(newRecord)
    .then(doc => {
      doc.forEach(element => {
        console.log(element.data());
      });
    })
    .catch(err => console.log(err));
  console.log(userInformationName.value);
});
