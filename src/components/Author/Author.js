import { Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import AuthorPost from "./AuthorPost";

const info = {
  first: {
    img: "https://superprops-next.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fsrc%2Fcommon%2Fassets%2Fimage%2FwebAppMinimal%2Fpost1.993acf8250b5116a30ab4cab9f8b9429.png&w=640&q=75",
    date: "June 3, 2020",
    text: "The three Fundamental Rules to Keep Your Website Goal Orientated",
  },
  second: {
    img: "https://superprops-next.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fsrc%2Fcommon%2Fassets%2Fimage%2FwebAppMinimal%2Fpost2.66ea79afaa5c55ab6bc86942a131187f.png&w=640&q=75",
    date: "Dec 8, 2020",
    text: "Five Common Mistakes Teams Make When Tracking Performance",
  },
  third: {
    img: "https://superprops-next.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fsrc%2Fcommon%2Fassets%2Fimage%2FwebAppMinimal%2Fpost3.26dea7f5ed547197660a8c49d12a4d3b.png&w=640&q=75",
    date: "Dec 8, 2020",
    text: "Why You Might Want to Reconsider with Tracking First Meaningful Paint",
  },
};

const Author = () => {
  return (
    <section
      id="author"
      style={{ padding: "60px 0", backgroundColor: "#fff", color: "#000" }}
    >
      <Container>
        <Stack alignItems="center">
          <Typography
            variant="h5"
            fontWeight={700}
            fontSize={30}
            component="h6"
            marginBottom={4}
          >
            What our author post on Newsfeed
          </Typography>
        </Stack>
        <Stack
          direction="row"
          gap="30px"
          justifyContent="space-between"
          flexWrap="wrap"
        >
          <AuthorPost
            img={info.first.img}
            date={info.first.date}
            text={info.first.text}
            number={1}
          />
          <AuthorPost
            img={info.second.img}
            date={info.second.date}
            text={info.second.text}
            number={2}
          />
          <AuthorPost
            img={info.third.img}
            date={info.third.date}
            text={info.third.text}
            number={3}
          />
        </Stack>
      </Container>
    </section>
  );
};

export default Author;
