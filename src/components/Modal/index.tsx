"use client";
import React, { ReactNode } from "react";
import { default as MUI_Modal } from "@mui/material/Modal";

import { setShowModalVisibility } from "@/features/app";
import { useAppDispatch, useAppSelector } from "@/store";
import { Box, Typography } from "@mui/material";
interface ModalProps {
  title?: string;
  children?: ReactNode;
}
export const Modal: React.FC<ModalProps> = ({ children, title }) => {
  const { modalVisibility } = useAppSelector((state) => state.app);
  const dispatch = useAppDispatch();
  const handleClose = () => [dispatch(setShowModalVisibility(false))];
  return (
    <MUI_Modal
      open={modalVisibility}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {title}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {children}
        </Typography>
      </Box>
    </MUI_Modal>
  );
};
