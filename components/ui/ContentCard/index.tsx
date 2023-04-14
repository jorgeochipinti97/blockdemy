import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import useHover from "@react-hook/hover";
import Image from "next/image";
import React, { FC, useEffect, useRef, useState } from "react";

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

  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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
    <div ref={ref}>
      <Box
        onClick={handleClick}
        display="flex"
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
        ref={target}
      >
        <Box
          display="flex"
          justifyContent="center"
          // sx={{ display: isVisible || isHovering ? "none" : "block" }}
        >
          <Image src={image} alt="" width={120} height={120} />
        </Box>
        <Box
          sx={{
            transform: isVisible ? 'rotateX(360deg)' : 'rotateX(0deg)',
            transition: 'transform 0.5s ease',mt:2

          }}
        >

            <Typography variant="h5" textAlign="center">
              {body}{" "}
            </Typography>
        </Box>
      </Box>
    </div>
  );
};
