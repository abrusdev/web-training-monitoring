import { makeStyles } from "@mui/styles";
import useColors from "../../../../hooks/use-colors";

const useStyles = makeStyles(() => ({
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: 'center',
    gap: 10,

    width: 50,
    height: 200,
    opacity: ({ isActive }) => isActive ? 1.0 : 0.2,
  },
  innerContent: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    gap: 4,
    flexDirection: 'column-reverse',

    width: '100%',
    padding: 8,

    borderRadius: 16,
    border: ({ isActive, colors }) => isActive ? `1px ${colors.progressColor}40 solid` : '',
    background: ({ colors }) => colors.primaryDarkColor,
  },
  progress: {
    width: '100%',
    height: ({ progress }) => `${progress * 0.8}%`,

    borderRadius: 10,
    background: ({ colors }) => colors.progressColor,
  },
  progressText: {
    fontSize: 14,
    color: ({ colors }) => colors.progressColor,
  },
  title: {}
}));

function HomeActivityItemC({ isActive = false, value = 0, label = '' }) {
  const colors = useColors();
  const styles = useStyles({ colors, isActive, progress: value });

  return (
    <div className={styles.content}>
      <div className={styles.innerContent}>
        <div className={styles.progress}></div>
        <div className={styles.progressText}>{value}%</div>
      </div>
      <p className={styles.title}>{label}</p>
    </div>
  )
}

export default HomeActivityItemC;