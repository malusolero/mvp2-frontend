import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PeriodicityForm from "../PeriodicityForm";

const PeriodicityAccordion = () => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel4a-content"
        id="panel4a-header"
      >
        <Typography>Periodicidade</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Defina as periodicidades que devem ser usadas pelo sistema:
        </Typography>
        <PeriodicityForm />
      </AccordionDetails>
    </Accordion>
  );
};

export default PeriodicityAccordion;
