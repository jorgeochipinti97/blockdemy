import Image from "next/image";

import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

interface Props{
  isMobile:boolean
}

export const FooterComponent = ({isMobile} :Props) => {
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
        <Box display='flex' justifyContent='center' sx={{pb:5, mt:isMobile ? 2:0}}>
          <Box sx={{mx:isMobile ? 0:2}}>
            <Typography variant='body1' sx={{fontSize:'20px',fontFamily:'Montserrat',lineheight:'39,01px', color:'white',fontWeight:'500',textAlign:'center'}}>Términos y Condiciones</Typography>
          </Box>
          <Box sx={{mx:isMobile ? 0:2,textAlign:'center'}}>
          <Typography variant='body1' sx={{fontSize:'20px',fontFamily:'Montserrat',lineheight:'39,01px', color:'white',fontWeight:'500'}}>Política de devoluciones</Typography>
          </Box>
        </Box>
      </footer>
    </>
  );
};
