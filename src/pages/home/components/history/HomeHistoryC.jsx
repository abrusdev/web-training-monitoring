import HomeTitleC from "../base/HomeTitleC";
import { makeStyles } from "@mui/styles";
import HomeHistoryItemC from "./HomeHistoryItemC";
import HomeButtonC from "../base/HomeButtonC";

const useStyles = makeStyles(() => ({
  content: {
    width: 500,
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
        <HomeHistoryItemC />

        <HomeButtonC>Show More</HomeButtonC>
      </div>
    </div>
  )
}

export default HomeHistoryC;