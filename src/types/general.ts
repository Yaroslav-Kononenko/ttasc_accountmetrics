export type MainDataType = {
  id: string | null;
  name: string | null;
  role: string | null;
  image: any | null;
}

export type ProgressCardInfoType = {
  image?: any;
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

export type CoursesResponseType = {
  id: string,
  courseTitle: string | null,
  levels: number,
  currentLvl: number,
  percentCurrentLvL: number,
  img?: any,
};

export type SignInDataType = {
  email: string;
  password: string;
};

export type EndpointEmulationType = "/main_courses" | "/cards_info" | "/statistics_info" | "/additional_info";
