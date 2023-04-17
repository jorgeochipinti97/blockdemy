import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import {
  ArbitrajeSection,
  CarouselYoutube,
  CheckComponent,
  ContentCard,
  CourseIsForYou,
  CourseSection,
  CourseValue,
  FooterComponent,
  FullScreenLoading,
  NavBar,
  ProfresorCard,
  VideoComponent,
} from "@/components";
import {
  Box,
  Button,
  Card,
  Checkbox,
  Divider,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@mui/material";
import { useState, useEffect, RefObject } from "react";
import CheckIcon from "@mui/icons-material/Check";
import { CreditCardComponent } from "../components/ui/CreditCardComponent";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { AccordionComponent } from "@/components/ui/AccordionComponent";
import { useRef } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const componentRef: RefObject<HTMLDivElement> = useRef(null);

  const handleClick = () => {
    if (componentRef.current) {
      componentRef.current.focus();
    }
  };

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
          <Box display='flex' justifyContent='center' sx={{ backgroundColor: "#252425" }}>
            <CourseSection />
          </Box>
          <ArbitrajeSection handleClick={handleClick} />
          <Grid
            container
            sx={{ backgroundColor: "white", pb: 4 }}
            justifyContent="center"
          >
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
              <Box sx={{ display: { xs: "block", sm: "block", md: "none" } }}>
                <div style={{ backgroundColor: "white" }}>
                  <div data-aos="flip-up">
                    <Box
                      display="flex"
                      sx={{ justifContent: { xs: "center" } }}
                    >
                      <Image
                        width={450}
                        height={150}
                        alt=""
                        src="/logo450x150.png"
                        layout="responsive"
                      />
                    </Box>
                  </div>
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
                    <div data-aos="flip-up">
                      <Image
                        width={450}
                        height={150}
                        alt=""
                        src="/logo450x150.png"
                      />
                    </div>
                  </Box>
                </div>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
              <div data-aos="zoom-in">
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
                      fontWeight: "500",
                      fontSize: '24px', fontFamily: 'Montserrat'
                    }}
                  >
                    EN ASOCIACIÓN CON
                  </Typography>
                </Box>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
              <Box sx={{ display: { xs: "block", sm: "block", md: "none" } }}>
                <div style={{ backgroundColor: "white" }}>
                  <div data-aos="flip-up">
                    <Box
                      display="flex"
                      sx={{ justifContent: { xs: "center" } }}
                    >
                      <Image width={450} height={150} alt="" src="/logoe.png" />
                    </Box>
                  </div>
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
                  <div data-aos="flip-up">
                    <Box
                      display="flex"
                      sx={{ justifContent: { xs: "center" } }}
                    >
                      <Image width={450} height={150} alt="" src="/logoe.png" />
                    </Box>
                  </div>
                </div>
              </Box>
            </Grid>


            <Grid
              item
              xs={12}
              sm={12}
              xl={12}
              md={12}
              lg={12}
              justifyContent="center"
            >
              <Box display="flex" justifyContent="center" >
                <Box

                  flexWrap="wrap"
                  sx={{ width: "90%" }}



                >
                  <Box>
                    <Typography
                      variant="h4"
                      sx={{
                        color: "black",
                        fontWeight: "700",
                        textAlign: "center",
                        mx: 1,
                        fontSize: "36px",
                        my: 5, fontFamily: 'Montserrat'
                      }}
                    >
                      Con este curso vas a dominar las siguientes habilidades:
                    </Typography>
                  </Box>
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="start"
                    justifyContent="start"

                  >
                    <CheckComponent
                      boldText="Generar rendimientos"
                      bodyText="Ya sea que estés estudiando, trabajando o desempleado, vas a tener la oportunidad de arbitrar y obtener tus propios resultados."
                    />
                    <CheckComponent
                      boldText="Hacer valer tu dinero"
                      bodyText="vas a combatir la inflación, tanto como vos quieras."
                    />
                    <CheckComponent
                      boldText="​Independencia laboral"
                      bodyText="entrás de lleno en una actividad que es perfectamente escalable y podés convertirla en tu mayor ingreso."
                    />
                    <CheckComponent
                      boldText="Gestión de tu capital"
                      bodyText="todas las estrategias aprendidas durante el curso te van a permitir tener el control absoluto de tu capital en todo momento y saber cómo diversificarlo."
                    />
                    <CheckComponent
                      boldText="Dominar plataformas de intercambio"
                      bodyText=" vas a recibir toda la información para aprovechar la compra y venta de activos, generando rentabilidad en diferentes exchanges."
                    />
                    <CheckComponent
                      boldText="Desarrollar tu capacidad para detectar oportunidades"
                      bodyText="vas a adquirir el criterio para reconocer las operaciones más rentables y realizarlas de manera segura."
                    />
                    <CheckComponent
                      boldText="​Mindset ganador"
                      bodyText=" te vamos a nutrir de la mentalidad adecuada para que domines las reglas del juego e impulses tu crecimiento personal. "
                    />
                  </Box>
                </Box>
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
                variant="body1"
                sx={{ fontWeight: "700", textAlign: "center", fontSize: '72px', color: 'white', lineHeight: '87.77px', fontFamily: 'Montserrat' }}
              >
                7 MÓDULOS DE CONTENIDO
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} lg={3} md={3} xl={3} sx={{ my: 7 }}>
              <ContentCard
                body="Introducción al arbitraje"
                image="/icon120x120-1.png"
              />
            </Grid>
            <Grid item xs={12} sm={12} lg={3} md={3} xl={3} sx={{ my: 7 }}>
              <ContentCard
                body="Exchanges por dentro"
                image="/icon120x120-2.png"
              />
            </Grid>

            <Grid item xs={12} sm={12} lg={3} md={3} xl={3} sx={{ my: 7 }}>
              <ContentCard
                body="Cómo operar en Binance P2P"
                image="/icon120x120-3.png"
              />
            </Grid>

            <Grid item xs={12} sm={12} lg={3} md={3} xl={3} sx={{ my: 7 }}>
              <ContentCard
                body="Herramientas para conocer rentabilidad"
                image="/icon120x120-4.png"
              />
            </Grid>

            <Grid item xs={12} sm={12} lg={3} md={3} xl={3} sx={{ my: 7 }}>
              <ContentCard
                body="Estrategias Pro para obtener la mayor rentabilidad y su explicación paso a paso"
                image="/icon120x120-5.png"
              />
            </Grid>
            <Grid item xs={12} sm={12} lg={3} md={3} xl={3} sx={{ my: 7 }}>
              <ContentCard
                body="Arbitrajes: Operaciones en tiempo real con resultados a la vista"
                image="/icon120x120-6.png"
              />
            </Grid>
            <Grid item xs={12} sm={12} lg={3} md={3} xl={3} sx={{ my: 7 }}>
              <ContentCard
                body="Información contable para que conozcas todas las cuestiones impositivas"
                image="/icon120x120-7.png"
              />
            </Grid>
          </Grid>

          <Grid
            container
            sx={{ backgroundColor: "white" }}
            justifyContent="center"
          >
            <Grid item xs={12} sm={12} lg={12} md={12} xl={12}>
              <Typography
                variant="body1"
                sx={{
                  color: "rgb(56, 3, 102)",
                  fontWeight: "bold",
                  textAlign: "center",
                  my: 10,
                  fontSize: "4rem",
                  lineHeight: "87.77px",
                }}
              >
                NO AVANCES SIN LEER ESTO
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} lg={12} md={12} xl={12} >
              <Box display="flex" justifyContent="center" >
                <Box display="flex" justifyContent="space-around" width='90%' >

                  <Grid container>
                    <Grid item lg={4} md={4} xl={4} >
                      <Box display="flex" justifyContent="center" alignItems="center" sx={{ maxWidth: '422px' }}>
                        <CourseIsForYou body="Este curso ES PARA VOS si.." />
                      </Box>
                    </Grid>
                    <Grid item lg={4} md={4} xl={4}>
                      <Box display='flex' justifyContent='center'>
                        <Image
                          src="/celular2.png"
                          alt=""
                          height={685}
                          width={474}
                        />
                      </Box>
                    </Grid>
                    <Grid item lg={4} md={4} xl={4} >
                      <Box display="flex" justifyContent="center" alignItems="center" sx={{ maxWidth: '422px' }}>
                        <CourseIsForYou body="Este curso NO ES PARA VOS si.." />
                      </Box>
                    </Grid>
                  </Grid>





                </Box>
              </Box>





            </Grid>

            <Grid item sm={12} md={12} xs={12} lg={12} xl={12}>
              <Box display="flex" justifyContent="center" sx={{ my: 10 }}>
                <Button
                  onClick={handleClick}
                  variant="contained"
                  sx={{
                    backgroundColor: "rgb(56, 3, 102)",
                    boxShadow: "0px 0px 15px 5px #546CE9",
                    ":hover": {
                      animation: "1s $titledButton",
                      boxShadow: "0px 0px 25px 5px #546CE9",
                      bgcolor: "rgb(56, 3, 70)",
                      color: "white",
                    },
                    "@keyframes titledButton": {
                      "50%": {
                        boxShadow: "0px 0px 20px 10px #546CE9",
                      },
                    },
                  }}
                >
                  {" "}
                  <span style={{ fontWeight: "bold", fontSize: 36 }}>
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
                    width={256}
                    height={256}
                    alt=""
                  />
                </Box>
                <Box alignSelf="center">
                  <Typography
                    variant="body1"
                    sx={{ fontSize: "96px", lineHeight: "117.02px", fontWeight: '700', color: 'white', fontFamily: 'Montserrat' }}
                  >
                    Somos Block
                  </Typography>
                  <Typography variant="body1" sx={{ fontSize: "36px", color: 'white', fontWeight: '500', lineHeight: '43.88px', fontFamily: 'Montserrat' }}>
                    Tu academia de arbitraje en Argentina.
                  </Typography>
                </Box>
              </Box>
              <Box display="flex" justifyContent="center">
                <Divider
                  sx={{
                    mt: 3,
                    mb: 8,
                    py: 0.3,
                    backgroundColor: "white",
                    width: "1128px",
                    borderRadius: "9px",
                  }}
                />
              </Box>
            </Grid>

            <Grid item xs={12} sm={12} lg={4} md={4} xl={4} >
              <Box display='flex' justifyContent='center'>
                <ProfresorCard
                  name="Lautaro"
                  body="Después de varios años arbitrando, decidió abrir sus conocimientos en el año 2021 y empezó con asesorías 1 a 1. Quienes tomaron su asesoría hoy son casos de éxito."
                  image="/fotos-equipo-tito3.png"
                  rang="Instructor principal |n de la academia."
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} lg={4} md={4} xl={4}>
              <Box display='flex' justifyContent='center'>

                <ProfresorCard
                  name="Mirco"
                  body="Entró en el mundo crypto hace algunos años y descubrió el
                arbitraje en el año 2021. Al día de hoy, es el mayor caso
                de éxito de Lautaro."
                  image="/fotos-equipo-mirco3.png"
                  rang="Instructor y comunicador |n de la academia"
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} lg={4} md={4} xl={4} >
              <Box display='flex' justifyContent='center'>

                <ProfresorCard
                  name="Ayrton"
                  body="Se encarga de preparar y dar forma a todo el contenido
                para medios digitales de Block Academy."
                  image="/fotos-equipo-ayrton3.png"
                  rang="                      Comunicador y |n productor audiovisual.                "
                />
              </Box>

            </Grid>

            <Grid item xs={12} sm={12} lg={12} md={12} xl={12}>
              <Box display="flex" justifyContent="center">
                <Divider
                  sx={{
                    mt: 5,
                    py: 0.3,
                    backgroundColor: "white",
                    width: "1128px",
                    borderRadius: "9px",
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} lg={12} md={12} xl={12} sx={{ pb: 5 }}>
              <Box display="flex" justifyContent="center">
                <Typography sx={{ textAlign: "center", color: 'white', fontSize: '64px', mt: 5, fontWeight: '700', fontFamily: 'Montserrat' }} variant="body1">
                  ¿Cómo nace Block Academy?
                </Typography>
              </Box>
              <Box display="flex" justifyContent="center">
                <Box
                  display="flex"
                  justifyContent="center"
                  sx={{ width: "85.5vw", mt: 5 }}
                >
                  <Typography
                    sx={{
                      textAlign: "center",
                      fontWeigth: "500",
                      fontSize: "24px",
                      lineheight: '29.26px', color: 'white', fontFamily: 'Montserrat'
                    }}
                    variant="body1"
                  >
                    {" "}
                    “Comenzamos como cualquiera, buscando generar ingresos
                    extra. Con el paso del tiempo <br /> y tanta experiencia adquirida,
                    empezamos a compartir lo que habíamos aprendido. Fue una <br />
                    locura. Muchos amigos y familiares lograron resultados
                    increíbles.
                  </Typography>
                </Box>
              </Box>
              <Box display="flex" justifyContent="center">
                <Box
                  display="flex"
                  justifyContent="center"
                  sx={{ width: "85.5vw", mt: 5 }}
                >
                  <Typography
                    sx={{
                      textAlign: "center",
                      fontWeigth: "500",
                      fontSize: "24px",
                      lineheight: '29.26px', color: 'white', fontFamily: 'Montserrat'
                    }}
                    variant="body1"
                  >
                    Desde entonces decidimos asociarnos con e-Mentors. Queríamos
                    llegar a la mayor cantidad <br /> de personas. Esto tiene que estar
                    al alcance de todos, pensamos. Y hoy ya es un hecho. <br /> Nuestro
                    objetivo es seguir aportando conocimiento para cambiar la
                    realidad económica de <br /> todos los argentinos.”
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
                  variant="body1"
                  sx={{
                    color: "rgb(56, 3, 102)",
                    textAlign: "center",
                    fontSize: '64px',
                    lineHeight: '78px',
                    fontWeight: '700',
                    fontFamily: 'Montserrat'
                  }}
                >
                  ¿Qué dicen nuestros alumnos?
                </Typography>
              </Box>
              <Typography
                variant="body1"
                sx={{ fontWeight: '500', textAlign: "center", fontSize: '40px', lineHeight: '49px', color: '#252425', mt: 5, fontFamily: 'Montserrat' }}
              >
                Ellos aprendieron junto a nosotros... ¡escuchalos!
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} lg={12} xl={12} md={12}>
              <Box sx={{ border: "1px solid white" }}>
                <CarouselYoutube />
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} lg={12} xl={12} md={12}>
              <Box display="flex" justifyContent="center" >
                <Divider
                  sx={{
                    my: 10,
                    py: 0.3,
                    backgroundColor: "#380366",
                    width: "1128px",
                    borderRadius: "9px",
                  }}
                />
              </Box>
            </Grid>

            <Grid item xs={12} sm={12} lg={12} xl={12} md={12}>
              <Box display="flex" justifyContent='center'>
                <Box display="flex" justifyContent="space-around" sx={{ mb: 4, mx: 3 }} alignItems='center'>
                  <Typography
                    variant="body1"
                    sx={{
                      textAling: {
                        xs: "center",
                        sm: "center",
                        md: "justify",
                        lg: "justify",
                        xl: "justify",
                      },
                      color: "#380366",
                      mx: 1,
                      fontSize: "64px",
                      fontFamily: 'Montserrat',
                      width: {
                        xs: "100vw",
                        sm: "100vw",
                        md: "455px",
                        lg: "455px",
                        xl: "455px",
                      },
                      fontWeight: "700",
                      lineHeight: "78.02px",
                    }}
                  >
                    Mirá cómo es <br /> un arbitraje <br />  en acción{" "}
                  </Typography>
                </Box>
                <Box display="flex" justifyContent="center" sx={{ mb: 4 }} alignItems='center'>
                  <VideoComponent
                    url="https://www.youtube.com/embed/pU7fORhE6Gs"
                    widthmd="673px"
                    height_="336px"
                  />
                </Box>
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
              <Box display="flex" justifyContent="center" alignItems="center">
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  sx={{
                    width: "1153px",
                    height: "82px",
                    boxShadow: "0px 0px 15px 5px #546CE9",
                    my: 8,
                  }}
                >
                  <Typography
                    sx={{
                      color: "black",
                      fontSize: "32px",
                      lineHeight: '39.01px',
                      fontFamily: 'Montserrat'
                    }}
                    variant="body1"
                    textAlign="center"
                  >
                    Podés obtener hasta el 5% de rendimiento en cada operación.
                  </Typography>
                </Box>
              </Box>
              <Box display="flex" justifyContent="center" sx={{ mt: 2 }}>
                <Button
                  onClick={handleClick}
                  variant="contained"
                  sx={{
                    backgroundColor: "rgb(56, 3, 102)",
                    boxShadow: "0px 0px 15px 5px #546CE9",
                    ":hover": {
                      animation: "1s $titledButton",
                      boxShadow: "0px 0px 25px 5px #546CE9",
                      bgcolor: "rgb(56, 3, 70)",
                      color: "white",
                    },
                    "@keyframes titledButton": {
                      "50%": {
                        boxShadow: "0px 0px 20px 10px #546CE9",
                      },
                    },
                  }}
                >
                  {" "}
                  <span style={{ fontWeight: "bold", fontSize: 36 }}>
                    ¡Quiero empezar hoy!
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
              <Box display="flex" justifyContent="center" sx={{ my: 5 }}>
                <Divider
                  sx={{
                    my: 2,
                    py: 0.3,
                    backgroundColor: "#380366",
                    width: "1128px",
                    borderRadius: "9px",
                  }}
                />
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
              <Box display="flex" justifyContent="center">
                <Box width="85.682vw">
                  <Typography
                    variant="body1"
                    sx={{
                      color: "rgb(56, 3, 102)",
                      textAlign: "center",
                      fontSize: "64px",
                      mb: 2,
                      fontWeight: "700",
                      lineHeight: '78.02px',
                      fontFamily: 'Montserrat'

                    }}
                  >
                    ¿Cuál es el VALOR REAL del contenido que vas a recibir?
                  </Typography>
                </Box>
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
              <Box display='flex' justifyContent='center'>
                <CourseValue phrases={[{
                  label: 'Infromación actualizada sobre el mundo del arbitraje', value: 'USD $27'
                },
                { label: 'Método paso a paso para operar en diferentes exchanges', value: 'USD $49' },
                { label: 'Apartado intensivo sobre Binance P2P, el exchange más importante para operar', value: 'USD $30' },
                {
                  label: 'Herramientas necesarias para gestionar tu negocio de la mejor manera', value: 'USD $49'
                },
                {
                  label: 'Operaciones de arbitraje en tiempo real comentando cada acción y mostrando resultados', value: 'USD $67'
                },
                {
                  label: 'Estrategias exclusivas desarrolladas a lo largo de los años de experiencia operando y su explicación paso a paso', value: 'INVALUABLE'
                },
                {
                  label: 'Contenido informativo contable sobre todas las cuenstiones imposiivas', value: 'USD $17'
                },
                {
                  label: 'Acceso a odas las actualizaciones futuras del contenido', value: 'INVALUABLE'
                },

                ]} />
              </Box>


            </Grid>

            <Grid item xs={12} sm={12} md={12} xl={12} lg={12}>
              <Box display="flex" justifyContent="center" >
                <Typography
                  variant="body1"
                  sx={{ color: "black", textAlign: "center", fontFamily: 'Montserrat', fontSize: '36px', my: 3 }}
                >
                  El valor real del curso que vas a recibir supera los USD $300.
                </Typography>
              </Box>
            </Grid>
          </Grid>

          <Grid
            container
            sx={{
              widht: "100vw", 

            }}
          >
            <Grid item xs={12} sm={12} md={12} xl={12} lg={12} sx={{backgroundColor: '#E5E5E5              ',}}>


              <Box display='flex' justifyContent='center'>
                <Box display='flex' justifyContent='center' sx={{ backgroundColor: 'white', boxShadow: '0px 0px 15px 5px #546CE9;', p: 2, color: 'red', mt: 5, mb: 10 }}>
                  <Typography variant='body1' sx={{ fontWeight: '550', fontSize: '32px', lineHeight: '39.01px', fontFamliy: 'Montserrat', textAlign: 'center' }}>¡OJO! Ese NO ES EL PRECIO que vas a pagar hoy.</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={5} xl={5} lg={5} sx={{backgroundColor: '#E5E5E5              ',pb:4}}>

              <Typography variant="h4" textAlign="center" sx={{ fontSize: '96px', fontWeight: '700', color: '#380366', fontFamily: 'MontSerrat' }}>
                ¿Por qué?
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={7} xl={7} lg={7} sx={{backgroundColor: '#E5E5E5              ',pb:4}}>

              <Box display="flex" justifyContent="start">
                <Box
                  display="flex"
                  flexDirection="column"
                  sx={{ width: "1440px" }}
                >
                  <Box display="flex" justifyContent="center" sx={{ my: 1 }}>
                    <Typography
                      variant="body1"
                      sx={{ fontWeight: '500', fontFamily: 'Montserrat', fontSize: '24px', color: '#380366', lineHeight: '29.26px' }}
                    >
                      Desde Block Academy,
                      entendemos la situación del país
                      , la <br /> de ser empleado y no llegar a fin de mes, o la de
                      querer <br /> emprender y no contar con los
                      recursos necesarios.

                    </Typography>
                  </Box>
                  <Box display="flex" justifyContent="center" sx={{ my: 1 }}>
                    <Typography
                      variant="body1"
                      sx={{ fontWeight: '500', fontFamily: 'Montserrat', fontSize: '24px', color: '#380366', lineHeight: '29.26px' }}


                    >
                      Por eso, hemos creado

                      más de 5 horas de contenido <br />

                      dinámico y super práctico que facilite el aprendizaje, con
                      el <br /> objetivo de generar un

                      impacto económico positivo

                      en la <br /> mayor cantidad de personas, lo más rápido posible.
                    </Typography>
                  </Box>
                  <Box display="flex" justifyContent="center" sx={{ my: 1 }}>
                    <Typography
                      variant="body1"
                      sx={{ fontWeight: '500', fontFamily: 'Montserrat', fontSize: '24px', color: '#380366', lineHeight: '29.26px' }}

                    >

                      Ahora tenés la oportunidad

                      de aprender, en sólo unas horas, <br /> toda nuestra experiencia
                      y conocimientos adquiridos <br /> durante varios años de
                      práctica...
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>


            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{ backgroundColor: '#380366' }}>
              <Box display="flex" justifyContent="center">
                <Box display="flex" flexDirection="column">
                  <Box display="flex" justifyContent="center">
                    <Typography sx={{ textAlign: "center", fontSize: '96px', color: 'white', fontFamily: 'Montserrat', fontWeight: '700', my: 6 }}>
                      Accedé HOY a tan sólo...
                    </Typography>
                  </Box>
                  <Box display="flex" justifyContent="center">
                    <Box display="flex" justifyContent="center" sx={{ boxShadow: '0px 0px 15px 5px #546CE9;' }}>
                      <Typography variant="h3" sx={{ textAlign: "center", fontSize: '128px', color: 'white', fontFamily: 'Montserrat', fontWeight: '700', p: 2 }}>
                        USD $12.99
                      </Typography>
                    </Box>
                  </Box>
                  <Box display="flex" justifyContent="center">
                    <Typography
                      variant="subtitle1"
                      sx={{ textAlign: "center", fontSize: '36px', lineHeight: '43.88px', color: 'white', my: 6, fontFamily: 'Montserrat' }}
                    >
                      ¡Vas a recibir el enlace de acceso a tu contenido <br />
                      directamente en tu casilla de correo electrónico!
                    </Typography>
                  </Box>

                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{ backgroundColor: '#380366',pb:6 }}>
              <Box display="flex" justifyContent="center" >
                <Box display="flex" justifyContent="center" flexDirection='column'>
                  <Box
                    sx={{
                      backgroundColor: "white",
                      borderRadius: "9px",
                      width: "1069px",
                      p: 3,
                      boxShadow: '0px 0px 10px 10px rgba(84, 108, 233, 0.5);'
                    }}
                  >


                    <Typography
                      textAlign="start"
                      variant="body1"
                      sx={{ color: "rgb(56, 3, 102)", fontSize: '40px', fontFamily: 'Montserrat', }}
                    >
                      Estás a un paso:
                    </Typography>

                    <Box display="flex" justifyContent="start">
                      <TextField
                        inputRef={componentRef}
                        label="Nombre"
                        sx={{ width: "100%", my: 2 }}
                      />
                    </Box>
                    <Box display="flex" justifyContent="start">
                      <TextField label="Apellido" sx={{ width: "100%", my: 2 }} />
                    </Box>
                    <Box display="flex" justifyContent="start">
                      <TextField label="Email" sx={{ width: "100%", my: 2 }} />
                    </Box>
                    <Box display="flex" justifyContent="center" sx={{ py: 2 }}>
                      <CreditCardComponent />
                    </Box>
                    <Divider sx={{ backgroundColor: '#380366', py: 0.3, borderRadius: '9px' }} />

                    <Typography variant='body1' sx={{ color: '#380366', fontSize: '40px', textAlign: 'center', my: 2, fontFamily: 'Montserrat' }}> ¡Tenemos una MASTERCLASS ideal para vos!</Typography>
                    <Typography variant='body1' sx={{ color: '#5F5F5F', fontSize: '24px', textAlign: 'center', lineHeight: '29.26px', my: 2, fontFamily: 'Montserrat' }}> IDEAL PARA TU PRIMER ARBITRAJE: Una masterclass que profundiza EN <br /> DETALLE cada paso del proceso de arbitraje, pensada para acompañarte y <br /> brindarte toda la seguridad en tus primeras operaciones.</Typography>

                    <Box
                      display="flex"
                      justifyContent="center"
                      sx={{ widht: "100%" }}
                    >

                      <Box
                        sx={{

                          p: 2,
                          m: 1,
                          maxWidth: "90%",
                        }}
                      >
                        <Box
                          sx={{
                            p: 1,
                            my: 1,
                            backgroundColor: "rgb(56, 3, 102)", boxShadow: '0px 0px 15px 5px #546CE9;'
                          }}
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                        >
                          <Checkbox
                            onChange={() => setIsChecked(!isChecked)}
                            sx={{
                              color: "white",
                              "&.Mui-checked": {
                                color: "cyan",
                              },
                            }}
                          />{" "}
                          <Typography
                            variant="body1"
                            sx={{ color: "white", fontWeight: "bold", fontSize: '36px' }}
                          >
                            ¡Agregar a mi compra por USD $6.99
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                    <Box display="flex" justifyContent="center">
                      <Box display="flex" justifyContent="start">
                        <Typography
                          textAlign="start"
                          variant="h6"
                          sx={{ color: "rgb(56, 3, 102)", px: 3, mt: 3 }}
                        >
                          Tu pedido:
                        </Typography>
                      </Box>
                      <Box flex={1} />
                      <Box display="flex" justifyContent="start">
                        <Typography
                          textAlign="start"
                          variant="h6"
                          sx={{ color: "rgb(56, 3, 102)", px: 3, mt: 3 }}
                        >
                          Precio
                        </Typography>
                      </Box>
                    </Box>
                    <Box display="flex" justifyContent="center">
                      <Divider
                        sx={{
                          py: 0.3,
                          backgroundColor: "rgb(56, 3, 102)",
                          width: "100%",
                        }}
                      />
                    </Box>
                    <Box
                      display="flex"
                      justifyContent="start"
                      sx={{ p: 2 }}
                      alignItems="center"
                    >

                      <Typography variant="body2" sx={{ fontSize: '24px', color: '#5F5F5F', fontFamily: 'Montserrat' }}>
                        Curso de Arbitraje Financiero - Block Academy
                      </Typography>
                      <Box flex={1} />
                      <Box sx={{ ml: 3 }}>
                        <Typography variant="body2" sx={{ fontSize: '24px', color: '#5F5F5F', fontFamily: 'Montserrat' }}>
                          $12.99
                        </Typography>
                      </Box>
                    </Box>
                    {isChecked && (
                      <Box
                        display="flex"
                        justifyContent="start"
                        sx={{ p: 2 }}
                        alignItems="center"
                      >


                        <Typography variant="body2" sx={{ fontSize: '24px', color: '#5F5F5F', fontFamily: 'Montserrat' }}>
                          Masterclass - Arbitraje paso a paso EN DETALLE{" "}
                        </Typography>
                        <Box flex={1} />
                        <Box sx={{ ml: 3 }}>
                          <Typography variant="body2" sx={{ fontSize: '24px', color: '#5F5F5F', fontFamily: 'Montserrat' }}>
                            $6.99
                          </Typography>
                        </Box>
                      </Box>
                    )}
                    <Box display="flex" justifyContent="center">
                      <Divider
                        sx={{
                          backgroundColor: 'black',
                          width: "100%",
                        }}
                      />
                    </Box>
                    <Box
                      display="flex"
                      justifyContent="start"
                      sx={{ p: 2 }}
                      alignItems="center"
                    >


                      <Typography variant="body2" sx={{ fontSize: '24px', color: '#5F5F5F', fontFamily: 'Montserrat' }}>
                        TOTAL
                      </Typography>
                      <Box flex={1} />
                      <Box sx={{ ml: 3 }}>
                        <Typography variant="body2" sx={{ fontSize: '24px', color: '#5F5F5F', fontFamily: 'Montserrat' }}>
                          {isChecked ? 'USD $19.98' : 'USD $12.99'}
                        </Typography>
                      </Box>
                    </Box>
                    <Box display="flex" justifyContent="center" sx={{ p: 2,mb:5 }}>
                      <Button
                        sx={{ boxShadow: '0px 0px 15px 5px #546CE9;', backgroundColor: '#00AEEE', fontSize: '36px', fontFamily: 'Montserrat' }}
                        variant="contained"
                        color="success"
                        onClick={handleClick}
                      >
                        Finalizar Compra
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>

          <Grid container sx={{backgroundColor:'black'}}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
              <Box
                sx={{
                  backgroundColor: "black",
                  flexWrap: {
                    xs: "wrap",
                    sm: "nowrap",
                    md: "nowrap",
                    lg: "nowrap",
                    xl: "nowrap",
                  },
                  py: 2,
                }}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Box
                  sx={{ maxWidth: "50%" }}
                  display="flex"
                  justifyContent="center"
                >
                  <img src="sello-garante.png" />
                </Box>
                <Box sx={{ mx: 2 }}>
                  <Typography variant="body1" textAlign="center" sx={{color:'white', fontSize:'40px', fontFamily:'Montserrat'}}>
                    Si en 30 días no conseguiste operaciones positivas, te
                    devolvemos el 100% de tu dinero.
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>

          <Box
            display="flex"
            flexDirection="column"
            sx={{ backgroundColor: "white", py: 2 }}
          >
            <Box display="flex" justifyContent="center">
              <Divider
                sx={{
                  py: 0.3,
                  backgroundColor: "rgb(56, 3, 102)",
                  width: "100%",
                  mt: 6,
                }}
              />
            </Box>
            <Box sx={{ mt: 2 }}>
              <Typography
                variant="h4"
                sx={{ color: "rgb(56, 3, 102)" }}
                textAlign="center"
              >
                Preguntas Frecuentes
              </Typography>
            </Box>
            <AccordionComponent
              pregunta="¿Es seguro operar en las plataformas?"
              respuesta="Sí, es seguro operar en las plataformas y en el curso vas a ver cómo es la operatoria en cada una de ellas."
            />
            <AccordionComponent
              pregunta="¿Cuánto puedo ganar?"
              respuesta="Vas a ganar todo lo que vos quieras en función del tiempo que le dediques."
            />
            <AccordionComponent
              pregunta="¿Cómo hago si no tengo un capital grande para invertir?"
              respuesta="¿Cómo hago si no tengo un capital grande para invertir?"
            />
            <AccordionComponent
              pregunta="¿Puedo hacer las operaciones con un celular?"
              respuesta="Sí, con tu celular podrías hacerlo perfectamente."
            />
            <AccordionComponent
              pregunta="¿Necesito tener conocimientos previos?"
              respuesta="No. No es necesario tener ningún tipo de conocimiento previo."
            />
            <AccordionComponent
              pregunta="¿Cómo accedo al curso?"
              respuesta="Al realizar la compra, recibís el acceso al curso vía e-mail."
            />
            <AccordionComponent
              pregunta="¿Qué necesito para hacer el curso?"
              respuesta="Ganas de aprender una nueva fuente de ingresos y un dispositivo con conexión a internet"
            />
            <AccordionComponent
              pregunta="¿Hay un límite de tiempo para completarlo?"
              respuesta="¡Ninguno! Tenés tiempo ilimitado para ir viendo y aplicando el contenido a tu tiempo."
            />
            <AccordionComponent
              pregunta="¿Obtengo un certificado?"
              respuesta="Si, al finalizar el curso podrás solicitarlo por e-mail a nuestro equipo de soporte."
            />
            <AccordionComponent
              pregunta="¿Quién certifica el curso?"
              respuesta="Block Academy en asociación con e-Mentors diagramaron este curso con el compromiso de facilitar el acceso al conocimiento y brindar las herramientas para que cada persona pueda crear sus propias oportunidades de crecimiento."
            />
          </Box>
          <FooterComponent />
        </>
      ) : (
        <FullScreenLoading />
      )
      }
    </>
  );
}
