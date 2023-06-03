import styles from "./ProgressCard.module.css";
import { ProgressCardInfoType } from "../../types/general";
import { ProgressLine } from "../ProgressLine";

type Props = {
  cardInfo: ProgressCardInfoType;
};

export const ProgressCard: React.FC<Props> = ({cardInfo}) => {
  const { image, all, completed, cardDescription } = cardInfo;

  return(
    <div className={styles.card}>
      <div className={styles.img_container}>
        <div className={styles.img_box}>
          <img src={image} alt={cardDescription} />
        </div>

        <ProgressLine />
      </div>
      
      <div className={styles.text_container}>
        <span className={styles.number_completed}>
          {completed}
        </span>
        <span className={styles.number_all}>
          {" / "}
          {all}
        </span>
        
        <br />

        <span className={styles.text}>
          {cardDescription}
        </span>
      </div>
    </div>
  );
}
