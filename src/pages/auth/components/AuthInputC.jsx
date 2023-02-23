import useAuth from "../../../hooks/use-auth";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  content: {
    marginTop: 20,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',

    '&:nth-child(2n+1)': {
      marginTop: 40,
    }
  },
  label: {
    fontSize: 15,
    color: ({ colors }) => colors.contentColor,
    opacity: 0.5
  },
  input: {
    marginTop: 10,

    width: '100%',
    height: 45,
    borderRadius: 8,
    padding: '0 12px',
    outline: 'none',
    border: '2px transparent solid',

    '&:focus': {
      outline: 'none',
      border: ({ colors }) => `2px ${colors.secondaryColor} solid`,
    }
  }
}))

function AuthInputC({ label, ...props }) {
  const { colors } = useAuth();
  const styles = useStyles({ colors })

  return (
    <div className={styles.content}>
      <p className={styles.label}>{label}</p>
      <input className={styles.input} {...props} />
    </div>
  )
}

export default AuthInputC;