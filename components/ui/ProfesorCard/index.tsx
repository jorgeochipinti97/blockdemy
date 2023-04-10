import { Card, Typography, Box } from "@mui/material";
import useHover from "@react-hook/hover";
import Image from "next/image";
import React, { FC, useState } from "react";
import { styled } from "@mui/material/styles";

interface Props {
  image: string;
  body: string;
  name: string;
  rang: string;
}
export const ProfresorCard: FC<Props> = ({ image, body, rang, name }) => {
  const target = React.useRef(null);
  const isHovering = useHover(target, { enterDelay: 200, leaveDelay: 200 });
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => {
      setClicked(false);

    }, 2000);
  };

  const StyledImage = styled(Image)`
    filter: ${clicked ||isHovering  ? "" : "grayscale(100%)"};
    transition: filter 0.7s ease-in-out;
    &:hover,
    &:active {
      filter: grayscale(0%);
    }
    text-align: center;
  `;

  return (
    <>
      <Box
        sx={{
          position: "relative",
          display: "inline-block",
          width: "100%",
        }}
        display="flex"
        justifyContent="center"
        ref={target}
        onClick={handleClick}
      >
        <Box display="flex" justifyContent="center">
          <StyledImage src={image} alt="My Image" width={342} height={378} />
        </Box>
        <Box display="flex" justifyContent="center">
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{
              boxShadow: "0px 0px 15px 5px #546CE9",
              mt: 4,
              width: 342,
              height: 82,
              backgroundColor: isHovering || clicked ? "#380366" : "white",
              transition:'background-color 0.5s ease-in-out',
              fontWeight: "700",
            }}
          >
            <Typography
              variant="body1"
              sx={{ fontSize: 36, color: isHovering || clicked ? "white" : "#380366" }}
            >
              {name}
            </Typography>
          </Box>
        </Box>
        <Box display="flex" justifyContent="center" sx={{mt:4}}>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Typography
              variant="body1"
              sx={{ fontSize: isHovering || clicked ? 20 : 24, color: "white" }}
              textAlign='center'
            >
              {isHovering||clicked ? body : rang}
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};
