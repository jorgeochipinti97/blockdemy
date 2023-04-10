import { Box } from "@mui/system";
import Head from "next/head";
import Image from "next/image";
import React from "react";

export const NavBar = () => {
  return (
    <>
      <Head>
        <title>Blockdemy</title>
      </Head>

      <Box>
        <div data-aos="fade-down">
          <nav style={{ backgroundColor: "white" }} className='glow-div'>
            <Box
              display="flex"
              sx={{
                justifContent: {
                  xs: "center",
                  glow: {
                    content: '""',
                    position: "absolute",
                    zIndex: -1,
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    filter: "blur(20px)",
                    opacity: 0,
                    transition: "opacity 0.3s",
                  },
                  glowActive: {
                    opacity: 1,
                  },
                },
              }}
            >
              <Image width={371} height={124} alt="" src="/logo450x150.png" />
            </Box>
          </nav>
        </div>
      </Box>
    </>
  );
};
