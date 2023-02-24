import { makeStyles } from "@mui/styles";
import useColors from "../../../../hooks/use-colors";
import Progress from "../../../../components/progress";

const useStyles = makeStyles(() => ({
  content: {
    display: 'flex',
    alignItems: 'center',
    gap: 50
  },
  progressContent: {
    width: 150,
    height: 150,
  },
  innerContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
  },
  innerLabel: {
    position: 'relative',
    paddingLeft: 15,
    fontSize: 14,
    opacity: 0.6,
    fontWeight: 500,
    color: ({ colors }) => colors.contentColor,

    '&:before': {
      content: "''",
      position: 'absolute',
      left: 0,
      top: '50%',
      transform: 'translate(0,-50%)',
      width: 10,
      height: 10,
      borderRadius: '100%',
      background: ({ colors }) => colors.secondaryColor
    }
  },
  innerValue: {
    marginTop: 4,
    fontSize: 20,
    fontWeight: 700,
    color: ({ colors }) => colors.contentColor,
  }
}));

function HomeDashboardProgressC() {
  const colors = useColors();
  const styles = useStyles({ colors });

  return (
    <div className={styles.content}>
      <div className={styles.progressContent}>
        <Progress value='60' />
      </div>
      <div className={styles.innerContent}>
        <div>
          <p className={styles.innerLabel}>Calories burn</p>
          <h2 className={styles.innerValue}>300 kcal</h2>
        </div>

        <div>
          <p className={styles.innerLabel}>Distance passed</p>
          <h2 className={styles.innerValue}>4.5 km</h2>
        </div>

        <div>
          <p className={styles.innerLabel}>Active Time</p>
          <h2 className={styles.innerValue}>01:32</h2>
        </div>
      </div>
    </div>
  );
}

export default HomeDashboardProgressC;