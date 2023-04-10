import { Grid, Box, Typography, CircularProgress } from "@mui/material";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import ReactPlayer from "react-player";
import AOS from "aos";

interface VideoPlayerProps {
  width?: string | number;
  height?: string | number;
}

export const CourseSection = () => {
  const [isLoading, setIsLoading] = useState(true);
  const handleOnLoad = () => {
    setIsLoading(false);
    var vh = window.innerHeight * 100 / screen.height;
    console.log(vh + "vh");  };

  const playerRef = useRef<ReactPlayer>(null);

  useEffect(() => {
    if (playerRef.current) {
      AOS.refresh();
    }
  }, [playerRef]);

  return (
    <Grid
      container
      justifyContent="center"
      sx={{ py: 1, backgroundColor: "#252425" }}
    >
      <Grid item xs={12} sm={12} md={12} sx={{ width: "100%", mx: 1 }}>
        <div data-aos="zoom-in-down">
          <Box display="flex" justifyContent="center" sx={{ my: {xs:3,sm:3,md:5,lg:5,xl:5} }}>
            <Typography
              variant="body1"
              sx={{
                fontWeight: 500,
                fontSize: "3rem",
                lineHeight: "58.51px",
                fontFamily: "Montserrat",
                fontStyle: "normal",
                mixBlendMode: "normal",
                textAlign:{xs:'center',sm:'center'}
              }}
            >
              Curso de Arbitraje Financiero de Block Academy
            </Typography>
          </Box>
        </div>
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        md={6}
        xl={6}
        lg={6}
        sx={{ width: "100%", mt:4}}
      >
        <Box display='flex' flexDirection='column' >
          <div data-aos="zoom-in-left">
            <Box
              sx={{
                width: {
                  xs: "100vw",
                  sm: "100vw",
                  md: "46.96vw",
                  lg: "46.96vw",
                  xl: "46.96vw",
                },
                ml: { xs: 0, sm: 0, md: 0, lg: 9, xl: 9 },
                textAlign:{xs:'center',sm:'center'}

              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontSize: "2rem",
                  lineHeight: "39.01px",
                  fontFamily: "Montserrat",
                  fontWeight: 540,
                }}
              >
                Un método seguro y confiable para alcanzar la libertad
                financiera.{" "}
              </Typography>
            </Box>
          </div>
          <div data-aos="zoom-in-up">
            <Box
              sx={{
                width: {
                  xs: "100vw",
                  sm: "100vw",
                  md: "48.43vw",
                  lg: "48.43vw",
                  xl: "48.43vw",
                },
                ml: { xs: 0, sm: 0, md: 0, lg: 9, xl: 9 },
                textAlign:{xs:'center',sm:'center'}

              }}
            >
              <Typography
                variant="body1"
                sx={{
                  mt: 2,
                  fontWeight: "100",
                  color: "#FFFFFF",
                  mb: 4,
                  fontSize: "1.5rem",
                }}
              >
                Independientemente de los humores del mercado, y sin tener
                conocimientos previos, vas a aprender a combatir la inflación y
                hacer crecer tus ingresos.{" "}
              </Typography>
            </Box>
          </div>
        </Box>
      </Grid>

      <Grid item xs={12} sm={6} md={6} xl={6} lg={6} sx={{ width: "100%" }}>
        <Box display="flex" justifyContent="center">
          <div data-aos="zoom-in-down">
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
                height: "35vh",
                width: {xs:'100vw',sm:'100vw',md:"38.54vw",lg:'38.52vw',xl:'38.52vw'},
                display: isLoading ? "none" : "true",
              }}
            >
              <ReactPlayer
                ref={playerRef}
                url="https://www.youtube.com/embed/C7z96xNAHNc"
                controls={true}
                width="100%"
                height="100%"
                onReady={handleOnLoad}
              />
            </Box>
          </div>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        lg={12}
        sm={12}
        md={12}
        xl={12}
        justifyContent="center"
      >
        <div data-aos="zoom-in">
          <Box display="flex" justifyContent="center" sx={{ my: 5 }}>
            <Box
              display="flex"
              justifyContent="center"
              sx={{ my: 2, py: 2, border: "1px solid grey", width: "1184px" }}
              className="glow-div-white"
            >
              <Box sx={{ width: "90.36vw" }}>
                <Typography
                  variant="body1"
                  sx={{

                    textAlign: "center",
                    fontSize: '1.25rem',
                  }}
                >
                  Aprendé todo sobre arbitraje: un método seguro y confiable
                  explicado paso a paso por expertos, que te dará la oportunidad
                  de generar los ingresos que te propongas.
                </Typography>
              </Box>
            </Box>
          </Box>
        </div>
      </Grid>
    </Grid>
  );
};
