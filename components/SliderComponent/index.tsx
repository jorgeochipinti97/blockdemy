import React, { useState } from 'react'
import { useKeenSlider } from "keen-slider/react"
import { ContentSliderCard } from '../ui'



export const SliderComponent = () => {

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
                    <ContentSliderCard body="Introducción al arbitraje"
                        image="/icon120x120-1.png" />
                </div>
                <div className="keen-slider__slide" >
                    <ContentSliderCard
                        body="Exchanges por dentro"
                        image="/icon120x120-2.png"
                    />
                </div>
                <div className="keen-slider__slide" >
                    <ContentSliderCard
                        body="Cómo operar en Binance P2P"
                        image="/icon120x120-3.png"
                    />
                </div>
                <div className="keen-slider__slide" >
                    <ContentSliderCard
                        body="Herramientas para conocer rentabilidad"
                        image="/icon120x120-4.png"
                    />
   
                </div>
                <div className="keen-slider__slide" >
                <ContentSliderCard
                body="Estrategias Pro para obtener la mayor rentabilidad y su explicación paso a paso"
                image="/icon120x120-5.png"
              />
   
                </div>
                <div className="keen-slider__slide" >
  
                    <ContentSliderCard
                        body="Arbitrajes: Operaciones en tiempo real con resultados a la vista"
                        image="/icon120x120-6.png"
                    />
                </div>
                <div className="keen-slider__slide" >
  
                <ContentSliderCard
                        body="Información contable para que conozcas todas las cuestiones impositivas"
                        image="/icon120x120-7.png"
                    />
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
            className={`arrow ${props.left ? "arrow--left" : "arrow--right"
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
