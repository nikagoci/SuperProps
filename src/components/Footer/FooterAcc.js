import React from "react";
import { Stack, Typography } from "@mui/material";

const FooterAcc = () => {
  return (
    <Stack flexBasis={{xs: '100%',sm: '33%' , md: '17%'}}>
      <Typography variant="h6" component="h5" marginBottom={2}>
        My Account
      </Typography>
      <Stack alignItems="start" component="ul">
        <Typography variant="subtitle1" component="li">
          Press inquiries
        </Typography>
        <Typography variant="subtitle1" component="li">
          Social media
        </Typography>
        <Typography variant="subtitle1" component="li">
          directories
        </Typography>
        <Typography variant="subtitle1" component="li">
          Images & B-roll
        </Typography>
        <Typography variant="subtitle1" component="li">
          Permissions
        </Typography>
      </Stack>
    </Stack>
  );
};

export default FooterAcc;
