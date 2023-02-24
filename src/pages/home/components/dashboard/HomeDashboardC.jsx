import { makeStyles } from "@mui/styles";
import useColors from "../../../../hooks/use-colors";
import HomeDashboardProgressC from "./HomeDashboardProgressC";
import HomeCardC from "../base/HomeCardC";
import HomeTitleC from "../base/HomeTitleC";

const useStyles = makeStyles(() => ({
  content: {
    width: 450,
  }
}));

function HomeDashboardC() {

  const colors = useColors();
  const styles = useStyles({ colors });

  return (
    <div className={styles.content}>
      <HomeTitleC>Overview</HomeTitleC>

      <HomeCardC>
        <HomeDashboardProgressC />
      </HomeCardC>
    </div>
  )
}

export default HomeDashboardC;