import { Stack, Typography } from "@mui/material";
import React from "react";

const FooterInfo = () => {
  return (
    <Stack flexBasis={{xs: '100%',sm: '33%' , md: '17%'}}>
      <Typography variant="h6" component="h5" marginBottom={2}>
        Our Information
      </Typography>
      <Stack alignItems='start' component='ul'>
        <Typography variant="subtitle1" component="li">
          Return Policy
        </Typography>
        <Typography variant="subtitle1" component="li">
          Privacy Policy
        </Typography>
        <Typography variant="subtitle1" component="li">
          Terms & Conditions
        </Typography>
        <Typography variant="subtitle1" component="li">
          Site Map
        </Typography>
        <Typography variant="subtitle1" component="li">
          Store Hours
        </Typography>
      </Stack>
    </Stack>
  );
};

export default FooterInfo;
