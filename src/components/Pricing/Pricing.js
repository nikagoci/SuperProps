import { Switch, Typography } from "@mui/material";
import { Container, Stack } from "@mui/system";
import React, { useState } from "react";
import PricingCard from "./PricingCard";

const info = {
  first: {
    price: "$16",
    pack: "Starter Pack",
    text: "Complete time tracking & proper reporting",
    img: "https://superprops-next.vercel.app/_next/static/image/src/common/assets/image/webAppMinimal/icons/icecream.24f1820033a118f6f5d60213c933f0b8.png",
  },
  second: {
    price: "$29",
    pack: "Premium Pack",
    text: "Effortless team with time management",
    img: "https://superprops-next.vercel.app/_next/static/image/src/common/assets/image/webAppMinimal/icons/donut.709466d9bf14ff8f8a20e8e30623dcf4.png",
  },
  third: {
    price: "$35",
    pack: "Ultimate Pack",
    text: "A custom plan for complex or large organization",
    img: "https://superprops-next.vercel.app/_next/static/image/src/common/assets/image/webAppMinimal/icons/pizza.0bab61d4e74e939eeb66206fe28f30b2.png",
  },
};

const Pricing = () => {
  const [checked, setChecked] = useState(false);
  const [price1, setPrice1] = useState(info.first.price);
  const [price2, setPrice2] = useState(info.second.price);
  const [price3, setPrice3] = useState(info.third.price);

  const handleChange = (e) => {
    setChecked(e.target.checked);
    if (!checked) {
      setPrice1("$187");
      setPrice2("$338");
      setPrice3("$405");
    } else {
      setPrice1(info.first.price);
      setPrice2(info.second.price);
      setPrice3(info.third.price);
    }
    console.log(checked)
  };

  return (
    <section id="pricing" style={{ padding: "40px 0" }}>
      <Container>
        <Stack alignItems="center" marginBottom={5}>
          <Typography variant="h5" component="h6" marginBottom={4}>
            Expore our exciting pricing
          </Typography>
          <Stack direction="row">
            <Typography
              color="rgba(255, 255, 255, 0.7)"
              variant="h6"
              component="h6"
            >
              Montly
            </Typography>
            <Switch
              checked={checked}
              inputProps={{ "aria-label": "controled" }}
              onChange={handleChange}
            />
            <Typography
              color="rgba(255, 255, 255, 0.7)"
              variant="h6"
              component="h6"
            >
              Yearly
            </Typography>
          </Stack>
        </Stack>
        <Stack
          direction="row"
          rowGap={4}
          alignItems="center"
          justifyContent={{ xs: "space-around", lg: "space-between" }}
          flexWrap="wrap"
        >
          <PricingCard
            price={price1}
            pack={info.first.pack}
            text={info.first.text}
            img={info.first.img}
            isPremium={false}
            checked={checked}
          />
          <PricingCard
            price={price2}
            pack={info.second.pack}
            text={info.second.text}
            img={info.second.img}
            isPremium={true}
            checked={checked}
          />
          <PricingCard
            price={price3}
            pack={info.third.pack}
            text={info.third.text}
            img={info.third.img}
            isPremium={false}
            checked={checked}
          />
        </Stack>
      </Container>
    </section>
  );
};

export default Pricing;
