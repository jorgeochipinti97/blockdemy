import { Box, IconButton, Typography } from "@mui/material";
import useHover from "@react-hook/hover";
import React, { FC, useEffect, useState } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";


interface Props {
  body: string;
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

export const CourseIsForYou: FC<Props> = ({ body }) => {
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
        sx={{ height: { md: "685px", lg: "685px", xl: "685px" },cursor:'pointer'
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
              fontSize: "44px",
              lineHeight: "58.51px",
              color: "#380366",
              fontWeight: "500",
              textAlign: "center",
              mb: 2,
              display: clicked ? "none" : "block",
              transition: "transform 0.5s ease",
              transformStyle: "preserve-3d",
              transform: isMoving ? "rotateY(180deg)" : "",

            }}
          >
            {body}
          </Typography>
          <Box display='flex' justifyContent='center'>
            <ExpandMoreIcon sx={{ color: '#380366', fontSize: '50px' }} />
          </Box>
        </Box>

        <Box
          sx={{
            transition: "transform 0.5s ease",
            transformStyle: "preserve-3d",
            transform: isMoving ? "rotateY(180deg)" : "",
          }}

          display='flex' justifyContent='center'>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="end"
            alignItems="center"
            sx={{
              color: "black",
              backgroundColor: "#D9D9D9",
              p: 1.5,
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
              ? frasesNo.map((e) => (
                <Box display="flex" sx={{ my: 1 }} key={e[0]} >
                  <Box>
                    <ClearIcon sx={{ mr: 1 }} />
                  </Box>

                  <Typography

                    variant="subtitle1"
                    sx={{ color: "#380366", fontWeight: "500", fontSize: '20px' }}
                  >
                    {e.split('\n').map((line, index) => (
                      <span key={index}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </Typography>
                </Box>
              ))
              : frasesSi.map((e) => (
                <Box display="flex" sx={{ my: 1 }} key={e[0]} >
                  <Box>
                    <CheckIcon sx={{ mr: 1 }} />
                  </Box>

                  <Typography

                    variant="subtitle1"
                    sx={{ color: "#380366", fontWeight: "500", fontSize: '20px' }}
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
