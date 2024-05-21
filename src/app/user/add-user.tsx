"use client";
import { Modal } from "@/components";
import { FormControl, FormHelperText, InputLabel } from "@mui/material";
import React from "react";

export const AddUser = () => {
  return (
    <Modal title="Add New User">
      <FormControl>
        <InputLabel htmlFor="email">Email address</InputLabel>
        <InputLabel id="my-input" aria-describedby="my-helper-text" />
        <FormHelperText id="my-helper-text">
          We'll never share your email.
        </FormHelperText>
      </FormControl>
    </Modal>
  );
};
