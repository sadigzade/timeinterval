import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Date, PrevInterval, Status } from "../../types/data";
import { request } from "../../../utils/request";

type DatesState = {
  status: Status | null;
  error: string | null;
  dates: Date[];
  currentPoint: number;
  circleDeg: number;
  pointDeg: number;
  prevInterval: PrevInterval;
};

const initialState: DatesState = {
  status: null,
  error: null,
  dates: [],
  currentPoint: 1,
  circleDeg: -60,
  pointDeg: 60,
  prevInterval: {
    startInterval: 1950,
    endInterval: 1950,
  },
};

export const getDates = createAsyncThunk<Date[], undefined, { rejectValue: string }>(
  "dates/getDates",
  async (_, { rejectWithValue }) => {
    try {
      return await request("/dates");
    } catch (error: any) {
      return rejectWithValue(error);
    }
  },
);

export const DatesSlice = createSlice({
  name: "dates",
  initialState,
  reducers: {
    setCurrentPoint: (state, action: PayloadAction<number>) => {
      state.prevInterval = {
        startInterval: state.dates[state.currentPoint - 1].startInterval,
        endInterval: state.dates[state.currentPoint - 1].endInterval,
      };
      state.currentPoint = action.payload;
    },
    prevPoint: (state) => {
      state.prevInterval = {
        startInterval: state.dates[state.currentPoint - 1].startInterval,
        endInterval: state.dates[state.currentPoint - 1].endInterval,
      };
      state.currentPoint = state.currentPoint - 1;
    },
    nextPoint: (state) => {
      state.prevInterval = {
        startInterval: state.dates[state.currentPoint - 1].startInterval,
        endInterval: state.dates[state.currentPoint - 1].endInterval,
      };
      state.currentPoint = state.currentPoint + 1;
    },
    setCircleDeg: (state, action: PayloadAction<number>) => {
      state.circleDeg = action.payload;
    },
    setPointDeg: (state, action: PayloadAction<number>) => {
      state.pointDeg = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDates.pending, (state) => {
        state.status = Status.LOADING;
        state.error = null;
      })
      .addCase(getDates.fulfilled, (state, action: PayloadAction<Date[]>) => {
        state.status = Status.FULFILLED;
        state.dates = action.payload;
      })
      .addCase(getDates.rejected, (state, action) => {
        state.status = Status.REJECTED;

        if (action.error.message) {
          state.error = action.error.message;
        }
      });
  },
});

export const { setCurrentPoint, prevPoint, nextPoint, setCircleDeg, setPointDeg } =
  DatesSlice.actions;

export default DatesSlice.reducer;
