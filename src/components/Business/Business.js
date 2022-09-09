import {
  Box,
  Button,
  MenuItem,
  MenuList,
  Stack,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Business = () => {
  const [fill, setFill] = useState(false);
  const [shouldDisplay, setShouldDisplay] = useState(true);
  const [value, setValue] = useState("Download For MacOS");
  let visibility;

  if (fill && shouldDisplay) {
    visibility = "visible";
  } else if (!fill) {
    visibility = "hidden";
  } else if (!shouldDisplay && fill) {
    visibility = "hidden";
  }

  const butChange = () => {
    setFill(!fill);
    setShouldDisplay(true);
  };

  const macChange = () => {
    setValue("Download For MacOS");
    setShouldDisplay(false);
  };

  const winChange = () => {
    setValue("Download For Windows x64");
    setShouldDisplay(false);
  };

  return (
    <section
      id="business"
      style={{ padding: "90px 0 40px 0", position: "relative" }}
    >
      <div className="banner-business" />
      <Container>
        <Stack alignItems="center">
          <Typography
            variant="h5"
            component="h6"
            fontWeight={900}
            fontSize={36}
            marginBottom={4}
            zIndex={1000}
            textAlign='center'
          >
            Start making business with our software
          </Typography>
          <Box maxWidth="575px" zIndex={1000}>
            <Typography
              component="p"
              variant="subtitle1"
              textAlign="center"
              color="rgba(255, 255, 255, 0.7)"
              fontSize={17}
              marginBottom={6}
            >
              Best free time tracking software. It's a simple time tracker and
              time sheet app that lets you and your team track work hours
            </Typography>
          </Box>
          <Box position="relative">
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#fff",
                textTransform: "capitalize",
                fontSize: "18px",
                color: "#000",
                padding: "20px 70px 20px 50px",
                marginBottom: "25px",
                position: "relative",
                ":hover": { backgroundColor: "#fff" },
              }}
              onClick={butChange}
            >
              {value}
              <ArrowDropDownIcon
                sx={{
                  fontSize: "30px",
                  position: "absolute",
                  top: "26%",
                  right: "35px",
                }}
              />
            </Button>
            <MenuList
              sx={{
                backgroundColor: "#fff",
                textTransform: "initial",
                fontSize: "15px",
                color: "#000",
                padding: "10px",
                top: 0,
                left: 0,
                borderRadius: "5px",
                visibility: visibility,
                marginBottom: "15px",
              }}
              position="absolute"
            >
              <MenuItem onClick={macChange}>Download For MacOS</MenuItem>
              <MenuItem onClick={winChange} value="Download For Windows x64">
                Download For Windows x64
              </MenuItem>
            </MenuList>
          </Box>
          <Typography
            color="rgba(255, 255, 255, 0.7)"
            variant="subtitle1"
            component="h6"
            zIndex={1000}
            position="absolute"
            bottom="20%"
          >
            2,500+ Upvote on ProductHunt
          </Typography>
        </Stack>
      </Container>
    </section>
  );
};

export default Business;
