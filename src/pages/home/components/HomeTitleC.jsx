import { makeStyles } from "@mui/styles";
import useColors from "../../../hooks/use-colors";

const useStyles = makeStyles(() => ({
  content: {
    color: ({ colors }) => colors.contentColor,
    fontSize: 20,
  }
}));

function HomeTitleC({ children }) {
  const colors = useColors();
  const styles = useStyles({ colors });

  return (
    <h2 className={styles.content}>{children}</h2>
  )
}

export default HomeTitleC;