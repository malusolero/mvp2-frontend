import { ThemeProvider } from "@mui/material";
import defaultTheme from "./components/styles/theme";
import AppRouter from "./routes";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AppRouter />
    </ThemeProvider>
  );
}
export default App;
