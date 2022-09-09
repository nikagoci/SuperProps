import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

const FooterAbout = () => {
  return (
    <Stack flexBasis={{xs: '100%', sm: '33%' ,md: '17%'}}>
      <Typography variant="h6" component="h5" marginBottom={2}>
        About Us
      </Typography>
      <Stack alignItems='start' component='ul'>
        <Typography variant="subtitle1" component="li">
          Support Center
        </Typography>
        <Typography variant="subtitle1" component="li">
          Customer Support
        </Typography>
        <Typography variant="subtitle1" component="li">
          About Us
        </Typography>
        <Typography variant="subtitle1" component="li">
          Copyright
        </Typography>
        <Typography variant="subtitle1" component="li">
          Popular Campaign
        </Typography>
      </Stack>
    </Stack>
  );
};

export default FooterAbout;
