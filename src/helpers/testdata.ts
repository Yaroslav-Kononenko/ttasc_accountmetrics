// Images
import completed_icon from "../assets/card_details/completed_icon.svg";
import folder_icon from "../assets/card_details/folder_icon.svg";
import doc_icon from "../assets/card_details/doc_icon.svg";
import statistic_logo  from "../assets/additional_info/book_icon.svg";
import course1 from "../assets/additional_info/course1.png";
import course2 from "../assets/additional_info/course2.png";

import { ProgressCardInfoType, AdditionalInfoType, CardDetails } from "../types/general";

export const detailImages: ProgressCardInfoType[] = [
  {
    image: completed_icon,
    completed: 3,
    all: 15,
    cardDescription: "Courses completed"    
  },
  {
    image: folder_icon,
    completed: 6,
    all: 10,
    cardDescription: "Folders add"  
  },
  {
    image: doc_icon,
    completed: 3,
    all: 19,
    cardDescription: "Books read"
  }
];

export const courseCardInfo: AdditionalInfoType = {
  title: "New Additions",
  courses: 13,
  course_img: statistic_logo,
  clients: 2873,
  images: [{
      id: "0",
      src: course1,
      alt: "course_photo"
    },
    {
      id: "1",
      src: course2,
      alt: "course_photo"  
    },
    {
      id: "2",
      src: course2,
      alt: "course_photo"  
    },
    {
      id: "3",
      src: course2,
      alt: "course_photo"  
    },
    {
      id: "4",
      src: course2,
      alt: "course_photo"  
    },
    {
      id: "5",
      src: course2,
      alt: "course_photo"  
    },
    {
      id: "6",
      src: course2,
      alt: "course_photo"  
    },
    {
      id: "7",
      src: course2,
      alt: "course_photo"  
    },
    {
      id: "8",
      src: course2,
      alt: "course_photo"  
    },
    {
      id: "9",
      src: course2,
      alt: "course_photo"  
    },
    {
      id: "10",
      src: course2,
      alt: "course_photo"  
    },
    {
      id: "11",
      src: course2,
      alt: "course_photo"  
    },
    {
      id: "12",
      src: course2,
      alt: "course_photo"  
    },
    {
      id: "13",
      src: course2,
      alt: "course_photo"  
    },
    {
      id: "14",
      src: course2,
      alt: "course_photo"  
    },
    {
      id: "15",
      src: course2,
      alt: "course_photo"  
    },
  ]
};

export const additionalCard: CardDetails[] = [
  {
    id: "111",
    details: courseCardInfo
  },
  {
    id: "222",
    details: courseCardInfo
  },
  {
    id: "333",
    details: courseCardInfo
  }
];
