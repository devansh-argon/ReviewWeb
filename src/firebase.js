import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBRgHD3-hQAW_m65WtBC1ezEWYDIm8Ftfs",
  authDomain: "review-webapp-dfb60.firebaseapp.com",
  projectId: "review-webapp-dfb60",
  storageBucket: "review-webapp-dfb60.firebasestorage.app",
  messagingSenderId: "377028534711",
  appId: "1:377028534711:web:0387984e24ac5b86bf8832",
  measurementId: "G-RSK6TQBL9T",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getSuggestions() {
  const suggestionsCol = collection(db, 'suggestion');

  const snapshot = await getDocs(suggestionsCol);

  const docIds = snapshot.docs.map((doc) => doc.id);

  const indices = new Set();

  while (indices.size < 3) {
    indices.add(Math.floor(Math.random() * docIds.length));
  }

  const randomDocs = Array.from(indices).map((index) => {
    const docId = docIds[index];
    return snapshot.docs.find(doc => doc.id === docId).data();
  });

  return randomDocs;
}
