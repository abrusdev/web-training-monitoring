import { makeStyles } from "@mui/styles";
import useColors from "../../../../hooks/use-colors";
import Progress from "../../../../components/progress";

const useStyles = makeStyles(() => ({
  content: {},
  progressContent: {
    width: 120,
    height: 120,
  }
}));

function HomeDashboardProgressC() {
  const colors = useColors();
  const styles = useStyles({ colors });

  return (
    <div className={styles.content}>
      <div className={styles.progressContent}>
        <Progress radius='60' value='50' />
      </div>
    </div>
  );
}

export default HomeDashboardProgressC;