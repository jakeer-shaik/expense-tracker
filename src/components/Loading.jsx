import { Box,  Container, Typography } from "@mui/material";
import exp2 from "../assets/exp2.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";

const Loading = () => {
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          background: `url(${exp2}) center/cover no-repeat`,
          height: "97vh",
          display: "flex",
          borderRadius:10,
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            background: "rgba(255, 255, 255, 0.7)", 
            padding: "20px",
            borderRadius: "10px",
            textAlign:"center"
          }}
        >
          <Typography
            variant="h2"
            sx={{ background: "transparent", color: "#000" }}
          >
            The Expense Tracker
          </Typography>
        </div>
      </Box>
    </Container>
  );
};

export default Loading;

/*
 const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const placeholderImages = [exp1, exp2, exp3, exp4];

<Container
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          height: "95vh",
          width: "95vw", // Set the width to make sure it fits within the viewport
          position: "relative",
          boxShadow: 5,
        }}
      >
        <Slider {...carouselSettings}>
          {placeholderImages.map((imageUrl, index) => (
            <div
              key={index}
              style={{
                height: "95vh",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <img
                src={imageUrl}
                alt={`Placeholder ${index}`}
                style={{ height:"90vh",objectFit: "cover" }}
              />
            </div>
          ))}
        </Slider>
      </Box>
    </Container>
*/
