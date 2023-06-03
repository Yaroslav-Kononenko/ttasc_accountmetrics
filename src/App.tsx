import styles from "./App.module.css";

// Components
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { CourseDetails } from "./components/CourseDetails";
import { CourcesPanel } from "./components/CourcesPanel";
import { ProgressCard } from "./components/ProgressCard";

//Types
import { ProgressCardInfoType } from "./types/general";

// Images
import completed_icon from "./assets/card_details/completed_icon.svg";
import folder_icon from "./assets/card_details/folder_icon.svg";
import doc_icon from "./assets/card_details/doc_icon.svg";

function App() {
  const detailImages: ProgressCardInfoType[] = [
    {
      image: completed_icon,
      completed: 3,
      all: 15,
      cardDescription: "Courses completed"    
    },
    {
      image: folder_icon,
      completed: 6,
      all: 10,
      cardDescription: "Folders add"  
    },
    {
      image: doc_icon,
      completed: 3,
      all: 19,
      cardDescription: "Books read"
    }
  ];

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
                    <ProgressCard cardInfo={imgInfo} key={imgInfo.cardDescription} />
                  );
                })}
              </div>
            </div>
          </div>

          <div className={styles.bottom_container}>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
