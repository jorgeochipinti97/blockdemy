import { IntersectionNumber } from "@/components/IntersectionNumber";
import { Typography, Button, Box, Grid, Divider } from "@mui/material";
import React, { FC } from "react";

interface Props {
  handleClick: any
  isMobile: boolean
}

export const ArbitrajeSection: FC<Props> = ({ handleClick, isMobile }) => {
  return (
    <>
      <Grid container sx={{ backgroundColor: "#380366", pt: 10 }}>
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
              alignItems={isMobile ? 'start' : 'end'}
              sx={{
                height: !isMobile ? "278px" : 'auto',
                width: isMobile ? '80%' : "494px",
                my: isMobile ? 4 : 0
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  color: "white",
                  textAlign: 'center',
                  fontWeight: "bold",
                  fontSize: { xs: '50px', sm: '50px', md: "72px", lg: '72px', xl: '72px' }, fontFamily: 'Montserrat'
                }}
              >
                ¿QUÉ ES EL ARBITRAJE?
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} justifyContent="center" >
          <Box
            display='flex'
            flexDirection='column'
            justifyContent='start'
            alignContent={isMobile ? 'center' : 'start'}
            sx={{
              height: isMobile ? 'auto' : "278px",
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
                fontSize: { xs: '15px', sm: '15px', lg: '24px', xl: '24px', md: "24px" },
                fontWeight: "100",
                mt: 1,
                lineHeight: { xs: '22px', sm: '22px', lg: '29.26p', xl: '2429.26ppx', md: "29.26p" },
                color: 'white', fontStyle: 'normal',
                textAlign: isMobile ? 'center' : 'left', fontFamily: 'Montserrat',
              }}
            >
              El arbitraje financiero es una técnica  <br style={{ display: isMobile ? 'block' : 'none' }} /> segura y <br style={{ display: isMobile ? 'none' : 'block' }} /> confiable que te
              permite <br style={{ display: isMobile ? 'block' : 'none' }} />  obtener ganancias como <br style={{ display: isMobile ? 'none' : 'block' }} /> resultado entre  <br style={{ display: isMobile ? 'block' : 'none' }} /> la compra y venta
              de activos en <br style={{ display: isMobile ? 'block' : 'none' }} />  diferentes plataformas.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '15px', sm: '15px', lg: '24px', xl: '24px', md: "24px" },
                fontWeight: "100",
                mt: 2,
                lineHeight: { xs: '22px', sm: '22px', lg: '29.26px', xl: '29.26px', md: "29.26px" },
                color: 'white', fontFamily: 'Montserrat', textAlign: isMobile ? 'center' : 'start'
              }}
            >
              Vas a poder calcular el rendimiento de la <br style={{ display: isMobile ? 'block' : 'none' }} />  operación <br style={{ display: isMobile ? 'none' : 'block' }} /> en el
              momento, disponiendo <br style={{ display: isMobile ? 'block' : 'none' }} />  de tu capital y de tu <br style={{ display: isMobile ? 'none' : 'block' }} />ganancia al instante.
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={12} md={4} lg={4} xl={4} sx={{ mt: { xs: 8, sm: 8, md: 10, lg: 10, xl: 10 } }}>
          <Box display="flex" justifyContent="center" sx={{my:isMobile ? 3 : 0}}>
            <Box width={"100%"} sx={{ borderRight: !isMobile ? '1px solid white' : '', height: isMobile ? "auto" : '148px', pr: { xs: 0, sm: 0, md: 4, lg: 4, xl: 4 } }} display='flex' justifyContent={isMobile ? 'center' : 'right'} alignItems={isMobile ? 'start' : 'center'}>
              <Typography
                variant="body1"
                sx={{ textAlign: isMobile ? 'center' : "right", color: "white", fontSize: isMobile ? '30px' : '36px', fontWeight: isMobile ? '700' : '500' }}
              >
                ¿Te suenan <br /> estos numeros?
              </Typography>
            </Box>
          </Box>
          <Box display='flex' justifyContent='center'>
            <Divider sx={{ my: 1, py: .1, width: '80%', backgroundColor: 'white', borderRadius: '9px', display: isMobile ?  "block" :'none' }} />
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={8} lg={8} xl={8} sx={{ mt: { xs: 5, sm: 5, md: 10, lg: 10, xl: 10 } }}>
          <Box display="flex" justifyContent="space-around" flexWrap="wrap">

              <IntersectionNumber
              isMobile={isMobile}
                number={50.9}
                title="INFLACIÓN ANUAL EN ARGENTINA"
                year="2021"
              />

              <IntersectionNumber
              isMobile={isMobile}
                number={100.3}
                title="INFLACIÓN ANUAL EN ARGENTINA"
                year="2022"
              />
              <IntersectionNumber
              isMobile={isMobile}
                number={21.7}
                title="CAIDA DEL SALARIO ANUAL EN ARGENTINA"
                year="2021"
              />
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} lg={12} md={12} xl={12}>
          <Box display="flex" justifyContent="center" sx={{ mt: isMobile ? 4 : 16, height: isMobile?"auto": '20vh', pb: isMobile ? 7 :0 }}>
            <Box display="flex" justifyContent="center" sx={{ width: '564px', height: isMobile ? '52px' : '82px' }}>
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
                  fontSize: isMobile ? "20px" : "36px",
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
