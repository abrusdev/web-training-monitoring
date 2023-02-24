
import AuthContext from "./context/AuthContext";
import AuthPage from "./pages/auth";

function App() {


  //


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
        primaryDarkColor: "#000000",
        contentColor: "#ffffff",
        hintColor: "#949494",
        secondaryColor: "#E2FFA7",
        thirdColor: "#48FEBC",
      }
    }}>
      <AuthPage />
    </AuthContext.Provider>
  )
}

export default App;