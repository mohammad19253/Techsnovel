import React, { useEffect, useState } from "react";
import { Button, CircularProgress } from "@mui/material";
import { usePagination } from "./hooks/usePagination";

interface PaginationProps {
  className?: string;
}
export const Pagination: React.FC<PaginationProps> = ({ className }) => {
  const { page, setPageIndex, pageCount, setPagination } = usePagination();
  const [isClient, setIsClient] = useState(false);

  // Set client-side rendering state
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="w-100 flex item-center gap-4 ">
      {page !== 1 && <Button onClick={() => setPageIndex(1)}>{"<<"}</Button>}
      <Button disabled={page === 1} onClick={() => setPageIndex(page - 1)}>
        Previous
      </Button>
      {page - 2 > 0 && (
        <Button onClick={() => setPageIndex(page - 2)}>{page - 2}</Button>
      )}

      {page - 1 > 0 && (
        <Button onClick={() => setPageIndex(page - 1)}>{page - 1}</Button>
      )}
      <Button>{page}</Button>
      {page + 1 <= pageCount && (
        <Button onClick={() => setPageIndex(page + 1)}>{page + 1}</Button>
      )}
      {page + 2 <= pageCount && (
        <Button onClick={() => setPageIndex(page + 2)}>{page + 2}</Button>
      )}
      <Button
        disabled={page >= pageCount}
        onClick={() => setPageIndex(page + 1)}
      >
        Next
      </Button>
    </div>
  );
};
