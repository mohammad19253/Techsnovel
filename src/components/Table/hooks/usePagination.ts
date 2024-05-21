import { useAppDispatch, useAppSelector } from "@/store";
import {
  setPageIndex as setPageIndexAction,
  setPagination as setPaginationAction,
  setPageCount as setPageCountAction,
  setPageSize as setPageSizeAction,
  pagination,
} from "@/features/app";

export const usePagination = () => {
  const { pagination } = useAppSelector((state) => state.app.meta);
  const { page, pageCount, pageSize } = pagination;

  const dispatch = useAppDispatch();
  const setPagination = (newPageIndex: pagination) => {
    dispatch(setPaginationAction(newPageIndex));
  };
  const setPageIndex = (newPageIndex: number) => {
    dispatch(setPageIndexAction(newPageIndex));
  };
  const setPageCount = (pageCount: number) => {
    dispatch(setPageCountAction(pageCount));
  };
  const setPageSize = (pageCount: number) => {
    dispatch(setPageSizeAction(pageCount));
  };
  return {
    page,
    setPageCount,
    setPageIndex,
    setPagination,
    setPageSize,
    pageCount,
    pageSize,
    pagination,
  };
};
