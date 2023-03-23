import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
useEffect(()=>{
  AOS.init({
    duration: 700,
    offset: 100,
    easing: 'ease-in-out',
    delay: 500
  });

},[])

  return <Component {...pageProps} />
}
