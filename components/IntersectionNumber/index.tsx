import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";

type Props = {
  title: string;
  year: string;
  number: number;
};

export const IntersectionNumber = ({ number, title, year }: Props) => {
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
    <Grid item xs={12} sm={3} md={3} lg={3} xl={3} sx={{ mt: 2 }}>
      <div ref={ref}>
        <Box display="flex" justifyContent="center">
          <Box width={"100vw"}>
            <Typography
              variant="h2"
              sx={{ textAlign: "center", fontWeight: "bold", color: 'white' ,fontFamily:'Montserrat'}}
            >
              {count.toFixed(2)}%
            </Typography>
            {title.toLowerCase().includes('salario') ?
              (
                <>
              <Typography variant="body1" sx={{ textAlign: "center",  color: 'white',fontFamily:'Montserrat' }} >
              CAÍDA DEL SALARIO ANUAL <br/>EN ARGENTINA EN 2021

              </Typography>
                </>
              )


              : (<Typography variant="body1" sx={{ textAlign: "center", color: 'white',fontFamily:'Montserrat' }} >
                {title}
              </Typography>)}

            <Typography variant="h5" sx={{ textAlign: "center", color: 'white',fontFamily:'Montserrat' }}>
              EN {`${year}`}
            </Typography>
          </Box>
        </Box>
      </div>
    </Grid>
  );
};


