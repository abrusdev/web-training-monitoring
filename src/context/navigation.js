import { createContext, useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";

const NavigationContext = createContext();

const NavigationProvider = ({ children }) => {
  const [path, setPath] = useState(window.location.pathname);
  const { data: user } = useSelector((state) => {
    return state.user
  })

  useEffect(() => {
    const handler = () => {
      setPath(window.location.pathname)
    }

    window.addEventListener('popstate', handler);

    if (!user.id) {
      navigate('/auth')
    }

    return () => {
      window.removeEventListener('popstate', handler);
    }
  }, []);

  const navigate = (to) => {
    window.history.pushState({}, '', to)
    setPath(to)
  }

  return (
    <NavigationContext.Provider value={{ path, navigate }}>
      {children}
    </NavigationContext.Provider>
  )
}

export { NavigationProvider };
export default NavigationContext;