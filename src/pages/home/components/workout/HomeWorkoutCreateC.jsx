import { makeStyles } from "@mui/styles";
import useColors from "../../../../hooks/use-colors";
import HomeButtonC from "../base/HomeButtonC";
import workouts from './workouts.json';

const useStyles = makeStyles(() => ({
  content: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    marginTop: 10,
    fontSize: 24,
    color: ({ colors }) => colors.contentColor
  },
  icon: {
    width: 70,
    height: 70,
    padding: 15,
    borderRadius: '100%',
    background: ({ colors }) => `${colors.contentColor}30`,
  },
  label: {
    width: '100%',
    marginTop: 10,
    fontSize: 16,
    fontWeight: 500,
    color: ({ colors }) => colors.hintColor,
  },
  inputContent: {
    position: 'relative',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },
  input: {
    flex: 1,
    height: 40,
    marginTop: 5,
    padding: '0 12px',
    borderRadius: 8,
    border: ({ colors }) => `2px ${colors.contentColor}50 solid`,
    background: ({ colors }) => `${colors.contentColor}30`,

    '&:focus': {
      outline: 'none',
      border: ({ colors }) => `2px ${colors.secondaryColor} solid`,
    }
  },
  metrics: {
    position: 'absolute',
    top: '55%',
    right: 12,
    fontSize: 14,
    transform: 'translateY(-50%)',
    color: ({ colors }) => colors.hintColor,
  },
  button: {
    marginTop: 15,
    width: '100%',
    height: 40,
    borderRadius: 8,
    border: ({ colors }) => `none`,
    background: ({ colors }) => `${colors.contentColor}30`,
  }
}));

function HomeWorkoutCreateC({ type }) {
  const colors = useColors();
  const styles = useStyles({ colors });

  const workout = workouts.data.find((workout) => workout.type === type)

  return (
    <div className={styles.content}>
      <img className={styles.icon} src={`/images/workouts/${workout.type}_white.svg`} alt="walk" />

      <h2 className={styles.title}>{workout.name}</h2>

      <p className={styles.label} style={{ marginTop: 20 }}>Calories</p>
      <div className={styles.inputContent}>
        <input className={styles.input} type="number" />
        <span className={styles.metrics}>calories</span>
      </div>

      <p className={styles.label}>Duration</p>
      <div className={styles.inputContent}>
        <input className={styles.input} type="number" />
        <span className={styles.metrics}>seconds</span>
      </div>

      <p className={styles.label}>End Time</p>
      <div className={styles.inputContent}>
        <input className={styles.input} type="date" />
        <input className={styles.input} type="time" />
      </div>

      <HomeButtonC>Add Training</HomeButtonC>
    </div>
  )
}

export default HomeWorkoutCreateC;