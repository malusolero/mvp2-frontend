import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TransactionForm from "../TransactionForm";
import { Button, Typography } from "@mui/material";

const TransactionDialog = ({
  onClose,
  open,
  mode,
  currentTransaction,
  categories,
  periodicities,
}) => {
  const handleClose = () => {
    onClose();
  };

  const handleSubmit = (form, mode) => {
    form = {
      ...form,
      date: form.date.toLocaleDateString(),
      amount: +form.amount,
    };
    onClose(form, mode);
  };

  return (
    <Dialog onClose={handleClose} open={open} fullWidth>
      {(mode === "create" || mode === "edit") && (
        <>
          <DialogTitle>
            {mode === "create" ? "Cadastrar" : "Editar"} movimento
          </DialogTitle>
          <DialogContent>
            <TransactionForm
              categories={categories}
              periodicities={periodicities}
              currentTransaction={currentTransaction}
              onSubmit={(form) => handleSubmit(form, mode)}
            />
          </DialogContent>
        </>
      )}
      {mode === "delete" && (
        <>
          <DialogTitle>Deletar movimento</DialogTitle>
          <DialogContent>
            Tem certeza que deseja deletar a movimentação de nome
            <Typography fontWeight="600" variant="body2">
              {currentTransaction.name}?
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button variant="outlined" color="primary" onClick={handleClose}>
              Cancelar
            </Button>
            <Button
              variant="outlined"
              color="error"
              onClick={(form) => onClose(currentTransaction, mode)}
            >
              Confirmar
            </Button>
          </DialogActions>
        </>
      )}
    </Dialog>
  );
};

export default TransactionDialog;
