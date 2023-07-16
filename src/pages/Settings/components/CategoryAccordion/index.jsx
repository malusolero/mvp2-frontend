import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ProfileForm from "../ProfileForm";

const CategoryAccordion = () => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2a-content"
        id="pane2a-header"
      >
        <Typography>Categoria</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>Insira o nome da categoria que deseja criar:</Typography>
        <ProfileForm />
      </AccordionDetails>
    </Accordion>
  );
};

export default CategoryAccordion;
