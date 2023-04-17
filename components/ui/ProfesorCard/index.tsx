import { Card, Typography, Box, useMediaQuery } from "@mui/material";
import useHover from "@react-hook/hover";
import Image from "next/image";
import React, { FC, useEffect, useRef, useState } from "react";
import { styled } from "@mui/material/styles";
import { useInView } from "react-intersection-observer";

interface Props {
  image: string;
  body: string;
  name: string;
  rang: string;
}
export const ProfresorCard: FC<Props> = ({ image, body, rang, name }) => {
  const target = React.useRef(null);
  const isHovering = useHover(target, { enterDelay: 200, leaveDelay: 200 });
  const isMirco = name.includes('Mirco');

  // const [isVisible, setIsVisible] = useState(false);

  // const [isIntersecting, setIsIntersecting] = useState(false);
  // const ref = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       setIsIntersecting(entry.isIntersecting);
  //     },
  //     {
  //       rootMargin: "0px",
  //       threshold: 0.5,
  //     }
  //   );

  //   if (ref.current) {
  //     observer.observe(ref.current);
  //   }

  //   return () => {
  //     if (ref.current) {
  //       observer.unobserve(ref.current);
  //     }
  //   };
  // }, []);



  // useEffect(() => {
  //   isIntersecting &&
  //     setTimeout(() => {
  //       setIsVisible(!isVisible);
  //     }, 1000);
  //   !isIntersecting && setIsVisible(false);
  // }, [isIntersecting]);

  const StyledImage = styled(Image)`
    filter: ${isHovering ? "grayscale(0%)" : "grayscale(100%)"};
    transition: filter 0.7s ease-in-out;
    &:hover,
    &:active {
      filter: grayscale(0%);
    }

  `;

  return (
    <>
      <Box display='flex' flexDirection='column' sx={{height:'85vh',mx:3}}>

        <Box
          ref={target}
          sx={{
            display: "inline-block",
            mx: 1,
            borderRadius: '9px',
          }}
          display="flex"
          justifyContent="center"


        >
          <Box display="flex" justifyContent="center" >
            <StyledImage src={image} alt="My Image" width={342} height={378} sx={{
              position: isMirco ? 'relative' : 'static',
              right: isMirco ? 20 : 'auto',
            }} />
          </Box>
          <Box display="flex" justifyContent="center">
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              sx={{
                boxShadow: "0px 0px 15px 5px #546CE9",

                width: 342,
                height: 82,
                backgroundColor: isHovering ? "#380366" : "white",
                transition: "background-color 0.5s ease-in-out",
                fontWeight: "700",
              }}
            >
              <Typography
                variant="body1"

                sx={{ fontSize: 25, color: isHovering ? "white" : "#380366",fontFamily:'Montserrat' }}
              >
                {name}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box display="flex" justifyContent="center" sx={{ mt: 4 }}>
          <Box display="flex" justifyContent="center" alignItems="center" sx={{maxWidth:'381px'}}>
            <Typography
              variant="body1"
              sx={{ fontSize: '20px', color: "white", fontWeight: '500', lineHeight: '24.38px',fontFamily:'Montserrat' }}
              textAlign="center"
            >
              {isHovering ? body : rang.split('|n').map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))}
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};
