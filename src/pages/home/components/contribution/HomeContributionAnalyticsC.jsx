import { makeStyles } from "@mui/styles";
import useColors from "../../../../hooks/use-colors";
import { cn } from "../../../../utils";

const useStyles = makeStyles(() => ({
  content: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: 15,
  },
  title: {
    alignSelf: 'center',
    fontSize: 20,
  },
  label: {
    paddingLeft: 15,
    position: 'relative',
    fontSize: 14,
    fontWeight: 500,
    opacity: 0.4,

    '&:before': {
      content: "''",
      position: 'absolute',
      left: 0,
      top: '50%',
      transform: 'translate(0,-50%)',
      width: 10,
      height: 10,
      borderRadius: '100%',
      background: ({ colors }) => colors.thirdColor
    }
  },
  value: {
    marginTop: 5,
    fontSize: 18,
  }
}))

function HomeContributionAnalyticsC() {
  const colors = useColors();
  const styles = useStyles({ colors });

  return (
    <div className={styles.content}>
      <p className={styles.title}>Statistics</p>

      <div>
        <p className={styles.label}>Today</p>
        <p className={styles.value}>1 workout</p>
      </div>

      <div>
        <p className={styles.label}>Last week</p>
        <p className={styles.value}>10 workouts</p>
      </div>

      <div>
        <p className={styles.label}>Last month</p>
        <p className={styles.value}>15 workouts</p>
      </div>

    </div>
  );
}

export default HomeContributionAnalyticsC;