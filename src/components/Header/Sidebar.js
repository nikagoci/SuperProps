import React from "react";
import { createPortal } from "react-dom";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Typography, Stack } from "@mui/material";
import Scrollspy from "react-scrollspy";

const Sidebar = ({ setOpenSidebar }) => {
  return createPortal(
    <>
      <div className="mask" />
      <Box
        sx={{
          height: "100vh",
          width: { xs: "300px", sm: "420px" },
          position: "fixed",
          top: "0",
          right: "0",
          zIndex: 9999,
          backgroundColor: "#fff",
        }}
      >
        <Stack justifyContent="end" direction="row">
          <CloseIcon
            onClick={() => setOpenSidebar(false)}
            sx={{
              color: "rgb(44, 111, 238)",
              fontSize: "35px",
              margin: "25px 45px 0 0",
              cursor: "pointer",
            }}
          />
        </Stack>
        <Box
          sx={{
            padding: "60px",
          }}
        >
          <Stack
            component="ul"
            className="list-side"
            direction="column"
            spacing={4}
            justifyContent="center"
          >
            <Scrollspy
              items={[
                "header",
                "how-to",
                "features",
                "testimonial",
                "pricing",
                "frequently",
              ]}
              currentClassName="is-side-active"
              style={{
                display: "flex",
                justifyContent: "space-around",
                width: "100%",
                flexDirection: "column",
                marginBottom: "15px",
                gap: 20
              }}
            >
              <Typography
                component="li"
                sx={{ color: "rgb(52, 61, 72)", fontSize: "20px" }}
              >
                <a href="#header"> Home</a>
              </Typography>
              <Typography
                component="li"
                sx={{ color: "rgb(52, 61, 72)", fontSize: "20px" }}
              >
                <a href="#how-to">How To</a>
              </Typography>
              <Typography
                component="li"
                sx={{ color: "rgb(52, 61, 72)", fontSize: "20px" }}
              >
                <a href="#features">Features</a>
              </Typography>
              <Typography
                component="li"
                sx={{ color: "rgb(52, 61, 72)", fontSize: "20px" }}
              >
                <a href="#testimonial">Testimonial</a>
              </Typography>
              <Typography
                component="li"
                sx={{ color: "rgb(52, 61, 72)", fontSize: "20px" }}
              >
                <a href="#pricing">Pricing</a>
              </Typography>
              <Typography
                component="li"
                sx={{ color: "rgb(52, 61, 72)", fontSize: "20px" }}
              >
                <a href="#frequently">Faq</a>
              </Typography>
            </Scrollspy>
          </Stack>
        </Box>
      </Box>
    </>,
    document.getElementById("portal")
  );
};

export default Sidebar;
