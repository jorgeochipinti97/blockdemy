import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";

type Props = {
  title: string;
  year: string;
  number: number;
  isMobile: boolean
};

export const IntersectionNumber = ({ number, title, year, isMobile }: Props) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({ threshold: 0 });
  useEffect(() => {
    if (inView && count < number) {
      const timeoutId = setTimeout(() => {
        setCount(count + number / 10);
      }, 100);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [inView, count]);

  return (
    <Grid item xs={12} sm={3} md={3} lg={3} xl={3} sx={{ my: isMobile ? 4 : 2 }}>
      <div ref={ref}>
        <Box display="flex" justifyContent="center">
          <Box width={"100vw"}>
            <Typography
              variant={isMobile ? "h3" : "h2"}
              sx={{ textAlign: "center", fontWeight: "bold", color: 'white', fontFamily: 'Montserrat' }}
            >
              {count.toFixed(2)}%
            </Typography>


            {(title.toLowerCase().includes('inflación') && year == '2021') && isMobile
              && (
                <>
                  <Typography variant="body1" sx={{ textAlign: "center", color: 'white', fontFamily: 'Montserrat', fontSize: isMobile ? '13px' : 'auto' }} >
                    INFLACIÓN ANUAL EN  <br style={{ display: isMobile ? 'block' : 'none' }} /> ARGENTINA  <br style={{ display: isMobile ? 'block' : 'none' }} /> EN 2021
                  </Typography>
                </>
              )

            }

            {(title.toLowerCase().includes('inflación') && year == '2022' ) && isMobile
              && (
                <>
                  <Typography variant="body1" sx={{ textAlign: "center", color: 'white', fontFamily: 'Montserrat', fontSize: isMobile ? '13px' : 'auto' }} >
                    INFLACIÓN ANUAL EN  <br style={{ display: isMobile ? 'block' : 'none' }} /> ARGENTINA  <br style={{ display: isMobile ? 'block' : 'none' }} /> EN 2022
                  </Typography>
                </>
              )

            }




            {title.toLowerCase().includes('salario') ?
              (
                <>
                  <Typography variant="body1" sx={{ textAlign: "center", color: 'white', fontFamily: 'Montserrat', fontSize: isMobile ? '13px' : 'auto' }} >
                    CAÍDA DEL SALARIO <br style={{ display: isMobile ? 'block' : 'none' }} />  ANUAL   <br style={{ display: isMobile ? 'none' : 'block' }} /> {isMobile && 'EN ARGENTINA'}<br style={{ display: isMobile ? 'block' : 'none' }} />  {isMobile && 'EN 2021'}
                  </Typography>
                </>
              )


              : (<Typography variant="body1" sx={{ textAlign: "center", color: 'white', fontFamily: 'Montserrat', display: isMobile ? 'none' : 'block' }} >
                {title}
              </Typography>)}

            <Typography variant="h5" sx={{ textAlign: "center", color: 'white', fontFamily: 'Montserrat', display: isMobile ? 'none' : 'block' }}>
              EN {`${year}`}
            </Typography>
          </Box>
        </Box>
      </div>
    </Grid>
  );
};


