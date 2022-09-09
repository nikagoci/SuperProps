import { Container } from "@mui/system";
import React from "react";
import TopFeatures from "./TopFeatures";
import BottomFeatures from "./BottomFeatures";

const Features = () => {
  return (
    <section
      id="features"
      style={{ backgroundColor: "#fff", color: "#000", padding: "80px 0" }}
    >
      <Container>
        <TopFeatures />
        <BottomFeatures />
      </Container>
    </section>
  );
};

export default Features;
