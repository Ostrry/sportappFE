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
                alignItems: "anchor-center",
                justifyContent: "anchor-center",
                minHeight: "40vh",
                maxWidth: "1200px",
                margin: "0 auto",
                // Ustalamy paddingi z lewej i prawej strony
                pl: { xs: "calc(3 * var(--spacing))", md: "calc(4 * var(--spacing))" },
                pr: "calc(2 * var(--spacing))",
                position: "relative",
                // Gradient tła + obrazek
                backgroundImage: `linear-gradient(135deg, rgba(0 0 0 / 7%), rgba(0 0 0 / 0%)), url('${backgroundImage}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                color: "rgba(26,32,60,0.85)",
                borderRadius: 2,
            }}
        >
            {/* LEWA KOLUMNA: TEKST */}
            <Box
                sx={{
                    flex: 1,
                    textAlign: { xs: "center", md: "left" },
                    pr: { md: 4 },
                    mb: { xs: 3, md: 0 },
                }}
            >
                <Typography
                    component="h1"
                    sx={{
                        margin: 0,
                        fontFamily:
                            '"Barlow", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
                        fontWeight: 800,
                        fontSize: "1.5rem",
                        lineHeight: 1.25,
                        [theme.breakpoints.up("sm")]: { fontSize: "2.25rem" },
                        [theme.breakpoints.up("md")]: { fontSize: "2.625rem" },
                        [theme.breakpoints.up("lg")]: { fontSize: "3rem" },
                        mb: 2,
                    }}
                    gutterBottom
                >
                    {header}
                </Typography>

                <Typography variant="h6" gutterBottom sx={{ color: "text.secondary", mb: 3 }}>
                    {subheader}
                </Typography>

                {/* Przycisk wyśrodkowany (tylko na małych ekranach),
            a na większych może zostać z lewej – dostosuj do potrzeb */}
                <Box sx={{ textAlign: { xs: "left", md: "left" } }}>
                    <Button variant="contained" color="primary" size="large">
                        {buttonText}
                    </Button>
                </Box>
            </Box>

            {/* PRAWA KOLUMNA: OBRAZ */}
            <Box
                sx={{
                    flex: 1,
                    display: "flex",
                    justifyContent: { xs: "center", md: "flex-end" },
                }}
            >
                <Box
                    component="img"
                    // Na mniejszych ekranach obrazek ukrywamy
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
