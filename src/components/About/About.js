import { Box, Container, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <Box
      id="about"
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "45vh",
      }}
      points="0,100 50,00, 100,100"
    >
      <Container maxWidth="xl">
        <Typography
          sx={{ color: "primary.main", mx: 2, p: 2, textAlign: "center" }}
          variant="h4"
        >
          All-in-One AI Health Solution
        </Typography>

        <Typography
          sx={{ mx: 2, p: 2, mb: 4, textAlign: "justify" }}
          variant="p"
        >
          Swasthya Samrat is an advanced, AI-driven healthcare system designed to revolutionize the way healthcare is delivered. 
          Acting as your personalized virtual doctor, Swasthya Samrat provides comprehensive medical guidance and support, offering an 
          intelligent, user-centric approach to managing your health. Our innovative platform aims to simplify healthcare, making it more 
          accessible, accurate, and tailored to individual needs.
        <br />
        <br />
          At Swasthya Samrat, we believe that healthcare should be a seamless, proactive part of your daily life. 
          With our cutting-edge AI technology, we empower users to take control of their health by offering a wide range of services 
          that cater to their unique medical requirements. From routine health assessments to advanced medical advice, Swasthya Samrat 
          provides timely and reliable insights, ensuring that every user receives the care they need, when they need it.
         
        </Typography>
      </Container>
    </Box>
  );
};

export default About;