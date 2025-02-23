import React from "react";
import { Container, Grid, Box, Typography, Paper } from "@mui/material";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import GroupIcon from "@mui/icons-material/Group";
import EventIcon from "@mui/icons-material/Event";
import { keyframes } from "@mui/system";

// Definicja animacji wejścia (fade in + slide up)
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const featuresSection = [
    {
        title: "Znajdź Wydarzenia",
        description: "Odkryj turnieje i mecze w Twojej okolicy.",
        icon: <EventIcon fontSize="large" />,
    },
    {
        title: "Dołącz do Drużyny",
        description: "Znajdź drużynę i graj regularnie.",
        icon: <GroupIcon fontSize="large" />,
    },
    {
        title: "Organizuj Turnieje",
        description: "Twórz wydarzenia i zapraszaj graczy.",
        icon: <SportsSoccerIcon fontSize="large" />,
    },
];

const FeaturesSection = () => {
    return (
        <Container sx={{ mt: 6 }}>
            <Typography sx={{fontFamily:
                    '"Barlow", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
                fontWeight: 800}} variant="h4" gutterBottom>
                Co oferujemy?
            </Typography>
            <Grid container spacing={4}>
                {featuresSection.map((feature, index) => (
                    <Grid item xs={12} sm={4} key={index}>
                        <Paper
                            elevation={3}
                            sx={{
                                p: 3,
                                textAlign: "center",
                                borderRadius: 2,
                                height: "100%",
                                transition: "transform 0.3s, box-shadow 0.3s",
                                animation: `${fadeInUp} 0.5s ease-out both`,
                                animationDelay: `${index * 0.1}s`,
                                "&:hover": {
                                    transform: "scale(1.03)",
                                    boxShadow: 6,
                                },
                            }}
                        >
                            <Box
                                sx={{
                                    width: 64,
                                    height: 64,
                                    borderRadius: "50%",
                                    background:
                                        "linear-gradient(135deg, rgba(126,87,194,0.8), rgba(233,30,99,0.8))",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    margin: "0 auto",
                                    mb: 2,

                                }}
                            >
                                {feature.icon}
                            </Box>
                            <Typography variant="h6" sx={{ mt: 1, mb: 1, fontFamily:
                                    '"Barlow", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
                                fontWeight: 800, }}>
                                {feature.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                                {feature.description}
                            </Typography>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default FeaturesSection;
