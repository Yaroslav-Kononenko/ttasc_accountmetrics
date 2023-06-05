import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MainDataInterface {
  id: string | null;
  name: string | null;
  role: string | null;
}

interface StatisticsInterface {
  courses: number | null;
  coursesCompleted: number | null;
  folders: number | null;
  foldersAdded: number | null;
  books: number | null;
  booksEnded: number | null;
}

interface AppState {
  mainData: MainDataInterface | null,
  statistics: StatisticsInterface | null;
  loading: boolean;
}

const initialState: AppState = {
  mainData: {
    id: "",
    name: "",
    role: "",
  },
  statistics: {
    courses: null,
    coursesCompleted: null, 
    folders: null,
    foldersAdded: null,
    books: null,
    booksEnded: null,
  },
  loading: false,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setMainData(state, action: PayloadAction<MainDataInterface>) {
      state.mainData = action.payload;
    },
    clearMainData(state) {
      state.mainData = null;
    },
    setStatistics(state, action: PayloadAction<StatisticsInterface>) {
      state.statistics = action.payload;
    },
    clearStatistic(state) {
      state.statistics = null;
    },
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    }
  },
});

export const { setMainData, clearMainData, setStatistics, clearStatistic, setIsLoading } = appSlice.actions;
export default appSlice.reducer;
