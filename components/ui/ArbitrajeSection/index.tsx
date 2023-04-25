import { IntersectionNumber } from "@/components/IntersectionNumber";
import { Typography, Button, Box, Grid } from "@mui/material";
import React, { FC } from "react";

interface Props {
  handleClick: any;
}

export const ArbitrajeSection: FC<Props> = ({ handleClick }) => {
  return (
    <>
      <Grid container sx={{ backgroundColor: "#380366", pt: 4 }}>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} justifyContent="center" >
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{
              height: "100%",
            }}
          >
            <Box
              display="flex"
              alignItems='end'
              sx={{
                height: "278px",

                width: "494px",

              }}
            >
              <Typography
                variant="body1"
                sx={{
                  color: "white",
                  textAlign: "end",
                  fontWeight: "bold",
                  fontSize: "72px", fontFamily: 'Montserrat'
                }}
              >
                ¿QUÉ ES EL ARBITRAJE?
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} justifyContent="center">
          <Box
            display='flex'
            flexDirection='column'
            justifyContent='center'
            sx={{
              height: "278px",

              width: {
                xs: "100%",
                sm: "100%",
                md: "652px",
                lg: "652px",
                xl: "652px",
              },
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: "24px",
                fontWeight: "100",
                m: 2,
                lineHeight: "29.26px",
                color: 'white', fontStyle: 'normal',
                textAlign: 'left', fontFamily: 'Montserrat'
              }}
            >
              El arbitraje financiero es una técnica segura y <br /> confiable que te
              permite obtener ganancias como <br /> resultado entre la compra y venta
              de activos en diferentes plataformas.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: "24px",
                fontWeight: "100",
                m: 2,
                lineHeight: "29.26px",
                color: 'white', fontFamily: 'Montserrat'
              }}
            >
              Vas a poder calcular el rendimiento de la operación <br /> en el
              momento,disponiendo de tu capital y de tu <br />ganancia al instante.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4} sx={{ mt: 10 }}>
          <Box display="flex" justifyContent="center">
            <Box width={"100%"} sx={{ borderRight: '1px solid white', height: '148px', pr: 2 }} display='flex' justifyContent='right' alignItems='center'>
              <Typography
                variant="body1"
                sx={{ textAlign: "right", color: "white", fontSize: '36px' }}
              >
                ¿Te suenan <br />estos numeros?
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={8} lg={8} xl={8} sx={{ mt: 10 }}>
          <Box display="flex" justifyContent="space-around" flexWrap="wrap">
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
              title="CAIDA DEL SALARIO ANUAL EN ARGENTINA"
              year="2021"
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} lg={12} md={12} xl={12}>
          <Box display="flex" justifyContent="center" sx={{ mt: 16, height: '20vh' }}>
            <Box display="flex" justifyContent="center" sx={{ width: '564px', height: '82px' }}>
              <Button
                onClick={handleClick}
                size="large"

                variant="contained"
                sx={{
                  backgroundColor: "white",
                  transition: 'all 0.3s ease-in-out',
                  color: "#380366",
                  boxShadow: '0px 0px 15px 5px rgba(255, 255, 255, 0.25);',
                  fontWeight: "bold",
                  fontSize: "36px",
                  ":hover": {
                    bgcolor: "white",
                    boxShadow: '0px 0px 30px 10px rgba(255, 255, 255, 0.25)',

                    transform: 'scale(1.1)'
                  },
                }}
              >
                ¡QUIERO EMPEZAR HOY!
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
