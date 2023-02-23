import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore/lite';
import AuthContext from "./context/AuthContext";
import AuthPage from "./pages/auth";

function App() {

  // const firebaseConfig = {
  //   apiKey: "AIzaSyAtvznBiElu4oPwez1vbaNRpRmFZV8T8Jg",
  //   authDomain: "web-training-monitori.firebaseapp.com",
  //   databaseURL: "https://web-training-monitori-default-rtdb.firebaseio.com",
  //   projectId: "web-training-monitori",
  //   storageBucket: "web-training-monitori.appspot.com",
  //   messagingSenderId: "327741577117",
  //   appId: "1:327741577117:web:86eed89e0c039e5a4fc174",
  //   measurementId: "G-0WK3WETG8V"
  // };
  //
  // const app = initializeApp(firebaseConfig);
  // const db = getFirestore(app);

  // new Promise(async () => {
  // await addDoc(collection(db, 'workouts'), {
  //   "workout": "workout"
  // });

  //   const data = await getDocs(collection(db, 'users'))
  //   const info = data.docs.map(doc => {
  //     console.log(doc.id);
  //     doc.data()
  //   })
  //   console.log(info)
  // }).then()

  return (
    <AuthContext.Provider value={{
      colors: {
        primaryColor: "#0F0F0F",
        secondaryColor: "#000000",
        contentColor: "#ffffff",
        hintColor: "#949494"
      }
    }}>
      <AuthPage />
    </AuthContext.Provider>
  )
}

export default App;