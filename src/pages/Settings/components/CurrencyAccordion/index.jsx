import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CurrencyForm from "../CurrencyForm";

const CurrencyAccordion = () => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel3a-content"
        id="panel3a-header"
      >
        <Typography>Moeda</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Insira as moedas que deseja no seu sistema e defina qual delas deve
          ser a padrão:
        </Typography>
        <CurrencyForm />
      </AccordionDetails>
    </Accordion>
  );
};

export default CurrencyAccordion;
