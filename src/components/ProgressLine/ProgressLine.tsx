import styles from "./ProgressLine.module.css";
import line from "../../assets/card_details/progress_line.svg";

export const ProgressLine: React.FC = () => {
  return(
    <div className={styles.line_container}>
      <img src={line} alt="progress_line" className={styles.progress_line} />
    </div>
  );
};
