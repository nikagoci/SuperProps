import { Button, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { motion } from "framer-motion";
import React from "react";

const AuthorPost = ({ img, date, text, number }) => {
  let delay;
  if(number === 1){
    delay = .2
  } else if (number === 2){
    delay = .4
  } else if (number === 3){
    delay = .6
  }

  return (
    <Stack
      component={motion.div}
      whileHover={{ y: -10 }}
      alignItems={{xs: 'center', sm: 'start'}}
      flexBasis={{ xs: "100%", sm: "46%", md: "30%" }}
      initial={{y: 500, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{duration: .2, delay: delay}}
    >
      <Box marginBottom={2} height="200px">
        <img
          src={img}
          alt="author"
          style={{ width: "100%", height: "100%", borderRadius: "15px" }}
        />
      </Box>
      <Typography variant="subtitle1" component="h6" marginBottom={1}>
        {date}
      </Typography>
      <Typography
        variant="h6"
        component="p"
        fontSize={18}
        fontWeight={500}
        marginBottom={1}
        textAlign={{xs: 'center', sm: 'start'}}
      >
        {text}
      </Typography>
      <Button variant="text">
        Learn More
        <ArrowRightAltIcon
          style={{ position: "absolute", top: "5px", right: "-20px" }}
        />
      </Button>
    </Stack>
  );
};

export default AuthorPost;
