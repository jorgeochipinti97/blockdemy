import { Box, Typography } from "@mui/material";
import React, { FC, useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import useHover from "@react-hook/hover";
import { useEffect } from "react";
import { useRef } from "react";

interface Props {
  boldText: string;
  bodyText: string;
}

export const CheckComponent: FC<Props> = ({ boldText, bodyText }) => {
  const target = React.useRef(null);
  const isHovering = useHover(target, { enterDelay: 200, leaveDelay: 200 });
  const [clicked, setClicked] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  useEffect(() => {
    setTimeout(() => {
      setClicked(false);
    }, 2000);
  }, [clicked]);

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

  useEffect(() => {
    isIntersecting &&
      setTimeout(() => {
        setIsVisible(!isVisible);
      }, 1000);
    !isIntersecting && setIsVisible(false);
  }, [isIntersecting]);

  return (
    <Box
      display="flex"
      justifyContent="center"
      onClick={handleClick}
      sx={{
        backgroundColor: isHovering || isVisible ? "#D9D9D9" : "",
        p: 2,
        transition: "background-color 0.5s ease",
        borderRadius: "9px",
        my: 3,
        height: "30vh",
        maxWidth: "70vw",
      }}
      ref={target}
    >
      <Box
        display="flex"
        flexDirection="column"
        sx={{ width: { xs: "'100%", md: "60vw" } }}
      >
        <Box display='flex'>
          <Box ref={ref}>
            <CheckCircleIcon
              sx={{
                color: isHovering || isVisible ? "#380366" : "#333",
                mr: 1,
                transition: "color 0.5s ease",
              }}
            />
          </Box>
          <Typography
            variant="body1"
            textAlign="center"
            sx={{
              fontSize: "1.5rem",
              color: isHovering || isVisible ? "#380366" : "#333",
              fontWeight: "bold",
              transition: "color 0.5s ease",
            }}
          >
            {boldText}
          </Typography>
        </Box>
        <Box >
          <Typography
            variant="body1"
            sx={{
              display: isHovering || isVisible ? "block" : "none",
              fontSize: "1rem",
              color: "#380366",
              transition: "display 0.5s ease",
              textAlign:'justify'
            }}
          >
            {bodyText}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
