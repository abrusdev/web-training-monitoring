import AuthPage from "./pages/auth";
import { NavigationProvider } from "./context/navigation";
import { ColorsProvider } from "./context/colors";

function App() {
  return (
    <NavigationProvider>
      <ColorsProvider>
        <AuthPage />
      </ColorsProvider>
    </NavigationProvider>
  )
}

export default App;