import styles from "./CourcesPanel.module.css";
import { CourcePlanet } from "../CourcePlanet";
import { CoursesResponseType } from "../../types/general";

type Props = {
  mainCourses: CoursesResponseType[] | [];
}

export const CourcesPanel: React.FC<Props> = ({mainCourses}) => {

  const currentProgress = mainCourses[1] ? mainCourses[1].percentCurrentLvL : 0;

  return(
    <div className={styles.panel}>
      <div className={styles.planet_carousel}>
        {mainCourses.map((planetInfo => {
          return(
            <CourcePlanet 
              container_style={styles.planet_container}
              isActive={planetInfo.id === "2"}
              img_url={planetInfo.img}
              austronaut={planetInfo.id === "2"}
              key={planetInfo.id} 
            />
          );
        }))}
      </div>

      <div className={styles.progress_box}>
        <div className={styles.progress_text}>
          {currentProgress}%
        </div>

        <div className={styles.progress_text}>
          Complete
        </div>
      </div>
    </div>
  );
}
