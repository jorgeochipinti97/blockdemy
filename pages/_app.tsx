import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

import 'keen-slider/keen-slider.min.css'


export default function App({ Component, pageProps }: AppProps) {
useEffect(()=>{
  AOS.init({
    duration: 1000,
    delay: 200,
    easing: 'ease-in-out',
    mirror: true,
    once:false

  });

},[])

  return <Component {...pageProps} />
}
