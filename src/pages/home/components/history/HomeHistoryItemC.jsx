import { makeStyles } from "@mui/styles";
import useColors from "../../../../hooks/use-colors";

const useStyles = makeStyles(() => ({
  content: {
    position: 'relative',

    display: 'flex',
    columnGap: 20,
    justifyContent: 'space-between',
    alignItems: 'center',

    marginTop: 10,
    width: '100%',
    height: 60,
  },
  line: {
    position: 'absolute',
    width: '100%',
    height: 2,
    bottom: 0,
    background: ({ colors }) => `${colors.contentColor}10`
  },
  iconContent: {
    width: 30,
    height: 30,
    padding: 5,
    borderRadius: 10,
    background: ({ colors }) => `linear-gradient(${colors.secondaryColor}, ${colors.thirdColor})`
  },
  icon: {
    width: '100%',
    height: '100%',
    color: ({ colors }) => `tint(${colors.primaryColor})`,
  },
  typeContent: {
    flex: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: 5,
  },
  type: {
    fontSize: 18,
    fontWeight: 500,
  },
  date: {
    fontSize: 14,
    fontWeight: 700,
    opacity: 0.6
  },
  label: {
    fontSize: 14,
    fontWeight: 500,
    opacity: 0.6
  },
  value: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: 700,
    opacity: 1
  }
}))

function HomeHistoryItemC() {
  const colors = useColors();
  const styles = useStyles({ colors });

  return (
    <div className={styles.content}>
      <div className={styles.iconContent}>
        <img className={styles.icon} src="/images/workouts/ic_walk.svg" alt="training icon" />
      </div>

      <div className={styles.typeContent}>
        <h4 className={styles.type}>Run Workout</h4>
        <p className={styles.date}>25 Feb, 2023 at 01:00 AM</p>
      </div>

      <div>
        <p className={styles.label}>Activity</p>
        <p className={styles.value}>400 kcal</p>
      </div>

      <div>
        <p className={styles.label}>Duration</p>
        <p className={styles.value}>04:00</p>
      </div>

      <div className={styles.line}></div>
    </div>
  )
}

export default HomeHistoryItemC;