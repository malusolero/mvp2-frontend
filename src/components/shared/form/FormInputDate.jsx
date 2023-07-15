import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Controller } from "react-hook-form";
import pt from "date-fns/locale/pt-BR";

export const FormInputDate = ({ name, control, label }) => {
  return (
    <LocalizationProvider adapterLocale={pt} dateAdapter={AdapterDateFns}>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <DatePicker
            disableFuture
            value={value}
            onChange={onChange}
            label={label}
          />
        )}
      />
    </LocalizationProvider>
  );
};
