import React from "react";
import { AppBar, Box, Toolbar } from "@mui/material";
import Logo from "../../../assets/logo_light.png";
import {
  AppBarLogoText,
  NavLinkTypography,
  StyledNavLink,
} from "./index.styled";

const SharedAppBar = () => (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <AppBarLogoText variant="h6" component="div">
          <img src={Logo} width={84} alt="FinPLan logotipo" />
        </AppBarLogoText>
        <Box
          sx={{
            flexGrow: 0.25,
            justifyContent: "space-around",
            display: "flex",
          }}
        >
          <StyledNavLink to="/">
            <NavLinkTypography>Home</NavLinkTypography>
          </StyledNavLink>
          <StyledNavLink to="/gestao">
            <NavLinkTypography>Gestão</NavLinkTypography>
          </StyledNavLink>
          <StyledNavLink to="/configuracoes">
            <NavLinkTypography>Configurações</NavLinkTypography>
          </StyledNavLink>
        </Box>
      </Toolbar>
    </AppBar>
  </Box>
);

export default SharedAppBar;
