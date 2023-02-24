import { makeStyles } from "@mui/styles";
import useColors from "../../../../hooks/use-colors";

const useStyles = makeStyles(() => ({
  content: {}
}));

function HomeDashboardProgressC() {
  const colors = useColors();
  const styles = useStyles(colors);

  return (
    <div className={styles.content}>

    </div>
  );
}

export default HomeDashboardProgressC;