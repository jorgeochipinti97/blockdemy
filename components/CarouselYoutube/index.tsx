import { Card, CardContent, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Carousel from "react-multi-carousel";
import { VideoComponent } from "..";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export const CarouselYoutube = () => {
  return (
    <>
   <Carousel
  additionalTransfrom={0}
  arrows
  autoPlaySpeed={3000}
  centerMode={true}
  className=""
  containerClass="container-with-dots"
  dotListClass=""
  draggable
  focusOnSelect={false}
  infinite
  itemClass=""
  keyBoardControl
  minimumTouchDrag={80}
  pauseOnHover
  renderArrowsWhenDisabled={false}
  renderButtonGroupOutside={false}
  renderDotsOutside={false}
  responsive={{
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 1,
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 1,
      partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 2,
      partialVisibilityGutter: 30
    }
  }}
  rewind={false}
  rewindWithAnimation={false}
  rtl={false}
  shouldResetAutoplay
  showDots={false}
  sliderClass=""
  slidesToSlide={1}
  swipeable
      >
<Card sx={{widht:'20vw'}}>
<Box display='flex' justifyContent='center'>
        <VideoComponent url='https://www.youtube.com/watch?v=8WLFxal_w2g&feature=youtu.be' height_="252px" widthmd="505px"/>
</Box>

</Card>
<Card sx={{widht:'20vw'}}>
<Box display='flex' justifyContent='center'>
        <VideoComponent url='https://youtu.be/aQOWnplIT3c' height_="252px" widthmd="505px"/>
</Box>
</Card>
<Card sx={{widht:'20vw'}}>
<Box display='flex' justifyContent='center'>
        <VideoComponent url='https://youtu.be/t--V1iOdG9c' height_="252px" widthmd="505px"/>

</Box>
</Card>
      </Carousel>
      ;
    </>
  );
};
