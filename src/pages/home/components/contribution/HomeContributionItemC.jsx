import { makeStyles } from "@mui/styles";
import useColors from "../../../../hooks/use-colors";

const useStyles = makeStyles(() => ({
  content: {
    width: 10,
    height: 10,
    borderRadius: 2,
    opacity: ({ alpha }) => alpha,
    background: ({ value, colors }) => value > 0 ? colors.thirdColor : `${colors.contentColor}20`,
  }
}));

function HomeContributionItemC({ value }) {
  const getAlphaByValue = (value) => {
    if (value === 0) return 1.0
    else if (value > 0 && value <= 3) return 0.2
    else if (value > 3 && value <= 5) return 0.5
    else if (value > 5 && value <= 7) return 0.7
    else return 1.0
  }

  const colors = useColors();
  const styles = useStyles({ colors, value, alpha: getAlphaByValue(value) });

  return (
    <div className={styles.content}></div>
  )
}

export default HomeContributionItemC;