import useColors from "../../../hooks/use-colors";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  content: {
    display: 'flex',
    alignItems: 'center',

    width: '100%',
    height: ({ height }) => height,

    marginTop: 15,
    padding: '15px 30px',
    background: ({ colors }) => colors.primaryColor,
    borderRadius: 8,
  }
}))

function HomeCardC({ children, height = 240 }) {
  const colors = useColors();
  const styles = useStyles({ colors, height });

  return (
    <div className={styles.content}>
      {children}
    </div>
  );
}

export default HomeCardC;