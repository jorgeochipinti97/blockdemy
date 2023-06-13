import { LayoutComponent } from '@/components'
import { Box, Typography, useMediaQuery, useTheme, Grid, Divider, Button } from '@mui/material';
import Image from 'next/image';
import React from 'react'
import { useEffect, useRef } from 'react';
import { Bounce, Elastic, gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const Gracias = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    gsap.registerPlugin(ScrollTrigger);
    const elementRef = useRef(null);

    useEffect(() => {
        const element = elementRef.current;

        gsap.to(element, {
            xPercent: isMobile ? '+=2' : '+=140',
            duration: 2,
            ease: Bounce.easeOut
        })
    }, []);
    return (
        <>
            <LayoutComponent title='BlockAcademy | Gracias' isMobile={isMobile}>
                <>
                    <Box>
                        <Typography variant='h1' sx={{ textAlign: isMobile ? 'start' : 'center', ml: isMobile ? 2 : 0, fontSize: { xs: '34px', sm: '34px', md: '64px', lg: '64px', xl: '64px' }, color: '#380366', fontWeight: '800' }} >¡Gracias por elegir Block Academy!</Typography>
                    </Box>
                    <Box>
                        <Typography variant='body1' sx={{ textAlign: 'center', fontSize: '33px', color: '#380366', fontWeight: '700', display: isMobile ? 'none' : 'auto' }}>Tu comunidad de arbitraje financiero en Argentina</Typography>
                    </Box>
                    <Grid container sx={{ my: 4, overflow: 'hidden' }}>
                        <Grid item md={6} lg={6} xl={6} sm={4} xs={4} >
                            <Box display='flex' justifyContent={'start'} sx={{ height: '100%', position: isMobile ? 'auto' : 'absolute' }} >
                                <Box sx={{ height: isMobile ? 'auto' : '200px' }} ref={elementRef}>
                                    <Image src='/cart.png' width={isMobile ? 109 : 212} height={isMobile ? 101 : 197} alt='cart' />
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item md={6} lg={6} xl={6} sm={8} xs={8} sx={{ display: isMobile ? 'auto' : 'none' }}>
                            <Box display='flex' justifyContent='center' sx={{ height: '100%', position: isMobile ? 'auto' : 'absolute' }} alignItems='center'>
                                <Box sx={{ height: isMobile ? 'auto' : '200px' }}>
                                    <Typography variant='h1' sx={{ textAlign: 'start', fontSize: { xs: '20px', sm: '20px', md: '64px', lg: '64px', xl: '64px' }, color: '#380366', fontWeight: '800' }} >Tu comunidad de<br /> arbitraje financiero <br />en Argentina</Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item md={6} lg={6} xl={6} sm={12} xs={12}>
                            <Box sx={{ height: '100%' }} display='flex' flexDirection='column' justifyContent='center'>
                                <Box display='flex' justifyContent={isMobile ? 'center' : 'start'} sx={{ mt: 4 }} >
                                    <Typography variant='body1' sx={{ width: isMobile ? '344px' : 'auto', textAlign: 'start', fontSize: isMobile ? '18px' : '24px', lineheight: '29.26px', color: '#380366', fontWeight: '500' }}>Por favor, verificá tu casilla de correo <br style={{ display: isMobile ? 'auto' : 'none' }} /> electronico.  <br style={{ display: isMobile ? 'none' : 'auto' }} /> ¡En los próximos minutos <br style={{ display: isMobile ? 'auto' : 'none' }} />recibirás un correo con<br style={{ display: isMobile ? 'none' : 'auto' }} /> toda la<br style={{ display: isMobile ? 'auto' : 'none' }} /> información para comenzar cuanto<br style={{ display: isMobile ? 'auto' : 'none' }} /> antes!</Typography>
                                </Box>
                                <Box display='flex' justifyContent={isMobile ? 'center' : 'start'} sx={{ mt: 2 }}>
                                    <Typography variant='body1' sx={{ width: isMobile ? '344px' : 'auto', textAlign: 'start', fontSize: isMobile ? '18px' : '24px', lineheight: '29.26px', color: '#380366', fontWeight: '700' }}>No te olvides de revisar la carpeta de spam.</Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                    <Box display='flex' justifyContent={isMobile ? 'end' : 'center'}>
                        <Box sx={{ width: isMobile ? '57px' : '118px', height: '30px', background: ' linear-gradient(272.21deg, #332482 9.12%, #2E47A0 377.67%);' }} />
                    </Box>

                    <Box sx={{ height: '806px', background: 'linear-gradient(92.77deg, #2E47A0 14.92%, #380366 90.66%);' }}>
                        <Grid container>
                            <Grid item md={6} lg={6} xl={6} >
                                <Box sx={{ my: 8, ml: 5 }} display='flex' justifyContent='start' >
                                    <Box display='flex' flexDirection='column'>
                                        <Typography variant='body1' sx={{ fontSize: '36px', fontWeight: '800', color: 'white', textAlign: 'center' }}>¿Cómo seguimos desde acá?</Typography>
                                        <Box display='flex' justifyContent='start'>
                                            <Divider sx={{ my: 2, py: .2, borderRadius: '9px', backgroundColor: 'white', width: '109px' }} />
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item md={6} lg={6} xl={6} >
                                <Box sx={{ my: 8 }} display='flex' justifyContent='start' >
                                    <Box display='flex' flexDirection='column'>
                                        <Box display='flex' justifyContent='start' sx={{ ml: 5 }}>
                                            <Image src='/access.png' alt='' width={222} height={162} />
                                        </Box>
                                        <Box sx={{ textAlign: 'start', position: 'relative', bottom: 40, ml: 18 }}>
                                            <Typography variant='body1' sx={{ fontSize: '24px', color: 'white', fontWeight: '800' }}>Tus accesos</Typography>
                                        </Box>
                                        <Box sx={{ textAlign: 'start', ml: 5 }}>
                                            <Typography variant='body1' sx={{ fontSize: '22px', color: 'white', fontWeight: '500', lineHeight: '26.82px' }}><span style={{ fontWeight: '800' }}>Revisá la casilla de correo que ingresaste al<br /> hacer tu pago.</span> Ahí vas a recibir un correo<br /> electrónico con el acceso a tu compra.</Typography>
                                        </Box>
                                        <Box sx={{ textAlign: 'start', ml: 5 }}>
                                            <Typography variant='body1' sx={{ fontSize: '22px', color: 'white', fontWeight: '500', lineHeight: '26.82px', mt: 4 }}>Tené en cuenta que, si pagaste por más de<br /> un acceso (al Curso de Arbitraje Financiero, la<br /> Masterclass, nuestra Comunidad Premium, o<br /> los Encuentros EN VIVO), ¡vas a recibir un<br /> correo por cada uno!</Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item md={6} lg={6} xl={6} >
                                <Box sx={{ my: 8 }} display='flex' justifyContent='start' >
                                    <Box display='flex' flexDirection='column'>
                                        <Box display='flex' justifyContent='start' >
                                            <Image src='/contact.png' alt='' width={141} height={135} />
                                        </Box>
                                        <Box sx={{ textAlign: 'start', mt: 1 }}>
                                            <Typography variant='body1' sx={{ fontSize: '24px', color: 'white', fontWeight: '800' }}>Contacto</Typography>
                                        </Box>
                                        <Box sx={{ textAlign: 'start', mt: 4 }}>
                                            <Typography variant='body1' sx={{ fontSize: '22px', color: 'white', fontWeight: '700', lineHeight: '26.82px' }}>¿Tenés alguna duda y querés contactarnos?</Typography>
                                        </Box>
                                        <Box sx={{ textAlign: 'start', mt: 4 }}>
                                            <Typography variant='body1' sx={{ fontSize: '22px', color: 'white', fontWeight: '500', lineHeight: '26.82px' }}>Podés enviarnos un e-mail a alumnos@blockacademy-argentina.com</Typography>
                                        </Box>
                                        <Box sx={{ textAlign: 'start', mt: 4 }}>
                                            <Typography variant='body1' sx={{ fontSize: '22px', color: 'white', fontWeight: '500', lineHeight: '26.82px' }}>¡Te respondemos tan pronto como podamos!</Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box display='flex' justifyContent='center'>
                        <Box sx={{ width: '118px', height: '30px', background: ' linear-gradient(272.21deg, #332482 9.12%, #2E47A0 377.67%);' }} />
                    </Box>

                    <Box sx={{ my: 5 }} display='flex' flexDirection='column'>
                        <Box>
                            <Typography variant='body1' sx={{ fontWeight: '800', color: '#380366', textAlign: 'center', fontSize: '40px' }}>¡Felicidades!</Typography>
                        </Box>
                        <Box>
                            <Typography variant='body1' sx={{ fontWeight: '800', color: '#380366', textAlign: 'center', fontSize: '40px' }}>Este es el primer escalon para llegar a donde queres estar</Typography>
                        </Box>
                        <Box sx={{ my: 5 }}>
                            <Typography variant='body1' sx={{ fontWeight: '500', color: '#380366', textAlign: 'center', fontSize: '29px' }}>¡Nos vemos pronto!</Typography>
                        </Box>

                    </Box>
                </>
            </LayoutComponent >

        </>
    )
}

export default Gracias