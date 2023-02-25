import { makeStyles } from "@mui/styles";
import useColors from "../../../../hooks/use-colors";

const useStyles = makeStyles(() => ({
  content: {
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    marginTop: 15,
    width: 50,
    height: 50,
    borderRadius: 8,
    border: ({ isSelected, colors }) => isSelected ? `2px solid ${colors.secondaryColor}` : ``,
    background: ({ isSelected, colors }) => isSelected ? `${colors.contentColor}30` : `${colors.contentColor}10`,
  }
}))

function HomeWorkoutTypeC({ selectedType, onSelect, type }) {
  const isSelected = selectedType === type

  const colors = useColors();
  const styles = useStyles({ colors, isSelected });

  return (
    <div className={styles.content} onClick={() => onSelect(type)}>
      <img src={`/images/workouts/${type}_white.svg`} alt="type" />
    </div>
  )
}

export default HomeWorkoutTypeC;