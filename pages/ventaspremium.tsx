import { LayoutComponent } from '@/components'
import { Box, Typography, useMediaQuery, useTheme, Grid, Divider, Button } from '@mui/material';
import Image from 'next/image';
import React from 'react'

const Ventaspremium = () => {
    const theme = useTheme();

    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (

        <>
            <LayoutComponent title='BlockAcademy | Ventas Premiun' isMobile={isMobile}>
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
                                        <Typography variant='body1' sx={{ fontWeight: '700', fontSize: '57px', color: 'white', lineHeight: '69px' }}>¡No empieces este <br />camino solo!</Typography>
                                        <Box alignSelf='start'>
                                            <Divider sx={{ my: 4, py: .2, width: '178px', backgroundColor: 'white', borderRadius: '9px' }} />
                                        </Box>
                                        <Box >
                                            <Typography variant='body1' sx={{ fontWeight: '500', fontSize: '24px', color: 'white', }}>Está científicamente comprobado que <br /> <span style={{fontWeight:'800'}}> aprendemos mucho más rápido </span> y fijamos aún <br /> más los conocimientos cuando estudiamos y <br /> practicamos <span style={{fontWeight:'800'}}>en comunidad.</span></Typography>
                                        </Box>
                                        <Box sx={{ mt: 3 }}>
                                            <Typography variant='body1' sx={{ fontWeight: '500', fontSize: '24px', color: 'white', }}>Por eso decidimos crear un espacio único <span style={{fontWeight:'800'}}> para <br /> apalancarte </span>y hacer que tu inversión <span style={{fontWeight:'800'}}>rinda 10 </span><br /> veces más</Typography>
                                        </Box>
                                        <Box sx={{ mt: 3 }}>
                                            <Typography variant='body1' sx={{ fontWeight: '500', fontSize: '24px', color: 'white', }}>Recibí <span style={{fontWeight:'800'}}>asesoramiento a diario </span>de nuestros <br /> expertos y <span style={{fontWeight:'800'}}>aumentá tus rendimientos</span> con la <br /> experiencia de toda una comunidad.</Typography>
                                        </Box>
                                        <Typography variant='body1' sx={{ fontWeight: '700', fontSize: '40px', color: 'white', mt: 5, lineHeight: '49px' }}>Solos, una gota de agua. <br /> Juntos, un océano.</Typography>
                                        <Box sx={{ mt: 3 }}>
                                            <Typography variant='body1' sx={{ fontWeight: '700', fontSize: '24px', color: 'white' }}>Conocé y aprendé de las personas que ya <br />están teniendo los resultados que buscás.</Typography>
                                        </Box>
                                        <Box alignSelf='start'>
                                            <Divider sx={{ my: 4, py: .2, width: '178px', backgroundColor: 'white', borderRadius: '9px' }} />
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item md={6} lg={6} xl={6}>
                                <Box display='flex' justifyContent='center' flexDirection='column' alignItems='center'>
                                    <Box >
                                        <Image src='/premiunImage.png' alt='image' width={461} height={412} />
                                    </Box>
                                    <Box>
                                        <Typography variant='body1' sx={{ fontSize: '24px', color: 'white', textAlign: 'center', lineHeight: '34px', fontWeight: '700' }}>
                                            ¡Sumate a la mejor comunidad de <br />arbitraje en Argentina!
                                        </Typography>
                                    </Box>
                                    <Box sx={{ mt: 4 }}>
                                        <Typography variant='body1' sx={{ fontSize: '30px', color: 'white', textAlign: 'center', lineHeight: '34px', fontWeight: '700' }}>
                                            ACCEDÉ HOY Y PARA SIEMPRE <br /> por sólo
                                        </Typography>
                                    </Box>
                                    <Box sx={{ mt: 4 }}>
                                        <Typography variant='body1' sx={{ fontSize: '48px', color: '#F6E01E', fontWeight: '700' }}>
                                            - USD $19,99 -
                                        </Typography>
                                    </Box>
                                    <Box >
                                        <Typography variant='body1' sx={{ fontSize: '20px', color: 'white', fontWeight: '300', textDecoration: 'line-through' }}>
                                            PRECIO REGULAR $199,99
                                        </Typography>
                                    </Box>
                                    <Box sx={{ my: 4 }}>
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
                                            ¡QUIERO EMPEZAR HOY!
                                        </Button>
                                    </Box>
                                    <Box>
                                        <Typography variant='body1' sx={{ fontSize: '13px', color: 'white', fontWeight: '300' }}>
                                            *NO NECESITÁS INGRESAR TUS DATOS DE NUEVO, SE CARGARÁ EL MONTO A LA MISMA TARJETA*
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item md={12} lg={12} xl={12} sx={{ mt: 5 }}>
                                <Box display='flex' justifyContent='center'>
                                    <Box sx={{ border: '3px dashed #FFFFFF', color: 'white', p: 2 }}>
                                        <Typography variant='body1' sx={{ fontSize: '20px', fontWeight: '700' }}> ATENCIÓN: No volverás a tener la oportunidad de acceder a nuestra comunidad una vez hayas abandonado esta página.</Typography>
                                    </Box>
                                </Box>
                                <Box display='flex' justifyContent='center'>
                                    <Typography variant='body1' sx={{ fontSize: '20px', fontWeight: '300', color: 'white', mt: 2 }}> No, gracias, no quiero formar parte de la comunidad premium.</Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box sx={{mt:4}}>
                        <Typography variant='body1' sx={{ fontSize: '40px', color: '#380366', fontWeight: '700', textAlign: 'center' }}>¿Por qué sumarte a nuestra Comunidad Premium?</Typography>
                    </Box>
                    <Box display='flex' justifyContent='center'>
                        <Divider sx={{ width: '809px', background: 'linear-gradient(286.04deg, #380366 38.08%, #2E47A0 83.7%)', py: .3, my: 4, borderRadius: '9px' }} />
                    </Box>
                    <Box display='flex' justifyContent='center'>
                        <Box  sx={{mx:5}}>
                            <Box display='flex' justifyContent='start'>
                                <Image src='/discord.png' width={154} height={154} alt='' />
                            </Box>
                            <Box display='flex' justifyContent='start'>
                                <Typography variant='body1' sx={{ fontSize: '24px', color: '#380366', fontWeight: '600' }}>SERVIDOR EXCLUSIVO</Typography>
                            </Box>
                            <Box display='flex' justifyContent='start'>
                                <Divider sx={{ width: '60px', background: 'linear-gradient(286.04deg, #380366 38.08%, #2E47A0 83.7%)', py: .3, borderRadius: '9px' }} />
                            </Box>
                            <Box sx={{ mt: 2 }}>
                                <Typography variant='body1' sx={{ color: '#716C75', fontSize: '20px', fontWeight: '400' }}>Conocé el equipo detrás <br /> de Block y otros alumnos que <br /> ya están teniendo los <br /> resultados que buscás.</Typography>
                            </Box>
                            <Box sx={{ mt: 2 }}>
                                <Typography variant='body1' sx={{ color: '#716C75', fontSize: '20px', fontWeight: '400' }}>Aprendé con las <br /> experiencias y resultados <br /> obtenidos de toda la <br /> comunidad.</Typography>
                            </Box>

                        </Box>
                        <Box sx={{mx:5}}>
                            <Box display='flex' justifyContent='start' >

                                <Image src='/community.png' width={154} height={154} alt='' />
                            </Box>
                            <Box display='flex' justifyContent='start'>
                                <Typography variant='body1' sx={{ fontSize: '24px', color: '#380366', fontWeight: '600' }}>ESPACIO DE CONSULTA</Typography>
                            </Box>
                            <Box display='flex' justifyContent='start'>
                                <Divider sx={{ width: '60px', background: 'linear-gradient(286.04deg, #380366 38.08%, #2E47A0 83.7%)', py: .3, borderRadius: '9px' }} />
                            </Box>
                            <Box sx={{ mt: 2 }}>
                                <Typography variant='body1' sx={{ color: '#716C75', fontSize: '20px', fontWeight: '400' }}>¿Tenes dudas y no sabes <br /> como avanzar? La <br /> comunidad está para <br /> ayudarte.</Typography>
                            </Box>
                            <Box sx={{ mt: 2 }}>
                                <Typography variant='body1' sx={{ color: '#716C75', fontSize: '20px', fontWeight: '400' }}>Sacate todas las dudas y <br /> lográ rendimientos de <br /> máximo nivel.</Typography>
                            </Box>
                        </Box>
                        <Box sx={{mx:5}}>
                            <Box display='flex' justifyContent='start'>
                                <Image src='/message.png' width={154} height={154} alt='' />
                            </Box>
                            <Box display='flex' justifyContent='start'>
                                <Typography variant='body1' sx={{ fontSize: '24px', color: '#380366', fontWeight: '600' }}>NOVEDADES ACTUALIZADAS</Typography>
                            </Box>
                            <Box display='flex' justifyContent='start'>
                                <Divider sx={{ width: '60px', background: 'linear-gradient(286.04deg, #380366 38.08%, #2E47A0 83.7%)', py: .3, borderRadius: '9px' }} />
                            </Box>
                            <Box sx={{ mt: 2 }}>
                                <Typography variant='body1' sx={{ color: '#716C75', fontSize: '20px', fontWeight: '400' }}>Mantenete al día con  <br /> todas las  <br /> actualizaciones de los  <br /> exchanges y las  <br /> novedades acerca del mundo del  <br /> arbitraje en  <br />criptomonedas. </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box display='flex' justifyContent='center'>

                        <Button
                            // onClick={handleClick}
                            variant="contained"
                            sx={{
                                transition: 'all 0.3s ease-in-out',
                                backgroundColor: "rgb(56, 3, 102)",
                                boxShadow: "0px 0px 15px 5px rgba(84,108,233,.6)",
                                fontSize: isMobile ? "20px" : "36px",
                                fontWeight: '800', borderRadius: '29px',
                                width: '484px', mt: 4,
                                ":hover": {
                                    animation: "1s $titledButton",
                                    boxShadow: "0px 0px 15px 5px rgba(84,108,233,.9)",
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
                            ¡SÍ, QUIERO!
                        </Button>
                    </Box>
                        <Box display='flex' justifyContent='center'>
                            <Typography variant='body1' sx={{ fontSize: '20px', fontWeight: '300',  mt: 2,color:'#380366',mb:4 }}> No, gracias, no quiero formar parte de la comunidad premium.</Typography>
                        </Box>
                </>
            </LayoutComponent>
        </>

    )
}

export default Ventaspremium