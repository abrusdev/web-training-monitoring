import { makeStyles } from "@mui/styles";
import HomeTopContentC from "./components/HomeTopContentC";
import useColors from "../../hooks/use-colors";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../store";

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
    </div>
  )
}

export default HomePage;