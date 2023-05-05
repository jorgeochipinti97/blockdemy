import { Typography, IconButton } from '@mui/material';
import { Box } from "@mui/system";
import Image from "next/image";
import React, { FC, useEffect, useRef, useState } from "react";
import SearchOffIcon from '@mui/icons-material/SearchOff';
import SearchIcon from '@mui/icons-material/Search';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
interface Props {
  image: string;
  body: string;
}

export const ContentCard: FC<Props> = ({ image, body }) => {
  const [clicked, setClicked] = useState(false);
  const [isMoving, setIsMoving] = useState(false)


  useEffect(() => {
    clicked && setIsMoving(true)
    !clicked && setIsMoving(false)
  }, [clicked])




  const handleClick = () => {
    setClicked(!clicked);
  };

  return (

    <Box
      onClick={handleClick}
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"

      sx={{
        mx: 2, cursor: 'pointer', height: '262px'
      }}
    >
      <Box
        display="flex"
        justifyContent="center"
        sx={{
          display: clicked ? "none" : "block",
          transform: isMoving ? 'rotatey(360deg)' : 'rotatey(0deg)',
          transition: 'transform 0.5s ease',

        }}
      >
        <Image src={image} alt="" width={120} height={120} />

      </Box>
      <Box
        sx={{
          transform: isMoving ? 'rotatey(360deg)' : 'rotatey(0deg)',
          transition: 'transform 0.5s ease', mt: 2,
          display: clicked ? "block" : "none",



        }}
      >

        <Typography variant="body1" textAlign="center" sx={{ fontWeight: '700', fontSize: '24px', color: 'white', fontFamily: 'Montserrat' }}>
          {body}{" "}
        </Typography>
      </Box>
      <Box display='flex' justifyContent='center' sx={{ mt: 3 }}>
        <IconButton>
          {
            clicked
              ? (

                <VisibilityOffIcon sx={{ color: 'white', fontSize: '60px', border: '1px solid white', borderRadius: '90px', p: 1 }} />
              )
              : (
                <RemoveRedEyeIcon sx={{ color: 'white', fontSize: '60px', border: '1px solid white', borderRadius: '90px', p: 1 }} />

              )
          }
        </IconButton>
      </Box>
    </Box>

  );
};
