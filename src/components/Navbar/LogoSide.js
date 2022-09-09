import React from "react";
import { Stack } from "@mui/system";
import { motion } from "framer-motion";
import Scrollspy from "react-scrollspy";

const LogoSide = () => {
  return (
    <Stack
      flexBasis={{ xs: "250px", md: "13%", lg: "15%" }}
      component={motion.div}
      initial={{ scale: 1 }}
      whileTap={{ scale: 1.3 }}
      sx={{ cursor: "pointer" }}
    >
      <Scrollspy
        items={["header"]}
        currentClassName="is-active"
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
        }}
      >
        <a href="#header">
          <img
            src="https://superprops-next.vercel.app/_next/static/image/src/common/assets/image/webAppMinimal/logo-white.9def96e9674da89bca399d16fb02a9c4.svg"
            alt="superprop"
            style={{ width: "100%", height: "100%" }}
          />
        </a>
      </Scrollspy>
    </Stack>
  );
};

export default LogoSide;
