import { makeStyles } from "@mui/material";
import useAuth from "./use-auth";

function useStyles() {
  const { colors } = useAuth();

  return makeStyles({ colors })
}

export default useStyles;