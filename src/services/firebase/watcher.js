import { auth, db } from "./setup";

export function watchUserChange(callback) {
  const unsub = auth.onAuthStateChanged((user) => {
    if (user && !user.isAnonymous) {
      console.log("logueado");
      callback({
        id: user.uid,
        email: user.email,
        displayName: user.displayName,
      });
    } else {
      console.log("No logueado");
      callback(null);
    }
  });

  return unsub;
}

export function watchExpenses(callback) {
  const unsub = db.collection("expenses").onSnapshot((snapshot) => {
    const docs = [];

    snapshot.forEach((doc) => {
      const data = doc.data();
      docs.push({
        ...data,
        id: doc.id,
      });
    });
    callback(docs);
  });

  return unsub;
}
