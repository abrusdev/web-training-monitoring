import { useContext } from "react";
import ColorsContext from "../context/colors";

function useColors() {
  return useContext(ColorsContext);
}

export default useColors;