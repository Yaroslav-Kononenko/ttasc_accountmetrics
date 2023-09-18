import styles from "./CourseDetails.module.css";
import sticker from "../../assets/waving_hand.jpg";
import planet2 from "../../assets/planets/planet2.svg";
import { CourcePlanet } from "../CourcePlanet";

export const CourseDetails: React.FC = () => {
  const planetSizes = {
    width: "160px",
    height: "160px",
  };

  return(
    <div className={styles.detail_card}>
      <div className={styles.text_container}>
        <span className={styles.text}>Hey, Peter!</span>
        <img src={sticker} className={styles.hello_sticker} alt="hello_sticker" />
      </div>

      <div className={styles.text_box}>
        Here&#x2019;s complex overview
        <br />
        of your progress
      </div>

      <div className={styles.img_container}>
        <CourcePlanet
          planetSizes={planetSizes} 
          img_url={planet2}
          isActive={true}
        />

        <div className={styles.level_layer}>
          <span className={styles.level_text}>
            4
          </span>

          <div className={styles.level_box}>
            <span className={styles.lvl_name}>
              level
            </span>
          </div>
        </div>
      </div>

      <div className={styles.next_lvl_text}>
        63% to reach next level
      </div>
    </div>
  );
}
