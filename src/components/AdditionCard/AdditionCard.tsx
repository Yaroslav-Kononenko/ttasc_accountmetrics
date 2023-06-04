import styles from "./AdditionCard.module.css";
import { AdditionalInfoType } from "../../types/general";
import menu_img from "../../assets/additional_info/dotts.svg";
import human from "../../assets/additional_info/human_icon.svg";
import plus from "../../assets/additional_info/cross.svg";

type Props = {
  additionalInfo: AdditionalInfoType;
};

export const AdditionCard: React.FC<Props> = ({additionalInfo}) => {
  const { title, courses, course_img, clients, images } = additionalInfo;
  const isCarousePartVisible = images.length < 4;

  return(
    <div className={styles.card}>
      <div className={styles.actions_title_container}>
        <div className={styles.title_container}>
          <div className={styles.plus_container}>
            <img src={plus} alt="add_button" className={styles.plus} />
          </div>

          <span className={styles.title}>{title}</span>
        </div>

        <div className={styles.dotted_container}>
          <img src={menu_img} alt="list_opener" />
        </div>
      </div>

      <div className={styles.statistics_container}>
        {coursePart(course_img, courses)}
        {coursePart(human, clients)}
      </div>

      <div className={styles.carousel}>
        {images && (isCarousePartVisible ? (
          images.map((image: any) => 
            <img
              className={styles.img}
              src={image.src}
              alt={image.alt}
              key={image.id} 
            />
          )
        ) : (
          images.slice(0, 3).map((image: any, index) => 
            <div className={styles.hidden_images} style={{}} key={image.id}>
              <img
                className={styles.img}
                src={image.src}
                alt={image.alt}
              />
              {index === 2 && (
                <div className={styles.additional_images}>
                  + {images.length - 3}
                </div>
              )}
            </div>
          )
        ))}
      </div>
    </div>
  );
};

const coursePart = (imgUrl: any, quantity: string | number) => {
  return(
    <div className={styles.statistic_box}>
      <div className={styles.statistic_logo}>
        <img src={imgUrl} alt="statistic_logo" />
      </div>

      <span className={styles.statistic_text}>
        {quantity}
      </span>
    </div>
  );
};
