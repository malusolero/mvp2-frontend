import { Box, Typography, styled } from "@mui/material";
import { NavLink } from "react-router-dom";

export const AppBarLogoText = styled(Typography)({
  fontWeight: "bold",
  flexGrow: 0.75,
});

export const LinksBox = styled(Box)({
  flexGrow: 0.25,
  justifyContent: "space-around",
  display: "flex",
});

export const StyledNavLink = styled(NavLink)(({ theme }) => ({
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
  },
  "&.active": {
    textDecoration: "underline",
    color: theme.palette.text.secondary,
    cursor: "default",
  },
}));

export const NavLinkTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  "&:hover": {
    color: theme.palette.secondary.main,
  },
}));
