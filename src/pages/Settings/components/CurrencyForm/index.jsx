import React from "react";
import { useForm } from "react-hook-form";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { FormItemWrapper } from "./index.styled";
import FormTextField from "../../../../components/shared/form/FormTextField";

const CurrencyForm = () => {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <Box component="form">
      <FormItemWrapper>
        <FormTextField name="name" control={control} label="Nome" />
      </FormItemWrapper>
      <FormItemWrapper>
        <FormTextField name="default" control={control} label="Moeda Padrão" />
      </FormItemWrapper>

      <FormItemWrapper>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit(onSubmit)}
        >
          Salvar
        </Button>
      </FormItemWrapper>
    </Box>
  );
};

export default CurrencyForm;
