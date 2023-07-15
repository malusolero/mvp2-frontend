import { Box, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import FormTextField from "../../../../components/shared/form/FormTextField";
import { FormItemWrapper } from "./index.styled";
import FormSelect from "../../../../components/shared/form/FormSelect";
import { FormInputDate } from "../../../../components/shared/form/FormInputDate";

const TransactionForm = ({
  categories,
  periodicities,
  currentTransaction,
  onSubmit,
}) => {
  const defaultValues = currentTransaction
    ? {
        ...currentTransaction,
        date: new Date(
          `${currentTransaction.date.split("/").reverse().join("/")}`
        ),
      }
    : null;

  console.log(defaultValues);

  const { handleSubmit, control } = useForm({
    defaultValues,
  });
  return (
    <Box component="form">
      <FormItemWrapper>
        <FormTextField name="name" control={control} label="Nome" />
      </FormItemWrapper>
      <FormItemWrapper>
        <FormTextField name="amount" control={control} label="Valor" />
      </FormItemWrapper>
      <FormItemWrapper>
        <FormSelect
          name="category"
          control={control}
          label="Categoria"
          options={categories}
        />
      </FormItemWrapper>
      <FormItemWrapper>
        <FormSelect
          name="currency"
          control={control}
          label="Moeda"
          options={["€", "$", "R$"]}
        />
      </FormItemWrapper>
      <FormItemWrapper>
        <FormSelect
          name="periodicity"
          control={control}
          label="Periodicidade"
          options={periodicities}
        />
      </FormItemWrapper>
      <FormItemWrapper>
        <FormInputDate name="date" control={control} label="Data" />
      </FormItemWrapper>
      <FormItemWrapper>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit(onSubmit)}
        >
          {!defaultValues ? "Cadastrar" : "Editar"}
        </Button>
      </FormItemWrapper>
    </Box>
  );
};

export default TransactionForm;
