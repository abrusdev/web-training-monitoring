import HomeTitleC from "../HomeTitleC";
import { makeStyles } from "@mui/styles";
import useColors from "../../../../hooks/use-colors";
import HomeCardC from "../HomeCardC";

const useStyles = makeStyles(() => ({
  content: {},
  innerContent: {
    width: '100%',
    height: 240,
    background: ({ colors }) => colors.primaryColor,
  }
}))

function HomeContributionC() {
  const colors = useColors();
  const styles = useStyles({ colors });

  return (
    <div>
      <HomeTitleC>Contributions</HomeTitleC>
      <HomeCardC>

      </HomeCardC>
    </div>
  );
}

export default HomeContributionC;