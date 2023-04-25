import { Box, CircularProgress } from "@mui/material";
import React, { FC } from "react";
import { useRef } from "react";
import { useState, useEffect, RefObject } from "react";
import ReactPlayer from "react-player";
import AOS from "aos";

interface Props {
  url: string;
  height_: string;
  widthmd?: string;
}

export const VideoComponent: FC<Props> = ({ url, height_,widthmd }) => {
  const [isLoading, setIsLoading] = useState(false);
  const playerRef = useRef<ReactPlayer>(null);

  const handleOnLoad = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    if (playerRef.current) {
      AOS.refresh();
    }
  }, [playerRef]);

  return (
    <>
      {isLoading && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "35vh",
            width: "100%",
            textAlign: "center", // agrega esta propiedad
          }}
        >
          <CircularProgress />
        </Box>
      )}

      <Box
        display="flex"
        justifyContent="center"
        alignContent="center"
        sx={{
          height: height_,
          //   "35vh",
          width: {
            xs: widthmd,
            sm: widthmd,
            md: widthmd,
            lg: widthmd,
            xl: widthmd,
          },
          display: isLoading ? "none" : "true",

        }}
      >
        <ReactPlayer
          ref={playerRef}
          url={url}
          //   "https://www.youtube.com/embed/C7z96xNAHNc"
          controls={true}
          width="100%"
          height="100%"
          onReady={handleOnLoad}
        />
      </Box>
    </>
  );
};
