import AuthPage from "./pages/auth";
import Route from "./components/route";
import HomePage from "./pages/home";
import { useSelector } from "react-redux";
import Loader from "./components/loader";

function App() {
  const { isLoading } = useSelector((state) => {
    return state.user
  })

  return (
    <div>
      {isLoading && <Loader />}

      <Route path='/auth'>
        <AuthPage />
      </Route>

      <Route path='/'>
        <HomePage />
      </Route>
    </div>
  )
}

export default App;