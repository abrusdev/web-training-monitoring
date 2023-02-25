import HomeTitleC from "../base/HomeTitleC";
import { makeStyles } from "@mui/styles";
import HomeCardC from "../base/HomeCardC";
import HomeWorkoutTypeC from "./HomeWorkoutTypeC";
import HomeWorkoutCreateC from "./HomeWorkoutCreateC";
import { useState } from "react";

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

  const [type, setType] = useState('ic_walk');

  const handleSelect = (type) => {
    setType(type)
  }

  return (
    <div className={styles.content}>
      <HomeTitleC>Add Workout</HomeTitleC>

      <div className={styles.innerContent}>
        <div>
          <HomeWorkoutTypeC type='ic_walk' selectedType={type} onSelect={handleSelect} />
          <HomeWorkoutTypeC type='ic_run' selectedType={type} onSelect={handleSelect} />
          <HomeWorkoutTypeC type='ic_hit' selectedType={type} onSelect={handleSelect} />
        </div>

        <HomeCardC height={450}>
          <HomeWorkoutCreateC type={type} />
        </HomeCardC>
      </div>
    </div>
  );
}

export default HomeWorkoutC;