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
      <Box sx={{ display: { xs: "block", sm: "block", md: "none" } }}>
        <div data-aos="fade-down">
          <nav style={{ backgroundColor: "white" }}>
            <Box display="flex" sx={{ justifContent: { xs: "center" } }}>
              <Image
                width={450}
                height={150}
                alt=""
                src="/logo450x150.png"
                layout="responsive"
              />
            </Box>
          </nav>
        </div>
      </Box>
      <Box
        sx={{
          display: {
            xs: "none",
            sm: "none",
            md: "block",
            lg: "block",
            xl: "block",
          },
        }}
      >
        <div data-aos="fade-down">
          <nav style={{ backgroundColor: "white" }}>
            <Box display="flex" sx={{ justifContent: { xs: "center" } }}>
              <Image width={450} height={150} alt="" src="/logo450x150.png" />
            </Box>
          </nav>
        </div>
      </Box>
    </>
  );
};
