
import { Box } from "@mui/system";
import { VideoComponent } from "..";
import Marquee from "react-fast-marquee";






export const CarouselYoutube = () => {

  return (

    <>
      <Marquee
      pauseOnClick
pauseOnHover
speed={50}
      >
        <Box display='flex' justifyContent='center'
       sx={{mx:2}}>
          <VideoComponent url='https://www.youtube.com/watch?v=8WLFxal_w2g&feature=youtu.be' height_="252px" widthmd="505px" />
        </Box>
        <Box display='flex' justifyContent='center'
       sx={{mx:2}}>
       <VideoComponent
            url='https://youtu.be/aQOWnplIT3c' height_="252px" widthmd="505px" />
        </Box>
        <Box display='flex' justifyContent='center'
       sx={{mx:2}}>
       <VideoComponent url='https://youtu.be/t--V1iOdG9c' height_="252px" widthmd="505px" />
        </Box>
      </Marquee>





    </>
  )
}  