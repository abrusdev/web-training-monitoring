import ReactDOM from "react-dom";
import './index.css';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  content: {
    position: 'fixed',
    width: `100%`,
    height: `100%`,
    background: `rgba(0,0,0,0.4)`,
  }
}))

function Loader() {
  const styles = useStyles();

  return ReactDOM.createPortal(
    (
      <div className={styles.content}>
        <div className="loader__layout">
          <div className="loader__bar_layout loader__bar"></div>
        </div>
      </div>
    ),
    document.getElementById("loader")
  )
}

export default Loader;