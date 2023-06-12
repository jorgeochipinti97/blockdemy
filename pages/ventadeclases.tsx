import { LayoutComponent } from '@/components'
import { Box, Typography, useMediaQuery, useTheme, Grid, Divider, Button } from '@mui/material';
import Image from 'next/image';
import React from 'react'


const Ventadeclases = () => {
    const theme = useTheme();

    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <>
            <LayoutComponent title='BlockAcademy | Ventas De Clases' isMobile={isMobile}>
                <>
                    <Box sx={{ widht: '100%', backgroundColor: '#363333', py: .9 }}>
                        <Box display='flex' justifyContent='center' alignItems='center' flexDirection='column'>
                            <Typography variant='body1' sx={{ color: 'white', fontSize: '22px', fontWeight: '700', textAlign: 'center', }}>¡FELICITACIONES! YA ADQUIRISTE EL CURSO DE ARBITRAJE FINANCIERO                        </Typography>
                            <Typography variant='body1' sx={{ color: 'white', fontSize: '22px', fontWeight: '200', textAlign: 'center', }}>VERIFICÁ TU CASILLA DE CORREO, QUE VAS A RECIBIR TODA LA INFORMACIÓN PARA ACCEDER A TU CONTENIDO           </Typography>
                        </Box>
                    </Box>
                    <Box sx={{ widht: '100%', background: 'linear-gradient(286.04deg, #380366 38.08%, #2E47A0 83.7%)', py: 4 }}>
                        <Grid container>
                            <Grid item md={6} lg={6} xl={6}>
                                <Box display='flex' justifyContent='center' flexDirection='column' alignItems='center'>
                                    <Box>
                                        <Box sx={{ mt: 5 }}>
                                            <Typography variant='body1' sx={{ fontWeight: '500', fontSize: '20px', color: 'white', }}>¡VIVÍ LA EXPERIENCIA BLOCK EN VIVO!</Typography>
                                        </Box>
                                        <Typography variant='body1' sx={{ fontWeight: '700', fontSize: '57px', color: 'white', lineHeight: '69px' }}>Potenciá tus <br />redimientos<br /> al máximo</Typography>
                                        <Box alignSelf='start'>
                                            <Divider sx={{ my: 4+1, py: .2, width: '178px', backgroundColor: 'white', borderRadius: '9px' }} />
                                        </Box>
                                        <Box >
                                            <Typography variant='body1' sx={{ fontWeight: '500', fontSize: '22px', color: 'white', }}>Nada mejor para aprender en profundidad que <br /> nuestros <span style={{fontWeight:'800'}}>encuentros semanales EN VIVO: </span><br /> ¡aprendé estrategias exclusivas y obtené<br />información única <span style={{fontWeight:'800'}}>arbitrando en tiempo real</span><br /> con nuestros expertos! </Typography>
                                        </Box>
                                        <Box sx={{ my: 3+1 }}>
                                            <Typography variant='body1' sx={{ fontWeight: '500', fontSize: '22px', color: 'white', }}>Si llegaste hasta acá, estás a un paso de vivir la<br /> experiencia V.I.P. de Block Academy.</Typography>
                                        </Box>
                                        <Box sx={{ mb: 3+1 }}>
                                            <Typography variant='body1' sx={{ fontWeight: '500', fontSize: '22px', color: 'white', }}>Convertite en un miembro V.I.P. y <span style={{fontWeight:'800'}}>abrí la<br /> puerta hacia tu libertad financiera.</span></Typography>
                                        </Box>

                                    </Box>
                                    <Box display='flex' justifyContent='center'>
                                        <Box sx={{ border: '3px dashed #FFFFFF', color: 'white', widht: 598, heigh: '48px', p: 1 }}>
                                            <Typography variant='body1' sx={{ fontSize: '20px', fontWeight: '700', textAlign: 'center', lineHeight: '24px' }}> ATENCIÓN: SER V.I.P. NO ES PARA INDECISOS<br /> Accedé solo si estás 100% comprometido con tu objetivo.</Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item md={6} lg={6} xl={6}>
                                <Box display='flex' justifyContent='center' flexDirection='column' alignItems='center'>
                                    <Box sx={{mt:5}}>
                                        <Image src='/note.png' alt='image' width={547} height={303} />
                                    </Box>
                                    <Box sx={{mt:1}}>
                                        <Typography variant='body1' sx={{ fontSize: '24px', color: 'white', textAlign: 'center', lineHeight: '34px', fontWeight: '700' }}>
                                            Esta es la oportunidad que necesitás para<br /> llevar tus resultados al máximo nivel.
                                        </Typography>
                                    </Box>
                                    <Box alignSelf='center'>
                                        <Divider sx={{ my: 4, py: .2, width: '390px', backgroundColor: 'white', borderRadius: '9px' }} />
                                    </Box>
                                    <Box>
                                        <Typography variant='body1' sx={{ fontSize: '24px', color: 'white', textAlign: 'center', lineHeight: '34px', fontWeight: '700' }}>
                                            Convertite en un experto del<br /> arbitraje en criptomonedas...
                                        </Typography>
                                    </Box>
                                    <Box sx={{ mt: 4 }}>
                                        <Typography variant='body1' sx={{ fontSize: '48px', color: '#F6E01E', fontWeight: '700' }}>
                                            POR SOLO USD $49,99
                                        </Typography>
                                    </Box>
                                    <Box sx={{ mt: 10 }}>
                                        <Button
                                            // onClick={handleClick}
                                            size="large"
                                            variant="contained"
                                            sx={{
                                                backgroundColor: "white",
                                                transition: 'all 0.3s ease-in-out',
                                                color: "#380366",
                                                boxShadow: '0px 0px 15px 5px rgba(255, 255, 255, 0.25);',
                                                fontWeight: "bold",
                                                fontSize: isMobile ? "20px" : "34px",
                                                borderRadius: '23px',
                                                ":hover": {
                                                    bgcolor: "white",
                                                    boxShadow: '0px 0px 30px 10px rgba(255, 255, 255, 0.25)',

                                                    transform: 'scale(1.1)'
                                                },
                                            }}
                                        >
                                            ACCEDER AHORA                                        </Button>
                                    </Box>
                                    <Box sx={{ mt: 1 }}>
                                        <Typography variant='body1' sx={{ fontSize: '13px', color: 'white', fontWeight: '300' }}>
                                            EL MONTO SE CARGARÁ A LA TARJETA YA INGRESADA
                                        </Typography>
                                    </Box>
                                    <Box sx={{ mt: 2, mb: 4 }}>
                                        <Typography variant='body1' sx={{ fontSize: '13px', color: 'white', fontWeight: '300' }}>
                                            No gracias. No quiero las clases en vivo.
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>


                    </Box>
                    <Box display='flex' justifyContent='center'>
                        <Box sx={{ background: 'linear-gradient(284.23deg, #351475 300.88%, #2E47A0 554.66%);', width: '118px', height: '30px' }} />
                    </Box>

                    <Grid container sx={{ my: 4 }}>
                        <Grid item md={4} lg={4} xl={4}>
                            <Box display='flex' flexDirection='column' alignItems='space-between' justifyContent='space-between' sx={{ height: '180px', position: 'relative', bottom: 15 }}>
                                <Box display='flex' justifyContent='center' alignItems='start'>
                                    <Image src='/camera.png' width={218} height={160} alt='' />
                                </Box>
                                <Box display='flex' justifyContent='center'>
                                    <Typography variant='body1' sx={{ fontSize: '24px', color: '#380366', fontWeight: '600', textAlign: 'center' }}>Encuentros virtuales</Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item md={4} lg={4} xl={4}>
                            <Box display='flex' flexDirection='column' alignItems='space-between' justifyContent='space-between' sx={{ height: '180px' }}>
                                <Box display='flex' justifyContent='center' alignItems='start'>
                                    <Image src='/calendar.png' width={104} height={114} alt='' />
                                </Box>
                                <Box display='flex' justifyContent='center'>
                                    <Typography variant='body1' sx={{ fontSize: '24px', color: '#380366', fontWeight: '600', textAlign: 'center' }}>1 vez por semana</Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item md={4} lg={4} xl={4}>
                            <Box display='flex' flexDirection='column' alignItems='space-between' justifyContent='space-between' sx={{ height: '180px' }}>
                                <Box display='flex' justifyContent='center' alignItems='start'>
                                    <Image src='/watch.png' width={117} height={126} alt='' />
                                </Box>
                                <Box display='flex' justifyContent='center'>
                                    <Typography variant='body1' sx={{ fontSize: '24px', color: '#380366', fontWeight: '600', textAlign: 'center' }}>1+ horas</Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>

                    <Box display='flex' justifyContent='center'>
                        <Button
                            // onClick={handleClick}
                            variant="contained"
                            sx={{
                                transition: 'all 0.3s ease-in-out',
                                backgroundColor: "rgb(56, 3, 102)",
                                boxShadow: "0px 0px 15px 5px rgba(84,108,233,.6)",
                                fontSize: isMobile ? "20px" : "34px",
                                fontWeight: '800', borderRadius: '29px',
                                width: '1292px', mt: 4, height: '83px',
                                ":hover": {
                                    animation: "1s $titledButton",
                                    boxShadow: "0px 0px 15px 5px rgba(84,108,233,.9)",
                                    bgcolor: "rgb(56, 3, 70)",
                                    color: "white",
                                    transform: 'scale(1.01)'
                                },
                                "@keyframes titledButton": {
                                    "50%": {
                                        boxShadow: "0px 0px 20px 10px #546CE9",
                                    },
                                },

                            }}
                        >
                            {" "}
                            ¡Quiero acceder a las clases en vivo por USD $49.99!
                        </Button>
                    </Box>
                    <Box display='flex' justifyContent='center'>
                        <span style={{ fontSize: '11px', position: 'relative', fontWeight: 400, bottom: '20px', color: 'white' }}>El monto se cargará a la tarjeta ya ingresada</span>
                    </Box>
                    <Box display='flex' justifyContent='center' sx={{my:4}}>
                        <span style={{ fontSize: '15px',textAlign:'center',color:'#380366' }}>No gracias. No quiero las clases en vivo.</span>
                    </Box>
                </>
            </LayoutComponent>

        </>
    )
}

export default Ventadeclases