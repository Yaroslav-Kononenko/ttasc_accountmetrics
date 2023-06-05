import styles from "./App.module.css";
import { useState, useEffect } from "react";
import { serverEmulation } from "./server/emulation";

//Test data
import { detailImages } from "./helpers/testdata";
import { initialStatistics } from "./helpers/initials";

// Components
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { CourseDetails } from "./components/CourseDetails";
import { CourcesPanel } from "./components/CourcesPanel";
import { ProgressCard } from "./components/ProgressCard";
import { BottomPart } from "./components/BottomPart";

//Types
import { ProgressCardInfoType } from "./types/general";

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [statCards, setStatCards] = useState<ProgressCardInfoType[]>(initialStatistics)

  const obtainStatisticsData = async () => {
    setIsLoading(true);
    const response = await serverEmulation("/statistics_info");
    if(response) {
      setStatCards(response.data);
      setIsLoading(false);
    }
  };
  
  useEffect(() => {
    console.log(statCards);
    obtainStatisticsData();
  }, [])
  
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

          <BottomPart />
        </div>
      </div>
    </div>
  );
}

export default App;
