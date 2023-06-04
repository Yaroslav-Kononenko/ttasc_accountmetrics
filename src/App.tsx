import styles from "./App.module.css";

//Test data
import { detailImages, additionalCard  } from "./helpers/testdata";

// Components
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { CourseDetails } from "./components/CourseDetails";
import { CourcesPanel } from "./components/CourcesPanel";
import { ProgressCard } from "./components/ProgressCard";
import { AdditionCard } from "./components/AdditionCard";

//Types
import { ProgressCardInfoType, CardDetails } from "./types/general";

const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <Sidebar />
      <div className={styles.leftPart}>
        <Header />
        <div className={styles.content}>
          <div className={styles.top_container}>
            <CourseDetails />

            <div className={styles.right_container}>
              <CourcesPanel />

              <div className={styles.right_bottom_box}>
                {detailImages.map((imgInfo: ProgressCardInfoType) => {
                  return(
                    <ProgressCard
                      cardInfo={imgInfo}
                      key={imgInfo.cardDescription}
                    />
                  );
                })}
              </div>
            </div>
          </div>

          <div className={styles.bottom_container}>
            {additionalCard.map((card: CardDetails) => 
              <AdditionCard additionalInfo={card.details} key={card.id} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
