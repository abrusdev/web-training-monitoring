import { collection, addDoc, getDocs, getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { AES, enc } from "crypto-js";
import config from "../config.json";

const firebaseConfig = config;

async function GET(path) {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const data = await getDocs(collection(db, path))
  return data.docs
}

async function POST(path, data) {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const ref = collection(db, path);

  return await addDoc(ref, data);
}

function encrypt(password) {
  return AES.encrypt(password, config.apiKey).toString()
}

function decrypt(password) {
  return AES.decrypt(password, config.apiKey).toString(enc.Utf8)
}

export { encrypt, decrypt, GET, POST };