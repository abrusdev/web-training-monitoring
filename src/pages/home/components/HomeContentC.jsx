import { makeStyles } from "@mui/styles";
import useColors from "../../../hooks/use-colors";
import HomeActivityC from "./activity/HomeActivityC";
import HomeDashboardC from "./dashboard/HomeDashboardC";
import HomeContributionC from "./contribution/HomeContributionC";
import HomeHistoryC from "./history/HomeHistoryC";

const useStyles = makeStyles(() => ({
  content: {
    padding: 60
  },
  firstInnerContent: {
    display: 'flex',
    gap: 60,
  },
  secondInnerContent: {
    marginTop: 60,
    display: 'flex',
    gap: 60
  }
}));

function HomeContentC() {
  const colors = useColors();
  const styles = useStyles({ colors })

  return (
    <div className={styles.content}>
      <div className={styles.firstInnerContent}>
        <HomeActivityC />

        <HomeDashboardC />

        <HomeContributionC />
      </div>

      <div className={styles.secondInnerContent}>
        <HomeHistoryC />
      </div>
    </div>
  )
}

export default HomeContentC;