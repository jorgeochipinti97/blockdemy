import { CourseIsForYou } from '@/components/CourseIsForYou'
import { Grid, Typography, Button, Box } from '@mui/material'
import Image from 'next/image';

import React, { FC } from 'react'

interface Props {
    isMobile: boolean
    handleClick: any

}

export const IsForYouSection: FC<Props> = ({ isMobile,handleClick }) => {
    return (

        <>

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
                            fontSize: isMobile ? '40px' : "4rem",
                            lineHeight: isMobile ? "45px" : "87.77px",
                        }}
                    >
                        NO AVANCES <br style={{ display: isMobile ? 'block' : 'none' }} /> SIN LEER ESTO
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12} lg={12} md={12} xl={12} >
                    <Box display="flex" justifyContent="center" >
                        <Box display="flex" justifyContent="space-around" width={isMobile?"100%":'90%'} >

                            <Grid container>
                                <Grid item lg={4} md={4} xl={4} >
                                    <Box display="flex" justifyContent="center" alignItems="center" sx={{ maxWidth: '422px' }}>
                                        <CourseIsForYou
                                            isMobile={isMobile}
                                            body="Este curso ES PARA VOS si.." />
                                    </Box>
                                </Grid>
                                <Grid item lg={4} md={4} xl={4}>
                                    <Box display='flex' justifyContent='center'>
                                        <Image
                                            src="/celular2.png"
                                            alt=""
                                            height={685}
                                            width={474}
                                            layout={isMobile ? 'responsive' : 'intrinsic'}

                                        />
                                    </Box>
                                </Grid>
                                <Grid item lg={4} md={4} xl={4} >
                                    <Box display="flex" justifyContent="center" alignItems="center" sx={{ maxWidth: '422px' }}>
                                        <CourseIsForYou
                                            isMobile={isMobile}
                                            body="Este curso NO ES PARA VOS si.." />
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
                                transition: 'all 0.3s ease-in-out',
                                backgroundColor: "rgb(56, 3, 102)",
                                boxShadow: "0px 0px 15px 5px #546CE9",
                                fontSize: isMobile ? "20px" : "36px",
                                fontWeight:'800',
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
            </Grid>
        </>


    )
}
