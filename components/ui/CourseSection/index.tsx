import { Grid, Box, Typography, CircularProgress } from "@mui/material";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import ReactPlayer from "react-player";
import AOS from "aos";
import { VideoComponent } from "@/components/videoComponent";

interface VideoPlayerProps {
  width?: string | number;
  height?: string | number;
}

export const CourseSection = () => {
  const [isLoading, setIsLoading] = useState(true);
  const handleOnLoad = () => {
    setIsLoading(false);
    var vh = (window.innerHeight * 100) / screen.height;
    console.log(vh + "vh");
  };

  const playerRef = useRef<ReactPlayer>(null);

  useEffect(() => {
    if (playerRef.current) {
      AOS.refresh();
    }
  }, [playerRef]);

  return (
    <Box sx={{ maxWidth: "98%", backgroundColor: "#252425" }}>
      <Box>
        <Box>
          <Box display="flex" justifyContent="center">
            <Typography
              variant="body1"
              sx={{
                color: "white",
                fontWeight: 700,
                fontSize: "3rem",
                lineHeight: "58.51px",
                fontFamily: "Montserrat",
                fontStyle: "normal",
                mixBlendMode: "normal",
                textAlign: { xs: "center", sm: "center" },
                my:5
              }}
            >
              Curso de Arbitraje Financiero de Block Academy
            </Typography>
          </Box>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Box>
            <Box display="flex" flexDirection="column">
              <Box
                sx={{
                  width: {
                    xs: "100vw",
                    sm: "100vw",
                    md: "615px",
                    lg: "615px",
                    xl: "615px",
                  },
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "32px",
                    lineHeight: "39.01px",
                    fontFamily: "Montserrat",
                    fontWeight: 600,
                    color: "white",
                  }}
                >
                  Un método seguro y confiable para <br/> alcanzar la libertad
                  financiera
                </Typography>
              </Box>

              <Box
                sx={{
                  width: {
                    xs: "100vw",
                    sm: "100vw",
                    md: "634px",
                    lg: "634px",
                    xl: "634px",
                  },
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    mt: 2,
                    fontWeight: "500",
                    color: "#FFFFFF",
                    mb: 4,
                    fontSize: 24,
                    lineHeight: "29.26px",fontFamily:'Montserrat'
                  }}
                >
                  Independientemente de los humores del mercado, <br/>y sin tener
                  conocimientos previos, vas a aprender a <br/> combatir la inflación
                  y hacer crecer tus ingresos.{" "}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box>
            <Box display="flex" justifyContent="center" alignContent="center">
              <Box
                display="flex"
                justifyContent="start"
                alignContent="center"
                sx={{
                  width: {
                    xs: "100vw",
                    sm: "100vw",
                    md: "100%",
                    lg: "100%",
                    xl: "100%",
                  },
                }}
              >
                <VideoComponent
                  url="https://www.youtube.com/embed/C7z96xNAHNc"
                  height_="252px"
                  widthmd="505px"
                />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box>
          <Box display="flex" justifyContent="center" sx={{ my: 7 }}>
            <Box
              display="flex"
              justifyContent="center"
              sx={{ my: 2, py: 2, border: "1px solid grey", width: "100%" }}
              className="glow-div-white"
            >
              <Box sx={{ width: "1153px" }}>
                <Typography
                  variant="body1"
                  sx={{
                    textAlign: "center",
                    fontSize: "24px",
                    lineHeight:'29.26px',
                    color:'white',fontFamily:'Montserrat'
                  }}
                >
                  Aprendé todo sobre arbitraje: un método seguro y confiable
                  explicado paso a paso por <br/>expertos, que te dará la oportunidad
                  de generar los ingresos que te propongas.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

{
  /* <Grid container justifyContent="center" sx={{ py: 1,width:'1255px' }}>
  <Grid item xs={12} sm={12} md={12} sx={{ width: "100%", mx: 1 }}>
    <Box
      display="flex"
      justifyContent="center"
      sx={{ my: { xs: 3, sm: 3, md: 5, lg: 5, xl: 5 } }}
    >
      <Typography
        variant="body1"
        sx={{
          color: "white",
          fontWeight: 500,
          fontSize: "3rem",
          lineHeight: "58.51px",
          fontFamily: "Montserrat",
          fontStyle: "normal",
          mixBlendMode: "normal",
          textAlign: { xs: "center", sm: "center" },
        }}
      >
        Curso de Arbitraje Financiero de Block Academy
      </Typography>
    </Box>
  </Grid>
  <Grid
    item
    xs={12}
    sm={6}
    md={6}
    xl={6}
    lg={6}
    sx={{ width: "100%", mt: 4 }}
  >
    <Box display="flex" flexDirection="column">
      <Box
        sx={{
          width: {
            xs: "100vw",
            sm: "100vw",
            md: "46.96vw",
            lg: "46.96vw",
            xl: "46.96vw",
          },
          ml: { xs: 0, sm: 0, md: 0, lg: 7, xl: 7 },
        }}
      >
        <Typography
          variant="body1"
          sx={{
            fontSize: "2rem",
            lineHeight: "39.01px",
            fontFamily: "Montserrat",
            fontWeight: 540,
            color: "white",
          }}
        >
          Un método seguro y confiable para alcanzar la libertad
          financiera.{" "}
        </Typography>
      </Box>

      <Box
        sx={{
          width: {
            xs: "100vw",
            sm: "100vw",
            md: "634px",
            lg: "634px",
            xl: "634px",
          },
          ml: { xs: 0, sm: 0, md: 0, lg: 7, xl: 7 },
        }}
      >
        <Typography
          variant="body1"
          sx={{
            mt: 2,
            fontWeight: "500",
            color: "#FFFFFF",
            mb: 4,
            fontSize: 27,
            lineHeight: "29.26px",
          }}
        >
          Independientemente de los humores del mercado, y sin tener
          conocimientos previos, vas a aprender a combatir la inflación
          y hacer crecer tus ingresos.{" "}
        </Typography>
      </Box>
    </Box>
  </Grid>

  <Grid item xs={12} sm={6} md={6} xl={6} lg={6} sx={{ width: "100%" }}>
    <Box display="flex" justifyContent="center" alignContent="center">
      <Box
        display="flex"
        justifyContent="start"
        alignContent="center"
        sx={{
          width: {
            xs: "100vw",
            sm: "100vw",
            md: "100%",
            lg: "100%",
            xl: "100%",
          },
        }}
      >
        <VideoComponent
          url="https://www.youtube.com/embed/C7z96xNAHNc"
          height_="252px"
          widthmd="505px"
        />
      </Box>
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
              fontSize: "1.25rem",
            }}
          >
            Aprendé todo sobre arbitraje: un método seguro y confiable
            explicado paso a paso por expertos, que te dará la
            oportunidad de generar los ingresos que te propongas.
          </Typography>
        </Box>
      </Box>
    </Box>
  </Grid>
</Grid> */
}
