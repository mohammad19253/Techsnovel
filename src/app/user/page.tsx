"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/store";
import { CellContext } from "@tanstack/react-table";
import { Avatar, Button, CircularProgress } from "@mui/material";
import { Add, RemoveRedEye } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Table } from "@/components/Table";
import { usePagination } from "@/components/Table/hooks/usePagination";
import { useUsers } from "./api/get-user-list";
import { useDeleteUsers } from "./api/delete-user";

import { setShowModalVisibility } from "@/features/app";

import { AddUser } from "./add-user";
const UserList = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [userId, setUserId] = useState();
  const { page, pageSize, pageCount } = usePagination();
  const { data, isLoading } = useUsers({
    per_page: pageSize,
    page: page,
    total_pages: pageCount,
  });
  const deleteUserQuery = useDeleteUsers({});
  const handleDeleteClick = (id: number) => {
    deleteUserQuery.mutateAsync({
      id: id,
    });
  };
  const USERS_COLUMN = [
    { accessorKey: "id", header: "id" },
    { accessorKey: "email", header: "Email" },
    { accessorKey: "first_name", header: "First Name" },
    { accessorKey: "last_name", header: "last_name" },
    {
      header: "avatar",
      accessorKey: "avatar",
      cell: (cell: CellContext<any, any>) => {
        return (
          <div className="flex items-center justify-center">
            <Avatar src={cell.getValue()} />
          </div>
        );
      },
    },
    {
      header: () => <DeleteIcon />,
      accessorKey: "id",
      cell: (cell: CellContext<any, any>) => {
        const id = cell.getValue();
        return (
          <Button
            variant="contained"
            color="error"
            startIcon={<DeleteIcon className="text-red" />}
            onClick={() => {
              handleDeleteClick(id);
              setUserId(id);
            }}
          >
            {userId === id && deleteUserQuery.isLoading && <CircularProgress />}
          </Button>
        );
      },
    },
    {
      header: () => <Add />,
      accessorKey: "id",
      cell: (cell: CellContext<any, any>) => {
        const id = cell.getValue();
        return (
          <Button
            variant="contained"
            color="success"
            startIcon={<Add className="text-success" />}
            onClick={() => {
              dispatch(setShowModalVisibility(true));
            }}
          ></Button>
        );
      },
    },
    {
      header: () => <RemoveRedEye />,
      accessorKey: "id",
      cell: (cell: CellContext<any, any>) => {
        const id = cell.getValue();
        return (
          <Button
            variant="contained"
            startIcon={<RemoveRedEye />}
            onClick={() => {
              router.push("/user/" + id);
            }}
          ></Button>
        );
      },
    },
  ];

  return (
    <div className="container">
      <h1 className="text-center p-5">Users List</h1>
      <Table isLoading={isLoading} data={data?.data} columns={USERS_COLUMN} />
      <AddUser />
    </div>
  );
};
export default UserList;
