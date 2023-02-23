import AuthInputC from "./AuthInputC";
import { makeStyles } from "@mui/styles";
import useAuth from "../../../hooks/use-auth";

const useStyles = makeStyles(() => ({
  content: {
    display: 'flex',
    flexDirection: 'column',

    position: 'absolute',
    width: 400,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  title: {
    color: ({colors}) => colors.contentColor
  },
  description: {
    color: ({colors}) => colors.hintColor
  }
}))

function AuthContentC() {
  const { colors } = useAuth();
  const styles = useStyles({ colors })

  return (
    <div className={styles.content}>
      <h1 className={styles.title}>Welcome back</h1>
      <p className={styles.description}>Welcome back! Please enter your details.</p>
      <AuthInputC />
    </div>
  )
}

export default AuthContentC;