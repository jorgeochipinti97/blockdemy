import { Box, Typography } from "@mui/material";
import React, { FC, useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import useHover from "@react-hook/hover";
import { useEffect } from "react";
import { useRef } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';interface Props {
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
    }, 5000);
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
      }, 5000);
    !isIntersecting && setIsVisible(false);
  }, [isIntersecting]);

  return (
    <Box
      display="flex"
      justifyContent="start"
      onClick={handleClick}
      sx={{
        backgroundColor: clicked ? "#D9D9D9" : "",
        transition: "background-color 0.5s ease-in-ou",
        borderRadius: "9px",
        p:clicked ? 2 : .5,my:1,cursor:'pointer',
        width:'1148px'

      }}
      ref={target}
    >
      <Box
        display="flex"
        flexDirection="column"


      >
        <Box display='flex' alignItems='center'>
          <Box ref={ref}>
            {
clicked ? (
<KeyboardArrowRightIcon   sx={{
    color:  "white",
    backgroundColor:clicked ? '#380366' : 'gray',
    borderRadius:'100px',
    transition: "background-color 0.5s ease-in-ou",
    
    
    mr: 1,
  }} />
  
):(

  <ExpandMoreIcon
  sx={{
    color:  "white",
    backgroundColor:clicked ? '#380366' : 'gray',
    borderRadius:'100px',
    transition: "background-color 0.5s ease-in-ou",
    
    
    mr: 1,
  }}
  />
  )
            }
          </Box>
          <Typography
            variant="body1"
            textAlign="center"
            sx={{
              fontSize: "1.5rem",
              color: clicked ? "#380366" : "#333",
              fontWeight: "bold",
              transition: "color 0.5s ease",fontFamily:'Montserrat'
            }}
          >
            {boldText}
          </Typography>
        </Box>



        <Box  sx={{              display: clicked ? "block" : "none",
}}>
          <Typography
            variant="body1"
            sx={{
              fontSize: "1rem",
              color: "#380366",
              transition: "display 0.5s ease",
              textAlign:'justify',fontFamily:'Montserrat'
            }}
          >
            {bodyText}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
