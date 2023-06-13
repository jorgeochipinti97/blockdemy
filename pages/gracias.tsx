import { LayoutComponent } from '@/components'
import { Box, Typography, useMediaQuery, useTheme, Grid, Divider, Button } from '@mui/material';
import Image from 'next/image';
import React from 'react'
import { useEffect, useRef } from 'react';
import { Bounce, Elastic, gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

const Gracias = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    gsap.registerPlugin(ScrollTrigger);
    const elementRef = useRef(null);
    const [ref] = useKeenSlider<HTMLDivElement>()

    useEffect(() => {
        const element = elementRef.current;

        gsap.to(element, {
            xPercent: window.innerWidth < 500 ? '+=30' : '+=140',
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
                        <Box sx={{ width: isMobile ? '57px' : '118px', height: '30px', background: isMobile ? '#380366' : ' linear-gradient(272.21deg, #332482 9.12%, #2E47A0 377.67%);' }} />
                    </Box>
                    <Box ref={ref} className="keen-slider" sx={{ background: 'linear-gradient(92.77deg, #2E47A0 14.92%, #380366 90.66%);' }}>

                        <Box className="keen-slider__slide" sx={{ height: '614px' }}>
                            <Typography variant='body1' sx={{ fontSize: '25px', fontWeight: '800', color: 'white', textAlign: 'center', my: 4 }}>¿Cómo seguimos desde acá?</Typography>

                            <Box sx={{ my: 8 }} display='flex' justifyContent='center' >
                                <Box display='flex' flexDirection='column'>
                                    <Box display='flex' justifyContent='start' sx={{ }}>
                                        <Image src='/access.png' alt='' width={133} height={97} />
                                    </Box>
                                    <Box sx={{ textAlign: 'start', position: 'relative', bottom: 30, ml: 6 }}>
                                        <Typography variant='body1' sx={{ fontSize: '18px', color: 'white', fontWeight: '800' }}>Tus accesos</Typography>
                                    </Box>
                                    <Box sx={{ textAlign: 'start',  }}>
                                        <Typography variant='body1' sx={{ fontSize: '18px', color: 'white', fontWeight: '500', lineHeight: '26.82px' }}><span style={{ fontWeight: '800' }}>Revisá la casilla de correo que<br /> ingresaste alhacer tu pago.</span> Ahí vas<br /> a recibir un correoelectrónico con el<br /> acceso a tu compra.</Typography>
                                    </Box>
                                    <Box sx={{ textAlign: 'start', }}>
                                        <Typography variant='body1' sx={{ fontSize: '18px', color: 'white', fontWeight: '500', lineHeight: '26.82px', mt: 4 }}>Tené en cuenta que, si pagaste por<br /> más de un acceso (al Curso de<br /> Arbitraje Financiero, laMasterclass,<br /> nuestra Comunidad Premium, o los<br /> Encuentros EN VIVO), ¡vas a recibir<br /> un correo por cada uno!</Typography>
                                    </Box>
                                </Box>
                            </Box>
                            </Box>
                        <Box className="keen-slider__slide" sx={{ height: '614px', display:isMobile?  'auto':'none' }}>
                            <Box sx={{ my: 8,mx:2 }} display='flex' justifyContent='center' >
                                <Box display='flex' flexDirection='column'>
                                    <Box display='flex' justifyContent='start' >
                                        <Image src='/contact.png' alt='' width={101} height={96} />
                                    </Box>
                                    <Box sx={{ textAlign: 'start', mt: 1 }}>
                                        <Typography variant='body1' sx={{ fontSize: '22px', color: 'white', fontWeight: '800' }}>Contacto</Typography>
                                    </Box>
                                    <Box sx={{ textAlign: 'start', mt: 4 }}>
                                        <Typography variant='body1' sx={{ fontSize: '16px', color: 'white', fontWeight: '700', lineHeight: '26.82px' }}>¿Tenés alguna duda y querés<br /> contactarnos?</Typography>
                                    </Box>
                                    <Box sx={{ textAlign: 'start', mt: 4 }}>
                                        <Typography variant='body1' sx={{ fontSize: '16px', color: 'white', fontWeight: '500', lineHeight: '26.82px' }}>Podés enviarnos un e-mail a<br /> alumnos@blockacademy-argentina.com</Typography>
                                    </Box>
                                    <Box sx={{ textAlign: 'start', mt: 4 }}>
                                        <Typography variant='body1' sx={{ fontSize: '16px', color: 'white', fontWeight: '500', lineHeight: '26.82px' }}>¡Te respondemos tan pronto como<br /> podamos!</Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>

                    </Box>
                    <Box sx={{ height: '806px', background: 'linear-gradient(92.77deg, #2E47A0 14.92%, #380366 90.66%);', display: isMobile ? 'none' : 'auto' }}>
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
                    <Box display='flex' justifyContent={isMobile ? 'start' : 'center'} >
                        <Box sx={{ position: 'relative', bottom: 2, width: isMobile ? '57px' : '118px', height: '30px', background: isMobile ? '#2E47A0' : ' linear-gradient(272.21deg, #332482 9.12%, #2E47A0 377.67%);' }} />
                    </Box>

                    <Box sx={{ my: 5 }} display='flex' flexDirection='column'>
                        <Box>
                            <Typography variant='body1' sx={{ fontWeight: '800', color: '#380366', textAlign: isMobile ? 'start' : 'center', ml: isMobile ? 2 : 0, fontSize: '40px', }}>¡Felicidades!</Typography>
                        </Box>
                        <Box>
                            <Typography variant='body1' sx={{ fontWeight: isMobile ? '500' : '800', color: '#380366', textAlign: isMobile ? 'start' : 'center', ml: isMobile ? 2 : 0, fontSize: isMobile ? '25px' : '40px' }}>Este es el primer escalon <br style={{ display: isMobile ? 'auto' : 'none' }} /> para llegar a donde<br style={{ display: isMobile ? 'auto' : 'none' }} /> queres estar</Typography>
                        </Box>
                        <Box sx={{ my: 5 }}>
                            <Typography variant='body1' sx={{ fontWeight: '500', color: '#380366', textAlign: isMobile ? 'start' : 'center', ml: isMobile ? 2 : 0, fontSize: '29px' }}>¡Nos vemos pronto!</Typography>
                        </Box>

                    </Box>
                </>
            </LayoutComponent >

        </>
    )
}

export default Gracias