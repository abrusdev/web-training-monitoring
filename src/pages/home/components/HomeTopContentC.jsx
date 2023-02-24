import { makeStyles } from "@mui/styles";
import useColors from "../../../hooks/use-colors";
import { useSelector } from "react-redux";

const useStyles = makeStyles(() => ({
  content: {
    width: '100%',
    height: 100,

    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    background: ({ colors }) => colors.primaryColor,
    padding: '16px 60px'
  },
  label: {
    color: ({ colors }) => colors.hintColor,
    fontWeight: 700,
    fontSize: 16,
    opacity: 0.6
  },
  title: {
    marginTop: 5,
    color: ({ colors }) => colors.contentColor,
    fontWeight: 400,
    fontSize: 24,
    opacity: 0.8
  },
  rightContent: {
    display: 'flex',
    alignItems: 'center',
    gap: 20
  },
  avatar: {
    width: 40,
    height: 40,
    background: ({ colors }) => colors.contentColor,
    borderRadius: 20,
    padding: 4,
  },
  name: {
    fontSize: 20,
    color: ({ colors }) => colors.contentColor
  }
}))

function HomeTopContentC() {
  const { data: user } = useSelector((state) => state.user)

  const colors = useColors();
  const styles = useStyles({ colors });


  return (
    <div className={styles.content}>
      <div>
        <div className={styles.label}>Good Day</div>
        <p className={styles.title}>Welcome Back</p>
      </div>
      <div className={styles.rightContent}>
        <img className={styles.avatar} src="/images/avatar.png" alt="avatar" />
        <p className={styles.name}>{user.name}</p>
      </div>
    </div>
  )
}

export default HomeTopContentC;