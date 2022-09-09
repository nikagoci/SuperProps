import { Avatar, Card, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

const PeopleText = ({text, img, author, job}) => {
  return (
    <Stack alignItems="center" marginBottom={10}>
      <Stack maxWidth="700px" direction="row" position="relative" marginBottom={2}>
        <img
          src="https://superprops-next.vercel.app/_next/static/image/src/common/assets/image/webAppMinimal/icons/14.968a00d05a6d69ced19cc7cea731d0f9.png"
          alt="title"
          style={{ position: "absolute", top: "-4px", left: "-50px" }}
        />
        <Typography
          variant="subtitle1"
          component="p"
          fontSize="23px"
          textAlign="center"
        >
          {text}
        </Typography>
      </Stack>
      <Card sx={{padding: '20px', borderRadius: '20px' }}>
        <Stack direction="row" alignItems='center' justifyContent='center'>
          <Avatar
            alt="people"
            src={img}
            sx={{width: '44px', heigth: '44px', marginRight: '10px'}}
          />
          <Stack>
            <Typography variant="h6" component="h6">
              {author}
            </Typography>
            <Typography variant="subtitle1" component="p">
              {job}
            </Typography>
          </Stack>
        </Stack>
      </Card>
    </Stack>
  );
};

export default PeopleText;
