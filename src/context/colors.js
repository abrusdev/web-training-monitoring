import { createContext } from "react";

const ColorsContext = createContext();

const ColorsProvider = ({ children }) => {

  return (
    <ColorsContext.Provider value={{
      primaryColor: "#0F0F0F",
      primaryDarkColor: "#000000",
      contentColor: "#ffffff",
      hintColor: "#949494",
      secondaryColor: "#E2FFA7",
      thirdColor: "#48FEBC",
      progressColor: "#BDBCB7",
    }}>
      {children}
    </ColorsContext.Provider>
  )
}

export default ColorsContext;
export { ColorsProvider };