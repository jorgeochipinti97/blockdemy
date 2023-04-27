import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import {
  ArbitrajeSection,
  CarouselYoutube,
  CheckComponent,
  ContentCard,

  ContentSliderCard,

  CourseSection,
  CourseValue,
  FaqComponent,
  FooterComponent,
  FullScreenLoading,
  NavBar,
  ProfresorCard,
  SliderComponent,
  SliderProfesores,
  VideoComponent,
} from "@/components";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  Grid,
  keyframes,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";


import { useState, useEffect, RefObject } from "react";
import { CreditCardComponent } from "../components/ui/CreditCardComponent";
import { useRef } from "react";
import { IsForYouSection } from '../components/ui/IsforyouSection/index';


export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [isLoading, setIsLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const componentRef: RefObject<HTMLDivElement> = useRef(null);

  const glow = keyframes`
  0% {
    box-shadow: 0px 0px 15px 5px #546CE9;
  }
  50% {
    box-shadow: 0px 0px 25px 10px #546CE9;
  }
  100% {
    box-shadow: 0px 0px 15px 5px #546CE9;
  }
`;

  const handleClick = () => {
    if (componentRef.current) {
      componentRef.current.focus();
    }
  };

  useEffect(() => {

    console.log(isMobile)

    const interval = setInterval(() => {
      setIsLoading(true);
    }, 700); // actualizar cada 100ms

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {isLoading ? (
        <>
          <NavBar isMobile={isMobile} />
          <Box display='flex' justifyContent='center' sx={{ backgroundColor: "#252425", }}>
            <CourseSection isMobile={isMobile} />
          </Box>
          <ArbitrajeSection handleClick={handleClick} isMobile={isMobile} />
          <Grid
            container
            sx={{ backgroundColor: "white", py: 8 }}
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
                        fontSize: isMobile ? "25px" : "36px",
                        my: 5, fontFamily: 'Montserrat',
                      }}
                    >
                      Con este curso vas a <br style={{ display: isMobile ? 'block' : 'none' }} /> dominar las siguientes <br style={{ display: isMobile ? 'block' : 'none' }} />  habilidades:
                    </Typography>
                  </Box>
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="start"
                    justifyContent="start"


                  >
                    <CheckComponent
                      isMobile={isMobile}
                      boldText="Generar rendimientos"
                      bodyText="Ya sea que estés estudiando, trabajando o desempleado, vas a tener la oportunidad de arbitrar y obtener tus propios resultados."
                    />
                    <CheckComponent
                      isMobile={isMobile}
                      boldText="Hacer valer tu dinero"
                      bodyText="vas a combatir la inflación, tanto como vos quieras."
                    />
                    <CheckComponent
                      isMobile={isMobile}
                      boldText="​Independencia laboral"
                      bodyText="entrás de lleno en una actividad que es perfectamente escalable y podés convertirla en tu mayor ingreso."
                    />
                    <CheckComponent
                      isMobile={isMobile}
                      boldText="Gestión de tu capital"
                      bodyText="todas las estrategias aprendidas durante el curso te van a permitir tener el control absoluto de tu capital en todo momento y saber cómo diversificarlo."
                    />
                    <CheckComponent
                      isMobile={isMobile}
                      boldText="Dominar plataformas de intercambio"
                      bodyText=" vas a recibir toda la información para aprovechar la compra y venta de activos, generando rentabilidad en diferentes exchanges."
                    />
                    <CheckComponent
                      isMobile={isMobile}
                      boldText="Desarrollar tu capacidad para detectar oportunidades"
                      bodyText="vas a adquirir el criterio para reconocer las operaciones más rentables y realizarlas de manera segura."
                    />
                    <CheckComponent
                      isMobile={isMobile}
                      boldText="​Mindset ganador"
                      bodyText=" te vamos a nutrir de la mentalidad adecuada para que domines las reglas del juego e impulses tu crecimiento personal. "
                    />
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Box sx={{ backgroundColor: '#380366', py: 5, display: isMobile ? 'block' : 'none' }}>
            <Box sx={{ pb: 4 }}>
              <Typography variant='body1' textAlign='center' sx={{ color: 'white', fontWeight: '700', fontSize: '33px', fontFamily: 'Montserrat' }}>7 MÓDULOS DE <br /> CONTENIDO</Typography>
            </Box>
            <SliderComponent />

          </Box>
          <Grid
            container
            sx={{
              widht: "100vw",
              backgroundImage: "url(/degrade-v-a-1200x800.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              py: 10,
              display: isMobile ? 'none' : 'auto'
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
            <Grid item xs={12} sm={12} lg={3} md={3} xl={3} sx={{ my: 2 }}>
              <ContentCard
                body="Introducción al arbitraje"
                image="/icon120x120-1.png"
              />
            </Grid>
            <Grid item xs={12} sm={12} lg={3} md={3} xl={3} sx={{ my: 2 }}>
              <ContentCard
                body="Exchanges por dentro"
                image="/icon120x120-2.png"
              />
            </Grid>

            <Grid item xs={12} sm={12} lg={3} md={3} xl={3} sx={{ my: 2 }}>
              <ContentCard
                body="Cómo operar en Binance P2P"
                image="/icon120x120-3.png"
              />
            </Grid>

            <Grid item xs={12} sm={12} lg={3} md={3} xl={3} sx={{ my: 2 }}>
              <ContentCard
                body="Herramientas para conocer rentabilidad"
                image="/icon120x120-4.png"
              />
            </Grid>

            <Grid item xs={12} sm={12} lg={3} md={3} xl={3} sx={{ my: 2 }}>
              <ContentCard
                body="Estrategias Pro para obtener la mayor rentabilidad y su explicación paso a paso"
                image="/icon120x120-5.png"
              />
            </Grid>
            <Grid item xs={12} sm={12} lg={3} md={3} xl={3} sx={{ my: 2 }}>
              <ContentCard
                body="Arbitrajes: Operaciones en tiempo real con resultados a la vista"
                image="/icon120x120-6.png"
              />
            </Grid>
            <Grid item xs={12} sm={12} lg={3} md={3} xl={3} sx={{ my: 2 }}>
              <ContentCard
                body="Información contable para que conozcas todas las cuestiones impositivas"
                image="/icon120x120-7.png"
              />
            </Grid>
          </Grid>

          <Box sx={{ width: '100vw' }}>
            <IsForYouSection isMobile={isMobile} handleClick={handleClick} />
          </Box>

          <Grid container sx={{ backgroundColor: "black" }}>
            <Grid item sm={12} md={12} xs={12} lg={12} xl={12}>
              <Box
                display="flex"
                justifyContent="center"

                sx={{ flexWrap: "wrap", mx: 3 }}
              >
                <Box >
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
                    textAlign={'center'}
                    sx={{

                      fontSize: isMobile ? "40px" : "96px", fontWeight: '700', color: 'white', fontFamily: 'Montserrat'
                    }}
                  >
                    Somos Block
                  </Typography>

                  <Typography variant="body1"

                    textAlign={'center'}

                    sx={{

                      fontSize: isMobile ? "20px" : "36px", color: 'white', fontWeight: '500', lineHeight: isMobile ? "25px" : '43.88px', fontFamily: 'Montserrat'
                    }}>
                    Tu academia de arbitraje <br style={{ display: isMobile ? 'block' : 'none' }} /> en Argentina.
                  </Typography>
                </Box>

              </Box>
              <Box sx={{ width: '100vw', my: 5, display: isMobile ? 'auto' : 'none' }}>
                <SliderProfesores />
              </Box>


              <Box display="flex" justifyContent="center">
                <Divider
                  sx={{
                    mt: 1,
                    mb: { xs: 0, sm: 0, md: 8, lg: 8, xl: 8 },
                    py: 0.3,
                    backgroundColor: "white",
                    width: isMobile ? "80%" : "1128px",
                    borderRadius: "9px",
                  }}
                />
              </Box>
            </Grid>

            <Grid item xs={12} sm={12} lg={4} md={4} xl={4} sx={{ display: isMobile ? 'none' : 'auto' }}>
              <Box display='flex' justifyContent='center'>
                <ProfresorCard
                  name="Lautaro"
                  body="Después de varios años arbitrando, decidió abrir sus conocimientos en el año 2021 y empezó con asesorías 1 a 1. Quienes tomaron su asesoría hoy son casos de éxito."
                  image="/fotos-equipo-tito3.png"
                  rang="Instructor principal |n de la academia."
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} lg={4} md={4} xl={4} sx={{ display: isMobile ? 'none' : 'auto' }}>
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
            <Grid item xs={12} sm={12} lg={4} md={4} xl={4} sx={{ display: isMobile ? 'none' : 'auto' }}>
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

            <Grid item xs={12} sm={12} lg={12} md={12} xl={12} sx={{
              display: isMobile ? 'none' : 'auto'
            }}>
              <Box display="flex" justifyContent="center">
                <Divider
                  sx={{
                    mt: 10,
                    py: 0.3,
                    backgroundColor: "white",
                    width: "1128px",
                    borderRadius: "9px",
                    display: isMobile ? 'none' : 'auto'
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} lg={12} md={12} xl={12} sx={{ pb: isMobile ? 6 : 15 }}>
              <Box display="flex" justifyContent="center">
                <Box sx={{ width: '90%' }}>
                  <Typography sx={{ textAlign: "center", color: 'white', fontSize: isMobile ? "35px" : '64px', mt: isMobile ? 3 : 5, fontWeight: '700', fontFamily: 'Montserrat' }} variant="body1">
                    ¿Cómo nace <br style={{ display: isMobile ? 'block' : 'none' }} /> Block Academy?
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
                      fontSize: isMobile ? "14px" : "22px",
                      lineheight: '29.26px', color: 'white', fontFamily: 'Montserrat'
                    }}
                    variant="body1"
                  >
                    Comenzamos como cualquiera, buscando  generar ingresos
                    extra. Con el paso del tiempo <br style={{ display: isMobile ? "none" : "block" }} /> y tanta experiencia adquirida,
                    empezamos a compartir lo que habíamos aprendido. Fue una <br style={{ display: isMobile ? "none" : "block" }} />
                    locura. Muchos amigos y familiares lograron resultados
                    increíbles.
                  </Typography>
                </Box>
              </Box>
              <Box display="flex" justifyContent="center">
                <Box
                  display="flex"
                  justifyContent="center"
                  sx={{ width: "85.5vw", mt: isMobile ? 2.5 : 5 }}
                >
                  <Typography
                    sx={{
                      textAlign: "center",
                      fontWeigth: "500",
                      fontSize: isMobile ? "14px" : "22px",
                      lineheight: '29.26px', color: 'white', fontFamily: 'Montserrat'
                    }}
                    variant="body1"
                  >
                    Desde entonces decidimos asociarnos con e-Mentors. Queríamos
                    llegar a la mayor   cantidad <br style={{ display: isMobile ? "none" : "block" }} />  de personas. Esto tiene que estar
                    al   alcance de todos, pensamos. Y hoy ya es un  hecho. <br style={{ display: isMobile ? "none" : "block" }} />  Nuestro
                    objetivo es seguir aportando conocimiento para cambiar la
                    realidad  económica de <br style={{ display: isMobile ? "none" : "block" }} />  todos los argentinos.
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
              <Box display="flex" justifyContent="center" sx={{ width: '100vw' }}>
                <Typography
                  variant="body1"
                  sx={{
                    color: "rgb(56, 3, 102)",
                    textAlign: "center",
                    fontSize: isMobile ? '35px' : '64px',
                    lineHeight: isMobile ? '35px' : '78px',
                    fontWeight: '700',
                    fontFamily: 'Montserrat'
                  }}
                >
                  ¿Qué dicen nuestros alumnos?
                </Typography>
              </Box>
              <Typography
                variant="body1"
                sx={{ fontWeight: '500', textAlign: "center", fontSize: isMobile ? "20px" : '40px', lineHeight: isMobile ? "25px" : '49px', color: '#252425', mt: 5, fontFamily: 'Montserrat' }}
              >
                Ellos aprendieron junto a <br style={{ display: isMobile ? 'block' : 'none' }} /> nosotros... ¡escuchalos!
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} lg={12} xl={12} md={12} sx={{ display: isMobile ? 'none' : 'block' }}>
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
              <Box display="flex" justifyContent='center' flexDirection={isMobile ? 'column' : 'row'} alignContent='center'>
                <Box display="flex" justifyContent={"space-around"} sx={{ mb: 4, mx: 3 }} alignItems='center'>
                  <Typography
                    textAlign={isMobile ? 'center' : 'justify'}
                    variant="body1"
                    sx={{

                      color: "#380366",
                      mx: 1,
                      fontSize: isMobile ? "30px" : "64px",
                      fontFamily: 'Montserrat',
                      width: isMobile ? '100vw' : '455px',
                      fontWeight: "700",
                      lineHeight: isMobile ? "30px" : "78.02px",
                    }}
                  >
                    Mirá cómo es <br style={{ display: isMobile ? 'none' : 'block' }} /> un arbitraje <br style={{ display: isMobile ? 'none' : 'block' }} />  en acción{" "}
                  </Typography>
                </Box>
                <Box display="flex" justifyContent="center" sx={{ mb: isMobile ? 0 : 4 }} alignItems='center'>
                  <VideoComponent
                    url="https://www.youtube.com/embed/pU7fORhE6Gs"
                    widthmd={isMobile ? "323px" : "673px"}
                    height_={isMobile ? "176px" : "336px"}
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
                    width: isMobile ? "90%" : "1153px",
                    height: isMobile ? "auto" : "82px",
                    boxShadow: "0px 0px 15px 5px #546CE9",
                    my: isMobile ? 5 : 8,
                    p: isMobile ? 2 : 0
                  }}
                >
                  <Typography
                    sx={{
                      color: "black",
                      fontSize: isMobile ? "20px" : "32px",
                      lineHeight: isMobile ? "27px" : '39.01px',
                      fontFamily: 'Montserrat'
                    }}
                    variant="body1"
                    textAlign="center"
                  >
                    Podés obtener hasta el 5% de <br style={{ display: isMobile ? "block" : "none" }} />rendimiento en cada <br style={{ display: isMobile ? "block" : "none" }} /> operación.
                  </Typography>
                </Box>
              </Box>

              <Box display="flex" justifyContent="center" sx={{ my: isMobile ? 2 : 4 }}>
                <Button
                  onClick={handleClick}
                  variant="contained"
                  sx={{
                    transition: 'all 0.3s ease-in-out',
                    backgroundColor: "rgb(56, 3, 102)",
                    boxShadow: "0px 0px 15px 5px #546CE9",
                    fontSize: isMobile ? "20px" : "36px",
                    fontWeight: '800',
                    ":hover": {
                      animation: "1s $titledButton",
                      boxShadow: "0px 0px 25px 5px #546CE9",
                      bgcolor: "rgb(56, 3, 70)",
                      color: "white",
                      transform: 'scale(1.1)'
                    },
                    "@keyframes titledButton": {
                      "50%": {
                        boxShadow: "0px 0px 20px 10px #546CE9",
                      },
                    },

                  }}
                >
                  {" "}

                  ¡Quiero empezar hoy!
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
                      fontSize: isMobile ? "30px" : "64px",
                      mb: 2,
                      fontWeight: "700",
                      lineHeight: isMobile ? "34px" : '78.02px',
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

              <Box display='flex' justifyContent='center' sx={{ width: isMobile ? '100%' : '100%' }}>
                <CourseValue isMobile={isMobile} phrases={[{
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
                  label: 'Contenido informativo contable sobre todas las cuestiones imposiivas', value: 'USD $17'
                },
                {
                  label: 'Acceso a todas las actualizaciones futuras del contenido', value: 'INVALUABLE'
                },

                ]} />
              </Box>
              <Box display='flex' justifyContent='center'>
                <Box display='flex' justifyContent='center' sx={{ display: isMobile ? 'auto' : 'none', width: '90%' }}>
                  <Box display='flex' justifyContent='center' sx={{ backgroundColor: 'white', boxShadow: '0px 0px 15px 5px #546CE9;', animation: `${glow} 1s ease-in-out infinite`, p: 3, color: 'red', mt: 5, mb: 10, }}>
                    <Typography variant='body1' sx={{ fontWeight: '550', fontSize: isMobile ? "20px" : '32px', lineHeight: isMobile ? "29px" : '39.01px', fontFamliy: 'Montserrat', textAlign: 'center' }}>¡OJO! Ese NO ES EL PRECIO <br style={{ display: isMobile ? 'block' : 'nonw' }} /> que vas a pagar hoy.</Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} sm={12} md={12} xl={12} lg={12} sx={{ display: isMobile ? 'none' : 'block' }}>
              <Box display="flex" justifyContent="center" >
                <Typography
                  variant="body1"
                  sx={{ color: "black", textAlign: "center", fontFamily: 'Montserrat', fontSize: '36px', my: 10 }}
                >
                  El valor real del curso que vas a recibir supera los USD $300.
                </Typography>
              </Box>
            </Grid>
          </Grid>

          <Grid
            container
            sx={{
              widht: "100vw", backgroundColor: '#E5E5E5', py: 4

            }}
          >
            <Grid item xs={12} sm={12} md={12} xl={12} lg={12} sx={{ pb: 4 }}>

              <Box display='flex' justifyContent='center' sx={{ display: isMobile ? 'none' : 'auto' }}>
                <Box display='flex' justifyContent='center'>

                  <Box display='flex' justifyContent='center' sx={{ backgroundColor: 'white', boxShadow: '0px 0px 15px 5px #546CE9;', animation: `${glow} 1s ease-in-out infinite`, p: 2, color: 'red', mt: 5, mb: 10, width: '891px' }}>
                    <Typography variant='body1' sx={{ fontWeight: '550', fontSize: isMobile ? "20px" : '32px', lineHeight: '39.01px', fontFamliy: 'Montserrat', textAlign: 'center' }}>¡OJO! Ese NO ES EL PRECIO que vas a pagar hoy.</Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={5} xl={5} lg={5} sx={{ pb: 4 }}>

              <Typography variant="h4" textAlign="center" sx={{ fontSize: isMobile ? "60px" : '96px', fontWeight: '700', color: '#380366', fontFamily: 'MontSerrat' }}>
                ¿Por qué?
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={7} xl={7} lg={7} sx={{ pb: 4 }}>

              <Box display="flex" justifyContent="start">
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems={isMobile ? "center" :'start'}
                  sx={{ width: isMobile ? "100%" : "1440px" }}
                >
                  <Box display="flex" justifyContent="center" sx={{ my: 1, }}>
                    <Typography
                      variant="body1"
                      sx={{ fontWeight: '500', fontFamily: 'Montserrat', fontSize: isMobile ? "14px" : '22px', color: '#380366', lineHeight: '29.26px', textAlign: isMobile ? 'center' : 'start', mx: isMobile ? 2 : 0 }}
                    >
                      Desde Block Academy,
                      entendemos la <br style={{ display: isMobile ? 'block' : 'none' }} /> situación del país
                      , la <br style={{ display: isMobile ? "none" : 'block' }} />  de ser empleado y no <br style={{ display: isMobile ? 'block' : 'none' }} /> llegar a fin de mes, o la de
                      querer <br style={{ display: isMobile ? "none" : 'block' }} /> emprender <br style={{ display: isMobile ? 'block' : 'none' }} /> y no contar con los
                      recursos necesarios.

                    </Typography>
                  </Box>
                  <Box display="flex" justifyContent="center" sx={{ my: 1 }}>
                    <Typography
                      variant="body1"
                      sx={{ fontWeight: '500', fontFamily: 'Montserrat', fontSize: isMobile ? "14px" : '22px', color: '#380366', lineHeight: '29.26px', textAlign: isMobile ? 'center' : 'start', mx: isMobile ? 2 : 0 }}


                    >
                      Por eso, hemos creado

                      más de 5 horas de <br style={{ display: isMobile ? 'block' : 'none' }} /> contenido <br style={{ display: isMobile ? "none" : 'block' }} />

                      dinámico y super práctico que <br style={{ display: isMobile ? 'block' : 'none' }} /> facilite el aprendizaje, con
                      el <br style={{ display: isMobile ? "none" : 'block' }} />  objetivo de  <br style={{ display: isMobile ? 'block' : 'none' }} /> generar un

                      impacto económico positivo

                      en la <br style={{ display: isMobile ? 'block' : 'none' }} /> <br style={{ display: isMobile ? "none" : 'block' }} />  mayor cantidad de personas, lo más rápido posible.<br style={{ display: isMobile ? 'block' : 'none' }} />
                    </Typography>
                  </Box>
                  <Box display="flex" justifyContent="center" sx={{ my: 1 }}>
                    <Typography
                      variant="body1"
                      sx={{ fontWeight: '500', fontFamily: 'Montserrat', fontSize: isMobile ? "14px" : '22px', color: '#380366', lineHeight: '29.26px', textAlign: isMobile ? 'center' : 'start', mx: isMobile ? 2 : 0 }}

                    >

                      Ahora tenés la oportunidad

                      de aprender, en <br style={{ display: isMobile ? 'block' : 'none' }} /> sólo unas horas,<br style={{ display: isMobile ? "none" : 'block' }} />toda nuestra experiencia
                      y <br style={{ display: isMobile ? 'block' : 'none' }} /> conocimientos adquiridos <br style={{ display: isMobile ? "none" : 'block' }} /> durante varios años <br style={{ display: isMobile ? 'block' : 'none' }} /> de
                      práctica...
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>



          </Grid>
          <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{ backgroundColor: '#380366' }}>
              <Box display="flex" justifyContent="center">
                <Box display="flex" flexDirection="column">
                  <Box display="flex" justifyContent="center">
                    <Typography sx={{ textAlign: "center", fontSize: isMobile ? "40px" : '88px', color: 'white', fontFamily: 'Montserrat', fontWeight: '700', my: 6 }}>
                      Accedé HOY <br style={{ display: isMobile ? 'block' : 'none' }} />a tan sólo...
                    </Typography>
                  </Box>
                  <Box display="flex" justifyContent="center">
                    <Box display="flex" justifyContent="center" sx={{ boxShadow: '0px 0px 15px 5px #546CE9;' }}>
                      <Typography variant="h3" sx={{ textAlign: "center", fontSize: isMobile ? "50px" : '120px', color: 'white', fontFamily: 'Montserrat', fontWeight: '700', p: 2 }}>
                        USD $12.99
                      </Typography>
                    </Box>
                  </Box>
                  <Box display="flex" justifyContent="center">
                    <Typography
                      variant="subtitle1"
                      sx={{ textAlign: "center", fontSize: isMobile ? "20px" : '28px', lineHeight: isMobile ? "28px" : '43.88px', color: 'white', my: 6, fontFamily: 'Montserrat' }}
                    >
                      ¡Vas a recibir el enlace de <br style={{ display: isMobile ? 'block' : 'none' }} /> acceso a tu contenido <br />
                      directamente en tu casilla <br style={{ display: isMobile ? 'block' : 'none' }} /> de correo electrónico!
                    </Typography>
                  </Box>

                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{ backgroundColor: '#380366', pb: 6 }}>
              <Box display="flex" justifyContent="center" >
                <Box display="flex" justifyContent="center" sx={{ width: isMobile ? '90%' : 'auto' }}>
                  <Box display="flex" justifyContent="center" flexDirection='column'>
                    <Box
                      sx={{

                        backgroundColor: "white",
                        borderRadius: "9px",
                        width: isMobile ? "100%" : "700px",
                        p: 3,
                        boxShadow: '0px 0px 10px 10px rgba(84, 108, 233, 0.5);'
                      }}
                    >


                      <Typography
                        textAlign="start"
                        variant="body1"
                        sx={{ color: "rgb(56, 3, 102)", fontSize: isMobile ? "20px" : '40px', fontFamily: 'Montserrat', }}
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


                      <Typography variant='body1' sx={{ color: '#380366', fontSize: isMobile ? "19px" : '32px', textAlign: 'center', my: 2, fontFamily: 'Montserrat' }}> ¡Tenemos una MASTERCLASS <br style={{ display: isMobile ? 'none' : 'block' }} /> ideal para vos!</Typography>
                      <Typography variant='body1' sx={{ color: '#5F5F5F', fontSize: isMobile ? "12px" : '16px', textAlign: 'center', lineHeight: isMobile ? "20px" : '29.26px', my: 2, fontFamily: 'Montserrat' }}> IDEAL PARA TU PRIMER ARBITRAJE: Una masterclass que profundiza EN<br style={{ display: isMobile ? 'none' : 'block' }} /> DETALLE cada paso del proceso de arbitraje, pensada para acompañarte y <br style={{ display: isMobile ? 'none' : 'block' }} />  brindarte toda la seguridad en tus primeras operaciones.</Typography>

                      <Box
                        display="flex"
                        justifyContent="center"
                        sx={{ widht: "100%", }}
                      >

                        <Box
                          sx={{
                            py: 1,
                            px: 2,
                            mt: isMobile ? 3 : 1,
                            mb: isMobile ? 5 : 0,
                            backgroundColor: "rgb(56, 3, 102)", boxShadow: '0px 0px 15px 5px #546CE9;', width: '100%'
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
                            sx={{ color: "white", fontWeight: "bold", fontSize: isMobile ? "20px" : '26px' }}
                          >
                            ¡Agregar a mi compra por USD $6.99!
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
                      <Box display="flex" justifyContent="start">
                        <Typography
                          textAlign="start"
                          variant="h6"
                          sx={{ color: "rgb(56, 3, 102)", px: 3, mt: 3, mb: 3, fontFamily: 'Montserrat', fontSize: isMobile ? "28px" : '32px' }}
                        >
                          Tu pedido:
                        </Typography>
                      </Box>
                      <Box
                        display="flex"
                        justifyContent="start"
                        sx={{ p: 2 }}
                        alignItems="center"
                      >
                        <Typography variant="body2" sx={{ fontSize: '16px', color: '#5F5F5F', fontFamily: 'Montserrat' }}>
                          Curso de Arbitraje Financiero - Block Academy
                        </Typography>
                        <Box flex={1} />
                        <Box sx={{ ml: 3 }}>
                          <Typography variant="body2" sx={{ fontSize: '16px', color: '#5F5F5F', fontFamily: 'Montserrat' }}>
                            $12.99
                          </Typography>
                        </Box>
                      </Box>
                      {/* {isChecked && ( */}
                      <Box sx={{ display: isChecked ? 'block' : 'none', transition: 'all 0.3s ease-in-out ' }}>
                        <Box
                          display="flex"
                          justifyContent="start"
                          sx={{ p: 2 }}
                          alignItems="center"
                        >


                          <Typography variant="body2" sx={{ fontSize: '16px', color: '#5F5F5F', fontFamily: 'Montserrat' }}>
                            Masterclass - Arbitraje paso a paso EN DETALLE{" "}
                          </Typography>
                          <Box flex={1} />
                          <Box sx={{ ml: 3 }}>
                            <Typography variant="body2" sx={{ fontSize: '16px', color: '#5F5F5F', fontFamily: 'Montserrat' }}>
                              $6.99
                            </Typography>
                          </Box>
                        </Box>
                      </Box>

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
                      <Box display="flex" justifyContent="center" sx={{ p: 2, my: 5 }}>
                        <Button
                          sx={{
                            transition: 'all 0.3s ease-in-out',
                            boxShadow: '0px 0px 15px 5px #546CE9;', backgroundColor: '#00AEEE', fontSize: isMobile ? "20px" : '28px', fontFamily: 'Montserrat', ":hover": {
                              transform: 'scale(1.1)', backgroundColor: '#00AEEE', boxShadow: '0px 0px 15px 5px #546CE9;'


                            },
                          }}
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
              </Box>
            </Grid>
          </Grid>
          <Grid container sx={{ backgroundColor: '#252425' }}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
              <Box
                sx={{
                  backgroundColor: "#252425",
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
                justifyContent="space-around"
                alignItems="center"
              >
                <Box
                  sx={{ px: 4 }}
                  display="flex"
                  justifyContent="center"
                >
                  <img src="sello-garante.png" />
                </Box>
                <Box sx={{ mx: 2 }}>
                  <Typography variant="body1" textAlign="center" sx={{ color: 'white', fontSize: '40px', fontFamily: 'Montserrat', width: '960px' }}>
                    Si en 30 días no conseguiste operaciones <br /> positivas, te
                    devolvemos el 100% de tu dinero.
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>

          <Box
            display="flex"
            flexDirection="column"
            sx={{ backgroundColor: "white", py: 10 }}
          >

            <Box >
              <Typography
                variant="h4"
                sx={{ color: "rgb(56, 3, 102)", fontSize: '64px', fontFamily: 'Montserrat', fontWeight: '700', mb: 5 }}
                textAlign="center"
              >
                Preguntas Frecuentes
              </Typography>
            </Box>

            <Box display='flex' justifyContent='center'>
              <Box sx={{ width: '1068px', boxShadow: "0px 0px 15px 5px #546CE9", backgroundColor: '#D9D9D9', cursor: 'pointer', borderRadius: '9px', mt: 5, }} >
                <FaqComponent marginNumber={0} question='¿Es seguro operar en las plataformas?' label='Sí, es seguro operar en las plataformas y en el curso vas a ver cómo es la operatoria en cada una de ellas.' />
                <FaqComponent marginNumber={1} question='¿Cuánto puedo ganar?' label='Vas a ganar todo lo que vos quieras en función del tiempo que le dediques.' />
                <FaqComponent marginNumber={1} question='¿Cómo hago si no tengo un capital grande para invertir?' label='No hay requisitos mínimos para el arbitraje.' />
                <FaqComponent marginNumber={1} question='¿Puedo hacer las operaciones con un celular?' label='Sí, con tu celular podrías hacerlo perfectamente.' />
                <FaqComponent marginNumber={1} question='¿Necesito tener conocimientos previos?' label='No. No es necesario tener ningún tipo de conocimiento previo.' />
                <FaqComponent marginNumber={1} question='¿Cómo accedo al curso?' label='Al realizar la compra, recibís el acceso al curso vía e-mail.' />
                <FaqComponent marginNumber={1} question='¿Qué necesito para hacer el curso?' label='Ganas de aprender una nueva fuente de ingresos y un dispositivo con conexion a internet' />
                <FaqComponent marginNumber={1} question='¿Hay un límite de tiempo para completarlo?' label='¡Ninguno! Tenés tiempo ilimitado para ir viendo y aplicando el contenido a tu tiempo.' />
                <FaqComponent marginNumber={1} question='¿Obtengo un certificado?' label='Si, al finalizar el curso podrás solicitarlo por e-mail a nuestro equipo de soporte.' />
                <FaqComponent marginNumber={0} question='¿Quién certifica el curso?' label='Block Academy en asociación con e-Mentors diagramaron este curso con el compromiso de facilitar el acceso al conocimiento y brindar las herramientas para que cada persona pueda crear sus propias oportunidades de crecimiento.' />
              </Box>
            </Box>
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
