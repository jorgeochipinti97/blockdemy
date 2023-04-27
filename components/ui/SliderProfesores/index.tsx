import React, { useState } from 'react'
import { useKeenSlider } from "keen-slider/react"
import { ProfresorCard } from '../ProfesorCard'
import { Typography, Box } from '@mui/material'
import image from 'next/image'
import Image from 'next/image'



export const SliderProfesores = () => {

    const [currentSlide, setCurrentSlide] = React.useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        initial: 0,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel)
        },
        created() {
            setLoaded(true)
        },
    })


    return (
        <div className='navigation-wrapper'>
            <div ref={sliderRef} className="keen-slider">
                <div className="keen-slider__slide" >
                    <Box display='flex' justifyContent='center' >
                        <Box display='flex' flexDirection='column' >

                            <Box

                                sx={{
                                    display: "inline-block",
                                    mx: 1,
                                    borderRadius: '9px',
                                }}
                                display="flex"
                                justifyContent="center"


                            >
                                <Box display="flex" justifyContent="center"  >
                                    <Image src={'/fotos-equipo-tito3.png'} alt='' width={200} height={226} />
                                </Box>
                                <Box display="flex" justifyContent="center" sx={{ pb: 2 }}>
                                    <Box
                                        display="flex"
                                        justifyContent="center"
                                        alignItems="center"
                                        sx={{
                                            boxShadow: "0px 0px 15px 5px #546CE9;",

                                            width: { xs: '200px', sm: '200px', md: 342, lg: 342, xl: 342 },
                                            height: { xs: '60px', sm: '60px', md: 82, lg: 82, xl: 82 },
                                            backgroundColor: "white",
                                            transition: "background-color 0.5s ease-in-out",
                                            fontWeight: "700",
                                        }}
                                    >
                                        <Typography
                                            variant="body1"

                                            sx={{ fontSize: 25, color: "#380366", fontFamily: 'Montserrat', fontWeight: '700' }}
                                        >
                                            LAUTARO
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                            <Box display="flex" justifyContent="center" sx={{}}>
                                <Box display="flex" justifyContent="center" alignItems="center" sx={{ maxWidth: '200px' }}>
                                    <Typography
                                        variant="body1"
                                        sx={{ fontSize: '15px', color: "white", lineHeight: '24.38px', fontFamily: 'Montserrat', fontWeight: '200' }}
                                        textAlign="center"
                                    >
                                        Instructor principal
                                        de la academia.                                    </Typography>
                                </Box>
                            </Box>

                        </Box>
                    </Box>
                </div>
        
                <div className="keen-slider__slide" >
                    <Box display='flex' justifyContent='center' >
                        <Box display='flex' flexDirection='column' >

                            <Box

                                sx={{
                                    display: "inline-block",
                                    mx: 1,
                                    borderRadius: '9px',
                                }}
                                display="flex"
                                justifyContent="center"


                            >
                                <Box display="flex" justifyContent="center"  >
                                    <Image src="/fotos-equipo-ayrton3.png" alt='' width={200} height={226} />
                                </Box>
                                <Box display="flex" justifyContent="center" sx={{ pb: 2 }}>
                                    <Box
                                        display="flex"
                                        justifyContent="center"
                                        alignItems="center"
                                        sx={{
                                            boxShadow: "0px 0px 15px 5px #546CE9;",

                                            width: { xs: '200px', sm: '200px', md: 342, lg: 342, xl: 342 },
                                            height: { xs: '60px', sm: '60px', md: 82, lg: 82, xl: 82 },
                                            backgroundColor: "white",
                                            transition: "background-color 0.5s ease-in-out",
                                            fontWeight: "700",
                                        }}
                                    >
                                        <Typography
                                            variant="body1"

                                            sx={{ fontSize: 25, color: "#380366", fontFamily: 'Montserrat', fontWeight: '700' }}
                                        >
                                            AYRTON
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                            <Box display="flex" justifyContent="center" sx={{}}>
                                <Box display="flex" justifyContent="center" alignItems="center" sx={{ maxWidth: '200px' }}>
                                    <Typography
                                        variant="body1"
                                        sx={{ fontSize: '15px', color: "white", lineHeight: '24.38px', fontFamily: 'Montserrat', fontWeight: '200' }}
                                        textAlign="center"
                                    >
                                        Comunicador y
productor audiovisual.                                   </Typography>
                                </Box>
                            </Box>

                        </Box>
                    </Box>
                </div>
                <div className="keen-slider__slide" >
                    <Box display='flex' justifyContent='center' >
                        <Box display='flex' flexDirection='column' >

                            <Box

                                sx={{
                                    display: "inline-block",
                                    mx: 1,
                                    borderRadius: '9px',
                                }}
                                display="flex"
                                justifyContent="center"


                            >
                                <Box display="flex" justifyContent="center"  >
                                    <Image src="/fotos-equipo-mirco3.png" alt='' width={200} height={226} />
                                </Box>
                                <Box display="flex" justifyContent="center" sx={{ pb: 2 }}>
                                    <Box
                                        display="flex"
                                        justifyContent="center"
                                        alignItems="center"
                                        sx={{
                                            boxShadow: "0px 0px 15px 5px #546CE9;",

                                            width: { xs: '200px', sm: '200px', md: 342, lg: 342, xl: 342 },
                                            height: { xs: '60px', sm: '60px', md: 82, lg: 82, xl: 82 },
                                            backgroundColor: "white",
                                            transition: "background-color 0.5s ease-in-out",
                                            fontWeight: "700",
                                        }}
                                    >
                                        <Typography
                                            variant="body1"

                                            sx={{ fontSize: 25, color: "#380366", fontFamily: 'Montserrat', fontWeight: '700' }}
                                        >
                                            MIRCO
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                            <Box display="flex" justifyContent="center" sx={{}}>
                                <Box display="flex" justifyContent="center" alignItems="center" sx={{ maxWidth: '200px' }}>
                                    <Typography
                                        variant="body1"
                                        sx={{ fontSize: '15px', color: "white", lineHeight: '24.38px', fontFamily: 'Montserrat', fontWeight: '200' }}
                                        textAlign="center"
                                    >
                                        Instructor y comunicador
                                        de la academia                                  </Typography>
                                </Box>
                            </Box>

                        </Box>
                    </Box>
                </div>




            </div>
            {loaded && instanceRef.current && (
                <>
                    <Arrow
                        left
                        onClick={(e: any) =>
                            e.stopPropagation() || instanceRef.current?.prev()
                        }
                        disabled={currentSlide === 0}
                    />

                    <Arrow
                        onClick={(e: any) =>
                            e.stopPropagation() || instanceRef.current?.next()
                        }
                        disabled={
                            currentSlide ===
                            instanceRef.current.track.details.slides.length - 1
                        }
                    />
                </>
            )}
        </div>
    )
}



function Arrow(props: {
    disabled: boolean
    left?: boolean
    onClick: (e: any) => void
}) {
    const disabeld = props.disabled ? " arrow--disabled" : ""
    return (
        <svg
            onClick={props.onClick}
            className={`arrowProfesores ${props.left ? "arrow--left" : "arrow--right"
                } ${disabeld}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            {props.left && (
                <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
            )}
            {!props.left && (
                <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
            )}
        </svg>
    )
}
