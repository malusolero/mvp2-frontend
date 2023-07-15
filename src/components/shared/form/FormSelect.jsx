import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Controller } from "react-hook-form";

const FormSelect = ({ name, options, control, label }) => {
  const generateSingleOptions = () => {
    return options.map((option) => {
      return (
        <MenuItem key={`${option}-form-select`} value={option}>
          {option}
        </MenuItem>
      );
    });
  };

  return (
    <FormControl size="small" fullWidth>
      <InputLabel id="form-select-selector-label">{label}</InputLabel>
      <Controller
        render={({ field: { onChange, value } }) => (
          <Select
            labelId="form-select-selector-label"
            onChange={onChange}
            value={value}
          >
            {generateSingleOptions()}
          </Select>
        )}
        control={control}
        name={name}
      />
    </FormControl>
  );
};

export default FormSelect;
