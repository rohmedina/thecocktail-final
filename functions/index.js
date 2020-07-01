const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);
const express = require("express");
const cors = require("cors");
const router = express();
router.use(cors({ origin: true }));
// router.get("/drinks/:id", async (req, res) => {
//   const drink = await admin
//     .firestore()
//     .collection("usuarios")
//     .doc(req.params.id)
//     .get()
//     .then((doc) => {
//       if (doc.exists) {
//         console.log("Document data:", doc.data());
//         return doc.data();
//       } else {
//         console.log("No such document!");
//         return {};
//       }
//     });
//   res.send(drink);
// });
router.get("/drinks/:id", async (req, res) => {
  const drinks = await admin
    .firestore()
    .collection("usuarios")
    .doc(req.params.id)
    .get()
    .then(function(doc) {
      if (doc.exists) {
        return doc.data();
        console.log("Document data:", doc.data());
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    })
    .catch(function(error) {
      console.log("Error getting document:", error);
    });
  res.send(drinks);
});
router.post("/drink", async (req, res) => {
  const drink = await admin
    .firestore()
    .collection("usuarios")
    .doc(req.body.email)
    .set(req.body.drinks)
    .then(() => {
      return "todo bien";
    });
  res.send(drink);
});
// router.put("/drink/:id", async (req, res) => {
//   const drink = await admin
//     .firestore()
//     .collection("drinks")
//     .doc(req.params.id)
//     .update(req.body)
//     .then((doc) => {
//       if (doc.exists) {
//         console.log("Document data:", doc.data());
//         return doc.data();
//       } else {
//         console.log("No such document!");
//         return {};
//       }
//     });
//   res.send(drink);
// });
// router.delete("/drink/:id", async (req, res) => {
//   const drink = await admin
//     .firestore()
//     .collection("drinks")
//     .doc(req.params.id)
//     .delete();
//   res.send(drink);
// });
exports.drinks = functions.https.onRequest(router);
