import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import HeroBannerImage from "../assets/images/banner.png";
import { Block } from "@mui/icons-material";

const Hero = () => {
  return (
    <Box
      sx={{
        // mt:{ lg : "212px",xs:"70px"},
        mt: { lg: "50px", xs: "50px" },
        ml: { sm: "50px" },
      }}
      position="relative"
      p="20px"
    >
      <Typography color="#ff2625" fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography>

      <Typography
        fontWeight="700"
        sx={{ fontSize: { lg: "40px", xs: "35px" } }}
        mb="20px"
        mt="20px"
      >
        Sweat, Smile <br /> and Repeat
      </Typography>

      <Typography fontSize="22px" mb={4}>
        Checkout the most effective exercises
      </Typography>

      <Button
        variant="contained"
        color="error"
        href="#exercises"
        sx={{ backgroundColor: "#ff2625", padding: "8px" }}
      >
        Explore Exercises
      </Button>

      <Typography
        fontWeight="900"
        color="#ff2625"
        sx={{
          opacity: 0.3,
          display: { lg: "block", xs: "none" },
        }}
        fontSize="180px" marginTop="-50px" className="opacityexercise"
      >
        Exercise
      </Typography>

      <img src={HeroBannerImage} alt="Banner" className="hero-banner-img" />
    </Box>
  );
};

export default Hero;
