import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  Box,
} from "@mui/material";
import React, { FC } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface Props {
  pregunta: string;
  respuesta: string;
}

export const AccordionComponent: FC<Props> = ({ pregunta, respuesta }) => {
  return (
    <>  <Box display='flex' justifyContent='center'>

      <Box sx={{my:0.2, width:'80%'}}>
        <Accordion sx={{backgroundColor:'#D9D9D9'}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography sx={{fontWeight:'bold'}}>{pregunta}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{respuesta}</Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
      </Box>
    </>
  );
};
