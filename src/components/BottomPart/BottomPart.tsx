import styles from "./BottomPart.module.css";
import { CardDetails } from "../../types/general";
import { AdditionCard } from "../AdditionCard";
import { useState, useEffect } from "react";
import { serverEmulation } from "../../server/emulation";
import { initialAddInfo } from "../../helpers/initials";

export const BottomPart: React.FC = () => {
  const [cards, setCards] = useState<CardDetails[]>([{
    id: "",
    details: initialAddInfo,
  }]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await serverEmulation("/additional_info");
      if(response) {
        setCards(response.data);
        setIsLoading(false);
      }
    }

    fetchData();
  }, [])
  

  return(
    <div className={styles.bottom_container}>
      {cards.map((card: CardDetails) => 
        <AdditionCard additionalInfo={card.details} isLoading={isLoading} key={card.id} />
      )}
    </div>
  );
};
