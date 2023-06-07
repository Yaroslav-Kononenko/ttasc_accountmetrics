import styles from "./ProgressCard.module.css";
import { ProgressCardInfoType } from "../../types/general";
import { ProgressLine } from "../ProgressLine";
import React from "react";
import { Loader } from "../Loader";

type Props = {
  cardInfo: ProgressCardInfoType;
  isLoading: boolean;
};

export const ProgressCard: React.FC<Props> = React.memo(({cardInfo, isLoading}) => {
  const { all, completed, cardDescription } = cardInfo;
  const imgUrl = !!cardInfo.image && (<img src={cardInfo.image} alt={cardDescription} />);

  return(
    <div className={styles.card}>
      <div className={styles.img_container}>
        <div className={styles.img_box}>
          {isLoading ? <Loader/> : imgUrl}
        </div>

        {!isLoading && !!cardInfo.image && <ProgressLine />}
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
});
