import React, { useState } from 'react'
import { useKeenSlider } from "keen-slider/react"
import { ProfresorCard } from '../ProfesorCard'
import { Typography, Box, IconButton } from '@mui/material'
import image from 'next/image'
import Image from 'next/image'
import { VideoComponent } from '@/components'

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export const SliderAlumnos = () => {

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
            <Box display='flex'>
                {loaded && instanceRef.current && (

                    <Box display='flex' flexDirection='column' justifyContent='center' >
                        <IconButton
                            onClick={(e: any) =>
                                e.stopPropagation() || instanceRef.current?.prev()
                            }

                        >
                            <ArrowBackIcon sx={{ color: currentSlide == 0 ? 'gray' : 'black', fontSize: '46px' }} />
                        </IconButton>
                    </Box>
                )}
                <div ref={sliderRef} className="keen-slider">
                    <div className="keen-slider__slide" >
                        <Box display='flex' justifyContent='center' >
                            <VideoComponent
                                url="https://www.youtube.com/watch?v=8WLFxal_w2g&feature=youtu.be"
                                height_={'110'}
                                widthmd={'250px'}
                            />
                        </Box>
                    </div>
                    <div className="keen-slider__slide" >
                        <Box display='flex' justifyContent='center' >
                            <VideoComponent
                                url='https://youtu.be/aQOWnplIT3c'
                                height_={'110'}
                                widthmd={'250px'}
                            />
                        </Box>
                    </div>
                    <div className="keen-slider__slide" >
                        <Box display='flex' justifyContent='center' >
                            <VideoComponent
                                url='https://youtu.be/t--V1iOdG9c'
                                height_={'110'}
                                widthmd={'250px'}
                            />
                        </Box>
                    </div>

                </div>
                <Box display='flex' flexDirection='column' justifyContent='center' sx={{ position: 'relative' }}>
                    <IconButton
                        onClick={(e: any) =>
                            e.stopPropagation() || instanceRef.current?.next()
                        }
                    >
                        <ArrowForwardIcon sx={{
                            color: instanceRef.current && currentSlide ===
                                instanceRef.current.track.details.slides.length - 1 ? 'gray' : 'black', fontSize: '46px'
                        }} />
                    </IconButton>
                </Box>
            </Box>
            {loaded && instanceRef.current && (
                <>
                    {/* <Arrow
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
                    /> */}
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
            className={`arrowAlumnos ${props.left ? "arrow--left" : "arrow--right"
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
