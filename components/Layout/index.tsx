import Head from 'next/head'
import React, { FC } from 'react'
import { FooterComponent, NavBar } from '../ui'


type Props = {
    title: string,
    children: JSX.Element,
    isMobile: boolean
};


export const LayoutComponent: FC<Props> = ({ children, isMobile, title }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>

            <NavBar isMobile={isMobile} />
            {children}
            <FooterComponent isMobile={isMobile} />
        </>
    )
}
