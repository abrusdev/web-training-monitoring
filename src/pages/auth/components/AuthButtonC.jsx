import { makeStyles } from "@mui/styles";
import useAuth from "../../../hooks/use-auth";

const useStyles = makeStyles(() => ({
  content: {
    cursor: 'pointer',
    marginTop: 40,
    width: '100%',
    height: 45,
    background: ({ colors }) => `linear-gradient(90deg, ${colors.secondaryColor}, ${colors.thirdColor})`,
    borderRadius: 8,
    border: 'none',

    fontWeight: 700,

    '&:hover': {
      background: ({ colors }) => `linear-gradient(90deg, ${colors.secondaryColor}90, ${colors.thirdColor}90)`
    }
  }
}))

function AuthButtonC({ children }) {
  const { colors } = useAuth();
  const styles = useStyles({ colors })

  return (
    <button className={styles.content}>{children}</button>
  )
}

export default AuthButtonC