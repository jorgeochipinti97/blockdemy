import { LayoutComponent } from '@/components'
import { Box, Typography, useMediaQuery, useTheme, Grid, Divider, Button } from '@mui/material';
import Image from 'next/image';
import React from 'react'
const OfertaPremiumPage = () => {
    const theme = useTheme();

    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <LayoutComponent title='BlockAcademy | Oferta Premium' isMobile={isMobile}>
            <>
                <Box sx={{ height: '399px', background: 'linear-gradient(92.77deg, #2E47A0 14.92%, #380366 90.66%)' }} display='flex' justifyContent='center' alignItems='center' flexDirection='column'>
                    <Box>
                        <Typography variant='subtitle1' sx={{ textAlign: 'center', color: 'white', fontWeight: '800', fontSize: '64px' }}>¡HEY! NO PODEMOS VERTE FALLAR...</Typography>
                    </Box>
                    <Box>
                        <Typography variant='subtitle1' sx={{ textAlign: 'center', color: 'white', fontWeight: '700', fontSize: '27px' }}>Entendemos que la oferta anterior está fuera de tu presupuesto.</Typography>
                    </Box>
                    <Box>
                        <Typography variant='subtitle1' sx={{ textAlign: 'center', color: 'white', fontWeight: '700', fontSize: '27px' }}>Y, al igual que vos, queremos verte conseguir esos resultados que viniste a buscar.</Typography>
                    </Box>
                </Box>
                <Box display='flex'>
                    <Box flex={.1} sx={{ background: 'linear-gradient(272.21deg, #2E47A0 9.12%, #2E47A0 377.67%);', height: '30px' }} />
                    <Box display='flex' justifyContent='space-around' flex={1}>
                        <Box display='flex' flexDirection='column'>
                            <Box sx={{ mx: 4, mt: 7, mb: 1, fontSize: '35px', color: '#380366', lineHeight: '29.26px' }}>
                                <Typography variant='body1' sx={{ fontWeight: '800', fontSize: '35px' }}>DEJANOS AYUDARTE</Typography>
                            </Box>
                            <Box sx={{ mx: 4, my: 1, mb: 1, color: '#380366', lineHeight: '29.26px' }}>
                                <Typography variant='body1' sx={{ fontSize: '24px', fontWeight: '500' }}>Una última oportunidad para que podamos<br /> guiarte en este camino.</Typography>
                            </Box>
                            <Box sx={{ mx: 4, my: 1, color: '#380366', lineHeight: '29.26px' }}>
                                <Typography sx={{ fontWeight: '500', fontSize: '24px' }} variant='body1'>Porque sabemos el <span style={{fontWeight:'800'}}/>IMPACTO POSITIVO</span> que está<br /> teniendo la comunidad, en cada alumno que<br /> llega a nosotros... <span style={{fontWeight:'800'}}/>buscando lo mismo que vos</span></Typography>
                            </Box>
                            <Box sx={{ mx: 4, my: 1, color: '#380366', lineHeight: '29.26px' }}>
                                <Typography sx={{ fontWeight: '500', fontSize: '24px' }} variant='body1'>Encontrá en nuestra comunidad, la libertad<br /> financiera, una nueva fuente de ingresos, o solo<br /> una forma de alcanzar tus objetivos... </Typography>
                            </Box>
                        </Box>
                        <Box>
                            <Box display='flex' justifyContent='center' sx={{ position: 'relative', bottom: 115 }}>
                                <Image src='/cellphone.png' width={476} height={668} alt='' />
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box display='flex' justifyContent='center' sx={{ my: 5 }}>
                    <Box sx={{ borderRadius: '29px', background: 'linear-gradient(180deg, #332583 0%, #2E47A0 100%);', py: 3, width: '1175px' }}>
                        <Box display='flex' flexDirection='column'>
                            <Typography variant='body1' sx={{ fontSize: '35px', color: 'white', fontWeight: '800', textAlign: 'center', lineHeight: '42.67px' }}>SÓLO POR HOY Y PARA VOS: 50% OFF EXTRA</Typography>
                            <Typography variant='body1' sx={{ fontSize: '24px', color: 'white', fontWeight: '700', textAlign: 'center', mt: 4 }}>COMPARTÍ EXPERIENCIAS Y ARBITRÁ JUNTO A<br /> NUESTROS EXPERTOS Y ALUMNOS POR TAN SOLO</Typography>
                            <Typography variant='body1' sx={{ fontSize: '66px', color: '#F6E01E', fontWeight: '800', textAlign: 'center', mt: 4 }}>$9.99 USD</Typography>
                            <Typography variant='body1' sx={{ fontSize: '20px', color: 'white', fontWeight: '500', textAlign: 'center' }}>PRECIO INMEJORABLE</Typography>
                            <Box display='flex' justifyContent='center' sx={{ position: 'relative', top: 55 }}>
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

                <Box display='flex' justifyContent='center' sx={{ mt: 6, mb: 5 }}>
                    <Typography variant='body1' sx={{ fontSize: '13px', color: '#380366', fontWeight: '400', textAlign: 'center', lineHeight: '42.67px' }}>EL MONTO SE CARGARÁ A LA TARJETA YA INGRESADA</Typography>
                </Box>
                <Box display='flex' justifyContent='center' sx={{ mb:5}}>
                    <Typography variant='body1' sx={{ fontSize: '19px', color: '#380366', fontWeight: '500', textAlign: 'center', lineHeight: '42.67px' }}>RECORDÁ QUE NO VOLVERÁS A VER ESTA OFERTA!</Typography>
                </Box>
                <Box display='flex' justifyContent='center' sx={{ mb:5}}>
                    <Typography variant='body1' sx={{ fontSize: '19px', color: '#380366', fontWeight: '700', textAlign: 'center', lineHeight: '42.67px' }}>No, gracias</Typography>
                </Box>
            </>
        </LayoutComponent>
    )
}

export default OfertaPremiumPage