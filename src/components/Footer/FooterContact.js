import React from "react";
import { Stack, Typography } from "@mui/material";
import RoomIcon from "@mui/icons-material/Room";
import SendIcon from '@mui/icons-material/Send';
import PhoneIcon from "@mui/icons-material/Phone";

const FooterContact = () => {
  return (
    <Stack flexBasis={{xs: '100%',sm: '33%' , md: '17%'}}>
      <Typography variant="h6" component="h5" marginBottom={2}>
        Our Information
      </Typography>
      <Stack direction="row" marginBottom={2}>
        <RoomIcon style={{color: 'rgba(0, 0, 0, 0.35)', marginRight: '10px'}} />
        <Typography
          variant="subtitle1"
          component="p"
          color="rgba(9, 19, 31, 0.7)"
          fontSize={15}
        >
          Amsterdam, Netherlands
        </Typography>
      </Stack>
      <Stack direction="row" marginBottom={2} alignItems='center'>
        <PhoneIcon style={{color: 'rgba(0, 0, 0, 0.35)', marginRight: '10px'}} />
        <Stack>
          <Typography
            variant="subtitle1"
            component="p"
            color="rgba(9, 19, 31, 0.7)"
            fontSize={15}
          >
            +31 62 19 22 705
          </Typography>
          <Typography
            variant="subtitle1"
            component="p"
            color="rgba(9, 19, 31, 0.7)"
            fontSize={15}
          >
            7 Days - 8am - 10pm
          </Typography>
        </Stack>
      </Stack>
      <Stack direction="row">
        <SendIcon style={{color: 'rgba(0, 0, 0, 0.35)', marginRight: '10px'}} />
        <Typography
          variant="subtitle1"
          component="p"
          color="rgba(9, 19, 31, 0.7)"
          fontSize={15}
        >
          info@redqteam.com
        </Typography>
      </Stack>
    </Stack>
  );
};

export default FooterContact;
