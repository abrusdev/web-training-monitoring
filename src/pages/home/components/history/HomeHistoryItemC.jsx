import { makeStyles } from "@mui/styles";
import useColors from "../../../../hooks/use-colors";

const useStyles = makeStyles(() => ({
  content: {
    position: 'relative',

    display: 'flex',
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

      <div className={styles.line}></div>
    </div>
  )
}

export default HomeHistoryItemC;