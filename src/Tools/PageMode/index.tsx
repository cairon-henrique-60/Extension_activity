import React from "react";
import { Box, Modal, Typography } from "@mui/material";

import { IPageModeProps } from "./Types";

const PageMode: React.FC<IPageModeProps> = ({
  handleClose,
  open,
  title,
  describe,
  children,
}) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "white",
          padding: 2,
          zIndex: 9999,
        }}
      >
        <Typography
          style={{ color: "#6a5acd", fontWeight: "600" }}
          id="modal-modal-title"
          variant="h6"
          component="h2"
        >
          {title}
        </Typography>
        <Typography
          style={{ color: "#6a5acd", fontWeight: "600" }}
          id="modal-modal-description"
          sx={{ mt: 2 }}
        >
          {describe}
        </Typography>
        {children}
      </Box>
    </Modal>
  );
};

export default PageMode;
