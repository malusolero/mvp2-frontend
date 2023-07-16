import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ProfileForm from "../ProfileForm";

const ProfileAccordion = () => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>Perfil</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>Insira o seu nome:</Typography>
        <ProfileForm />
      </AccordionDetails>
    </Accordion>
  );
};

export default ProfileAccordion;
