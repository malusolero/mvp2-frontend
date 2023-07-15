import { Grid } from "@mui/material";
import SharedAppBar from "../AppBar";
import { StyledMain } from "./index.styled";

const Layout = ({ children }) => (
  <>
    <SharedAppBar />
    <Grid container>
      <Grid item xs={12}>
        <StyledMain>{children}</StyledMain>
      </Grid>
    </Grid>
  </>
);

export default Layout;
