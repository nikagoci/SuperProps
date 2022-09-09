import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { motion } from "framer-motion";
import React from "react";

const FooterCopy = () => {
  return (
    <Stack
      justifyContent="space-between"
      alignItems="center"
      direction={{ xs: "column", md: "row" }}
      paddingTop="50px"
      borderTop="1px solid rgb(229, 236, 244)"
      rowGap="20px"
    >
      <Typography variant="subtitle1" component="h6" textAlign='center'>
        Copyright © 2021 Superprops. All rights reserved
      </Typography>
      <Stack direction="row" component="ul" gap="20px">
        <Typography variant="h6" fontSize="17px !important" component="li">
          Support
        </Typography>
        <Typography variant="h6" fontSize="17px !important" component="li">
          Hiring
        </Typography>
        <Typography variant="h6" fontSize="17px !important" component="li">
          Privacy
        </Typography>
        <Typography variant="h6" fontSize="17px !important" component="li">
          Terms
        </Typography>
      </Stack>
      <Stack direction="row" gap="15px">
        <Typography variant="subtitle1" component="h6">
          Social:
        </Typography>
        <Stack direction="row" gap="15px">
          <motion.img
            src="https://superprops-next.vercel.app/_next/static/image/src/common/assets/image/webAppMinimal/icons/facebook.6bceec5e5accc5e9ad085651133f0058.png"
            alt="facebook"
            style={{ width: "25px", height: "25px" }}
            whileHover={{
              opacity: 0.5,
              cursor: "pointer",
            }}
          />
          <motion.img
            src="https://superprops-next.vercel.app/_next/static/image/src/common/assets/image/webAppMinimal/icons/twitter.a9ae95d81a6b809c65b9ff93cc80cdd3.png"
            alt="twitter"
            style={{ width: "25px", height: "25px" }}
            whileHover={{
              opacity: 0.5,
              cursor: "pointer",
            }}
          />
          <motion.img
            src="https://superprops-next.vercel.app/_next/static/image/src/common/assets/image/webAppMinimal/icons/dribbble.b2a07d7d56047523bb07e0f4d99ab898.png"
            alt="dribble"
            style={{ width: "25px", height: "25px" }}
            whileHover={{
              opacity: 0.5,
              cursor: "pointer",
            }}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default FooterCopy;
