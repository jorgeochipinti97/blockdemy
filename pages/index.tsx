import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import {
  CheckComponent,
  CourseSection,
  FullScreenLoading,
  IntersectionNumber,
  NavBar,
  NumberSection,
} from "@/components";
import { Box, Button, Card, Divider, Grid, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import CheckIcon from "@mui/icons-material/Check";
import { textAlign } from "@mui/system";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setIsLoading(true);
    }, 700); // actualizar cada 100ms

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {isLoading ? (
        <>
          <NavBar />
          <CourseSection />
          <NumberSection />
          <Box sx={{ backgroundColor: "rgb(56, 3, 102)", py: 4 }}>
            <Box>
              <Typography
                variant="h4"
                sx={{ textAlign: "center", fontWeight: "bold" }}
              >
                ¿QUÉ ES EL ARBITRAJE?
              </Typography>
            </Box>
            <Box sx={{ m: 2, mt: 5 }}>
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
            </Box>
            <Box sx={{ m: 2, mt: 5 }}>
              <Typography
                variant="body1"
                sx={{ textAlign: "center", fontSize: 20, fontWeight: "100" }}
              >
                Vas a poder calcular el rendimiento de la operación en el
                momento,
                <span style={{ fontWeight: "bold", marginLeft: 4 }}>
                  disponiendo de tu capital y de tu ganancia al instante.
                </span>
              </Typography>
            </Box>
            <Box display="flex" justifyContent="center" sx={{ mt: 4 }}>
              <Button
                variant="contained"
                sx={{ backgroundColor: "white", color: "rgb(56, 3, 102)" }}
              >
                {" "}
                <span style={{ fontWeight: "bold", fontSize: 20 }}>
                  ¡Quiero empezar hoy!
                </span>
              </Button>
            </Box>
          </Box>
          <Grid
            container
            sx={{ backgroundColor: "white", pb: 4 }}
            justifyContent="center"
          >
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
              <Box sx={{ display: { xs: "block", sm: "block", md: "none" } }}>
                <div style={{ backgroundColor: "white" }}>
                  <Box display="flex" sx={{ justifContent: { xs: "center" } }}>
                    <Image
                      width={450}
                      height={150}
                      alt=""
                      src="/logo450x150.png"
                      layout="responsive"
                    />
                  </Box>
                </div>
              </Box>
              <Box
                sx={{
                  display: {
                    xs: "none",
                    sm: "none",
                    md: "block",
                    lg: "block",
                    xl: "block",
                  },
                }}
              >
                <div style={{ backgroundColor: "white" }}>
                  <Box display="flex" sx={{ justifContent: { xs: "center" } }}>
                    <Image
                      width={450}
                      height={150}
                      alt=""
                      src="/logo450x150.png"
                    />
                  </Box>
                </div>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={2} lg={2} xl={2}>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                sx={{ height: { md: "20vh" } }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: "black",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  En asociacion con
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
              <Box sx={{ display: { xs: "block", sm: "block", md: "none" } }}>
                <div style={{ backgroundColor: "white" }}>
                  <Box display="flex" sx={{ justifContent: { xs: "center" } }}>
                    <Image
                      width={680}
                      height={150}
                      alt=""
                      src="/logoe.png"
                      layout="responsive"
                    />
                  </Box>
                </div>
              </Box>
              <Box
                sx={{
                  display: {
                    xs: "none",
                    sm: "none",
                    md: "block",
                    lg: "block",
                    xl: "block",
                  },
                }}
              >
                <div style={{ backgroundColor: "white" }}>
                  <Box display="flex" sx={{ justifContent: { xs: "center" } }}>
                    <Image width={680} height={150} alt="" src="/logoe.png" />
                  </Box>
                </div>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} xl={12} md={12}>
              <Box>
                <Typography
                  variant="h4"
                  sx={{
                    color: "#333",
                    fontWeight: "bold",
                    textAlign: "center",
                    mx: 1,
                    fontSize: 30,
                  }}
                >
                  Con este curso vas a dominar las siguientes habilidades:
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} xl={6} lg={6} md={6}>
              <CheckComponent
                boldText="Generar rendimientos:"
                bodyText="Ya sea que estés estudiando, trabajando o desempleado, vas a tener la oportunidad de arbitrar y obtener tus propios resultados."
              />
              <CheckComponent
                boldText="Hacer valer tu dinero:"
                bodyText="vas a combatir la inflación, tanto como vos quieras."
              />
              <CheckComponent
                boldText="​Independencia laboral"
                bodyText="entrás de lleno en una actividad que es perfectamente escalable y podés convertirla en tu mayor ingreso."
              />
            </Grid>
            <Grid item xs={12} sm={12} xl={6} lg={6} md={6}>
              <CheckComponent
                boldText="Gestión de tu capital:"
                bodyText="todas las estrategias aprendidas durante el curso te van a permitir tener el control absoluto de tu capital en todo momento y saber cómo diversificarlo."
              />
              <CheckComponent
                boldText="Dominar plataformas de intercambio:"
                bodyText=" vas a recibir toda la información para aprovechar la compra y venta de activos, generando rentabilidad en diferentes exchanges."
              />
              <CheckComponent
                boldText="Desarrollar tu capacidad para detectar oportunidades:"
                bodyText="vas a adquirir el criterio para reconocer las operaciones más rentables y realizarlas de manera segura."
              />
              <CheckComponent
                boldText="​Mindset ganador:"
                bodyText=" te vamos a nutrir de la mentalidad adecuada para que domines las reglas del juego e impulses tu crecimiento personal. "
              />
            </Grid>
            <Grid item xs={12} sm={12} xl={12} lg={12} md={12}>
              <Box display="flex" justifyContent="center" sx={{ mt: 5 }}>
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "rgb(56, 3, 102)" }}
                >
                  {" "}
                  <span style={{ fontWeight: "bold", fontSize: 20 }}>
                    ¡Quiero empezar hoy!
                  </span>
                </Button>
              </Box>
            </Grid>
          </Grid>
          <Grid
            container
            sx={{
              widht: "100vw",
              backgroundImage: "url(/degrade-v-a-1200x800.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              py: 5,
            }}
            justifyContent="center"
          >
            <Grid
              item
              xs={12}
              sm={12}
              lg={12}
              md={12}
              xl={12}
              justifyContent="center"
            >
              <Typography
                variant="h4"
                sx={{ fontWeight: "bold", textAlign: "center" }}
              >
                7 MÓDULOS DE CONTENIDO
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} lg={3} md={3} xl={3} sx={{ my: 7 }}>
              <Box display="flex" justifyContent="center">
                <Image
                  src="/icon120x120-1.png"
                  alt=""
                  width={120}
                  height={120}
                />
              </Box>
              <Box>
                <Typography variant="h5" textAlign="center">
                  Introducción al arbitraje
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} lg={3} md={3} xl={3} sx={{ my: 7 }}>
              <Box display="flex" justifyContent="center">
                <Image
                  src="/icon120x120-2.png"
                  alt=""
                  width={120}
                  height={120}
                />
              </Box>
              <Box>
                <Typography variant="h5" sx={{ textAlign: "center" }}>
                  Exchanges por dentro
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} lg={3} md={3} xl={3} sx={{ my: 7 }}>
              <Box display="flex" justifyContent="center">
                <Image
                  src="/icon120x120-3.png"
                  alt=""
                  width={120}
                  height={120}
                />
              </Box>
              <Box>
                <Typography variant="h5" textAlign="center">
                  Cómo operar en Binance P2P
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} lg={3} md={3} xl={3} sx={{ my: 7 }}>
              <Box display="flex" justifyContent="center">
                <Image
                  src="/icon120x120-4.png"
                  alt=""
                  width={120}
                  height={120}
                />
              </Box>
              <Box>
                <Typography variant="h5" textAlign="center">
                  Herramientas para conocer rentabilidad
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} lg={3} md={3} xl={3} sx={{ my: 7 }}>
              <Box display="flex" justifyContent="center">
                <Image
                  src="/icon120x120-5.png"
                  alt=""
                  width={120}
                  height={120}
                />
              </Box>
              <Box>
                <Typography variant="h5" textAlign="center">
                  Estrategias Pro para obtener la mayor rentabilidad y su
                  explicación paso a paso
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} lg={3} md={3} xl={3} sx={{ my: 7 }}>
              <Box display="flex" justifyContent="center">
                <Image
                  src="/icon120x120-6.png"
                  alt=""
                  width={120}
                  height={120}
                />
              </Box>
              <Box>
                <Typography variant="h5" textAlign="center">
                  Arbitrajes: Operaciones en tiempo real con resultados a la
                  vista
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} lg={3} md={3} xl={3} sx={{ my: 7 }}>
              <Box display="flex" justifyContent="center">
                <Image
                  src="/icon120x120-7.png"
                  alt=""
                  width={120}
                  height={120}
                />
              </Box>
              <Box>
                <Typography variant="h5" textAlign="center">
                  Información contable para que conozcas todas las cuestiones
                  impositivas
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Grid
            container
            sx={{ backgroundColor: "white" }}
            justifyContent="center"
          >
            <Grid item xs={12} sm={12} lg={12} md={12} xl={12}>
              <Typography
                variant="h4"
                sx={{
                  color: "rgb(56, 3, 102)",
                  fontWeight: "bold",
                  textAlign: "center",
                  mt: 4,
                }}
              >
                NO AVANCES SIN LEER ESTO
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} lg={4} md={4} xl={4} sx={{ mx: 3 }}>
              <Typography
                variant="h5"
                sx={{
                  color: "black",
                  fontWeight: "100",
                  textAlign: "center",
                  mb: 2,
                }}
              >
                Este curso{" "}
                <span
                  style={{
                    textDecoration: "underline",
                    marginRight: 5,
                    fontWeight: "bold",
                  }}
                >
                  es para vos
                </span>
                si:{" "}
              </Typography>
              <Box
                display="flex"
                flexDirection="column"
                sx={{ color: "black" }}
              >
                <Box display="flex" sx={{ mb: 1 }}>
                  <CheckIcon sx={{ mr: 0 }} />
                  <Typography variant="subtitle1">
                    ​Estás buscando generar ingresos en tu tiempo disponible
                  </Typography>
                </Box>
                <Box display="flex" sx={{ mb: 1 }}>
                  <CheckIcon sx={{ mr: 0 }} />
                  <Typography variant="subtitle1">
                    ​Estás dispuesto a convertir tu tiempo libre en dinero
                  </Typography>
                </Box>
                <Box display="flex" sx={{ mb: 1 }}>
                  <CheckIcon sx={{ mr: 0 }} />
                  <Typography variant="subtitle1">
                    ​ La inflación te esta consumiendo
                  </Typography>
                </Box>
                <Box display="flex" sx={{ mb: 1 }}>
                  <CheckIcon sx={{ mr: 0 }} />
                  <Typography variant="subtitle1">
                    ​Querés lograr una fuente de ingresos estable
                  </Typography>
                </Box>
                <Box display="flex" sx={{ mb: 1 }}>
                  <CheckIcon sx={{ mr: 0 }} />
                  <Typography variant="subtitle1">
                    ​ Tenés dinero ahorrado y no sabes qué hacer con él
                  </Typography>
                </Box>
                <Box display="flex" sx={{ mb: 1 }}>
                  <CheckIcon sx={{ mr: 0 }} />
                  <Typography variant="subtitle1">
                    ​ Querés emprender y estás buscando una gran oportunidad
                  </Typography>
                </Box>
                <Box display="flex" sx={{ mb: 1 }}>
                  <CheckIcon sx={{ mr: 0 }} />
                  <Typography variant="subtitle1">
                    ​ Te gustaría tener mayor control sobre tu dinero
                  </Typography>
                </Box>
                <Box display="flex" sx={{ mb: 1 }}>
                  <CheckIcon sx={{ mr: 0 }} />
                  <Typography variant="subtitle1">
                    ​ Querés alcanzar la libertad financiera
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} lg={3} md={3} xl={3}>
              <Box sx={{ width: "100%" }}>
                <img
                  src="/celular2.png"
                  alt=""
                  style={{ boxSizing: "border-box", maxWidth: "100%" }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} lg={4} md={4} xl={4} sx={{ mx: 3 }}>
              <Typography
                variant="h5"
                sx={{
                  color: "black",
                  fontWeight: "100",
                  textAlign: "center",
                  mb: 2,
                }}
              >
                Este curso{" "}
                <span
                  style={{
                    textDecoration: "underline",
                    marginRight: 5,
                    fontWeight: "bold",
                  }}
                >
                  NO es para vos
                </span>
                si:{" "}
              </Typography>
              <Box
                display="flex"
                flexDirection="column"
                sx={{ color: "black" }}
              >
                <Box display="flex" sx={{ mb: 1 }}>
                  <CheckIcon sx={{ mr: 0 }} />
                  <Typography variant="subtitle1">
                    Buscás hacer dinero, sin aprender nada nuevo{" "}
                  </Typography>
                </Box>
                <Box display="flex" sx={{ mb: 1 }}>
                  <CheckIcon sx={{ mr: 0 }} />
                  <Typography variant="subtitle1">
                    ​Estás cómodo con tu situación económica actual
                  </Typography>
                </Box>
                <Box display="flex" sx={{ mb: 1 }}>
                  <CheckIcon sx={{ mr: 0 }} />
                  <Typography variant="subtitle1">
                    No creés en las buenas oportunidades
                  </Typography>
                </Box>
                <Box display="flex" sx={{ mb: 1 }}>
                  <CheckIcon sx={{ mr: 0 }} />
                  <Typography variant="subtitle1">
                    ​La inflación no te quita el sueño
                  </Typography>
                </Box>
                <Box display="flex" sx={{ mb: 1 }}>
                  <CheckIcon sx={{ mr: 0 }} />
                  <Typography variant="subtitle1">
                    ​No te interesa tener una nueva fuente de ingresos
                  </Typography>
                </Box>
                <Box display="flex" sx={{ mb: 1 }}>
                  <CheckIcon sx={{ mr: 0 }} />
                  <Typography variant="subtitle1">
                    ​ No estás dispuesto a dedicar tiempo extra para generar
                    ingresos
                  </Typography>
                </Box>
                <Box display="flex" sx={{ mb: 1 }}>
                  <CheckIcon sx={{ mr: 0 }} />
                  <Typography variant="subtitle1">
                    Crees que la libertad financiera es inalcanzable
                  </Typography>
                </Box>
                <Box display="flex" sx={{ mb: 1 }}>
                  <CheckIcon sx={{ mr: 0 }} />
                  <Typography variant="subtitle1">
                    Crees que el mundo del emprendimiento no es para vos
                  </Typography>
                </Box>
                <Box display="flex" sx={{ m: 0 }}>
                  <CheckIcon sx={{ mr: 0 }} />
                  <Typography variant="subtitle1">
                    No vivís en Argentina
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item sm={12} md={12} xs={12} lg={12} xl={12}>
              <Box display="flex" justifyContent="center" sx={{ my: 5 }}>
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "rgb(56, 3, 102)" }}
                >
                  {" "}
                  <span style={{ fontWeight: "bold", fontSize: 20 }}>
                    ¡Quiero empezar hoy!
                  </span>
                </Button>
              </Box>
            </Grid>
          </Grid>
          <Grid container sx={{ backgroundColor: "black" }}>
            <Grid item sm={12} md={12} xs={12} lg={12} xl={12}>
              <Box
                display="flex"
                justifyContent="center"
                sx={{ flexWrap: "wrap", mx: 3 }}
              >
                <Box sx={{ mx: 5 }}>
                  <Image
                    src="/Block-Academy-cyb-.png"
                    width={200}
                    height={200}
                    alt=""
                  />
                </Box>
                <Box alignSelf="center">
                  <Typography variant="h3">Somos Block,</Typography>
                  <Typography variant="h5">
                    Tu academia de arbitraje en Argentina.
                  </Typography>
                </Box>
              </Box>
              <Box display="flex" justifyContent="center">
                <Divider
                  sx={{
                    my: 2,
                    py: 0.3,
                    backgroundColor: "white",
                    width: "80%",
                    borderRadius: "9px",
                  }}
                />
              </Box>
              <Box display="flex" justifyContent="center" sx={{ mt: 1 }}>
                <Typography variant="h4" sx={{ textAlign: "center" }}>
                  Conocé quiénes son los expertos que te van a guiar en tu
                  aprendizaje:
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} lg={4} md={4} xl={4}>
              <Box display="flex" justifyContent="center">
                <Card
                  sx={{
                    maxWidth: "80%",
                    mx: 3,
                    backgroundColor: "black",
                    textAlign: "center",
                  }}
                >
                  <Box display="flex" flexDirection="column">
                    <img src="/fotos-equipo-tito3.png" alt="" />
                  </Box>
                  <Box sx={{ mx: 2, mt: 2 }}>
                    <Typography variant="h4" sx={{ color: "white" }}>
                      Lautaro
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{ color: "white", my: 2, fontWeight: "bold" }}
                    >
                      Instructor principal de la academia.
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "white",
                        fontWeight: "100",
                        textAlign: "justify",
                        hyphens: "auto",
                      }}
                    >
                      Después de varios años arbitrando, decidió abrir sus
                      conocimientos en el año 2021 y empezó con asesorías 1 a 1.
                      Quienes tomaron su asesoría hoy son casos de éxito.
                    </Typography>
                  </Box>
                </Card>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} lg={4} md={4} xl={4}>
              <Box display="flex" justifyContent="center">
                <Card
                  sx={{
                    maxWidth: "80%",
                    mx: 3,
                    backgroundColor: "black",
                    textAlign: "center",
                  }}
                >
                  <Box display="flex" flexDirection="column">
                    <img src="/fotos-equipo-mirco3.png" alt="" />
                  </Box>
                  <Box sx={{ mx: 2, mt: 2 }}>
                    <Typography variant="h4" sx={{ color: "white" }}>
                      Mirco
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{ color: "white", my: 2, fontWeight: "bold" }}
                    >
                      Instructor y comunicador de la academia.
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "white",
                        fontWeight: "100",
                        textAlign: "justify",
                        hyphens: "auto",
                      }}
                    >
                      Entró en el mundo crypto hace algunos años y descubrió el
                      arbitraje en el año 2021. Al día de hoy, es el mayor caso
                      de éxito de Lautaro.
                    </Typography>
                  </Box>
                </Card>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} lg={4} md={4} xl={4}>
              <Box display="flex" justifyContent="center">
                <Card
                  sx={{
                    maxWidth: "80%",
                    mx: 3,
                    backgroundColor: "black",
                    textAlign: "center",
                  }}
                >
                  <Box display="flex" flexDirection="column">
                    <img src="/fotos-equipo-ayrton3.png" alt="" />
                  </Box>
                  <Box sx={{ mx: 2, mt: 2 }}>
                    <Typography variant="h4" sx={{ color: "white" }}>
                      Ayrton
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{ color: "white", my: 2, fontWeight: "bold" }}
                    >
                      Comunicador y productor audiovisual.
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "white",
                        fontWeight: "100",
                        textAlign: "justify",
                        hyphens: "auto",
                      }}
                    >
                      Se encarga de preparar y dar forma a todo el contenido
                      para medios digitales de Block Academy.
                    </Typography>
                  </Box>
                </Card>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} lg={12} md={12} xl={12}>
              <Box display="flex" justifyContent="center">
                <Divider
                  sx={{
                    my: 2,
                    py: 0.3,
                    backgroundColor: "white",
                    width: "80%",
                    borderRadius: "9px",
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} lg={12} md={12} xl={12}>
              <Box display="flex" justifyContent="center">
                <Typography sx={{ textAlign: "center" }} variant="h4">
                  ¿Cómo nace Block Academy?
                </Typography>
              </Box>
              <Box display="flex" justifyContent="center">
                <Box
                  display="flex"
                  justifyContent="center"
                  sx={{ width: "70%", mt: 5 }}
                >
                  <Typography
                    sx={{
                      textAlign: "center",
                      fontWeigth: "100",
                      fontSize: 25,
                    }}
                    variant="body1"
                  >
                    “Comenzamos como cualquiera,
                    <span
                      style={{
                        fontWeight: "bold",
                        marginLeft: 4,
                        marginRight: 4,
                      }}
                    >
                      buscando generar ingresos extra.
                    </span>
                    Con el paso del tiempo y tanta experiencia adquirida,
                    empezamos a compartir lo que habíamos aprendido. Fue una
                    locura. Muchos amigos y familiares lograron resultados
                    increíbles.
                  </Typography>
                </Box>
              </Box>
              <Box display="flex" justifyContent="center">
                <Box
                  display="flex"
                  justifyContent="center"
                  sx={{ width: "70%", my: 5 }}
                >
                  <Typography
                    sx={{
                      textAlign: "center",
                      fontWeigth: "100",
                      fontSize: 25,
                    }}
                    variant="body1"
                  >
                    Desde entonces decidimos asociarnos con e-Mentors.{" "}
                    <span
                      style={{
                        fontWeight: "bold",
                        marginLeft: 4,
                        marginRight: 4,
                      }}
                    >
                      Queríamos llegar a la mayor cantidad de personas.
                    </span>
                    Esto tiene que estar al alcance de todos, pensamos. Y hoy ya
                    es un hecho. Nuestro objetivo es seguir
                    <span
                      style={{
                        fontWeight: "bold",
                        marginLeft: 4,
                        marginRight: 4,
                      }}
                    >
                      aportando conocimiento
                    </span>
                    para
                    <span
                      style={{
                        fontWeight: "bold",
                        marginLeft: 4,
                        marginRight: 4,
                      }}
                    >
                      cambiar la realidad económica de todos los argentinos.”
                    </span>
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Grid
            container
            sx={{ backgroundColor: "white" }}
            justifyContent="center"
          >
            <Grid item xs={12} sm={12} lg={12} xl={12} md={12} sx={{ my: 5 }}>
              <Box display="flex" justifyContent="center">
                <Typography
                  variant="h4"
                  sx={{
                    color: "rgb(56, 3, 102)",
                    textAlign: "center",
                    fontWeight: "bold",
                    mb: 2,
                  }}
                >
                  ¿Qué dicen nuestros alumnos?
                </Typography>
              </Box>
              <Typography
                variant="h5"
                sx={{ color: "black", textAlign: "center" }}
              >
                Ellos aprendieron junto a nosotros... ¡escuchalos!
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} lg={4} xl={4} md={4}>
              <Box display="flex" justifyContent="center">
                <Box sx={{ width: "80%" }}>
                  <iframe
                    width="100%"
                    height="215"
                    src="https://www.youtube.com/embed/8WLFxal_w2g"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  ></iframe>
                </Box>
              </Box>
              <Box display="flex" justifyContent="center">
                <Box sx={{ width: "60%" }}>
                  <Typography
                    variant="h5"
                    sx={{
                      color: "rgb(56, 3, 102)",
                      textAlign: "start",
                      fontWeigth: "bold",
                    }}
                  >
                    Máximo{" "}
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} lg={4} xl={4} md={4}>
              <Box display="flex" justifyContent="center">
                <Box sx={{ width: "80%" }}>
                  <iframe
                    width="100%"
                    height="215"
                    src="https://www.youtube.com/embed/aQOWnplIT3c"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  ></iframe>
                </Box>
              </Box>
              <Box display="flex" justifyContent="center">
                <Box sx={{ width: "60%" }}>
                  <Typography
                    variant="h5"
                    sx={{
                      color: "rgb(56, 3, 102)",
                      textAlign: "start",
                      fontWeigth: "bold",
                    }}
                  >
                    Juan{" "}
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} lg={4} xl={4} md={4}>
              <Box display="flex" justifyContent="center">
                <Box sx={{ width: "80%" }}>
                  <iframe
                    width="100%"
                    height="215"
                    src="https://www.youtube.com/embed/t--V1iOdG9c"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  ></iframe>
                </Box>
              </Box>
              <Box display="flex" justifyContent="center">
                <Box sx={{ width: "60%" }}>
                  <Typography
                    variant="h5"
                    sx={{ color: "rgb(56, 3, 102)", textAlign: "start" }}
                  >
                    Sebastián{" "}
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} lg={12} xl={12} md={12}>
              <Box display="flex" justifyContent="center" sx={{ my: 5 }}>
                <Divider
                  sx={{
                    my: 2,
                    py: 0.3,
                    backgroundColor: "rgb(56, 3, 102)",
                    width: "80%",
                    borderRadius: "9px",
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} lg={12} xl={12} md={12}>
              <Box display="flex" justifyContent="center" sx={{ mb: 4 }}>
                <Typography
                  variant="h4"
                  sx={{
                    textDecoration: "underline",
                    textAling: "center",
                    color: "rgb(56, 3, 102)",
                    mx: 1,
                    textAlign: "center",
                  }}
                >
                  Mirá cómo es un arbitraje en acción.{" "}
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
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/pU7fORhE6Gs"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                ></iframe>{" "}
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              xl={12}
              lg={12}
              sx={{ width: "100%" }}
              justifyContent="center"
            >
              <Box display="flex" justifyContent="center">
                <Typography
                  sx={{ color: "black", fontSize: 20, mt: 2 }}
                  variant="body1"
                  textAlign="center"
                >
                  Podés obtener hasta
                  <span
                    style={{
                      fontWeight: "bold",
                      marginLeft: 4,
                      marginRight: 4,
                    }}
                  >
                    el 5% de rendimiento
                  </span>
                  en cada operación.
                </Typography>
              </Box>
              <Box display="flex" justifyContent="center" sx={{ mt: 2 }}>
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "rgb(56, 3, 102)" }}
                >
                  {" "}
                  <span style={{ fontWeight: "bold", fontSize: 20 }}>
                    ¡Quiero empezar ya!
                  </span>
                </Button>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              xl={12}
              lg={12}
              sx={{ width: "100%" }}
              justifyContent="center"
            >
              <Box display="flex" justifyContent="center" sx={{ mt: 7 }}>
                <Typography
                  variant="h4"
                  sx={{
                    color: "rgb(56, 3, 102)",
                    textAlign: "center",
                    fontWeight: "bold",
                    mb: 2,
                  }}
                >
                  ¿Cuál es el valor real del contenido que vas a recibir?
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              xl={6}
              lg={6}
              sx={{ width: "100%" }}
              justifyContent="center"
            >
              <Box display="flex" flexDirection="column" sx={{ width: "100%" }}>
                <CheckComponent
                  boldText="Información actualizada sobre el mundo del arbitraje "
                  bodyText="- USD $27"
                />
                <CheckComponent
                  boldText="Método paso a paso para operar en diferentes exchanges"
                  bodyText="- USD $49"
                />
                <CheckComponent
                  boldText="Apartado intensivo sobre Binance P2P, el exchange más importante para operar"
                  bodyText="- USD $30"
                />
                <CheckComponent
                  boldText="​Herramientas necesarias para gestionar tu negocio de la mejor manera"
                  bodyText="- USD $49"
                />
                <CheckComponent
                  boldText="​Operaciones de arbitraje en tiempo real comentando cada acción y mostrando los resultados"
                  bodyText="- USD $67"
                />
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              xl={6}
              lg={6}
              sx={{ width: "100%" }}
              justifyContent="center"
            >
              <Box display="flex" flexDirection="column" sx={{ width: "100%" }}>
                <CheckComponent
                  boldText="Estrategias exclusivas desarrolladas a lo largo de los años de experiencia operando y su explicación paso a paso "
                  bodyText="INVALUABLE"
                />
                <CheckComponent
                  boldText="Contenido informativo contable sobre todas las cuestiones impositivas"
                  bodyText="- USD $17"
                />
                <CheckComponent
                  boldText="Acceso a todas las actualizaciones futuras del contenido"
                  bodyText="INVALUABLE"
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={12} xl={12} lg={12}>
              <Box display="flex" justifyContent="center" sx={{ mt: 9 }}>
                <Typography
                  variant="h5"
                  sx={{ color: "black", textAlign: "center" }}
                >
                  El valor real del curso que vas a recibir
                  <span
                    style={{
                      fontWeight: "bold",
                      marginLeft: 4,
                      marginRight: 4,
                    }}
                  >
                    supera los USD $300.
                  </span>
                </Typography>
              </Box>
              <Box display="flex" justifyContent="center" sx={{ py: 2 }}>
                <Typography
                  variant="h4"
                  sx={{ color: "red", mx: 1 }}
                  textAlign="center"
                >
                  ¡OJO! Ese
                  <span
                    style={{
                      fontWeight: "bold",
                      marginLeft: 5,
                      marginRight: 5,
                      textDecoration: "underline",
                    }}
                  >
                    NO ES EL PRECIO
                  </span>
                  que vas a pagar hoy.
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Grid
            container
            sx={{
              widht: "100vw",
              backgroundImage: "url(/degrade-v-a-1200x800.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              py: 5,
            }}
          >
            <Grid item xs={12} sm={12} md={12} xl={12} lg={12}>
              <Typography variant="h4" textAlign="center">
                ¿Por qué?
              </Typography>
              <Box display="flex" justifyContent="center">
                <Divider
                  sx={{
                    my: 2,
                    py: 0.3,
                    backgroundColor: "white",
                    width: "80%",
                    borderRadius: "9px",
                  }}
                />
              </Box>
              <Box display="flex" justifyContent="center">
                <Box
                  display="flex"
                  flexDirection="column"
                  sx={{ width: "80%" }}
                >
                  <Box display="flex" justifyContent="center">
                    <Typography
                      variant="body1"
                      sx={{ textAlign: "center", mt: 3, fontWeight: "100" }}
                    >
                      Desde Block Academy,
                      <span
                        style={{
                          fontWeight: "bold",
                          marginLeft: 5,
                          marginRight: 5,
                        }}
                      >
                        entendemos la situación del país
                      </span>
                      , la de ser empleado y no llegar a fin de mes, o la de
                      querer emprender y no contar con los
                      <span
                        style={{
                          marginLeft: 5,
                          marginRight: 5,
                          textDecoration: "underline",
                        }}
                      >
                        recursos necesarios.
                      </span>
                    </Typography>
                  </Box>
                  <Box display="flex" justifyContent="center">
                    <Typography
                      variant="body1"
                      sx={{ textAlign: "center", mt: 3, fontWeight: "100" }}
                    >
                      Por eso, hemos creado
                      <span
                        style={{
                          fontWeight: "bold",
                          marginLeft: 5,
                          marginRight: 5,
                        }}
                      >
                        más de 5 horas de contenido
                      </span>
                      dinámico y super práctico que facilite el aprendizaje, con
                      el objetivo de generar un
                      <span
                        style={{
                          fontWeight: "bold",
                          marginLeft: 5,
                          marginRight: 5,
                        }}
                      >
                        impacto económico positivo
                      </span>
                      en la mayor cantidad de personas, lo más rápido posible.
                    </Typography>
                  </Box>
                  <Box display="flex" justifyContent="center">
                    <Typography
                      variant="body1"
                      sx={{ textAlign: "center", mt: 3, fontWeight: "100" }}
                    >
                      <span
                        style={{
                          fontWeight: "bold",
                          marginLeft: 5,
                          marginRight: 5,
                        }}
                      >
                        Ahora tenés la oportunidad
                      </span>
                      de aprender, en sólo unas horas, toda nuestra experiencia
                      y conocimientos adquiridos durante varios años de
                      práctica...
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>

        </>
      ) : (
        <FullScreenLoading />
      )}
    </>
  );
}
