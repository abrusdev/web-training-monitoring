import HomeTitleC from "../base/HomeTitleC";
import { makeStyles } from "@mui/styles";
import HomeCardC from "../base/HomeCardC";
import HomeWorkoutTypeC from "./HomeWorkoutTypeC";
import HomeWorkoutCreateC from "./HomeWorkoutCreateC";

const useStyles = makeStyles(() => ({
  content: {
    width: 480,
  },
  innerContent: {
    display: 'flex',
    gap: 15,
  }
}))

function HomeWorkoutC() {
  const styles = useStyles();


  return (
    <div className={styles.content}>
      <HomeTitleC>Add Workout</HomeTitleC>

      <div className={styles.innerContent}>
        <div>
          <HomeWorkoutTypeC type='ic_walk' isSelected />
          <HomeWorkoutTypeC type='ic_run' />
          <HomeWorkoutTypeC type='ic_hit' />
        </div>

        <HomeCardC height={450}>
          <HomeWorkoutCreateC type='ic_walk' />
        </HomeCardC>
      </div>
    </div>
  );
}

export default HomeWorkoutC;