import { Box } from "@mui/system";
import Head from "next/head";
import Image from "next/image";
import React from "react";

interface Props {
  isMobile: boolean
}


export const NavBar = ({ isMobile }: Props) => {
  return (
    <>
      <Head>
        <title>Blockdemy</title>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>

      <Box>

        <nav style={{ backgroundColor: "white" }} >
          <Box
            display="flex"
            sx={{
              justifContent: {
                xs: "center",
              },
            }}
          >
            <Image width={isMobile ? 371 : 371} height={isMobile ? 124 : 124} alt="" src="/logo450x150.png" />
          </Box>
        </nav>

      </Box>
    </>
  );
};
