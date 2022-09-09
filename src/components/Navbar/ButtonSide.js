import { Stack } from "@mui/system";
import { Button } from "@mui/material";
import React from "react";

const ButtonSide = () => {
  return (
    <Stack
      flexBasis={{ xs: "37%", md: "35%", lg: "30%" }}
      direction="row"
      justifyContent="end"
      spacing={3}
      display={{xs: 'none', md: 'flex'}}
    >
      <Stack direction="row">
        <img
          src="https://superprops-next.vercel.app/_next/static/image/src/common/assets/image/webAppMinimal/icons/lock.604dd7cfb4800ada299e1fd33a889add.svg"
          alt="lock"
          style={{ width: "30px", height: "30px" }}
        />
        <Button sx={{ color: "#fff",fontSize: {md: '13px', lg: '15px'} }} variant="text">
          Login Now
        </Button>
      </Stack>
      <Button sx={{ color: "#fff", fontSize: {md: '13px', lg: '15px'} }} variant="contained">
        Join Free
      </Button>
    </Stack>
  );
};

export default ButtonSide;
