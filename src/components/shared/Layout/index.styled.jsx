import { styled } from "@mui/material";

export const StyledMain = styled("main")(({ theme }) => ({
  background: theme.palette.background.default,
  minHeight: "calc(100vh - 64px)",
}));
