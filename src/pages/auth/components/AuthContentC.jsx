import AuthInputC from "./AuthInputC";
import { makeStyles } from "@mui/styles";
import useAuth from "../../../hooks/use-auth";
import AuthButtonC from "./AuthButtonC";

const useStyles = makeStyles(() => ({
  content: {
    display: 'flex',
    flexDirection: 'column',

    position: 'absolute',
    width: 400,
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  title: {
    margin: 0,
    color: ({ colors }) => colors.contentColor
  },
  description: {
    marginTop: 8,
    color: ({ colors }) => colors.hintColor
  }
}))

function AuthContentC() {
  const { colors } = useAuth();
  const styles = useStyles({ colors })

  return (
    <div className={styles.content}>
      <h1 className={styles.title}>Welcome back</h1>
      <p className={styles.description}>Welcome back! Please enter your details.</p>
      <AuthInputC label='Email' placeholder='Enter your email' />
      <AuthInputC label='Password' placeholder='Enter your password' type='password' />
      <AuthButtonC>Sign In</AuthButtonC>
    </div>
  )
}

export default AuthContentC;