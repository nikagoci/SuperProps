import { Button, Typography } from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import DoneIcon from "@mui/icons-material/Done";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { motion } from "framer-motion";
import React from "react";

const Audience = () => {
  return (
    <section
      id="audience"
      style={{
        backgroundColor: "rgb(1, 19, 54)",
        padding: "80px 0",
        position: "relative",
      }}
    >
      <div className="banner-audience" />
      <Container>
        <Stack direction={{ xs: "column", md: "row" }} alignItems="center">
          <Stack
            flexBasis="50%"
            alignItems="end"
            justifyContent="end"
            zIndex={5}
            maxWidth={{ xs: "500px", md: "43%" }}
            marginBottom={{ xs: "25px", md: "0" }}
          >
            <motion.img
              style={{ width: "100%", height: "100%" }}
              src="https://superprops-next.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fsrc%2Fcommon%2Fassets%2Fimage%2FwebAppMinimal%2Fapp.1ac65a2d6da0454c6bae3030fd44f89d.png&w=750&q=75"
              alt="phone"
              initial={{ opacity: 0, x: -180 }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{ duration: 0.5 }}
            />
          </Stack>
          <Stack
            flexBasis="50%"
            alignItems="end"
            zIndex={10}
            textAlign={{ xs: "center", md: "start" }}
          >
            <Box maxWidth="435px">
              <Typography
                color="rgb(255, 155, 62)"
                variant="subtitle1"
                component="h6"
                marginBottom={4}
              >
                Audience source monitoring
              </Typography>
              <Typography variant="h4" component="h5" marginBottom={4}>
                Advanced analytics tools to keep you in control & customizable
              </Typography>
              <Typography
                variant="subtitle1"
                component="p"
                color="rgba(255, 255, 255, 0.7)"
                lineHeight={2}
                marginBottom={6}
              >
                Pick one of our stock themes, or create your custom theme with
                the most advanced theme editor on any online survey building
                tool. Chat promt module supported
              </Typography>
              <Stack component="ul" spacing={2} marginBottom={4}>
                <Stack direction="row">
                  <DoneIcon
                    style={{ marginRight: "10px", color: "rgb(63, 219, 177)" }}
                  />
                  <Typography component="h5" variant="subtitle1">
                    Chat promt module supported
                  </Typography>
                </Stack>
                <Stack direction="row">
                  <DoneIcon
                    style={{ marginRight: "10px", color: "rgb(63, 219, 177)" }}
                  />
                  <Typography component="h5" variant="subtitle1">
                    Enjoy unlimited features by paid plans
                  </Typography>
                </Stack>
                <Stack direction="row">
                  <DoneIcon
                    style={{ marginRight: "10px", color: "rgb(63, 219, 177)" }}
                  />
                  <Typography component="h5" variant="subtitle1">
                    Manage ultimate conversation
                  </Typography>
                </Stack>
              </Stack>
              <Button
                variant="outlined"
                sx={{
                  color: "#fff",
                  border: "1px solid #fff",
                  padding: "10px 45px 10px 20px",
                  position: "relative",
                  ":hover": {
                    border: "1px solid rgb(44, 111, 238)",
                    background: "rgb(44, 111, 238)",
                  },
                }}
                className="explore-more"
              >
                Explore More
                <KeyboardArrowRightIcon
                  style={{ position: "absolute", top: "9px", right: "20px" }}
                  className="explore-more-but"
                />
              </Button>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </section>
  );
};

export default Audience;
