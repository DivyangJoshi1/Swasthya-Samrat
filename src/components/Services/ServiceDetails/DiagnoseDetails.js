import React from "react";
import {
  Box,
  Button,
  Typography,
  Container
} from "@mui/material";

import { HashLink } from "react-router-hash-link";

import HomeIcon from "@mui/icons-material/Home";
// import AddCircleIcon from "@mui/icons-material/AddCircle";

const DiagnoseDetails = () => {

  return (
    <Box
      sx={{
        bgcolor: "#fce4ec",
        color: "primary.main",
        p: 2,
        mb: 2,
        textAlign: "center",
      }}
    >
      <Container maxWidth="xl">
        <Typography sx={{ mt: 2, mb: 2, fontWeight: 600 }} variant="h6">
          Why Choose Our Medical Services
        </Typography>

        <Typography sx={{ mb: 8, fontWeight: 600 }} variant="h5">
          Breakthrough in Comprehensive, Flexible Care Delivery Models
        </Typography>

        <Box sx={{ mb: 5 }}>
          <iframe
            title="AI Chatbot"
            src="https://web-production-f833.up.railway.app/"
            style={{
              width: "100%",
              height: "500px",
              border: "none",
            }}
          />
        </Box>

        <HashLink smooth to="/home#home" className="text-style">
          {" "}
          <Button
            variant="contained"
            color="primary"
            startIcon={<HomeIcon />}
            sx={{ mb: 5, mt: 5 }}
          >
            Back to Home
          </Button>
        </HashLink>
      </Container>
    </Box>
  );
};

export default DiagnoseDetails;
