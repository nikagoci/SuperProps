import { Button, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { motion } from "framer-motion";
import React from "react";

const hoverVariant = {
  hover: {
    rotate: "30deg",
  },
};

const HowToCard = ({ img, header, text }) => {
  return (
    <Stack
      flexBasis={{ sm: "45%", md: "23%" }}
      alignItems="center"
      component={motion.div}
      whileHover="hover"
    >
      <Box marginBottom="20px">
        <motion.img src={img} alt="logo" variants={hoverVariant} />
      </Box>
      <Typography
        fontSize="17px"
        fontWeight={700}
        variant="h5"
        component="h5"
        marginBottom="25px"
      >
        {header}
      </Typography>
      <Typography
        variant="subtitle1"
        component="p"
        fontSize="15px"
        textAlign="center"
        marginBottom="10px"
      >
        {text}
      </Typography>
      <Button variant="text" sx={{ position: "relative" }}>
        Learn More
        <ArrowRightAltIcon
          style={{ position: "absolute", top: "5px", right: "-20px" }}
        />
      </Button>
    </Stack>
  );
};

export default HowToCard;
