import { makeStyles } from "@mui/styles";
import useColors from "../../../../hooks/use-colors";
import HomeContributionAnalyticsC from "./HomeContributionAnalyticsC";
import HomeContributionItemC from "./HomeContributionItemC";
import HomeCardC from "../base/HomeCardC";
import HomeTitleC from "../base/HomeTitleC";

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
  }
}))

function HomeContributionC() {
  const colors = useColors();
  const styles = useStyles({ colors });

  const items = [];

  for (let i = 0; i < 365; i++) {
    items.push(<HomeContributionItemC value={i > 300 ? (i % 10) : 0} />)
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