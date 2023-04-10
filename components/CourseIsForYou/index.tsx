import { Box, Typography } from "@mui/material";
import useHover from "@react-hook/hover";
import React, { FC, useEffect, useState } from "react";

import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import AOS from "aos";

interface Props {
  body: string;
}

const frasesSi: String[] = [
  "            ​Estás buscando generar ingresos en tu tiempo disponible",
  "            ​Estás dispuesto a convertir tu tiempo libre en dinero",
  "            ​ La inflación te esta consumiendo",
  "Tenés dinero ahorrado y no sabes que hacer con el",
  "            ​Querés lograr una fuente de ingresos estable",
  "            ​ Querés emprender y estás buscando una gran oportunidad",
  "            ​ Te gustaría tener mayor control sobre tu dinero",
  "            ​ Querés alcanzar la libertad financiera",
];
const frasesNo: String[] = [
  "                    Buscás hacer dinero, sin aprender nada nuevo",
  "                    ​Estás cómodo con tu situación económica actual",
  "                    No creés en las buenas oportunidades",
  "                    ​La inflación no te quita el sueño",
  "                    ​No te interesa tener una nueva fuente de ingresos",
  "​ No estás dispuesto a dedicar tiempo extra para generar ingresos",
  "Crees que la libertad financiera es inalcanzable",
  "Crees que el mundo del emprendimiento no es para vos",
  "                    No vivís en Argentina",
];

export const CourseIsForYou: FC<Props> = ({ body }) => {
  const target = React.useRef(null);
  const isHovering = useHover(target, { enterDelay: 200, leaveDelay: 200 });
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };

  useEffect(() => {
    setTimeout(() => {
      setClicked(false);
    }, 5000);
  }, [clicked]);

  return (
    <>
      <Box
        onClick={handleClick}
        ref={target}
        sx={{ height: "65vh" }}
        display="flex"
        justifyContent="center"
        alignItems={body.toLowerCase().includes("no") ? "end" : "start"}
      >
        <Box alignSelf={body.toLowerCase().includes("no") ? "end" : "start"}>
          <Typography
            variant="body1"
            sx={{
              fontSize: "3rem",
              lineHeight: "58.51px",
              color: "#380366",
              fontWeight: "100",
              textAlign: "center",
              mb: 2,
              display: isHovering || clicked ? "none" : "block",
            }}
          >
            {body}
          </Typography>
        </Box>

        <Box
          sx={{
            transition: "transform 0.5s ease",
            transformStyle: isHovering || clicked ?"preserve-3d" :'',
            transform:  clicked ? "rotateY(180deg)" : '',
            "&:hover": {
              transform: isHovering || clicked ?"rotateY(180deg)" : '',
            },
          }}
        >
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="end"
            alignItems="start"
            sx={{
              color: "black",
              backgroundColor: "#D9D9D9",
              p: 2,
              borderRadius: 9,
              width: "26.804vw",
              display: isHovering || clicked ? "block" : "none",
              transform: isHovering || clicked ? "rotateY(180deg)":'',
              transformStyle:isHovering || clicked ?  "preserve-3d":'',
              transition: isHovering || clicked ? "transform 0.5s ease":'',
            }}
          >
            {body.toLowerCase().includes("no")
              ? frasesNo.map((e) => (
                  <Box display="flex" sx={{ my: 0.5 }} key={e[0]}>
                    <ClearIcon sx={{ mr: 0 }} />
                    <Typography
                      variant="subtitle1"
                      sx={{ color: "#380366", fontWeight: "500" }}
                    >
                      ​{e}
                    </Typography>
                  </Box>
                ))
              : frasesSi.map((e) => (
                  <Box display="flex" sx={{ my: 0.5 }} key={e[0]}>
                    <CheckIcon sx={{ mr: 0 }} />
                    <Typography
                      variant="subtitle1"
                      sx={{ color: "#380366", fontWeight: "500" }}
                    >
                      ​{e}
                    </Typography>
                  </Box>
                ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};
