import { makeStyles } from "@mui/styles";
import useColors from "../../../../hooks/use-colors";

const useStyles = makeStyles(() => ({
  content: {},
  title: {}
}));

function HomeActivityItemC({ value, label }) {
  const colors = useColors();
  const styles = useStyles({ colors });

  return (
    <div className={styles.content}>

    </div>
  )
}

export default HomeActivityItemC;