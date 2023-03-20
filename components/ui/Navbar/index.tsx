import { Box } from "@mui/system";
import Image from "next/image";
import React from "react";

export const NavBar = () => {
  return (
    <>
      <Box sx={{ display: { xs: "block", sm: "block", md: "none" } }}>
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
        <nav style={{ backgroundColor: "white" }}>
          <Box display="flex" sx={{ justifContent: { xs: "center" } }}>
            <Image width={450} height={150} alt="" src="/logo450x150.png" />
          </Box>
        </nav>
      </Box>
    </>
  );
};
