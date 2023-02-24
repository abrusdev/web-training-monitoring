import { collection, getDocs, getFirestore } from "firebase/firestore/lite";
import { initializeApp } from "firebase/app";
import config from "../config.json";

const firebaseConfig = config;

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getPath(path) {
  const data = await getDocs(collection(db, 'users'))
  return data.docs
}

export { getPath };