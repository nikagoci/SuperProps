import { Typography } from "@mui/material";
import { Container, Stack } from "@mui/system";
import React from "react";
import Review from "./Review";

const Testimonial = () => {
  return (
    <section id="testimonial" style={{ padding: "80px 0", background: "#fff", color: '#000' }}>
      <Container>
        <Stack alignItems='center'>
          <img
            src="https://superprops-next.vercel.app/_next/static/image/src/common/assets/image/webAppMinimal/icons/13.cf849eee92b265bffb6bf1d5e6e39cbe.png"
            alt="heart"
            style={{width: '55px', height: '55px', marginBottom: '25px'}}
          />
          <Typography variant="h5" fontWeight={700} component="h6" marginBottom={4}>
            What people say about our product
          </Typography>
        </Stack>
        <Review />
      </Container>
    </section>
  );
};

export default Testimonial;
