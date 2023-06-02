import styles from "./CourcesPanel.module.css";
import { CourcePlanet } from "../CourcePlanet";
import planet1 from "../../assets/planets/course1.svg";
import planet2 from "../../assets/planets/course2.png";
import planet3 from "../../assets/planets/course3.png";
import planet4 from "../../assets/planets/course4.png";
import planet5 from "../../assets/planets/course5.png";

export const CourcesPanel: React.FC = () => {
  const planets = [
    { id: "1", planet: planet1 }, 
    { id: "2", planet: planet2 }, 
    { id: "3", planet: planet3 }, 
    { id: "4", planet: planet4 }, 
    { id: "5", planet: planet5 }
  ];
  const planetSizes = {
    width: "105px",
    height: "105px"
  };

  return(
    <div className={styles.panel}>
      <div className={styles.planet_carousel}>
        {planets.map((planetInfo => {
          return(
            <CourcePlanet 
              planetSizes={planetSizes}
              img_url={planetInfo.planet}
              container_style={styles.planet_container}
              isActive={planetInfo.id === "2"}
              planet={false}
              austronaut={planetInfo.id === "2"}
              key={planetInfo.id} 
            />
          );
        }))}
      </div>

      <div className={styles.progress_box}>
        <div className={styles.progress_text}>
          37%
        </div>

        <div className={styles.progress_text}>
          Complete
        </div>
      </div>
    </div>
  );
}
