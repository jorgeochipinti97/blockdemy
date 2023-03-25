import { Typography, Button, Box } from "@mui/material";
import React, { FC } from "react";

interface Props {
  handleClick: any;
}

export const ArbitrajeSection: FC<Props> = ({ handleClick }) => {
  return (
    <>
      <Box sx={{ backgroundColor: "rgb(56, 3, 102)", py: 4 }}>
        <div data-aos="fade-left">
          <Box>
            <Typography
              variant="h4"
              sx={{ textAlign: "center", fontWeight: "bold" }}
            >
              ¿QUÉ ES EL ARBITRAJE?
            </Typography>
          </Box>
        </div>
        <Box sx={{ m: 2, mt: 5 }}>
          <div data-aos="fade-right">
            <Typography
              variant="body1"
              sx={{ textAlign: "center", fontSize: 20, fontWeight: "100" }}
            >
              El arbitraje financiero es una técnica segura y confiable que te
              permite obtener ganancias como{" "}
              <span style={{ fontWeight: "bold" }}>
                resultado entre la compra y venta de activos{" "}
              </span>
              en diferentes plataformas.
            </Typography>
          </div>
        </Box>
        <Box sx={{ m: 2, mt: 5 }}>
        <div data-aos="fade-right">

          <Typography
            variant="body1"
            sx={{ textAlign: "center", fontSize: 20, fontWeight: "100" }}
            >
            Vas a poder calcular el rendimiento de la operación en el momento,
            <span style={{ fontWeight: "bold", marginLeft: 4 }}>
              disponiendo de tu capital y de tu ganancia al instante.
            </span>
          </Typography>
            </div>
        </Box>
        <div data-aos="fade-left">

        <Box display="flex" justifyContent="center" sx={{ mt: 4 }}>
          <Button
            onClick={handleClick}
            variant="contained"
            sx={{
              backgroundColor: "white",
              color: "rgb(56, 3, 102)",
              ":hover": {
                bgcolor: "black",
                color: "white",
              },
            }}
            >
            {" "}
            <span style={{ fontWeight: "bold", fontSize: 20 }}>
              ¡Quiero empezar hoy!
            </span>
          </Button>
        </Box>
            </div>
      </Box>
    </>
  );
};
