import { Button, Card, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import {motion} from 'framer-motion';
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import React from "react";

const PricingCard = ({price, pack, text, img, isPremium, checked}) => {
    const backgroundColor = isPremium ? 'rgb(255, 255, 255)' : 'rgba(255, 255, 255, 0.06)';
    const color = isPremium ? '#000' : '#fff'
    const specColor = isPremium ? 'rgb(15, 33, 55)' : 'rgba(255, 255, 255, 0.7)'
    const scale= isPremium ? 'scale(1.05)' : 'scale(1)';
    const delay = isPremium ? .2 : 0;

    const variants = {
      open: {
        opacity: 1,
        y: [500, 0],
        transition: {
          duration: .5,
        }
      },
      close: {
        opacity: 1, 
        y: [500, 0],
        transition: {
          duration: .5,
        }
      }
      
    }
  return (
    <Card
      sx={{
        backgroundColor: {backgroundColor},
        color: {color},
        padding: { xs: '50px 40px' , sm: '50px 70px'},
        borderRadius: '20px',
        transform: scale
      }}
      component={motion.div}
      initial={{y: 0, opacity: 1}}
      variants={variants}
      animate={checked ? 'open' : 'close'}
      transition={{duration: .5, delay: delay}}
    >
      <Stack alignItems="center">
        <Typography
          fontWeight={700}
          variant="h4"
          component="h6"
          marginBottom={1}
        >
          {price}
        </Typography>
        <Typography
          fontWeight={400}
          variant="h6"
          component="h6"
          marginBottom={1}
        >
          {pack}
        </Typography>
        <Box maxWidth="200px" marginBottom={5}>
          <Typography
            variant="subtitle1"
            component="p"
            textAlign="center"
            color={specColor}
          >
            {text}
          </Typography>
        </Box>

        <Box marginBottom={4}>
          <img
            src={img}
            alt="logo"
          />
        </Box>

        <Button
          sx={{ borderRadius: "10px", padding: "10px 15px", marginBottom: 2 }}
          variant="contained"
        >
          Start 6 Month Trial
        </Button>
        <Button sx={{ color: isPremium ? "#000" : "rgba(255, 255, 255, 0.7)", positon: 'relative' }} className='include' variant="text">
          What's include
          <ChevronRightIcon className='include-but' style={{position: 'absolute', top: '4px', right: '-16px'}} />
        </Button>
      </Stack>
    </Card>
  );
};

export default PricingCard;
