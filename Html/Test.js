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
    .where("author", "==", "hieultd")
    .get()
    .then(doc => {
        doc.forEach(element => {
            console.log(element.data())
        });
    })
    .catch(err => console.log(err))

//
const blogsMoi = db.collection("blogs")

const object = {
    tren: "troi",
    duoi: "dat",
    ngang: "trai",
    thang: "tap",
    createdAt: new Date(),
}
// blogsMoi.add(object);

//update

blogsMoi.doc("KX9q1krJJBgJiIVX1cCa")
    .update({
        author: "hieukeke",
        content: "da test update"

    })