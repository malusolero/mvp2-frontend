import Layout from "../../components/shared/Layout";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ProfileAccordion from "./components/ProfileAccordion";
import CategoryAccordion from "./components/CategoryAccordion";
import CurrencyAccordion from "./components/CurrencyAccordion";
import PeriodicityAccordion from "./components/PeriodicityAccordion";

const SettingsPage = () => (
  <Layout>
    <Box px={4} py={2}>
      <Grid container rowSpacing={2} columnSpacing={2}>
        <Grid item xs={13}>
          <Typography variant="h1">
            Troque variáveis do seu Perfil e configure outras variáveis do
            sistema.
          </Typography>
          <Typography>Veja abaixo cada configuração:</Typography>
        </Grid>
      </Grid>
    </Box>
    <Box px={4} py={2}>
      <Grid container>
        <Grid item xs={12}>
          <ProfileAccordion />
          <CategoryAccordion />
          <CurrencyAccordion />
          <PeriodicityAccordion />
        </Grid>
      </Grid>
    </Box>
  </Layout>
);

export default SettingsPage;
