import styles from "./App.module.css";
import { useEffect } from "react";
import { serverEmulation } from "./server/emulation";

//Test data
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
import { useDispatch, useSelector } from 'react-redux';
import { startLoading, finishLoading, setStatisticsData } from './store/slices/appSlice';
import { RootState } from "./store/store";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const data = useSelector((state:  RootState) => state.app.statisticCardData);
  const accountData = useSelector((state: RootState) => state.app.mainData);
  const cardData = data ? data : initialStatistics;
  console.log(accountData)

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(startLoading());
        const response = await serverEmulation("/statistics_info");
        if(!!response) {
          dispatch(setStatisticsData(response.data));
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        dispatch(finishLoading());
      }
    };

    fetchData();
  }, [dispatch]);
  
  return (
    <div className={styles.app}>
      <Sidebar />
      <div className={styles.leftPart}>
        <Header accountData={accountData} />
        <div className={styles.content}>
          <div className={styles.top_container}>
            <CourseDetails />

            <div className={styles.right_container}>
              <CourcesPanel />

              <div className={styles.right_bottom_box}>
                {cardData.map((imgInfo: ProgressCardInfoType) => {
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
