const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);
const express = require("express");
const cors = require("cors");
const router = express();
router.use(cors({ origin: true }));
router.get("/drinks/:drink", async (req, res) => {
  const drink = await admin
    .firestore()
    .collection("drinks")
    .doc(req.params.drink)
    .get()
    .then((doc) => {
      if (doc.exists) {
        console.log("Document data:", doc.data());
        return doc.data();
      } else {
        console.log("No such document!");
        return {};
      }
    });
  res.send(drink);
});
router.get("/drinks", async (req, res) => {
  const drinks = await admin
    .firestore()
    .collection("drinks")
    .get();
  var lista = [];
  drinks.docs.forEach((doc) => {
    lista.push({ id: doc.id, data: doc.data() });
  });
  res.send(lista);
});
router.post("/drink", async (req, res) => {
  const drink = await admin
    .firestore()
    .collection("drinks")
    .add(req.body)
    .then((docRef) => {
      return docRef.id;
    });
  res.send(drink);
});
router.put("/drink/:id", async (req, res) => {
  const drink = await admin
    .firestore()
    .collection("drinks")
    .doc(req.params.id)
    .update(req.body)
    .then((doc) => {
      if (doc.exists) {
        console.log("Document data:", doc.data());
        return doc.data();
      } else {
        console.log("No such document!");
        return {};
      }
    });
  res.send(drink);
});
router.delete("/drink/:id", async (req, res) => {
  const drink = await admin
    .firestore()
    .collection("drinks")
    .doc(req.params.id)
    .delete();
  res.send(drink);
});
exports.drinks = functions.https.onRequest(router);
