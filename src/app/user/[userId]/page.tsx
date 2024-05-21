"use client";
import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { useUser } from "../api/get-user";
import { CircularProgress, Typography } from "@mui/material";

export default function Page({ params }: { params: { userId: string } }) {
  const { data, isLoading } = useUser({ id: Number(params.userId) });
  const user = data?.data;
  if (isLoading) {
    return (
      <div className="flex items-center justify-center">
        <CircularProgress />
      </div>
    );
  }
  return (
    <div className="min-h-80   flex justify-center items-center flex-col gap-4">
      <Typography className="text-center">USER:</Typography>
      <div className=" max-w-min">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell align="right">name</TableCell>
                <TableCell align="right">Year</TableCell>
                <TableCell align="right">pantone_value</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow sx={{ backgroundColor: user?.color }}>
                <TableCell>{user?.id}</TableCell>
                <TableCell align="right">{user?.name}</TableCell>
                <TableCell align="right">{user?.year}</TableCell>
                <TableCell align="right">{user?.pantone_value}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
