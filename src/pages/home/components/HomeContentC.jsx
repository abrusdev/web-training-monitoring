import { makeStyles } from "@mui/styles";
import useColors from "../../../hooks/use-colors";
import HomeActivityC from "./activity/HomeActivityC";

const useStyles = makeStyles(() => ({
  content: {
    padding: 60
  },
  firstInnerContent: {
    display: 'grid',
    gridTemplateColumns: '4fr 60px 3fr 60px 3fr',
  }
}));

function HomeContentC() {
  const colors = useColors();
  const styles = useStyles({ colors })

  return (
    <div className={styles.content}>

      <div className={styles.firstInnerContent}>
        <HomeActivityC />
      </div>
    </div>
  )
}

export default HomeContentC;