import { Stack } from "@mui/system";
import { Typography } from "@mui/material";
import React from "react";
import Scrollspy from "react-scrollspy";

const ListSide = () => {
  return (
    <Stack
      component="ul"
      className="list-side"
      flexBasis={{ md: "66%", lg: "55%" }}
      direction="row"
      spacing={3}
      justifyContent="center"
      display={{ xs: "none", md: "flex" }}
    >
      <Scrollspy
        items={[
          "header",
          "how-to",
          "features",
          "testimonial",
          "pricing",
          "frequently"
        ]}
        currentClassName="is-active"
        style={{display: 'flex', justifyContent: 'space-around', width: '100%'}}
      >
        <Typography component="li">
          <a href="#header"> Home</a>
        </Typography>
        <Typography component="li">
          <a href="#how-to">How To</a>
        </Typography>
        <Typography component="li">
          <a href="#features">Features</a>
        </Typography>
        <Typography component="li">
          <a href="#testimonial">Testimonial</a>
        </Typography>
        <Typography component="li">
          <a href="#pricing">Pricing</a>
        </Typography>
        <Typography component="li">
          <a href="#frequently">Faq</a>
        </Typography>
      </Scrollspy>
    </Stack>
  );
};

export default ListSide;
