import { Link } from "react-router-dom";
import styles from "./NotFoundPage.module.css";

export const NotFountPage: React.FC = () => {
  return (
    <div className={styles.page}>
      <h3>Page not found...</h3>
      <Link to="home" className={styles.link}>Return to main page</Link>
    </div>
  );
};
