import { IntersectionNumber } from "@/components/IntersectionNumber";
import { Grid, Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export const NumberSection = () => {
  return (
    <Box sx={{ backgroundColor: "rgb(31, 59, 146)", py: 5 }}>
      <Grid container justifyContent='center'>
        <IntersectionNumber
          number={50.9}
          title="INFLACIÓN ANUAL EN ARGENTINA"
          year="2021"
        />
        <IntersectionNumber
          number={100.3}
          title="INFLACIÓN ANUAL EN ARGENTINA"
          year="2022"
        />
        <IntersectionNumber
          number={21.7}
          title="CAIDA DEL SALARIO ANUAL"
          year="2021"
        />
      </Grid>
      <Box display="flex" flexDirection="column" sx={{ mt: 4 }}>
        <Box display="flex" justifyContent="center">
          <Divider
            sx={{
              backgroundColor: "white",
              py: 0.2,
              width: "70vw",
              borderRadius: 9,
            }}
          />
        </Box>
        <Box display="flex" justifyContent="center">
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", mt: 2, textAlign: "center" }}
          >
            CON NOSOTROS VAS A APRENDER A COMBATIRLOS.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
