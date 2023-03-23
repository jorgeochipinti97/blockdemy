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
  };

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
      sx={{ py: 5, backgroundColor: "blakc" }}
    >
      <Grid item xs={12} sm={6} md={4} sx={{ width: "100%", mx: 1 }}>
        <div data-aos="zoom-in-down">
          <Box>
            <Typography variant="h4" sx={{ fontWeight: "400" }}>
              Curso de Arbitraje Financiero de Block Academy
            </Typography>
          </Box>
        </div>
        <div data-aos="zoom-in-left">
          <Box>
            <Typography variant="body1" sx={{ fontSize: 23, mt: 1 }}>
              Un método seguro y confiable para alcanzar la libertad financiera.{" "}
            </Typography>
          </Box>
        </div>

        <div data-aos="zoom-in-up">
          <Box>
            <Typography
              variant="body1"
              textAlign="justify"
              sx={{
                mt: 2,
                fontWeight: "100",
                color: "rgb(194, 194, 194);",
                mr: 2,
                mb: 4,
                hyphens: "auto",
              }}
            >
              Independientemente de los humores del mercado, y sin tener
              conocimientos previos, vas a aprender a combatir la inflación y
              hacer crecer tus ingresos.{" "}
            </Typography>
          </Box>
        </div>
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        md={4}
        xl={4}
        lg={4}
        sx={{ width: "100%" }}
        justifyContent="center"
      >
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
              width: "100%",
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
        <div data-aos="zoom-in-up">
          <Box display="flex" justifyContent="center" sx={{ mt: 2 }}>
            <Box sx={{ width: "80vw" }}>
              <Typography
                variant="body1"
                sx={{
                  mt: 2,
                  fontWeight: "100",
                  textAlign: "center",
                  fontSize: 16,
                }}
              >
                Aprendé todo sobre arbitraje: un método seguro y confiable
                explicado paso a paso por expertos, que te dará la oportunidad
                de generar los ingresos que te propongas.
              </Typography>
            </Box>
          </Box>
        </div>
      </Grid>
    </Grid>
  );
};
