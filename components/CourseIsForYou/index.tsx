import { Box, Icon, IconButton, Typography } from "@mui/material";
import useHover from "@react-hook/hover";
import React, { FC, useEffect, useState } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

interface Props {
  body: string;
  isMobile: boolean

}

const frasesSi: String[] = [
  "Estás buscando generar \n ingresos  en tu tiempo \n disponible",
  "Estás dispuesto a convertir \n tu tiempo libre en dinero",
  "​La inflación te esta \n consumiendo",
  "​Querés lograr una fuente de \n ingresos estable",
  "Tenés dinero ahorrado y no \n sabes que hacer con él",
  "Querés emprender y estás \n buscando una gran \n oportunidad",
  "Querés alcanzar la libertad \n financiera",
];
const frasesNo: String[] = [
  "Buscás hacer dinero,  sin aprender nada nuevo",
  "​Estás cómodo con tu  situación económica actual",
  "No creés en  las buenas oportunidades",
  "​La inflación  no te quita el sueño",
  "​No te interesa  tener una nueva  fuente de ingresos",
  "​No estás dispuesto a  dedicar tiempo extra  para generar ingresos",
  "Crees que la   libertad financiera  es inalcanzable",
  "Crees que el  mundo del emprendimiento  no es para vos",
  "No vivís en Argentina",
];

export const CourseIsForYou: FC<Props> = ({ body, isMobile }) => {
  const target = React.useRef(null);
  const isHovering = useHover(target, { enterDelay: 200, leaveDelay: 200 });
  const [clicked, setClicked] = useState(false);
  const [isMoving, setIsMoving] = useState(false)




  const handleClick = () => {
    setClicked(!clicked);
  };

  useEffect(() => {


    clicked && setIsMoving(true)
    !clicked && setIsMoving(false)
  }, [clicked]);

  return (
    <>
      <Box
        onClick={handleClick}
        ref={target}
        sx={{
          height: { xs: 'auto', sm: 'auto', md: "585px", lg: "585px", xl: "585px" }, cursor: 'pointer', width: '100vw', mt: body.toLowerCase().includes("no") && isMobile ? 4 : 0, mb: body.toLowerCase().includes("no") && isMobile ? 2 : 0
        }}
        display="flex"
        justifyContent="center"
        alignItems={body.toLowerCase().includes("no") ? "end" : "start"}
      >
        <Box alignSelf={body.toLowerCase().includes("no") ? "end" : "start"}
          justifyContent="center"

          sx={{
            display: clicked ? "none" : "block",

          }}>
          <Typography
            variant="body1"
            sx={{
              fontSize: isMobile ? "34px" : "44px",
              lineHeight: "58.51px",
              color: "#380366",
              fontWeight: "500",
              textAlign: "center",
              display: clicked ? "none" : "block",
              transition: "transform 0.5s ease",
              transformStyle: "preserve-3d",
              transform: isMoving ? "rotateY(180deg)" : "",
              mx: 2
            }}
          >
            {body}
          </Typography>
          <Box display='flex' justifyContent='center'>
            <IconButton>
              <RemoveRedEyeIcon sx={{ color: 'white', fontSize: '40px', borderRadius: '90px', p: .4, border: '1px solid black', backgroundColor: '#380366' }} />
            </IconButton>
          </Box>
        </Box>

        <Box
          sx={{
            transition: "transform 0.5s ease",
            transformStyle: "preserve-3d",
            transform: isMoving ? "rotateY(180deg)" : "",

          }}

          display='flex' justifyContent='center'

        >
          <Box
            display="flex"
            flexDirection="column"
            justifyContent={isMobile ? "center" : "end"}
            alignItems="center"
            sx={{
              color: "black",
              backgroundColor: "#D9D9D9",
              p: 1.5,
              my: isMobile ? 2 : 0,
              borderRadius: 9,
              maxWidth: {
                xs: "80vw",
                sm: "80vw",
                md: "448px",
                lg: "448px",
                xl: "448px",
              },
              display: clicked ? "block" : "none",
              transform: clicked ? "rotateY(180deg)" : "",
              transformStyle: clicked ? "preserve-3d" : "",
              transition: clicked ? "transform 0.5s ease" : "",
            }}
          >
            {body.toLowerCase().includes("no")
              ? frasesNo.map((e, index) => (
                <Box display="flex" sx={{ my: 2 }} key={index} alignItems='start'>

                  <Icon sx={{ mr: 1, verticalAlign: 'top' }}>
                    <ClearIcon />
                  </Icon>

                  <Typography
                    alignSelf='center'
                    variant="subtitle1"
                    sx={{ color: "#380366", fontWeight: "500", fontSize: isMobile ? "14px" : '14px', fontFamily: 'Montserrat' }}
                  >

                    {
                      e.split('\n').map((line, index) => (
                        <span key={index}>
                          {line}
                          <br />
                        </span>
                      ))}

                  </Typography>
                </Box>
              ))
              : frasesSi.map((e, index) => (
                <Box display="flex" sx={{ my: 1 }} key={index} >
                  <Icon sx={{ mr: 1, verticalAlign: 'top', mt: 1 }}>
                    <CheckIcon sx={{ mr: 1 }} />
                  </Icon>
                  <Typography
                    alignSelf='center'

                    variant="subtitle1"
                    sx={{ color: "#380366", fontWeight: "500", fontSize: isMobile ? "14px" : '14px', fontFamily: 'Montserrat' }}
                  >
                    {e.split('\n').map((line, index) => (
                      <span key={index}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </Typography>
                </Box>
              ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};
