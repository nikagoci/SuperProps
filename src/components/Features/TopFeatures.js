import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import Dashboard from "./Dashboard";

const TopFeatures = () => {
  return (
    <Stack alignItems="center">
      <Stack maxWidth='800px' alignItems='center' marginBottom={8}>
        <Typography
          variant="h5"
          fontWeight={700}
          component="h5"
          marginBottom={4}
          fontSize='26px'
        >
          Get on the same page, fast & easily
        </Typography>
        <Typography
          variant="subtitle1"
          component="p"
          color="rgba(0, 0, 0, 0.7)"
          textAlign='center'
          lineHeight={2}
          fontSize='16px'
        >
          Each room is loaded with collaborative surfaces so you can quickly
          take notes, capture to-dos, and share ideas. Pick one of our stock
          themes, or create your custom theme with the most advanced theme
          editor.
        </Typography>
      </Stack>
      <Dashboard />
    </Stack>
  );
};

export default TopFeatures;
