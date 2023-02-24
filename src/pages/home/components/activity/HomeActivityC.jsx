import { makeStyles } from "@mui/styles";
import HomeTitleC from "../HomeTitleC";
import useColors from "../../../../hooks/use-colors";

const useStyles = makeStyles(() => ({
  content: {},
  innerContent: {
    marginTop: 15,
    width: '100%',
    padding: 20,
    background: ({ colors }) => colors.primaryColor,
    borderRadius: 8,
  }
}));

function HomeActivityC() {
  const colors = useColors();
  const styles = useStyles({ colors });

  return (
    <div className={styles.content}>
      <HomeTitleC>Activity</HomeTitleC>
      <div className={styles.innerContent}>

      </div>
    </div>
  )
}

export default HomeActivityC;