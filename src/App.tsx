import styles from "./App.module.css";
import { useEffect } from "react";
import { serverEmulation } from "./server/emulation";
import { initialStatistics } from "./helpers/initials";
import { useDispatch, useSelector } from 'react-redux';
import { startLoading, finishLoading, setCourses, setCoursesMainData } from './store/slices/appSlice';

// Components
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { CourseDetails } from "./components/CourseDetails";
import { CourcesPanel } from "./components/CourcesPanel";
import { ProgressCard } from "./components/ProgressCard";
import { BottomPart } from "./components/BottomPart";

//Types
import { ProgressCardInfoType } from "./types/general";
import { RootState } from "./store/store";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const data = useSelector((state:  RootState) => state.app.statisticCardData);
  const accountData = useSelector((state: RootState) => state.app.mainData);
  const mainCourses = useSelector((state: RootState) => state.app.coursesData);
  const isLoading = useSelector((state: RootState) => state.app.isLoading);
  
  const cardData = data ? data : initialStatistics;

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(startLoading());
        const response = await serverEmulation("/statistics_info");
        const mainInfo = await serverEmulation("/main_courses");
        if(!!response && !!mainInfo) {
          dispatch(setCourses(response.data));
          dispatch(setCoursesMainData(mainInfo.data))
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
              <CourcesPanel mainCourses={mainCourses} />

              <div className={styles.right_bottom_box}>
                {cardData.map((imgInfo: ProgressCardInfoType) => {
                  return(
                    <ProgressCard
                      cardInfo={imgInfo}
                      isLoading={isLoading}
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
