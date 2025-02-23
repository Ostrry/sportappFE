// plik: src/components/Footer.jsx
import React, { useRef, useEffect, useState } from "react";
import { Box, Container, Grid, Typography, Link, IconButton, Fab } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useTheme } from "@mui/system";

const Footer = () => {
    const theme = useTheme();
    const footerRef = useRef(null);
    const [isFooterVisible, setIsFooterVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    setIsFooterVisible(entry.isIntersecting);
                });
            },
            { root: null, threshold: 0.1 }
        );

        if (footerRef.current) observer.observe(footerRef.current);

        return () => {
            if (footerRef.current) observer.unobserve(footerRef.current);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <Box component="footer" sx={{ backgroundColor: "#f5f5f5", py: theme.spacing(4), mt: theme.spacing(4) }} ref={footerRef}>
            <Container maxWidth="lg">
                <Grid container spacing={theme.spacing(4)}>
                    {/* Lewa kolumna: Logo i opis marki */}
                    <Grid item xs={12} sm={4}>
                        <Box sx={{ display: "flex", alignItems: "center", mb: theme.spacing(2) }}>
                            <Box
                                component="img"
                                src="/result.png"  // Upewnij się, że ścieżka do logo jest poprawna
                                alt="Logo Sportowej Platformy"
                                sx={{ height: 50, mr: theme.spacing(1) }}
                            />
                            <Typography variant="h6" color="text.primary">
                                Sportowa Platforma
                            </Typography>
                        </Box>
                        <Typography variant="body2" color="text.secondary">
                            Łączymy sportowców i entuzjastów sportu, tworząc przestrzeń do wspólnego rozwoju i rywalizacji.
                        </Typography>
                    </Grid>

                    {/* Prawa kolumna: Kontakt i social media */}
                    <Grid item xs={12} sm={4} sx={{ ml: "auto" }}>
                        <Typography variant="subtitle1" color="text.primary" gutterBottom>
                            Kontakt
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Email: <Link href="mailto:kontakt@sportowa-platforma.pl" color="inherit" underline="none">kontakt@sportowa-platforma.pl</Link>
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Telefon: +48 123 456 789
                        </Typography>
                        <Box sx={{ display: "flex", mt: theme.spacing(2) }}>
                            <IconButton href="https://facebook.com" target="_blank" color="inherit">
                                <FacebookIcon />
                            </IconButton>
                            <IconButton href="https://twitter.com" target="_blank" color="inherit">
                                <TwitterIcon />
                            </IconButton>
                            <IconButton href="https://instagram.com" target="_blank" color="inherit">
                                <InstagramIcon />
                            </IconButton>
                        </Box>
                    </Grid>
                </Grid>

                {/* Dolna część footeru: prawa autorskie */}
                <Box sx={{ textAlign: "center", mt: theme.spacing(4) }}>
                    <Typography variant="body2" color="text.secondary">
                        © 2025 Sportowa Platforma - Wszelkie prawa zastrzeżone.
                    </Typography>
                </Box>
            </Container>

            {/* Floating Action Button - pojawia się, gdy footer jest widoczny */}
            {isFooterVisible && (
                <Box
                    sx={{
                        position: "fixed",
                        bottom: theme.spacing(4),
                        right: theme.spacing(4),
                        zIndex: 9999,
                    }}
                >
                    <Fab
                        color="warning"
                        size="medium"
                        onClick={scrollToTop}
                        aria-label="scroll back to top"
                    >
                        <KeyboardArrowUpIcon />
                    </Fab>
                </Box>
            )}
        </Box>
    );
};

export default Footer;
