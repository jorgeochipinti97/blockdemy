import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

import 'keen-slider/keen-slider.min.css'
import { lightTheme } from '@/utils';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';


export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 500,
      delay: 200,
      easing: 'ease-in-out',
      mirror: true,
      once: false

    });

  }, [])

  return(
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
