import { makeStyles } from "@mui/styles";
import useColors from "../../../hooks/use-colors";
import { useSelector } from "react-redux";

const useStyles = makeStyles(() => ({
  content: {
    width: '100%',
    height: 100,

    display: 'flex',
    alignItems: 'center',

    background: ({ colors }) => colors.primaryColor,
    padding: '16px 40px'
  },
  label: {
    color: ({ colors }) => colors.hintColor,
    fontWeight: 700,
    fontSize: 16
  },
  title: {
    color: ({ colors }) => colors.contentColor,
    fontWeight: 400,
    fontSize: 24
  }
}))

function HomeTopContentC() {
  const { data: user } = useSelector((state) => state.user)

  const colors = useColors();
  const styles = useStyles({ colors });


  return (
    <div className={styles.content}>
      <div>
        <div className={styles.label}>Good Morning</div>
        <p className={styles.title}>{user.name}</p>
      </div>
    </div>
  )
}

export default HomeTopContentC;