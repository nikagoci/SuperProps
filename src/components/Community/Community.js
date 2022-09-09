import { Typography } from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import React from "react";

const Community = () => {
  return (
    <section
      id="comunity"
      style={{ padding: "60px 0", backgroundColor: "#fff", color: "#000" }}
    >
      <Container>
        <Stack alignItems="center">
          <Typography
            color="rgb(255, 155, 62)"
            variant="subtitle1"
            component="h6"
            fontWeight={500}
            fontSize={{xs: 15, sm: 18}}
            marginBottom={2}
            
          >
            Our Community
          </Typography>
          <Typography
            variant="h5"
            fontSize={{xs: 20, sm: 27}}
            fontWeight={700}
            component="h6"
            textAlign='center'
            marginBottom={4}
          >
            We are a community of 15,000+ Customer
          </Typography>
          <Box maxWidth="880px">
            <Typography
              variant="subtitle1"
              component="p"
              color="rgba(15, 33, 55, 0.65)"
              fontSize={{xs: 14, sm: 17}}
              lineHeight={2.06}
              textAlign="center"
              marginBottom={7}
            >
              RedQ, Inc's core values evolved with us as the company grew and we
              learned from our experiences. They epitomise what we want to
              achieve, and they might change in the future, as we aim higher and
              higher. We think of those values as important to our culture and
              individual sense of accomplishment.
            </Typography>
          </Box>
          <Box>
            <img
              src="https://superprops-next.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fsrc%2Fcommon%2Fassets%2Fimage%2FsaasCreative%2Fusers.93f52c243c8f121ec2c55d665d705958.png&w=1200&q=75"
              alt="community"
              style={{width: '100%', height: '100%'}}
            />
          </Box>
        </Stack>
      </Container>
    </section>
  );
};

export default Community;
