import { makeStyles } from "@mui/styles";
import useColors from "../../../hooks/use-colors";
import HomeActivityC from "./activity/HomeActivityC";
import HomeDashboardC from "./dashboard/HomeDashboardC";
import HomeContributionC from "./contribution/HomeContributionC";

const useStyles = makeStyles(() => ({
  content: {
    padding: 60
  },
  firstInnerContent: {
    display: 'grid',
    gridTemplateColumns: 'auto auto 1fr',
    gap: 60,
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
    </div>
  )
}

export default HomeContentC;