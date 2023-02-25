import { collection, getDocs, getFirestore } from "firebase/firestore/lite";
import { initializeApp } from "firebase/app";
import { AES, enc } from "crypto-js";
import config from "../config.json";

const firebaseConfig = config;

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getPath(path) {
  const data = await getDocs(collection(db, 'users'))
  return data.docs
}

function encrypt(password) {
  return AES.encrypt(password, config.apiKey).toString()
}

function decrypt(password) {
  return AES.decrypt(password, config.apiKey).toString(enc.Utf8)
}

export { encrypt, decrypt, getPath };