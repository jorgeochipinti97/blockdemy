import { Accordion, AccordionDetails, AccordionSummary, Box, makeStyles, Typography } from "@mui/material";
import React, { FC, useState } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


interface Props {
  boldText: string;
  bodyText: string;
  isMobile: boolean
}

export const CheckComponent: FC<Props> = ({ boldText, bodyText, isMobile }) => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };


  return (<>
    <Accordion sx={{
      border: 'none !important', borderRadius: '9px', boxShadow: 'none', backgroundColor: !clicked ? 'white' : '#D9D9D9', width: isMobile ? '90vw' : '1148px', '&:before': {
        display: 'none',
      }
    }} onChange={handleClick} >
      <AccordionSummary
        sx={{ borderBottom: 'none !important', border: 'none !important' }}
      >
        <Box display='flex' justifyContent='start' alignItems={isMobile && boldText.includes('capacidad') ? 'start' :'center'}>


            <ExpandMoreIcon sx={{
              color: "white",
              backgroundColor: clicked ? '#380366' : 'gray',
              borderRadius: '100px',
              transition: "background-color 0.5s ease-in-ou", mx: .5

            }} />
     

            <Typography
              variant="body1"
              textAlign={isMobile ? "start" : "center"}
              sx={{
                fontSize: isMobile ? "14px" : "1.5rem",
                color: clicked ? "#380366" : "#333",
                fontWeight: "bold",
                transition: "color 0.5s ease", fontFamily: 'Montserrat'
              }}
            >
              {boldText}
            </Typography>
          </Box>

      </AccordionSummary>
      <AccordionDetails
        sx={{ borderBottom: 'none !important', border: 'none !important' }}
      >
        <Typography
          variant="body1"
          sx={{
            fontSize: isMobile ? "12px" : "1rem",
            color: "#380366",
            transition: "all 1s ease-in-out",
            textAlign: 'justify', fontFamily: 'Montserrat'
          }}
        >
          {bodyText}
        </Typography>
      </AccordionDetails>
    </Accordion>


  </>
  );
};
