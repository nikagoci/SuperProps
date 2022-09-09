import { Container, Stack } from "@mui/system";
import React from "react";

import FooterStart from "./FooterStart";
import FooterAbout from "./FooterAbout";
import FooterInfo from "./FooterInfo";
import FooterAcc from "./FooterAcc";
import FooterContact from "./FooterContact";
import FooterCopy from "./FooterCopy";

const Footer = () => {
  return (
    <section
      id="footer"
      style={{ padding: "60px 0 ", backgroundColor: "#fff", color: "#000" }}
    >
      <Container>
        <Stack
          direction="row"
          justifyContent="space-between"
          marginBottom={10}
          gap={4}
          flexWrap='wrap'
        >
          <FooterStart />
          <FooterAbout />
          <FooterInfo />
          <FooterAcc />
          <FooterContact />
        </Stack>
        <Stack>
          <FooterCopy />
        </Stack>
      </Container>
    </section>
  );
};

export default Footer;
