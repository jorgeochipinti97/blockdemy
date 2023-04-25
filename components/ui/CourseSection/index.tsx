import { Grid, Box, Typography, CircularProgress, Divider } from "@mui/material";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import ReactPlayer from "react-player";
import AOS from "aos";
import { VideoComponent } from "@/components/videoComponent";

interface VideoPlayerProps {
  width?: string | number;
  height?: string | number;

}
interface Props {
  isMobile: boolean
}


export const CourseSection = ({ isMobile }: Props) => {
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
      <Box >
        <Box>
          <Box display="flex" justifyContent="center"  >
            <Typography
              variant="body1"
              sx={{
                color: "white",
                fontWeight: 700,
                fontSize: { xs: '30px', sm: '30px', md: '3rem', xl: '3rem', lg: '3rem' },
                lineHeight: { xs: '35px', sm: '35px', md: "58.51px", lg: "58.51px" },
                fontFamily: "Montserrat",
                textAlign: { xs: "center", sm: "center" },
                my: 5
              }}
            >
              Curso de Arbitraje <br style={{ display: isMobile ? 'block' : 'none' }} /> Financiero de <br style={{ display: isMobile ? 'block' : 'none' }} /> Block Academy
            </Typography>
          </Box>
        </Box>

        <Box display='flex' justifyContent='center' sx={{ display: isMobile ? 'flex' : 'none' }}>
          <Divider sx={{ mb: 3, py: .1, backgroundColor: 'white', borderRadius: '9px', width: '80%' }} />
        </Box>
        <Box display="flex" justifyContent="space-between" flexWrap='wrap'  >
          <Box display='flex' justifyContent='center' alignItems='center'>
            <Box display="flex" flexDirection="column" sx={{ height: '100%' }} justifyContent='center'>
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
                    fontSize: { xs: '21px', sm: '21px', md: "32px", lg: '32px', xl: '32px' },
                    lineHeight: !isMobile ? "39.01px" : '30px',
                    fontFamily: "Montserrat",
                    fontWeight: 600,
                    color: "white",
                    textAlign: { xs: 'center', sm: 'center', md: 'start', lg: 'start', xl: 'start' }
                  }}
                >
                  Un método seguro y <br style={{ display: isMobile ? 'block' : 'none' }} /> confiable para <br style={{ display: isMobile ? 'none' : 'block' }} /> alcanzar la <br style={{ display: isMobile ? 'block' : 'none' }} /> libertad
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
                    mt: { xs: 3, sm: 3, md: 2, lg: 2, xl: 2 },
                    fontWeight: "500",
                    color: "#FFFFFF",

                    fontSize: {
                      xs: "15px",
                      sm: "15px",
                      md: "24px",
                      lg: "24px",
                      xl: "24px",
                    },
                    lineHeight:{  xs: "20px",
                    sm: "20px",
                    md: "29.26px",
                    lg: "29.26px",
                    xl: "29.26px",} , fontFamily: 'Montserrat',
                    textAlign: { xs: 'center', sm: 'center', md: 'start', lg: 'start', xl: 'start' }
                  }}
                >
                  Independientemente de los humores<br style={{ display: isMobile ? 'block' : 'none' }} /> del mercado,<br style={{ display: isMobile ? 'none' : 'block' }} /> y sin tener
                  conocimientos<br style={{ display: isMobile ? 'block' : 'none' }} /> previos, vas a aprender a <br style={{ display: isMobile ? 'none' : 'block' }} />  combatir la<br style={{ display: isMobile ? 'block' : 'none' }} /> inflación
                  y hacer crecer tus ingresos.{" "}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box display='flex' justifyContent='center' alignItems='center'  sx={{width:{xs:'100%',sm:'100%',md:'505px',lg:'505px',xl:'505px'}, mt:{xs:4,sm:4,lg:0,md:0,xl:0}}}> 
            <Box display="flex" justifyContent="center" alignContent="center" >
              <Box
                display="flex"
                justifyContent={isMobile ? "center":'start'}
                alignContent="center"
                sx={{
                  width: {
                    xs: "100%",
                    sm: "100%",
                    md: "100%",
                    lg: "100%",
                    xl: "100%",
                  }, 
                }}
              >

                <VideoComponent
                  url="https://www.youtube.com/embed/C7z96xNAHNc"
                  height_={isMobile ? '152px' :  "252px"}
                  widthmd={isMobile ? '305px' :"505px"}
                />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box>
          <Box display="flex" justifyContent="center" sx={{ my: 4 }}>
            <Box
              display="flex"
              justifyContent="center"
              sx={{ my: 2, py: {xs:5,sm:5,md:2,lg:2,xl:2}, border: "1px solid grey", width: {xs:'90%',sm:'90%',md:'100%',lg:'100%%',xl:"100%"}, }}
              className="glow-div-white"
            >
              <Box sx={{ width: "1153px" }}>
                <Typography
                  variant="body1"
                  sx={{
                    textAlign: "center",
                    fontSize: {xs:'12px',sm:'12px',md:'24px',lg:'24px',xl:'24px'},
                    lineHeight:{xs:'20px',sm:'20px',md:'29.26px',lg:'29.26px',xl:'29.26px'} ,
                    color: 'white', fontFamily: 'Montserrat'
                  }}
                >
                  Aprendé todo sobre arbitraje: un método <br style={{ display: isMobile ? 'block' : 'none' }} /> seguro y confiable
                  explicado paso a paso <br style={{ display: isMobile ? 'block' : 'none' }} /> por <br style={{ display: isMobile ? 'none' : 'block' }} />expertos, que te dará la oportunidad <br style={{ display: isMobile ? 'block' : 'none' }} />
                  de generar los ingresos que te propongas.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box >
  );
};


