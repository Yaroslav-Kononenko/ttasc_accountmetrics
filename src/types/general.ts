export type ProgressCardInfoType = {
  image: any;
  completed: number;
  all: number;
  cardDescription: string;
};

export type AdditionalInfoType = {
  title: string;
  courses: number;
  course_img: any;
  clients: number;
  images: {
    id: string | number;
    src: string;
    alt: string;
  }[];
}

export type CardDetails = {
  id: string | number;
  details: AdditionalInfoType;
};
