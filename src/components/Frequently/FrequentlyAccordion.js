import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import React, { useState } from "react";

const FrequentlyAccordion = ({ title, text }) => {
  const [isOpen, setIsOpen] = useState(false);

  const check = isOpen ? <RemoveIcon /> : <AddIcon />;

  return (
    <Accordion
      onChange={() => setIsOpen(!isOpen)}
      sx={{ maxWidth: "640px", padding: "15px 5px", borderRadius: '3px !important' }}
    >
      <AccordionSummary expandIcon={check}>
        <Typography fontSize={18} component="h6" variant="h6">
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="subtitle1" component="p" padding="0 30px">
          {text}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default FrequentlyAccordion;
