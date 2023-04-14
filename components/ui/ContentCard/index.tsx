import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import React, { FC, useEffect, useRef, useState } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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

  useEffect(() => {
    setTimeout(() => {
      isMoving && setClicked(false)
      isMoving && setIsMoving(false)

    }, 3000);
    

  }, [isMoving])




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

      sx={{ mx: 2 }}
    >
      <Box
        display="flex"
        justifyContent="center"
        sx={{
          display: clicked ? "none" : "block",
          transform: !isMoving ? 'rotatey(360deg)' : 'rotatey(0deg)',
          transition: 'transform 0.5s ease'
        }}
      >
        <Image src={image} alt="" width={120} height={120} />

      </Box>
      <Box
        sx={{
          transform: isMoving ? 'rotatey(360deg)' : 'rotatey(0deg)',
          transition: 'transform 0.5s ease', mt: 2,
          display: clicked ? "block" : "none"


        }}
      >

        <Typography variant="body1" textAlign="center" sx={{ fontWeight: '700', fontSize: '24px', color: 'white' }}>
          {body}{" "}
        </Typography>
      </Box>
      <Box display='flex' justifyContent='center'>
          <ExpandMoreIcon sx={{ color: 'white', fontSize: '50px' }} />
        </Box>
    </Box>

  );
};
