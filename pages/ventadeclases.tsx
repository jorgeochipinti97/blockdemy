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
                            <Typography variant='body1' sx={{ color: 'white', fontSize: isMobile ? '17px' : '22px', fontWeight: '700', textAlign: 'center', }}>{isMobile ? '¡YA SOS PARTE DE LA COMUNIDAD BLOCK! NO TE PIERDAS LA EXPERIENCIA EN VIVO...' : 'FELICITACIONES! YA ADQUIRISTE EL CURSO DE ARBITRAJE FINANCIERO'}                        </Typography>
                            <Typography variant='body1' sx={{ color: 'white', fontSize: isMobile ? '13px' : '22px', fontWeight: '200', textAlign: 'center', }}>{isMobile ? 'NO TE OLVIDES DE CHEQUEAR TU BANDEJA DE ENTRADA PARA RECIBIR EL ACCESO A TODOS TUS BENEFICIOS.' : 'VERIFICÁ TU CASILLA DE CORREO, QUE VAS A RECIBIR TODA LA INFORMACIÓN PARA ACCEDER A TU CONTENIDO'}          </Typography>
                        </Box>
                    </Box>
                    <Box sx={{ widht: '100%', background: isMobile ? ' linear-gradient(180deg, #3A1D78 29.83%, #2E47A0 100%);' : 'linear-gradient(286.04deg, #380366 38.08%, #2E47A0 83.7%)', py: isMobile ? 2 : 4 }}>
                        <Grid container>
                            <Grid item md={6} lg={6} xl={6}>
                                <Box display='flex' justifyContent='center' flexDirection='column' alignItems='center' sx={{ mx: 2 }}>
                                    <Box>
                                        <Box sx={{ mt: isMobile ? 2 : 5 }}>
                                            <Typography variant='body1' sx={{ fontWeight: isMobile ? '700' : '500', fontSize: isMobile ? '16px' : '20px', color: 'white', }}>¡VIVÍ LA EXPERIENCIA BLOCK EN VIVO!</Typography>
                                        </Box>
                                        <Typography variant='body1' sx={{ fontWeight: '700', fontSize: isMobile ? '40px' : '57px', color: 'white', lineHeight: isMobile ? '48.76px' : '69px', mt: isMobile ? 4 : 0 }}>Potenciá tus <br />redimientos<br /> al máximo</Typography>
                                        <Box alignSelf='start'>
                                            <Divider sx={{ my: 4 + 1, py: .2, width: '178px', backgroundColor: 'white', borderRadius: '9px' }} />
                                        </Box>
                                        <Box >
                                            <Typography variant='body1' sx={{ fontWeight: '500', fontSize: isMobile ? '18px' : '22px', color: 'white', }}>Nada mejor para aprender en<br style={{ display: isMobile ? 'auto' : 'none' }} /> profundidad que <br style={{ display: isMobile ? 'none' : 'auto' }} /> nuestros <span style={{ fontWeight: '800' }}>encuentros<br style={{ display: isMobile ? 'auto' : 'none' }} /> semanales EN VIVO: </span><br style={{ display: isMobile ? 'none' : 'auto' }} /> ¡aprendé<br style={{ display: isMobile ? 'auto' : 'none' }} /> estrategias exclusivas y obtené<br />información única <span style={{ fontWeight: '800' }}>arbitrando en<br style={{ display: isMobile ? 'auto' : 'none' }} /> tiempo real</span><br style={{ display: isMobile ? 'none' : 'auto' }} /> con nuestros expertos! </Typography>
                                        </Box>
                                        <Box sx={{ my: 3 + 1 }}>
                                            <Typography variant='body1' sx={{ fontWeight: '500', fontSize: isMobile ? '18px' : '22px', color: 'white', }}>Si llegaste hasta acá, estás a un paso de vivir la<br style={{ display: isMobile ? 'none' : 'auto' }} /> experiencia V.I.P. de Block Academy.</Typography>
                                        </Box>
                                        <Box sx={{ mb: 3 + 1 }}>
                                            <Typography variant='body1' sx={{ fontWeight: '500', fontSize: isMobile ? '18px' : '22px', color: 'white', }}>Convertite en un miembro V.I.P. y <span style={{ fontWeight: '800' }}>abrí la<br style={{ display: isMobile ? 'none' : 'auto' }} />puerta hacia tu libertad financiera.</span></Typography>
                                        </Box>

                                    </Box>
                                    <Box sx={{ mt: 5, display: isMobile ? 'auto' : 'none' }}>
                                        <Image src='/note.png' alt='image' width={355} height={197} />
                                    </Box>
                                    <Box display='flex' justifyContent={isMobile ? 'start' : 'center'} sx={{ display: isMobile ? 'none' : 'auto' }}>
                                        <Box sx={{ border: '3px dashed #FFFFFF', color: 'white', widht: 598, heigh: '48px', p: 1 }}>
                                            <Typography variant='body1' sx={{ fontSize: '20px', fontWeight: '700', textAlign: 'center', lineHeight: '24px' }}> ATENCIÓN: SER V.I.P. NO ES PARA INDECISOS<br /> Accedé solo si estás 100% comprometido con tu objetivo.</Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item md={6} lg={6} xl={6}>
                                <Box display='flex' justifyContent='center' sx={{ mx: isMobile ? 2 : 0 }} flexDirection='column' alignItems={isMobile ? 'start' : 'center'}>
                                    <Box sx={{ mt: 5, display: isMobile ? 'none' : 'auto' }}>
                                        <Image src='/note.png' alt='image' width={547} height={303} />
                                    </Box>
                                    <Box sx={{ mt: 1 }}>
                                        <Typography variant='body1' sx={{ fontSize: isMobile ? '17px' : '24px', color: 'white', textAlign: isMobile ? 'start' : 'center', lineHeight: isMobile ? '20.72px' : '34px', fontWeight: '700', my: isMobile ? 4 : 0 }}>
                                            Esta es la oportunidad que necesitás para<br /> llevar tus resultados al máximo nivel.
                                        </Typography>
                                    </Box>
                                    <Box alignSelf='center' sx={{ display: isMobile ? 'none' : 'auto' }}>
                                        <Divider sx={{ my: 4, py: .2, width: '390px', backgroundColor: 'white', borderRadius: '9px' }} />
                                    </Box>
                                    <Box >
                                        <Typography variant='body1' sx={{ fontSize: isMobile ? '15px' : '24px', color: 'white', textAlign: isMobile ? 'start' : 'center', lineHeight: isMobile ? '20.72px' : '34px', fontWeight: isMobile ? '500' : '700', }}>
                                            Convertite en un experto del<br style={{ display: isMobile ? 'none' : 'auto' }} /> arbitraje en <br style={{ display: isMobile ? 'auto' : 'none' }} /> criptomonedas...
                                        </Typography>
                                    </Box>

                                    <Box sx={{ mt: 4 }} alignSelf={isMobile ? 'center' : 'auto'}>
                                        <Typography variant='body1' sx={{ fontSize: isMobile ? '42px' : '48px', color: '#F6E01E', fontWeight: '700', textAlign: isMobile ? 'center' : 'start' }}>
                                            POR SOLO <br style={{ display: isMobile ? 'auto' : 'none' }} />  USD $49,99
                                        </Typography>
                                    </Box>
                                    <Box display='flex' justifyContent={'center'} alignSelf='center' sx={{ display: isMobile ? 'auto' : 'none', mt: 4 }}>
                                        <Box sx={{ border: '3px dashed #FFFFFF', color: 'white', widht: 598, heigh: '48px', p: 1 }}>
                                            <Typography variant='body1' sx={{ fontSize: '13px', fontWeight: '700', textAlign: 'center', lineHeight: '19.5px' }}> ATENCIÓN: SER V.I.P. NO ES PARA INDECISOS<br /> Accedé solo si estás 100% comprometido <br />con tu objetivo.</Typography>
                                        </Box>
                                    </Box>
                                    <Box sx={{ mt: isMobile ? 4 : 10, }} alignSelf={isMobile ? 'center' : 'auto'}>
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
                                                width: isMobile ? '368px' : 'auto',
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
                                        {isMobile
                                            ? < Typography variant='body1' sx={{ fontSize: '13px', color: 'white', fontWeight: '300', textAlign: isMobile ? 'center' : 'start', mt: isMobile ? 3 : 0 }}>
                                                NO NECESITÁS INGRESAR TUS DATOS DE NUEVO, SE CARGARÁ EL MONTO A LA MISMA TARJETA
                                            </Typography>
                                            : <Typography variant='body1' sx={{ fontSize: '13px', color: 'white', fontWeight: '300', textAlign: isMobile ? 'center' : 'start', mt: isMobile ? 3 : 0 }}>
                                                EL MONTO SE CARGARÁ A LA TARJETA YA INGRESADA
                                            </Typography>
                                        }
                                    </Box>
                                    <Box sx={{ mt: 2, mb: 4 }} alignSelf={isMobile ? 'center' : 'auto'}>
                                        <Typography variant='body1' sx={{ fontSize: '13px', color: 'white', fontWeight: '300', textAlign: isMobile ? 'center' : 'start' }}>
                                            No gracias. No quiero las clases en vivo.
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>


                    </Box>
                    <Box display='flex' justifyContent={isMobile ? 'end' : 'center'}>
                        <Box sx={{ background: isMobile ? '#2E47A0' : 'linear-gradient(284.23deg, #351475 300.88%, #2E47A0 554.66%);', width: isMobile ? '57px' : '118px', height: '30px', position: 'relative', bottom: 2 }} />
                    </Box>

                    <Grid container sx={{ my: 4 }}>
                        <Grid item md={4} lg={4} xl={4} sm={12} xs={12} sx={{ my: isMobile ? 3 : 0 }}>
                            <Box display='flex' flexDirection='column' alignItems='space-between' justifyContent='space-between' sx={{ height: '180px', position: 'relative', bottom: 15 }}>
                                <Box display='flex' justifyContent='center' alignItems='start'>
                                    <Image src='/camera.png' width={218} height={160} alt='' />
                                </Box>
                                <Box display='flex' justifyContent='center'>
                                    <Typography variant='body1' sx={{ fontSize: '24px', color: '#380366', fontWeight: '600', textAlign: 'center' }}>Encuentros virtuales</Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item md={4} lg={4} xl={4} sm={12} xs={12} sx={{ my: isMobile ? 3 : 0 }}>
                            <Box display='flex' flexDirection='column' alignItems='space-between' justifyContent='space-between' sx={{ height: '180px' }}>
                                <Box display='flex' justifyContent='center' alignItems='start'>
                                    <Image src='/calendar.png' width={104} height={114} alt='' />
                                </Box>
                                <Box display='flex' justifyContent='center'>
                                    <Typography variant='body1' sx={{ fontSize: '24px', color: '#380366', fontWeight: '600', textAlign: 'center' }}>1 vez por semana</Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item md={4} lg={4} xl={4} sm={12} xs={12} sx={{ my: isMobile ? 3 : 0 }}>
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
                                fontSize: isMobile ? "18px" : "34px",
                                fontWeight: '800', borderRadius: '29px',
                                lineHeight: isMobile ? '26.82px' : 'auto',
                                width: isMobile ? '380px' : '1292px', mt: 4, height: isMobile ? '95px' : '83px',
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
                    <Box display='flex' justifyContent='center' sx={{ my: 4 }}>
                        <span style={{ fontSize: '15px', textAlign: 'center', color: '#380366' }}>No gracias. No quiero las clases en vivo.</span>
                    </Box>
                </>
            </LayoutComponent >

        </>
    )
}

export default Ventadeclases