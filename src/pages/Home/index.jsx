import { useRef } from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";
import { ArrowDownward } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/shared/Layout";

const HomePage = () => {
  const explainSectionRef = useRef(null);
  const navigate = useNavigate();

  const scrollToNextSection = () => {
    if (explainSectionRef && explainSectionRef.current) {
      explainSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navigateToLink = (src) => [navigate(src)];

  return (
    <Layout>
      <Box
        p={4}
        sx={{
          backgroundImage: 'url("/garota-dinheiro-bg.jpg")',
          backgroundSize: "cover",
          minHeight: "calc(100vh - 128px)",
        }}
      >
        <Grid container rowSpacing={2}>
          <Grid item xs={12}>
            <Typography variant="h1">Olá nome,</Typography>
            <Typography variant="h1">
              Seja bem vindo ao seu gestor financeiro!
            </Typography>
          </Grid>
          <Grid item xs={12} lg={4}>
            <Typography>
              Aqui você poderá gerir, acompanhar, registrar, planejar e analisar
              seus gastos mensais. Use o FinPlan para te auxiliar no seu
              planejamento financeiro mensal.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => scrollToNextSection()}
            >
              <Typography>Veja as funcionalidades!</Typography>
              <ArrowDownward />
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Box
        p={4}
        sx={{
          minHeight: "100vh",
        }}
        ref={explainSectionRef}
      >
        <Grid container rowSpacing={2}>
          <Grid item xs={12}>
            <Typography variant="h3">
              Veja abaixo como funciona as diferentes páginas do site:
            </Typography>
          </Grid>
          <Grid item xs={12} mt={4}>
            <Grid container rowSpacing={2} columnSpacing={2}>
              <Grid item xs={12} lg={4}>
                <Card sx={{ backgroundColor: "#474A2C" }}>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      color="secondary"
                    >
                      Home
                    </Typography>
                    <Typography variant="body2" color="secondary">
                      Página inicial da aplicação FinPlan. Veja todas as
                      funcionalidades, conheça a aplicação, entenda sobre cada
                      página e o que pode ser feito nas páginas. Cada nova
                      funcionalidade do FinPlan aparecerá aqui.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} lg={4}>
                <Card sx={{ backgroundColor: "#474A2C" }}>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      color="secondary"
                    >
                      Gestão
                    </Typography>
                    <Typography variant="body2" color="secondary">
                      Aqui você pode listar todos os seus movimentos mensais
                      (escolha o mês e veja). Pode também cadastrar e gerir
                      estes movimentos, escolher como fixos ou variáveis e
                      categorizá-los.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      color="secondary"
                      onClick={() => navigateToLink("/gestao")}
                    >
                      Visitar
                    </Button>
                  </CardActions>
                </Card>
              </Grid>

              <Grid item xs={12} lg={4}>
                <Card sx={{ backgroundColor: "#474A2C" }}>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      color="secondary"
                    >
                      Configurações
                    </Typography>
                    <Typography variant="body2" color="secondary">
                      Faça a gestão das variáveis do sistema. Aqui é possível
                      adicionar, editar e remover categorias. Se quiser também é
                      possível mudar as definições do seu perfil. Clique no
                      botão embaixo e comece já a configurar.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      color="secondary"
                      onClick={() => navigateToLink("/configuracoes")}
                    >
                      Visitar
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} mt={8}>
            <Typography sx={{ textAlign: "center", fontWeight: 600 }}>
              Comece já a disfrutar das funcionalidades disponíveis (até o
              momento) no Finplan!
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
};

export default HomePage;
