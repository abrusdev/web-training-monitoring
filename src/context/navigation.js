import { createContext, useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../store";

const NavigationContext = createContext();

const NavigationProvider = ({ children }) => {
  const dispatch = useDispatch();

  const [path, setPath] = useState(window.location.pathname);
  const { data: user } = useSelector((state) => {
    return state.user
  })

  useEffect(() => {
    if (user.id)
      dispatch(getUser());
  }, [])

  useEffect(() => {
    if (!user.id && path !== '/auth') {
      navigate('/auth')
    }

    if (user.id && path === '/auth') {
      navigate('/')
    }

  }, [user])

  useEffect(() => {
    const handler = () => {
      setPath(window.location.pathname)
    }

    window.addEventListener('popstate', handler);

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