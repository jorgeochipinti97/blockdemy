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
                <Box sx={{ height: isMobile ? '134px' : '257px', background: 'linear-gradient(92.77deg, #2E47A0 14.92%, #380366 90.66%)' }} display='flex' justifyContent='center' alignItems='center'>
                    <Typography variant='subtitle1' sx={{ textAlign: 'center', color: 'white', fontWeight: '800', fontSize: isMobile ? '34px' : '64px' }}>ÚLTIMA OPORTUNIDAD</Typography>
                </Box>
                <Box display='flex' >
                    <Box flex={.06} sx={{ background: 'linear-gradient(272.21deg, #2E47A0 9.12%, #2E47A0 377.67%);', height: '30px', display: isMobile ? 'none ' : 'auto' }} />
                    <Box display='flex' justifyContent='end'>
                        <Box flex={.06} sx={{ background: 'linear-gradient(272.21deg, #2E47A0 9.12%, #2E47A0 377.67%);', height: '30px', }} />
                    </Box>
                    <Box display='flex' justifyContent='space-around' flex={1} flexDirection={isMobile ? 'column' : 'row'}>
                        <Box display='flex' flexDirection='column'>
                            <Box sx={{ mx: 4, mt: 7, mb: 1, color: '#380366', lineHeight: isMobile ? '21.94px' : '29.26px' }}>
                                <Typography variant='body1' sx={{ fontSize: isMobile ? '16px' : '24px', fontWeight: '500', }}>Nuestro compromiso está puesto en cada<br style={{ display: isMobile ? 'none' : 'auto' }} />  alumno, en cada operación, y en cada resultado</Typography>
                            </Box>
                            <Box sx={{ mx: 4, my: 1, color: '#380366', lineHeight: isMobile ? '21.94px' : '29.26px' }}>
                                <Typography variant='body1' sx={{ fontSize: isMobile ? '16px' : '24px', fontWeight: '500', }}>Así logramos que cada miembro se lleve <span style={{ fontWeight: '800' }}> más de<br style={{ display: isMobile ? 'none' : 'auto' }} /> lo que vino a buscar.</span></Typography>
                            </Box>
                            <Box sx={{ mx: 4, my: 1, color: '#380366', lineHeight: isMobile ? '21.94px' : '29.26px' }}>
                                <Typography variant='body1' sx={{ fontSize: isMobile ? '16px' : '24px', fontWeight: '700', }}>Vos no sos la excepción, y queremos darte una<br style={{ display: isMobile ? 'none' : 'auto' }} /> última oportunidad para acceder a la <br style={{ display: isMobile ? 'none' : 'auto' }} />herramienta más poderosa para generar<br style={{ display: isMobile ? 'none' : 'auto' }} /> ingresos que te podemos ofrecer:</Typography>
                            </Box>
                        </Box>
                        <Box>
                            <Box display='flex' justifyContent='center' sx={{ position: 'relative', bottom: 50, display: isMobile ? 'none' : 'auto' }}>
                                <Image src='/lastcall.png' width={isMobile ? 268 : 540} height={isMobile ? 175 : 352} alt='' />
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box display='flex' flexDirection='column' sx={{ width: '100%', my: 3 }}>
                    <Box display='flex' justifyContent='center'>
                        <Box sx={{ width: 'max-content' }}>
                            <Box display='flex' justifyContent='end' sx={{ display: isMobile ? 'none ' : 'auto' }}>
                                <Divider sx={{ my: 1, backgroundColor: '#380366', py: .1, borderRadius: '9px', width: '203.02px' }} />
                            </Box>
                            <Box>
                                <Typography variant='body1' sx={{ fontSize: isMobile ? '28px' : '35px', fontWeight: '800', textAlign: 'center', color: '#380366' }}>NUESTROS <br /> ENCUENTROS EN VIVO</Typography>
                            </Box>
                            <Box sx={{ display: isMobile ? 'none ' : 'auto' }}>
                                <Divider sx={{ my: 1, backgroundColor: '#380366', py: .1, borderRadius: '9px', width: '203.02px' }} />
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box display='flex' justifyContent='center' sx={{ display: isMobile ? 'auto' : 'none', width: '100%' }}>
                    <Box display='flex' justifyContent='center' sx={{}}>
                        <Image src='/lastcall.png' width={268} height={175} alt='' />
                    </Box>
                </Box>
                <Grid container>
                    <Grid item md={6} lg={6} xl={6} justifyContent='center' sx={{width:'100%'}}>
                        <Box display='flex' flexDirection='column' alignItems='center' sx={{ my: 5}}>
                            <Box display='flex' justifyContent='start'  sx={{width:'364px'}}>
                                <Typography variant='body1' sx={{ fontSize: isMobile ? '22px' : '24px', fontWeight: '700', lineHeight: '29.26px', color: '#380366', my: 5, maxWidth: '364px' }}>No desperdicies la oportunidad <br style={{ display: isMobile ? 'auto' : 'none' }} />de alcanzar<br style={{ display: isMobile ? 'none' : 'auto' }} />tu máximo nivel <br style={{ display: isMobile ? 'auto' : 'none' }} />con la experiencia V.I.P.</Typography>
                            </Box>
                            <Box sx={{ display: isMobile ? 'auto' : 'none',width:'364px' }}>
                                <Box sx={{ maxWidth: '364px' }} display='flex' justifyContent='start'>
                                    <Typography variant='body1' sx={{ fontSize: isMobile ? '22px' : '24px', fontWeight: '700', lineHeight: '29.26px', color: '#380366', maxWidth: '364px' }}>¡Nuestros encuentros <br />semanales ya cambiaron la<br /> realidad de más de 100<br /> alumnos!</Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box display='flex' justifyContent='center' sx={{display:isMobile ? 'none' : 'auto'}}>

                            <Box sx={{ height: '545px', backgroundColor: '#380366', width: isMobile ? 'auto' : '553px' }} display='flex' flexDirection='column'>
                                <Box>
                                    <Typography variant='body1' sx={{ fontSize: '20px', fontWeight: '500', color: 'white', textAlign: 'start', ml: 8, mt: 8 }}>PRECIO REGULAR <span style={{ textDecoration: 'line-through' }}>$119,99</span></Typography>
                                </Box>
                                <Box>
                                    <Typography variant='body1' sx={{ fontSize: '20px', fontWeight: '500', color: 'white', textAlign: 'start', ml: 8, }}>PRECIO PROMOCIONAL <span style={{ textDecoration: 'line-through' }}>$49,99</span></Typography>
                                </Box>
                                <Box display='flex' justifyContent='start'>
                                    <Box sx={{ my: 5 }}>
                                        <Typography variant='body1' sx={{ fontSize: '20px', fontWeight: '700', color: 'white', textAlign: 'start', ml: 8, }}>Tu precio para ser miembro V.I.P. <br style={{ display: isMobile ? 'none' : 'auto' }} /> en Block Academy HOY es de...</Typography>
                                    </Box>
                                </Box>
                                <Box display='flex' justifyContent='center'>
                                    <Box sx={{ border: '1px dashed #FFFFFF' }}>
                                        <Typography variant='body1' sx={{ color: '#F6E01E', fontSize: '66px', fontWeight: '800', px: 4 }}>USD $19.99</Typography>
                                    </Box>
                                </Box>
                                <Box display='flex' justifyContent='center'>
                                    <Box sx={{ my: 5 }}>
                                        <Typography variant='body1' sx={{ fontSize: '20px', fontWeight: '700', color: 'white', textAlign: 'center', }}>¿Dónde está puesto TU<br style={{ display: isMobile ? 'none' : 'auto' }} /> compromiso?</Typography>
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
                        <Box display='flex' justifyContent='center' sx={{ mt: 10, display:isMobile ? 'none':'auto' }}>
                            <Typography variant='body1' sx={{ fontSize: '15px', color: '#380366' }}>¡ES LA ÚNICA VEZ QUE VERÁS ESTE BENEFICIO!</Typography>
                        </Box>
                    </Grid>
                    <Grid item md={6} lg={6} xl={6} xs={12} sm={12}>
                        <Box display='flex' justifyContent='center' sx={{ display: isMobile ? 'none' : 'auto' }}>
                            <Typography variant='body1' sx={{ fontSize: '24px', fontWeight: '700', lineHeight: '29.26px', color: '#380366', my: 5 }}>¡Nuestros encuentros semanales ya<br /> cambiaron la realidad de más de 100 alumnos!</Typography>
                        </Box>
                        <Box display='flex' justifyContent='center' >
                            <Box sx={{  backgroundColor: '#380366', width: isMobile ? '383px':'553px' }}>
                                <Box display='flex' flexDirection='column'>
                                    <Box sx={{ mt: isMobile ? 2:4, ml: 4, mb: 2 }}>
                                        <Typography variant='body1' sx={{ fontSize: isMobile ? '18px':'23px', color: 'white', fontWeight: '700' }}>¿Que son los encuentros en vivo? </Typography>
                                    </Box>
                                    <Box sx={{ ml: isMobile ? 2:4 }}>
                                        <Typography variant='body1' sx={{ fontSize: isMobile ? '18px':'23px', color: 'white', fontWeight: '500', lineHeight: '28.04px' }}>Los encuentros de Block Academy son <br style={{display:isMobile?'auto':'none'}}/> la<br style={{ display: isMobile ? 'none' : 'auto' }} /> <span style={{ fontWeight: '800' }}></span>herramienta perfecta para<br style={{display:isMobile?'auto':'none'}}/> potenciar<span /><br style={{ display: isMobile ? 'none' : 'auto' }} /> todo lo que aprendés en tu<br style={{display:isMobile?'auto':'none'}}/> Curso de<br style={{ display: isMobile ? 'none' : 'auto' }} /> Arbitraje Financiero. </Typography>
                                    </Box>
                                    <Box sx={{ ml: isMobile ? 2:4, mt: 2 }}>
                                        <Typography variant='body1' sx={{ fontSize: isMobile ? '18px':'23px', color: 'white', fontWeight: '500', lineHeight: '28.04px' }}> Participando y compartiendo con <br style={{display:isMobile?'auto':'none'}}/> otros<br style={{ display: isMobile ? 'none' : 'auto' }} /> alumnos, <span style={{ fontWeight: '800' }}>mejorá tus <br style={{display:isMobile?'auto':'none'}}/> operaciones y<br style={{ display: isMobile ? 'none' : 'auto' }} /> estrategias de la mano <br style={{display:isMobile?'auto':'none'}}/> del equipo Block.</span> </Typography>
                                    </Box>
                                    <Box sx={{ ml: isMobile ? 4:6, mt: 2 }}>
                                        <Typography variant='body1' sx={{ fontSize: isMobile ? '18px':'23px', color: 'white', fontWeight: '500', lineHeight: '28.04px' }}> <span style={{ fontWeight: '800' }}>·</span> 1 encuentro por semana </Typography>
                                    </Box>
                                    <Box sx={{ ml: isMobile ? 4:6, mt: 1 }}>
                                        <Typography variant='body1' sx={{ fontSize: isMobile ? '18px':'23px', color: 'white', fontWeight: '500', lineHeight: '28.04px' }}> <span style={{ fontWeight: '800' }}>·</span> Clase virtual de al menos 1 hora </Typography>
                                    </Box>
                                    <Box sx={{ ml: isMobile ? 4:6, mt: 1 }}>
                                        <Typography variant='body1' sx={{ fontSize: isMobile ? '18px':'23px', color: 'white', fontWeight: '500', lineHeight: '28.04px' }}> <span style={{ fontWeight: '800' }}>·</span> Respondemos dudas, compartimos<br /> y analizamos estrategias. ¡Además, <br style={{display:isMobile ? 'auto':'none'}}/> les<br style={{ display: isMobile ? 'none' : 'auto' }} /> contamos todas las novedades del<br style={{ display: isMobile ? 'none' : 'auto' }} /> mundo del arbitraje de criptomonedas! </Typography>
                                    </Box>

                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
                <Box display='flex' justifyContent='center' sx={{ my: 5 }}>
                    <Box sx={{ borderRadius: '29px', background: 'linear-gradient(180deg, #332583 0%, #2E47A0 100%);', py: 3, height: isMobile ? 'auto':'268px', width: isMobile ? '384px': '1175px' }}>
                        <Box display='flex' flexDirection='column'>
                            <Typography variant='body1' sx={{ fontSize:isMobile ? '28px': '35px', color: 'white', fontWeight: '800', textAlign: 'center', lineHeight: '42.67px' }}>¿Vas a dejar pasar esta <br style={{display:isMobile ? 'auto':'none'}}/> oportunidad única<br style={{display:isMobile ? 'auto':'none'}}/> de sumarte a los <br style={{display:isMobile ? 'auto':'none'}}/>encuentros EN VIVO de Block Academy?</Typography>
                            <Typography variant='body1' sx={{ fontSize: isMobile ? '18px':'24px', color: 'white', fontWeight: '700', textAlign: 'center', mt: 4 }}>¡Que no te quede una duda sin resolver!</Typography>
                            <Box display='flex' justifyContent='center' sx={{ position: 'relative', top: 35 }}>
                                <Button variant='contained' sx={{
                                    backgroundColor: 'white', color: '#380366', borderRadius: '22px', width: '778px', height: '82px', fontSize: isMobile ? '25px': '34px', fontWeight: '800', boxShadow: '0px 0px 15px 5px #716C75;', ":hover": {
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

                <Box display='flex' justifyContent='center' sx={{ mt: 10, mb: 5 }}>
                    <Typography variant='body1' sx={{ fontSize: '15px', color: '#380366', fontWeight: '500', textAlign: 'center', lineHeight: '42.67px' }}>NO QUIERO MEJORAR MI EXPERIENCIA</Typography>
                </Box>

            </>
        </LayoutComponent>
    )
}

export default OfertaClasesPage