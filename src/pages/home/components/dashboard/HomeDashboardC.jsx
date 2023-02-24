import HomeTitleC from "../HomeTitleC";
import { makeStyles } from "@mui/styles";
import useColors from "../../../../hooks/use-colors";

const useStyles = makeStyles(() => ({
  content: {
    width: 400,
  },
  innerContent: {
    gap: 20,

    height: 240,

    marginTop: 15,
    padding: '15px 30px',
    background: ({ colors }) => colors.primaryColor,
    borderRadius: 8,
  }
}));

function HomeDashboardC() {

  const colors = useColors();
  const styles = useStyles({ colors });

  return (
    <div className={styles.content}>
      <HomeTitleC>Overview</HomeTitleC>
      <div className={styles.innerContent}>

      </div>
    </div>
  )
}

export default HomeDashboardC;