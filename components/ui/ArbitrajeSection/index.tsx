import { IntersectionNumber } from "@/components/IntersectionNumber";
import { Typography, Button, Box, Grid } from "@mui/material";
import React, { FC } from "react";

interface Props {
  handleClick: any;
}

export const ArbitrajeSection: FC<Props> = ({ handleClick }) => {
  return (
    <>
      <Grid container sx={{ backgroundColor: "#380366",py:3 }}>
        <Grid item xs={12} sm={12} md={5} lg={5} xl={5} justifyContent="center">
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{ height: "100%" }}
          >
            <div data-aos="fade-left">
              <Box display="flex" justifyContent="center">
                <Typography
                  variant="body1"
                  sx={{
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: "3.5rem",
                  }}
                >
                  ¿QUÉ ES EL ARBITRAJE?
                </Typography>
              </Box>
            </div>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={7}
          lg={7}
          xl={7}
          justifyContent="center"
        >
          <Box
            sx={{
              width: {
                xs: "100%",
                sm: "100%",
                md: "49.75vw",
                lg: "49.75vw",
                xl: "49.75vw",
              },
            }}
          >
            <div data-aos="fade-right">
              <Typography
                variant="body1"
                sx={{
                  fontSize: "1.5rem",
                  fontWeight: "100",
                  textAlign: {
                    xs: "center",
                    sm: "center",
                    md: "justify",
                    lg: "justify",
                    xl: "justify",
                  },
                  m:2
                }}
              >
                El arbitraje financiero es una técnica segura y confiable que te
                permite obtener ganancias como resultado entre la compra y venta
                de activos en diferentes plataformas.
              </Typography>
            </div>
            <div data-aos="fade-right">
              <Typography
                variant="body1"
                sx={{
                  fontSize: "1.5rem",
                  fontWeight: "100",
                  textAlign: {
                    xs: "center",
                    sm: "center",
                    md: "justify",
                    lg: "justify",
                    xl: "justify",
                  },
                  m:2
                }}
              >
                Vas a poder calcular el rendimiento de la operación en el
                momento,disponiendo de tu capital y de tu ganancia al instante.
              </Typography>
            </div>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={3} lg={3} xl={3} sx={{ mt:4 }}>
          <Box display="flex" justifyContent="center">
            <Box width={"100%"}>
              <Typography
                variant="h4"
                sx={{ textAlign: "center", color: "white" }}
              >
                ¿Te suenan estos numeros?...
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={9} lg={9} xl={9} sx={{mt:4}}>
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
              title="CAIDA DEL SALARIO ANUAL"
              year="2021"
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} lg={12}md={12} xl={12}>
          <Box display='flex' justifyContent='center' sx={{my:6}}>
            <Button size='large' className='btn'  variant='contained' sx={{backgroundColor:'white', color:'#380366', fontWeight:'bold',fontSize:'1.5rem', ":hover": {
                      bgcolor: "white",
                    },}}>¡QUIERO EMPEZAR HOY!</Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
