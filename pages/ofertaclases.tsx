import { LayoutComponent } from '@/components'
import { Box, Typography, useMediaQuery, useTheme, Grid, Divider, Button } from '@mui/material';
import Image from 'next/image';
import React from 'react'
const OfertaClasesPage = () => {
    const theme = useTheme();

    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <LayoutComponent title='BlockAcademy | Oferta Clases' isMobile={isMobile}>
            <>
                <Box sx={{ height: '257px', background: 'linear-gradient(92.77deg, #2E47A0 14.92%, #380366 90.66%)' }} display='flex' justifyContent='center' alignItems='center'>
                    <Typography variant='subtitle1' sx={{ textAlign: 'center', color: 'white', fontWeight: '800', fontSize: '64px' }}>ÚLTIMA OPORTUNIDAD</Typography>
                </Box>
                <Box display='flex'>
                    <Box flex={.06} sx={{ background: 'linear-gradient(272.21deg, #2E47A0 9.12%, #2E47A0 377.67%);', height: '30px' }} />
                    <Box display='flex' justifyContent='space-around' flex={1}>
                        <Box display='flex' flexDirection='column'>
                            <Box sx={{ mx: 4, mt: 7, mb: 1,  color: '#380366', lineHeight: '29.26px' }}>
                                <Typography variant='body1' sx={{fontSize: '24px', fontWeight: '500',}}>Nuestro compromiso está puesto en cada<br />  alumno, en cada operación, y en cada resultado</Typography>
                            </Box>
                            <Box sx={{ mx: 4, my: 1, color: '#380366', lineHeight: '29.26px' }}>
                                <Typography variant='body1' sx={{fontSize: '24px', fontWeight: '500',}}>Así logramos que cada miembro se lleve <span style={{fontWeight:'800'}}> más de<br /> lo que vino a buscar.</span></Typography>
                            </Box>
                            <Box sx={{ mx: 4, my: 1,  color: '#380366', lineHeight: '29.26px' }}>
                                <Typography variant='body1' sx={{fontSize: '24px', fontWeight: '500',}}>Vos no sos la excepción, y queremos darte una<br /> última oportunidad para acceder a la <br />herramienta más poderosa para generar<br /> ingresos que te podemos ofrecer:</Typography>
                            </Box>
                        </Box>
                        <Box>
                            <Box display='flex' justifyContent='center' sx={{ position: 'relative', bottom: 50 }}>
                                <Image src='/lastcall.png' width={540} height={352} alt='' />
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box display='flex' flexDirection='column' sx={{ width: '100%' }}>
                    <Box display='flex' justifyContent='center'>
                        <Box sx={{ width: 'max-content' }}>
                            <Box display='flex' justifyContent='end'>
                                <Divider sx={{ my: 1, backgroundColor: '#380366', py: .1, borderRadius: '9px', width: '203.02px' }} />
                            </Box>
                            <Box>
                                <Typography variant='body1' sx={{ fontSize: '35px', fontWeight: '800', textAlign: 'center', color: '#380366' }}>NUESTROS ENCUENTROS EN VIVO</Typography>
                            </Box>
                            <Box>
                                <Divider sx={{ my: 1, backgroundColor: '#380366', py: .1, borderRadius: '9px', width: '203.02px' }} />
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Grid container>
                    <Grid item md={6} lg={6} xl={6}>
                        <Box display='flex' justifyContent='center'>
                            <Typography variant='body1' sx={{ fontSize: '24px', fontWeight: '700', lineHeight: '29.26px', color: '#380366', my: 5 }}>No desperdicies la oportunidad de alcanzar<br /> tu máximo nivel con la experiencia V.I.P.</Typography>
                        </Box>
                        <Box display='flex' justifyContent='center'>

                            <Box sx={{ height: '545px', backgroundColor: '#380366', width: '553px' }} display='flex' flexDirection='column'>
                                <Box>
                                    <Typography variant='body1' sx={{ fontSize: '20px', fontWeight: '500', color: 'white', textAlign: 'start', ml: 8, mt: 8 }}>PRECIO REGULAR <span style={{textDecoration:'line-through'}}>$119,99</span></Typography>
                                </Box>
                                <Box>
                                    <Typography variant='body1' sx={{ fontSize: '20px', fontWeight: '500', color: 'white', textAlign: 'start', ml: 8, }}>PRECIO PROMOCIONAL <span style={{textDecoration:'line-through'}}>$49,99</span></Typography>
                                </Box>
                                <Box display='flex' justifyContent='start'>
                                    <Box sx={{ my: 5 }}>
                                        <Typography variant='body1' sx={{ fontSize: '20px', fontWeight: '700', color: 'white', textAlign: 'start', ml: 8, }}>Tu precio para ser miembro V.I.P. <br /> en Block Academy HOY es de...</Typography>
                                    </Box>
                                </Box>
                                <Box display='flex' justifyContent='center'>
                                    <Box sx={{ border: '1px dashed #FFFFFF' }}>
                                        <Typography variant='body1' sx={{ color: '#F6E01E', fontSize: '66px', fontWeight: '800', px: 4 }}>USD $19.99</Typography>
                                    </Box>
                                </Box>
                                <Box display='flex' justifyContent='center'>
                                    <Box sx={{ my: 5 }}>
                                        <Typography variant='body1' sx={{ fontSize: '20px', fontWeight: '700', color: 'white', textAlign: 'center', }}>¿Dónde está puesto TU<br /> compromiso?</Typography>
                                    </Box>
                                </Box>
                                <Box display='flex' justifyContent='center'>
                                    <Box>
                                        <Button variant='contained' sx={{
                                            backgroundColor: 'white', color: '#380366', borderRadius: '22px', width: '410px', height: '82px', fontSize: '34px', fontWeight: '800', boxShadow: '0px 0px 15px 5px #716C75;', ":hover": {
                                                bgcolor: "white",
                                                boxShadow: '0px 0px 25px 10px #716C75',
                                                transform: 'scale(1.1)'
                                            },
                                        }}>
                                            ACCEDER AHORA
                                        </Button>
                                    </Box>
                                </Box>
                            </Box>

                        </Box>
                        <Box display='flex' justifyContent='center' sx={{ mt: 10 }}>
                            <Typography variant='body1' sx={{ fontSize: '15px', color: '#380366' }}>¡ES LA ÚNICA VEZ QUE VERÁS ESTE BENEFICIO!</Typography>
                        </Box>
                    </Grid>
                    <Grid item md={6} lg={6} xl={6}>
                        <Box display='flex' justifyContent='center'>
                            <Typography variant='body1' sx={{ fontSize: '24px', fontWeight: '700', lineHeight: '29.26px', color: '#380366', my: 5 }}>¡Nuestros encuentros semanales ya<br /> cambiaron la realidad de más de 100 alumnos!</Typography>
                        </Box>
                        <Box display='flex' justifyContent='center'>

                            <Box sx={{ height: '545px', backgroundColor: '#380366', width: '553px' }}>
                                <Box display='flex' flexDirection='column'>
                                    <Box sx={{ mt: 4, ml: 4, mb: 2 }}>
                                        <Typography variant='body1' sx={{ fontSize: '23px', color: 'white', fontWeight: '700' }}>¿Que son los encuentros en vivo? </Typography>
                                    </Box>
                                    <Box sx={{ ml: 4 }}>
                                        <Typography variant='body1' sx={{ fontSize: '23px', color: 'white', fontWeight: '500', lineHeight: '28.04px' }}>Los encuentros de Block Academy son la<br /> <span style={{fontWeight:'800'}}></span>herramienta perfecta para potenciar<span/><br /> todo lo que aprendés en tu Curso de<br /> Arbitraje Financiero. </Typography>
                                    </Box>
                                    <Box sx={{ ml: 4, mt: 2 }}>
                                        <Typography variant='body1' sx={{ fontSize: '23px', color: 'white', fontWeight: '500', lineHeight: '28.04px' }}> Participando y compartiendo con otros<br /> alumnos, <span style={{fontWeight:'800'}}>mejorá tus operaciones y<br /> estrategias de la mano del equipo Block.</span> </Typography>
                                    </Box>
                                    <Box sx={{ ml: 6, mt: 2 }}>
                                        <Typography variant='body1' sx={{ fontSize: '23px', color: 'white', fontWeight: '500', lineHeight: '28.04px' }}> <span style={{ fontWeight: '800' }}>·</span> 1 encuentro por semana </Typography>
                                    </Box>
                                    <Box sx={{ ml: 6, mt: 1 }}>
                                        <Typography variant='body1' sx={{ fontSize: '23px', color: 'white', fontWeight: '500', lineHeight: '28.04px' }}> <span style={{ fontWeight: '800' }}>·</span> Clase virtual de al menos 1 hora </Typography>
                                    </Box>
                                    <Box sx={{ ml: 6, mt: 1 }}>
                                        <Typography variant='body1' sx={{ fontSize: '23px', color: 'white', fontWeight: '500', lineHeight: '28.04px' }}> <span style={{ fontWeight: '800' }}>·</span> Respondemos dudas, compartimos<br /> y analizamos estrategias. ¡Además, les<br /> contamos todas las novedades del<br /> mundo del arbitraje de criptomonedas! </Typography>
                                    </Box>

                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
                <Box display='flex' justifyContent='center' sx={{ my: 5 }}>
                    <Box sx={{ borderRadius: '29px', background: 'linear-gradient(180deg, #332583 0%, #2E47A0 100%);', py: 3, height: '268px' ,width:'1175px'}}>
                        <Box display='flex' flexDirection='column'>
                            <Typography variant='body1' sx={{ fontSize: '35px', color: 'white', fontWeight: '800', textAlign: 'center', lineHeight: '42.67px' }}>¿Vas a dejar pasar esta oportunidad única de sumarte a los encuentros EN VIVO de Block Academy?</Typography>
                            <Typography variant='body1' sx={{ fontSize: '24px', color: 'white', fontWeight: '700', textAlign: 'center', mt: 4 }}>¡Que no te quede una duda sin resolver!</Typography>
                            <Box display='flex' justifyContent='center' sx={{ position: 'relative', top: 35 }}>
                                <Button variant='contained' sx={{
                                    backgroundColor: 'white', color: '#380366', borderRadius: '22px', width: '778px', height: '82px', fontSize: '34px', fontWeight: '800', boxShadow: '0px 0px 15px 5px #716C75;', ":hover": {
                                        bgcolor: "white",
                                        boxShadow: '0px 0px 25px 10px #716C75',
                                        transform: 'scale(1.1)'
                                    },
                                }}>
                                    Agregar a mi compra por USD $19.99
                                </Button>
                            </Box>

                        </Box>
                    </Box>
                </Box>

                <Box display='flex' justifyContent='center' sx={{ mt:10,mb:5 }}>
                    <Typography variant='body1' sx={{ fontSize: '15px', color: '#380366', fontWeight: '500', textAlign: 'center', lineHeight: '42.67px' }}>NO QUIERO MEJORAR MI EXPERIENCIA</Typography>
                </Box>

            </>
        </LayoutComponent>
    )
}

export default OfertaClasesPage