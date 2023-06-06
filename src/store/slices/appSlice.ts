import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProgressCardInfoType } from '../../types/general';
import { initialStatistics } from '../../helpers/initials';
import adminInitImg from "../../assets/header/avatar.png";
import { MainDataType } from '../../types/general';

interface StatisticsInterface {
  courses: number | null;
  coursesCompleted: number | null;
  folders: number | null;
  foldersAdded: number | null;
  books: number | null;
  booksEnded: number | null;
}

interface AppState {
  mainData: MainDataType,
  statistics: StatisticsInterface | null;
  statisticCardData: ProgressCardInfoType[];
  coursesData: any;
  isLoading: boolean;
}

//Main data initial, like info after login, which obtained from server
const initialState: AppState = {
  mainData: {
    id: "",
    name: "Peter",
    role: "Admin",
    image: adminInitImg,
  },
  statistics: {
    courses: null,
    coursesCompleted: null, 
    folders: null,
    foldersAdded: null,
    books: null,
    booksEnded: null,
  },
  coursesData: null,
  statisticCardData: initialStatistics,
  isLoading: false,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setMainData(state, action: PayloadAction<MainDataType>) {
      state.mainData = action.payload;
    },
    setStatistics(state, action: PayloadAction<StatisticsInterface>) {
      state.statistics = action.payload;
    },
    clearStatistic(state) {
      state.statistics = null;
    },
    setStatisticsData(state, action: PayloadAction<ProgressCardInfoType[]>) {
      state.statisticCardData = action.payload;
    },
    startLoading(state) {
      state.isLoading = true;
    },
    finishLoading(state) {
      state.isLoading = false;
    },
  },
});

export const { setMainData, setStatistics, clearStatistic, setStatisticsData, startLoading, finishLoading } = appSlice.actions;
export default appSlice.reducer;
