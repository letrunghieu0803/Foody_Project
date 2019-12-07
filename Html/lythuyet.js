// console.log(firebase)

// var docRef = firebase
//     .firestore()
//     .collection("blogs")
//     .doc(KX9q1krJJBgJiIVX1cCa)
var db = firebase.firestore();

const demoDoc = db.collection("blogs").doc("KX9q1krJJBgJiIVX1cCa").get();

demoDoc.then(function (doc) {
        console.log(doc.data())
    })
    .catch(function (error) {
        console.log("Error getting document:", error);
    });

const docArr = db.collection("blogs")
    .get()
    .where("author", "==", "c4e53")
    .then(doc => {
        doc.forEach(element => {
            console.log(element.data())
        });
    })
    .catch(err => console.log(err))

// docRef.get().then(function (doc) {
//     if (doc.exists) {
//         console.log("Document data:", doc.data());
//     } else {
//         // doc.data() will be undefined in this case
//         console.log("No such document!");
//     }
// }).catch(function (error) {
//     console.log("Error getting document:", error);
// });

// firebase.firestore().collection("blogs").get().then(function (querySnapshot) {
//     querySnapshot.forEach(function (doc) {
//         // doc.data() is never undefined for query doc snapshots
//         console.log(doc.id, " => ", doc.data());
//     });
// });