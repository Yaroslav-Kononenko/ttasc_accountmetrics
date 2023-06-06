import { AdditionalInfoType, ProgressCardInfoType } from "../types/general";

export const initialAddInfo: AdditionalInfoType = {
  title: "New Additions",
  courses: 0,
  course_img: "",
  clients: 0,
  images: [
    {
      id: "0",
      src: "",
      alt: "course_photo"
    }
  ]
};

export const initialStatistics: ProgressCardInfoType[] = [
  {
    image: "",
    completed: 0,
    all: 0,
    cardDescription: "Card 1..."    
  },
  {
    image: "",
    completed: 0,
    all: 0,
    cardDescription: "Card 2..."  
  },
  {
    image: "",
    completed: 0,
    all: 0,
    cardDescription: "Card 3..."
  },
];
