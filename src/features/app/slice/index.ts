import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { pagination, meta } from "../type";

interface AppState {
  meta: meta;
  modalVisibility: boolean;
}

const initialState: AppState = {
  modalVisibility: false,
  meta: {
    pagination: {
      page: 1,
      pageSize: 10,
      pageCount: 0,
    },
  },
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setPageIndex: (state, action: PayloadAction<number>) => {
      state.meta.pagination.page = action.payload;
    },
    setPageCount: (state, action: PayloadAction<number>) => {
      state.meta.pagination.pageCount = action.payload;
    },
    setPageSize: (state, action: PayloadAction<number>) => {
      state.meta.pagination.pageSize = action.payload;
    },
    setPagination: (state, action: PayloadAction<pagination>) => {
      state.meta.pagination = action.payload;
    },
    setShowModalVisibility: (state, action: PayloadAction<boolean>) => {
      state.modalVisibility = action.payload;
    },
  },
});
export const {
  setPageSize,
  setPageCount,
  setPageIndex,
  setPagination,
  setShowModalVisibility,
} = appSlice.actions;
export default appSlice.reducer;
