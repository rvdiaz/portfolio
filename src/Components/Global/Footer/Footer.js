import { Box, Typography } from "@mui/material";
import React from "react";
import { useContext } from "react";
import { DataContext } from "../../../Context/DataContext";

export const Footer = (props) => {
  const { info } = useContext(DataContext).theme;
  const { copyright } = info;
  return (
    <Box sx={props.sx}>
      <Typography
        sx={{
          fontSize: "14px",
        }}
      >
        {copyright}
      </Typography>
    </Box>
  );
};
