import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Date, Status } from "../../types/data";
import { request } from "../../../utils/request";

type DatesState = {
  status: Status | null;
  error: string | null;
  dates: Date[];
  currentPoint: number;
};

const initialState: DatesState = {
  status: null,
  error: null,
  dates: [],
  currentPoint: 1,
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
      state.currentPoint = action.payload;
    },
    prevPoint: (state) => {
      state.currentPoint = state.currentPoint - 1;
    },
    nextPoint: (state) => {
      state.currentPoint = state.currentPoint + 1;
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

export const { setCurrentPoint, prevPoint, nextPoint } = DatesSlice.actions;

export default DatesSlice.reducer;
