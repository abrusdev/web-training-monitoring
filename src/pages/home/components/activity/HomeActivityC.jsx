import { makeStyles } from "@mui/styles";
import HomeTitleC from "../HomeTitleC";
import useColors from "../../../../hooks/use-colors";
import HomeActivityItemC from "./HomeActivityItemC";
import HomeCardC from "../HomeCardC";

const useStyles = makeStyles(() => ({
  content: {},
  innerContent: {
    height: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 50px)',
    gap: 20,
  }
}));

function HomeActivityC() {
  const colors = useColors();
  const styles = useStyles({ colors });

  return (
    <div className={styles.content}>
      <HomeTitleC>Activity</HomeTitleC>
      <HomeCardC>
        <div className={styles.innerContent}>
          <HomeActivityItemC label='Mo' value='80' />
          <HomeActivityItemC label='Tu' value='30' />
          <HomeActivityItemC label='We' value='20' />
          <HomeActivityItemC label='Th' value='90' />
          <HomeActivityItemC label='Fr' isActive value='60' />
          <HomeActivityItemC label='Sa' />
          <HomeActivityItemC label='Su' />
        </div>
      </HomeCardC>
    </div>
  )
}

export default HomeActivityC;