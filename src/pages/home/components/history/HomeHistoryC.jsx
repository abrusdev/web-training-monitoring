import HomeTitleC from "../base/HomeTitleC";
import { makeStyles } from "@mui/styles";
import HomeHistoryItemC from "./HomeHistoryItemC";

const useStyles = makeStyles(() => ({
  content: {
    width: 600,
  },
  innerContent: {
    marginTop: 15,
  }
}))

function HomeHistoryC() {
  const styles = useStyles();

  return (
    <div className={styles.content}>
      <HomeTitleC>Workouts History</HomeTitleC>
      <div className={styles.innerContent}>
        <HomeHistoryItemC />
        <HomeHistoryItemC />
        <HomeHistoryItemC />
        <HomeHistoryItemC />
      </div>
    </div>
  )
}

export default HomeHistoryC;