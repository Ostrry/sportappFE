import React from "react";
import { Box, Button, Typography, useTheme } from "@mui/material";

const Banner = ({
                    backgroundImage = "",
                    header = "",
                    subheader = "",
                    buttonText = "",
                    imageSrc = "",
                }) => {
    const theme = useTheme();

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "center",
                justifyContent: "center",
                minHeight: "40vh",
                maxWidth: "1200px",
                mx: "auto",
                // Używamy theme.spacing dla paddingów
                pl: { xs: theme.spacing(3), md: theme.spacing(4) },
                pr: theme.spacing(2),
                position: "relative",
                backgroundImage: `linear-gradient(135deg, rgba(0, 0, 0, 0.07), rgba(0, 0, 0, 0)), url('${backgroundImage}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                color: theme.palette.text.secondary,
                borderRadius: 2,
            }}
        >
            {/* Lewa kolumna: Tekst */}
            <Box
                sx={{
                    flex: 1,
                    textAlign: { xs: "center", md: "left" },
                    pr: { md: theme.spacing(4) },
                    mb: { xs: theme.spacing(3), md: 0 },
                }}
            >
                <Typography
                    component="h1"
                    sx={{
                        m: 0,
                        fontWeight: 800,
                        fontSize: { xs: "1.5rem", sm: "2.25rem", md: "2.625rem", lg: "3rem" },
                        lineHeight: 1.25,
                        mb: 2,
                    }}
                    gutterBottom
                >
                    {header}
                </Typography>
                <Typography variant="h6" gutterBottom sx={{ color: "text.secondary", mb: 3 }}>
                    {subheader}
                </Typography>
                <Box sx={{ textAlign: { xs: "left", md: "left" } }}>
                    <Button variant="contained" color="primary" size="large">
                        {buttonText}
                    </Button>
                </Box>
            </Box>

            {/* Prawa kolumna: Obraz */}
            <Box
                sx={{
                    flex: 1,
                    display: "flex",
                    justifyContent: { xs: "center", md: "flex-end" },
                }}
            >
                <Box
                    component="img"
                    src={imageSrc}
                    alt="Sportowa grafika"
                    sx={{
                        display: { xs: "none", md: "block" },
                        width: { xs: "80%", md: "50%" },
                        maxWidth: 400,
                        height: "auto",
                        borderRadius: 2,
                        boxShadow: 3,
                    }}
                />
            </Box>
        </Box>
    );
};

export default Banner;
