import { Typography } from "@mui/material";
import { Container, Stack } from "@mui/system";
import React from "react";
import HowToCard from "./HowToCard";

const info = {
  first: {
    img: "https://superprops-next.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fsrc%2Fcommon%2Fassets%2Fimage%2FwebAppMinimal%2Ficons%2F1.431d344940093dc108fff680d9b8a142.png&w=96&q=75",
    header: "Manage Smartly",
    text: "Stay on top of your task lists and stay in touch with what's happening",
  },
  second: {
    img: "https://superprops-next.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fsrc%2Fcommon%2Fassets%2Fimage%2FwebAppMinimal%2Ficons%2F2.c949583d6734de936fe189720c4a1597.png&w=96&q=75",
    header: "Monitor user Analytics",
    text: "Stay on top of your task lists and stay in touch with what's happening",
  },
  third: {
    img: "https://superprops-next.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fsrc%2Fcommon%2Fassets%2Fimage%2FwebAppMinimal%2Ficons%2F3.ed3c2224e21480bb74892af9027186f4.png&w=96&q=75",
    header: "Safe & Trusted",
    text: "Get the best DoorDash experience with live order tracking.",
  },
  fourth: {
    img: "https://superprops-next.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fsrc%2Fcommon%2Fassets%2Fimage%2FwebAppMinimal%2Ficons%2F4.c7bbcd6510940f3738d4e38618ae39b7.png&w=96&q=75",
    header: "Fast Customer Support",
    text: "Get the best DoorDash experience with live order tracking.",
  },
};

const HowTo = () => {
  return (
    <section
      id="how-to"
      style={{ padding: "40px 0", background: "#fff", color: "#000" }}
    >
      <Container>
        <Stack justifyContent="center" alignItems="center" marginBottom="50px">
          <Typography
            fontWeight={700}
            fontSize={26}
            variant="h4"
            component="h4"
          >
            Let's see how it works
          </Typography>
        </Stack>
        <Stack direction="row" justifyContent={{xs: 'center', md: 'space-between'}} spacing={2} rowGap={4} flexWrap='wrap'>
          <HowToCard
            img={info.first.img}
            header={info.first.header}
            text={info.first.text}
          />
          <HowToCard
            img={info.second.img}
            header={info.second.header}
            text={info.second.text}
          />
          <HowToCard
            img={info.third.img}
            header={info.third.header}
            text={info.third.text}
          />
          <HowToCard
            img={info.fourth.img}
            header={info.fourth.header}
            text={info.fourth.text}
          />
        </Stack>
      </Container>
    </section>
  );
};

export default HowTo;
