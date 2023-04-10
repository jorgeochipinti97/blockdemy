import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import useHover from "@react-hook/hover";
import Image from "next/image";
import React, { FC, useState } from "react";

interface Props {
  image: string;
  body: string;
}

export const ContentCard: FC<Props> = ({ image, body }) => {
  const [clicked, setClicked] = useState(false);
  const target = React.useRef(null);
  const isHovering = useHover(target, { enterDelay: 200, leaveDelay: 200 });

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <Box onClick={handleClick} display='flex' justifyContent='center' flexDirection='column' alignItems='center' ref={target}>
        <Box display="flex" justifyContent="center" sx={{display: clicked || isHovering ? 'none' : 'block'}}>
          <Image src={image} alt="" width={120} height={120} />
        </Box>
        <Box sx={{display:clicked || isHovering ? 'block' : 'none'}}>
          <Typography variant="h5" textAlign="center">
            {body}{" "}
          </Typography>
        </Box>
      </Box>
    </>
  );
};
