import { Grid, Box, Typography } from '@mui/material'
import React from 'react'

export const CourseSection = () => {
  return (
    <Grid
    container
    justifyContent="center"
    sx={{ py: 5, backgroundColor: "blakc" }}
  >
    <Grid item xs={12} sm={6} md={4} sx={{ width: "100%", mx: 1 }}>
      <Box>
        <Typography variant="h4" sx={{ fontWeight: "400" }}>
          Curso de Arbitraje Financiero de Block Academy
        </Typography>
      </Box>
      <Box>
        <Typography variant="body1" sx={{ fontSize: 23, mt: 1 }}>
          Un método seguro y confiable para alcanzar la libertad
          financiera.{" "}
        </Typography>
      </Box>
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
          conocimientos previos, vas a aprender a combatir la inflación
          y hacer crecer tus ingresos.{" "}
        </Typography>
      </Box>
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
      <div
        style={{
          position: "relative",
          paddingBottom: "56.25%",
          height: 0,
          maxWidth: "100%",
        }}
      >
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/C7z96xNAHNc"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        />
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
            explicado paso a paso por expertos, que te dará la
            oportunidad de generar los ingresos que te propongas.
          </Typography>
        </Box>
      </Box>
    </Grid>
  </Grid>
  )
}
