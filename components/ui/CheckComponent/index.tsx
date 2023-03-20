import { Box, Typography } from "@mui/material";
import React, { FC } from "react";
import CheckIcon from "@mui/icons-material/Check";

interface Props {
  boldText: string;
  bodyText: string;
}

export const CheckComponent: FC<Props> = ({ boldText, bodyText }) => {
  return (
    <Box display="flex" justifyContent='center'sx={{mt:3}}>
      <Box>
        <CheckIcon sx={{ color: "#333" }} />
      </Box>

      <Box
        sx={{
          width: { xs: "100vw", sm: "100vw", xl: "40vw", lg: "40vw" },
        }}
      >
        <Typography
          variant="body1"
          sx={{ fontSize: 20, color: "#333", fontWeight: "100" }}
        >
          <span style={{ color: "#333", fontWeight: "bold", marginRight: 10 }}>
            {boldText}
          </span>
          {bodyText}
        </Typography>
      </Box>
    </Box>
  );
};
