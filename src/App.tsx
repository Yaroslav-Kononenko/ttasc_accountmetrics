import styles from "./App.module.css";
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { CourseDetails } from "./components/CourseDetails";

function App() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <div className={styles.leftPart}>
        <Header />
        <div className={styles.content}>
          <CourseDetails />
        </div>
      </div>
    </div>
  );
}

export default App;
