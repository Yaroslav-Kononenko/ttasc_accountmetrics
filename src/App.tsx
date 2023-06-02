import styles from "./App.module.css";
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { CourseDetails } from "./components/CourseDetails";
import { CourcesPanel } from "./components/CourcesPanel";

function App() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <div className={styles.leftPart}>
        <Header />
        <div className={styles.content}>
          <div className={styles.top_container}>
            <CourseDetails />
            <CourcesPanel />
          </div>

          <div className={styles.bottom_container}>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
