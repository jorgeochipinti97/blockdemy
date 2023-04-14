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
  const [clicked, setClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
    }, 3000);
  };

  useEffect(() => {
    isIntersecting &&
      setTimeout(() => {
        setIsVisible(!isVisible);
      }, 1000);
    !isIntersecting && setIsVisible(false);
  }, [isIntersecting]);

  const StyledImage = styled(Image)`
    filter: ${isVisible ? "grayscale(0%)" : "grayscale(100%)"};
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
          maxWidht:342,

          border:'1px solid white',mx:1,
height:'90vh',
borderRadius:'9px',
        }}
        display="flex"
        justifyContent="center"
        ref={ref}
        onClick={handleClick}
      >
        <Box display="flex" justifyContent="center" >
          <StyledImage src={image} alt="My Image" width={342} height={378} />
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
              backgroundColor: isVisible ? "#380366" : "white",
              transition: "background-color 0.5s ease-in-out",
              fontWeight: "700",
            }}
          >
            <Typography
              variant="body1"
              sx={{ fontSize:25, color: isVisible ? "white" : "#380366" }}
            >
              {name}
            </Typography>
          </Box>
        </Box>
      </Box>
        <Box display="flex" justifyContent="center" sx={{ mt: 4 }}>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Typography
              variant="body1"
              sx={{ fontSize: isVisible ? 20 :20, color: "white" }}
              textAlign="center"
            >
              {isVisible ? body : rang}
            </Typography>
          </Box>
        </Box>
    </>
  );
};
