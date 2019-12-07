const userInformationName = document.getElementById("user-information-name")
const updateInformation = document.getElementById("update-information")
console.dir(userInformationName)
// 
console.log(userInformationName.placeholder)

var db = firebase.firestore();

const userInfo = db.collection("userInformation").doc("WQf1ufbvQZ13bmmAXZAA");



updateInformation.addEventListener('click', () => {
    console.log(userInformationName.value)
    userInfo.set({
            name: userInformationName.value
        })
        .get()
        .then(doc => {
            doc.forEach(element => {
                console.log(element.data())
            });
        })
        .catch(err => console.log(err))
    console.log(userInformationName.value)
})