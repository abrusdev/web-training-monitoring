import AuthPage from "./pages/auth";
import Route from "./components/route";

function App() {
  return (
    <div>
      <Route path='/auth'>
        <AuthPage />
      </Route>
    </div>
  )
}

export default App;