import { IntersectionNumber } from "@/components/IntersectionNumber";
import { Typography, Button, Box, Grid } from "@mui/material";
import React, { FC } from "react";

interface Props {
  handleClick: any;
}

export const ArbitrajeSection: FC<Props> = ({ handleClick }) => {
  return (
    <>
      <Grid container sx={{ backgroundColor: "#380366", py: 3 }}>
        <Grid item xs={12} sm={12} md={5} lg={5} xl={5} justifyContent="center">
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{ height: "100%" }}
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
                  fontSize: "72px",
                }}
              >
                ¿QUÉ ES EL ARBITRAJE?
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={7} lg={7} xl={7} justifyContent="center">
          <Box
          display='flex'
          flexDirection='column'
          justifyContent='center'
            sx={{            height: "278px",

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
                color:'white', fontStyle:'normal',
                textAlign:'left'
              }}
            >
              El arbitraje financiero es una técnica segura y <br/> confiable que te
              permite obtener ganancias como <br/> resultado entre la compra y venta
              de activos en diferentes plataformas.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: "24px",
                fontWeight: "100",
                m: 2,
                lineHeight: "29.26px",
                color:'white'
              }}
            >
              Vas a poder calcular el rendimiento de la operación <br/> en el
              momento,disponiendo de tu capital y de tu <br/>ganancia al instante.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={3} lg={3} xl={3} sx={{ mt: 4 }}>
          <Box display="flex" justifyContent="center">
            <Box width={"100%"} sx={{borderRight:'1px solid white', height:'148px',pr:2}} display='flex' justifyContent='right' alignItems='center'>
              <Typography
                variant="body1"
                sx={{ textAlign: "right", color: "white",fontSize:'36px' }}
              >
                ¿Te suenan <br/>estos numeros?
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={9} lg={9} xl={9} sx={{ mt: 4 }}>
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
          <Box display="flex" justifyContent="center" sx={{ mt:16,mb:4 }}>
            <Button
              onClick={handleClick}
              size="large"
              className="btn"
              variant="contained"
              sx={{
                backgroundColor: "white",
                color: "#380366",
                fontWeight: "bold",
                fontSize: "1.5rem",
                ":hover": {
                  bgcolor: "white",
                },
              }}
            >
              ¡QUIERO EMPEZAR HOY!
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
