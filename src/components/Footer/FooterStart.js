import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";

const FooterStart = () => {
  return (
    <Stack flexBasis={{xs: '100%',sm: '33%' , md: '17%'}}>
      <Box maxWidth='125px' marginBottom={3}>
        <img
          src="https://superprops-next.vercel.app/_next/static/image/src/common/assets/image/webAppMinimal/logo.eb4fa04593f5343b177825d550586b6a.svg"
          alt="superprops"
          style={{width: '100%', heigth: '100%'}}
        />
      </Box>
      <Typography variant="subtitle1" component="p" color='rgba(9, 19, 31, 0.7)' fontSize={15}>
        We run Advanced Search reports on the criteria you care about to see how
        work is progressing and where to focus your effort.
      </Typography>
    </Stack>
  );
};

export default FooterStart;
