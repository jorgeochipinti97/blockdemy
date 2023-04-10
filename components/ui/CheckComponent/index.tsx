import { Box, Typography } from "@mui/material";
import React, { FC } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import useHover from "@react-hook/hover";

interface Props {
  boldText: string;
  bodyText: string;
}

export const CheckComponent: FC<Props> = ({ boldText, bodyText }) => {
  const target = React.useRef(null);
  const isHovering = useHover(target, { enterDelay: 200, leaveDelay: 200 });

  return (
    <Box
      display="flex"
      justifyContent="center"
      sx={{
        backgroundColor: isHovering ? "#D9D9D9" : "",
        p: 2,
        transition: "background-color 0.5s ease, border 0.5 ease",
        border: isHovering ? "1px solid #380366" : "none",
        borderRadius:'9px'
      }}
      ref={target}
    >
      <Box>
        <CheckCircleIcon
          sx={{
            color: isHovering ? "#380366" : "#333",
            mr: 1,
            transition: "color 0.5s ease",
          }}
        />
      </Box>
      <Box display="flex" flexDirection="column" sx={{ width: "60vw" }}>
        <Box alignSelf="start">
          <Typography
            variant="body1"
            sx={{
              fontSize: '1.5rem',
              color: isHovering ? "#380366" : "#333",
              fontWeight: "bold",
              transition: "color 0.5s ease",
            }}
          >
            {boldText}
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="body1"
            sx={{
              display: isHovering ? "block" : "none",
              fontSize: '1rem',
              color: "#380366",
              transition: "display 0.5s ease",
            }}
          >
            {bodyText}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
