import { makeStyles } from "@mui/styles";
import HomeTitleC from "../HomeTitleC";
import useColors from "../../../../hooks/use-colors";
import HomeActivityItemC from "./HomeActivityItemC";

const useStyles = makeStyles(() => ({
  content: {},
  innerContent: {
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 50px)',
    gap: 20,

    width: 'auto',
    height: 240,

    marginTop: 15,
    padding: '15px 30px',
    background: ({ colors }) => colors.primaryColor,
    borderRadius: 8,
  }
}));

function HomeActivityC() {
  const colors = useColors();
  const styles = useStyles({ colors });

  return (
    <div className={styles.content}>
      <HomeTitleC>Activity</HomeTitleC>
      <div className={styles.innerContent}>
        <HomeActivityItemC label='Mo' value='40' />
        <HomeActivityItemC label='Tu' value='30' />
        <HomeActivityItemC label='We' value='20' />
        <HomeActivityItemC label='Th' value='90' />
        <HomeActivityItemC label='Fr' isActive value='60' />
        <HomeActivityItemC label='Sa' />
        <HomeActivityItemC label='Su' />
      </div>
    </div>
  )
}

export default HomeActivityC;