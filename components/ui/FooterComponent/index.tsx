import Image from "next/image";

import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export const FooterComponent = () => {
  return (
    <>
      <footer>
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
          <Box display='flex' justifyContent='center'>
            <Box sx={{mx:3,my:2}}>
                <InstagramIcon sx={{fontSize:35}}/>
            </Box>
            <Box sx={{mx:3,my:2}}>
                <WhatsAppIcon sx={{fontSize:35}}/>
            </Box>
          </Box>
        <Box display="flex" justifyContent="center">
          <Typography> Todos los derechos reservados. BlockAcademy</Typography>
        </Box>
      </footer>
    </>
  );
};
