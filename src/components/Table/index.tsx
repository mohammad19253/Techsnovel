"use client";
import React from "react";

import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
  getPaginationRowModel,
  ColumnDef,
  getExpandedRowModel,
} from "@tanstack/react-table";

import { CircularProgress } from "@mui/material";
import { usePagination } from "./hooks/usePagination";
import { Pagination } from "./pagination";
import classNames from "classnames";

type TableProps<TData> = {
  data?: TData[];
  showPagination?: boolean;
  isLoading?: boolean;
  columns: ColumnDef<TData>[];
  tableClass?: string;
};

export const Table: React.FC<TableProps<any>> = ({
  columns,
  data = [],
  isLoading = false,
  tableClass,
}) => {
  const { page, pageSize } = usePagination();
  const table = useReactTable({
    columns,
    data,
    getPaginationRowModel: getPaginationRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    state: {
      pagination: {
        pageIndex: page - 1,
        pageSize: pageSize,
      },
    },
  });

  return (
    <>
      <div>
        <table className={classNames("min-w-full", tableClass)}>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <th
                      className="text-center"
                      key={header.id}
                      colSpan={header.colSpan}
                      style={{ width: header.getSize() }}
                    >
                      {header.isPlaceholder ? null : (
                        <div
                          {...{
                            className: header.column.getCanSort()
                              ? "cursor-pointer select-none"
                              : "",
                            onClick: header.column.getToggleSortingHandler(),
                          }}
                        >
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                          {{
                            asc: " 🔼",
                            desc: " 🔽",
                          }[header.column.getIsSorted() as string] ?? null}
                        </div>
                      )}
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody>
            {!isLoading &&
              table.getRowModel().rows.map((row) => (
                <React.Fragment key={row.id}>
                  <tr key={row.id}>
                    {row.getVisibleCells().map((cell) => (
                      <td key={cell.id} className="text-center">
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    ))}
                  </tr>
                </React.Fragment>
              ))}
            {isLoading && (
              <tr>
                <td colSpan={columns.length}>
                  <div className="w-100 h-50 flex-center p-3  flex-column">
                    <CircularProgress />
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center">
        <Pagination />
      </div>
    </>
  );
};
