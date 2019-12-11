const userReportMail = document.getElementById("email-report")
const userReportContent = document.getElementById("content-report")
const buttonReport = document.getElementById("submit-report")


const db = firebase.firestore().collection("userReport")

buttonReport.addEventListener('click', () => {
    db.add({
            Email: userReportMail.value,
            Content: userReportContent.value,
            createdAt: new Date(),
        })
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id)
            alert("Cảm ơn vì đóng góp của bạn!");
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });
    setTimeout(function () {
        window.location.href = "file:///C:/Users/PC/Desktop/Foody_Project/hieu/index.html"
    }, 3000);

})