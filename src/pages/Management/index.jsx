import { useEffect, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  MenuItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Layout from "../../components/shared/Layout";
import { StyledInputLabel } from "./index.styled";
import { AppSelect } from "../../components/shared/AppSelect/index.styled";
import GenericFilter from "./components/GenericFilter";
import TransactionDialog from "./components/TransactionDialog";

const ManagementPage = () => {
  const initial_transactions = [
    {
      id: 1,
      amount: -200,
      name: "Passeio final de semana",
      category: "Lazer",
      periodicity: "Mensal",
      currency: "€",
      date: new Date().toLocaleDateString(),
    },
    {
      id: 2,
      amount: -500,
      name: "Viagem Lisboa",
      category: "Viagens",
      periodicity: "Uma vez",
      currency: "€",
      date: new Date().toLocaleDateString(),
    },
    {
      id: 3,
      amount: 400,
      name: "Pagamento Edu",
      category: "Pensão",
      periodicity: "Mensal",
      currency: "R$",
      date: new Date().toLocaleDateString(),
    },
    {
      id: 4,
      amount: 2460,
      name: "Emprego Manta",
      category: "Salário",
      periodicity: "Mensal",
      currency: "€",
      date: new Date().toLocaleDateString(),
    },
    {
      id: 5,
      amount: 5300,
      name: "Alight USA",
      category: "Salário",
      periodicity: "Mensal",
      currency: "$",
      date: new Date().toLocaleDateString(),
    },
    {
      id: 6,
      amount: 2000,
      name: "Freela Workana",
      category: "Salário",
      periodicity: "Uma vez",
      currency: "R$",
      date: new Date().toLocaleDateString(),
    },
  ];

  const theme = useTheme();
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [income, setIncome] = useState("");
  const [categories, setCategories] = useState("");
  const [periodicity, setPeriodicity] = useState("");
  const [transactions, setTransactions] = useState(initial_transactions);
  const [openDialog, setOpenDialog] = useState({
    open: false,
    mode: "",
    currentTransaction: null,
  });

  useEffect(() => {
    handleFilter();
    // eslint-disable-next-line
  }, [income, categories, periodicity]);

  const handleChange = (event, label) => {
    if (label === "year-selector-label") setYear(event.target.value);
    if (label === "month-selector-label") setMonth(event.target.value);
    if (label === "amount-selector-label") {
      setIncome(event.target.value);
    }
    if (label === "category-selector-label") {
      setCategories(event.target.value);
    }
  };

  const handleFilter = () => {
    console.log(income, categories, periodicity);
    const filteredResults = initial_transactions.filter((transaction) => {
      let included = true;
      if (income) {
        if (income === "Entradas") {
          included = transaction.amount >= 0;
          if (!included) return false;
        }
        if (income === "Saídas") {
          included = transaction.amount < 0;
          if (!included) return false;
        }
      }
      if (categories) {
        included = transaction.category === categories;
        if (!included) return false;
      }
      if (periodicity) {
        included = transaction.periodicity === periodicity;
        if (!included) return false;
      }

      return included;
    });
    setTransactions(filteredResults);
  };

  const onSubmitForm = (form, mode) => {
    if (!form) {
      setOpenDialog({ open: false, mode: "" });
      return;
    }

    if (mode === "create") {
      return onCreateTransaction(form);
    }

    if (mode === "edit") {
      return onEditTransaction(form);
    }
    if (mode === "delete") {
      return onDeleteTransaction(form);
    }
  };

  const onEditTransaction = (form) => {
    const transactionIndex = transactions.findIndex(
      (transaction) => transaction.id === form.id
    );
    const newTransactions = Array.from(transactions);
    newTransactions[transactionIndex] = form;
    console.log(newTransactions);
    setTransactions(newTransactions);
    setOpenDialog({ open: false, mode: "" });
  };

  const onDeleteTransaction = (form) => {
    const transactionIndex = transactions.findIndex(
      (transaction) => transaction.id === form.id
    );
    const newTransactions = Array.from(transactions);
    newTransactions.splice(transactionIndex, 1);
    setTransactions(newTransactions);
    setOpenDialog({ open: false, mode: "" });
  };

  const onCreateTransaction = (form) => {
    const newTransactions = Array.from(transactions);
    //remover quando vier da api
    form.id = newTransactions.length + 1;
    newTransactions.push(form);
    setTransactions(newTransactions);
    setOpenDialog({ open: false, mode: "" });
  };

  const getMonthName = (month) => {
    const anyDate = new Date(new Date().getFullYear(), month, 1);
    return anyDate
      .toLocaleString("default", { month: "short" })
      .replace(".", "");
  };

  const getYearOptions = () => {
    const currentYear = new Date().getFullYear();
    return [...Array(6).keys()].map((index) => currentYear - index);
  };

  const getCategories = () => [
    "Salário",
    "Lazer",
    "Saúde",
    "Mercado",
    "Pensão",
    "Viagens",
  ];

  const getPeriodicities = () => [
    "Uma vez",
    "Mensal",
    "Trimestral",
    "Semestral",
    "Anual",
  ];

  const mapCurrencyConversion = {
    "€": 1,
    $: 1.1,
    R$: 5.35,
  };

  const calculateTotalAmount = () => {
    return transactions
      .reduce(
        (accumulator, currentValue) =>
          (accumulator +=
            currentValue.amount / mapCurrencyConversion[currentValue.currency]),
        0
      )
      .toFixed(2);
  };

  const capitalizeStr = (str) =>
    str.charAt(0).toUpperCase() + str.substring(1, str.length);

  const monthOptions = [...Array(11).keys()];
  const yearOptions = getYearOptions();

  return (
    <Layout>
      <Box px={4} py={2}>
        <Grid container rowSpacing={2} columnSpacing={2}>
          <Grid item xs={12}>
            <Typography variant="h1">
              Esta página é destinada à gestão dos movimentos da sua conta.
            </Typography>
            <Typography>Comece escolhendo um mês e um ano abaixo:</Typography>
          </Grid>
          <Grid item xs={12} lg={3}>
            <FormControl fullWidth>
              <StyledInputLabel id="month-selector-label">Mês</StyledInputLabel>
              <AppSelect
                labelId="month-selector-label"
                id="month-selector"
                value={month}
                label="Mês"
                onChange={(event) =>
                  handleChange(event, "month-selector-label")
                }
              >
                {monthOptions.map((month) => (
                  <MenuItem key={`${month}-month-selector`} value={month}>
                    {capitalizeStr(getMonthName(month))}
                  </MenuItem>
                ))}
              </AppSelect>
            </FormControl>
          </Grid>
          <Grid item xs={12} lg={3}>
            <FormControl fullWidth>
              <StyledInputLabel id="year-selector-label">Ano</StyledInputLabel>
              <AppSelect
                labelId="year-selector-label"
                id="year-selector"
                value={year}
                label="Ano"
                onChange={(event) => handleChange(event, "year-selector-label")}
              >
                {yearOptions.map((year) => (
                  <MenuItem key={`${year}-year-selector`} value={year}>
                    {year}
                  </MenuItem>
                ))}
              </AppSelect>
            </FormControl>
          </Grid>
        </Grid>
      </Box>
      {month !== "" && year && (
        <Box px={2} pb={4}>
          <Grid container rowSpacing={2} columnSpacing={2}>
            <Grid item xs={12}>
              <Toolbar>
                <Grid container columnSpacing={2} rowSpacing={2}>
                  <Grid item sx={{ display: "flex", alignItems: "center" }}>
                    <Typography sx={{ fontWeight: "bold" }}>
                      Movimentos de {capitalizeStr(getMonthName(month))}, {year}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <GenericFilter
                      data={income}
                      options={["Entradas", "Saídas"]}
                      buttonLabel="Valores"
                      handleSelect={setIncome}
                    />
                  </Grid>
                  <Grid item>
                    <GenericFilter
                      data={categories}
                      options={getCategories()}
                      buttonLabel="Categorias"
                      handleSelect={setCategories}
                    />
                  </Grid>
                  <Grid item>
                    <GenericFilter
                      data={periodicity}
                      options={getPeriodicities()}
                      buttonLabel="Frequências"
                      handleSelect={setPeriodicity}
                    />
                  </Grid>
                  <Grid item>
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={() =>
                        setOpenDialog({ open: true, mode: "create" })
                      }
                    >
                      Cadastrar novo movimento
                    </Button>
                  </Grid>
                </Grid>
              </Toolbar>
              <TableContainer
                component={Paper}
                sx={{ marginTop: theme.spacing(2) }}
              >
                <Table aria-label="Tabela de movimentos">
                  <TableHead>
                    <TableRow
                      sx={{ backgroundColor: theme.palette.secondary.main }}
                    >
                      <TableCell>Nome</TableCell>
                      <TableCell align="right">Valor</TableCell>
                      <TableCell align="right">Categoria</TableCell>
                      <TableCell align="right">Frequência</TableCell>
                      <TableCell align="right">Moeda</TableCell>
                      <TableCell align="right">Data</TableCell>
                      <TableCell align="right">Ações</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {transactions.map((transaction) => (
                      <TableRow
                        key={`${transaction.name}-${transaction.amount}-${transaction.date}`}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                          borderLeft: `2px solid ${
                            transaction.amount >= 0
                              ? theme.palette.success.main
                              : theme.palette.error.main
                          }`,
                        }}
                      >
                        <TableCell component="th" scope="row">
                          <Typography fontWeight="600" fontSize={14}>
                            {transaction.name}
                          </Typography>
                        </TableCell>
                        <TableCell align="right">
                          {transaction.amount}
                        </TableCell>
                        <TableCell align="right">
                          {transaction.category}
                        </TableCell>
                        <TableCell align="right">
                          {transaction.periodicity}
                        </TableCell>
                        <TableCell align="right">
                          {transaction.currency}
                        </TableCell>
                        <TableCell align="right">{transaction.date}</TableCell>
                        <TableCell align="right">
                          <IconButton
                            onClick={() =>
                              setOpenDialog({
                                open: true,
                                mode: "edit",
                                currentTransaction: transaction,
                              })
                            }
                            aria-label="edit"
                          >
                            <EditIcon />
                          </IconButton>
                          <IconButton
                            onClick={() =>
                              setOpenDialog({
                                open: true,
                                mode: "delete",
                                currentTransaction: transaction,
                              })
                            }
                            aria-label="delete"
                          >
                            <DeleteIcon />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                    <TableRow
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                        borderLeft: `2px solid ${
                          calculateTotalAmount() >= 0
                            ? theme.palette.success.main
                            : theme.palette.error.main
                        }`,
                      }}
                    >
                      <TableCell>Total:</TableCell>
                      <TableCell align="right">
                        €{calculateTotalAmount()}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        </Box>
      )}
      <TransactionDialog
        open={openDialog.open}
        mode={openDialog.mode}
        currentTransaction={openDialog.currentTransaction}
        onClose={onSubmitForm}
        categories={getCategories()}
        periodicities={getPeriodicities()}
      />
    </Layout>
  );
};
export default ManagementPage;
