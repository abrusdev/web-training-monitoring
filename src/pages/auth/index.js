import useAuth from "../../hooks/use-auth";
import { makeStyles } from "@mui/styles";
import AuthContentC from "./components/AuthContentC";

const useStyles = makeStyles(() => ({
  content: {
    display: 'flex',
    position: 'relative',
    width: '100%',
    height: '100vh',
    overflow: 'hidden',
    background: ({ colors }) => colors.secondaryColor,
  },
  leftContent: {
    position: 'relative',
    width: '50%',
    height: '100%',
    background: ({ colors }) => colors.primaryColor
  },
  rightContent: {
    position: 'relative',
    width: '50%',
    height: '100%',
  },
  logo: {
    width: 100,
    position: 'absolute',
    right: 40,
    top: 40,
    opacity: 0.4
  },
  image: {
    width: 500,
    position: 'absolute',
    right: '50%',
    top: '50%',
    transform: 'translate(50%,-50%)',
    opacity: 0.7
  }
}))

function AuthPage() {
  const { colors } = useAuth();
  const styles = useStyles({ colors })

  return (
    <div className={styles.content}>
      <div className={styles.leftContent}>
        <AuthContentC />
      </div>

      <div className={styles.rightContent}>
        <img className={styles.image} src="/images/login.png" alt="" />
        <img className={styles.logo} src="/images/logo.png" alt="" />
      </div>
    </div>
  )
}

export default AuthPage;