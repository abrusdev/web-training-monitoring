import HomeTitleC from "../HomeTitleC";
import { makeStyles } from "@mui/styles";
import useColors from "../../../../hooks/use-colors";
import HomeCardC from "../HomeCardC";
import HomeContributionAnalyticsC from "./HomeContributionAnalyticsC";

const useStyles = makeStyles(() => ({
  content: {
    flex: 1,
  },
  card: {
    display: "flex",
    justifyContent: "space-between",
    columnGap: 20,
  },
  innerContent: {
    display: 'grid',
    gap: 5,
    gridAutoFlow: 'column',
    gridTemplateRows: 'repeat(14, 1fr)'
  },
  itemContent: {
    width: 10,
    height: 10,
    borderRadius: 2,
    background: ({ colors }) => `${colors.contentColor}20`
  }
}))

function HomeContributionC() {
  const colors = useColors();
  const styles = useStyles({ colors });

  const items = [];

  for (let i = 0; i < 365; i++) {
    items.push(<div className={styles.itemContent}></div>)
  }

  return (
    <div className={styles.content}>
      <HomeTitleC>Contributions</HomeTitleC>
      <HomeCardC className={styles.card}>
        <div className={styles.innerContent}>
          {items}
        </div>

        <HomeContributionAnalyticsC />
      </HomeCardC>
    </div>
  );
}

export default HomeContributionC;