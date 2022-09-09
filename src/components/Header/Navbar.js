import { AppBar, Toolbar } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import ButtonSide from "../Navbar/ButtonSide";
import ListSide from "../Navbar/ListSide";
import LogoSide from "../Navbar/LogoSide";
import MenuSide from "../Navbar/MenuSide";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <AppBar
      sx={{ backgroundColor: "inherit", padding: "10px 0", boxShadow: "none", zIndex: 9999 }}
    >
      {openSidebar && (
        <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
      )}
      <Container>
        <Toolbar>
          <LogoSide />
          <ListSide />
          <MenuSide openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
          <ButtonSide />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
