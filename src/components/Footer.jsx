import React, {useEffect, useRef, useState} from "react";
import {Box, Container, Grid, Typography, Link, IconButton, Fab} from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";


const Footer = () => {

    // Ref do elementu stopki
    const footerRef = useRef(null);
    // Stan określający, czy stopka jest widoczna
    const [isFooterVisible, setIsFooterVisible] = useState(false);

    // Ustawiamy Intersection Observer, aby wykrywać widoczność stopki
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    // Gdy stopka wchodzi w widok, ustawiamy isFooterVisible na true
                    setIsFooterVisible(entry.isIntersecting);
                });
            },
            {
                root: null,
                threshold: 0.1, // gdy 10% stopki jest widoczne
            }
        );

        if (footerRef.current) {
            observer.observe(footerRef.current);
        }

        return () => {
            if (footerRef.current) {
                observer.unobserve(footerRef.current);
            }
        };
    }, []);

    // Funkcja przewijająca do góry
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <Box component="footer" sx={{ backgroundColor: "#f5f5f5", py: 4, mt: 4 }} ref={footerRef}>
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    {/* Lewa kolumna: Logo i opis marki */}
                    <Grid item xs={12} sm={4}>
                        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                            <Box
                                component="img"
                                src="/result.png"  // Upewnij się, że ścieżka do logo jest poprawna
                                alt="Logo Sportowej Platformy"
                                sx={{ height: 50, mr: 1 }}
                            />
                            <Typography variant="h6" color="text.primary">
                                Sportowa Platforma
                            </Typography>
                        </Box>
                        <Typography variant="body2" color="text.secondary">
                            Łączymy sportowców i entuzjastów sportu, tworząc przestrzeń do wspólnego rozwoju i rywalizacji.
                        </Typography>
                    </Grid>

                    {/* Środkowa kolumna: Szybkie linki */}
                    <Grid item xs={12} sm={4}>
                        {/*<Typography variant="subtitle1" color="text.primary" gutterBottom>
                            Szybkie linki
                        </Typography>
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
                            <Link href="/" variant="body2" color="text.secondary" underline="hover">
                                Strona główna
                            </Link>
                            <Link href="/wydarzenia" variant="body2" color="text.secondary" underline="hover">
                                Wydarzenia
                            </Link>
                            <Link href="/druzyny" variant="body2" color="text.secondary" underline="hover">
                                Drużyny
                            </Link>
                            <Link href="/treningi" variant="body2" color="text.secondary" underline="hover">
                                Treningi
                            </Link>
                            <Link href="/kontakt" variant="body2" color="text.secondary" underline="hover">
                                Kontakt
                            </Link>
                        </Box>*/}
                    </Grid>

                    {/* Prawa kolumna: Kontakt i social media */}
                    <Grid item xs={12} sm={4}>
                        <Typography variant="subtitle1" color="text.primary" gutterBottom>
                            Kontakt
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Email: kontakt@sportowa-platforma.pl
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Telefon: +48 123 456 789
                        </Typography>
                        <Box sx={{ display: "flex", mt: 2 }}>
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
                <Box sx={{ textAlign: "center", mt: 4 }}>
                    <Typography variant="body2" color="text.secondary">
                        © 2025 Sportowa Platforma - Wszelkie prawa zastrzeżone.
                    </Typography>
                </Box>
            </Container>
            {isFooterVisible && (
                <Box
                    sx={{
                        position: "fixed",
                        bottom: 32,
                        right: 32,
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
