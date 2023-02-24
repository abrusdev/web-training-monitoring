import { makeStyles } from "@mui/styles";
import HomeTopContentC from "./components/HomeTopContentC";
import useColors from "../../hooks/use-colors";
import HomeContentC from "./components/HomeContentC";

const useStyles = makeStyles(() => ({
  content: {
    position: 'relative',
    width: '100%',
    minHeight: '100vh',
    background: ({ colors }) => colors.primaryDarkColor
  }
}))

function HomePage() {
  const colors = useColors()
  const styles = useStyles({ colors });

  return (
    <div className={styles.content}>
      <HomeTopContentC />

      <HomeContentC />
    </div>
  )
}

export default HomePage;