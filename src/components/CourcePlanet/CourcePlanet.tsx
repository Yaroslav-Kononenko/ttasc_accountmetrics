import styles from "./CourcePlanet.module.css";
import progressbar from "../../assets/planets/level_progres.png";
import austronaut_img from "../../assets/central_info/austronaut.png";

type Props = {
  container_style?: string;
  img_url: any;
  planetSizes?: {
    width?: string;
    height?: string;
  };
  isActive?: boolean;
  austronaut?: boolean;
  planet?: boolean;
}

export const CourcePlanet: React.FC<Props> = ({
  container_style,
  img_url,
  planetSizes = {
    width: "100px",
    height: "100px",
  },
  isActive = false,
  austronaut = false,
  planet = true,
}) => {

  const { width, height } = planetSizes;
  const activeImg = !isActive ? "hidden" : "visible";
  const activeAustronaut = !austronaut ? "hidden" : "visible";
  const isPlanetVisible = !planet ? "hidden" : "visible";

  return(
    <div className={container_style}>
      <img 
        src={img_url}
        className={styles.course_image}
        style={{width: width, height: height, visibility: isPlanetVisible }}
        alt="course_image"
      />

      <img
        src={progressbar}
        alt="progress_bar"
        className={styles.progress_line}
        style={{visibility: activeImg}}
      />

      <div
        className={styles.astro_container}
        style={{visibility: activeAustronaut}}
      >
        <img
          src={austronaut_img}
          alt="austronaut"
          className={styles.austronaut}
        />
      </div>
    </div>
  );
}
