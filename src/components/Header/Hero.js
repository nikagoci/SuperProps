import { Typography } from "@mui/material";
import { Container, Stack } from "@mui/system";
import {motion} from 'framer-motion';
import React from "react";

const Hero = () => {
  return (
    <Container sx={{ paddingTop: "100px" }}>
      <Stack justifyContent="center" alignItems='center'>
        <Typography
          variant="h3"
          component={motion.h3}
          textAlign="center"
          maxWidth="840px"
          fontSize={{ xs: '25px' ,sm: '35px', md: '45px',lg: '54px'}}
          lineHeight={1.6}
          fontWeight={700}
          marginBottom="20px"
          initial={{y: 170, opacity: 0}}
          animate={{y: 0, opacity: 1}}
          transition={{duration: .5}}
        >
          The leading Customer dashboard for your daily workspace
        </Typography>
        <Typography
          variant="subtitle1"
          component={motion.p}
          maxWidth="600px"
          textAlign="center"
          color="rgba(255, 255, 255, 0.6)"
          marginBottom="50px"
          initial={{y: 170, opacity: 0}}
          animate={{y: 0, opacity: 1}}
          transition={{duration: .5, delay: .2}}
        >
          Join 30,000+ businesses that use Segment's software and APIs to
          collect, clean, and control their customer data.
        </Typography>
      </Stack>
      <Stack maxWidth='1040px' margin='0 auto' paddingBottom='30px' zIndex={1}>
        <motion.img
          src="https://superprops-next.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fsrc%2Fcommon%2Fassets%2Fimage%2FwebAppMinimal%2Fdashboard.32bb4c37c3e29db1d501d96bdd81587b.png&w=1200&q=75"
          alt="dashboard"
          style={{width: '100%', height: '100%', zIndex: '2'}}
          initial={{y: 170, opacity: 0}}
          animate={{y: 0, opacity: 1}}
          transition={{duration: .5}}
        />
      </Stack>
    </Container>
  );
};

export default Hero;
