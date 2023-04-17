import Image from "next/image";

import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export const FooterComponent = () => {
  return (
    <>
      <footer style={{ backgroundColor: '#5F5F5F' }}>
        <Divider sx={{ my: 1, backgroundColor: "white" }} />
        <Box display="flex" justifyContent="center">
          <Image
            src="/logos-block-x-e-mentors600x150.png"
            className="custom-image"
            width={600}
            height={150}
            alt=""
          />
        </Box>
        <Box display='flex' justifyContent='center' sx={{pb:5}}>
          <Box sx={{mx:2}}>
            <Typography variant='body1' sx={{fontSize:'32px',fontFamily:'Montserrat',lineheight:'39,01px', color:'white',fontWeight:'500'}}>Términos y Condiciones</Typography>
          </Box>
          <Box sx={{mx:2}}>
          <Typography variant='body1' sx={{fontSize:'32px',fontFamily:'Montserrat',lineheight:'39,01px', color:'white',fontWeight:'500'}}>Política de devoluciones</Typography>
          </Box>
        </Box>
      </footer>
    </>
  );
};
