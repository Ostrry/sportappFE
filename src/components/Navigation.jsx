// plik: src/components/Navigation.jsx
import React, { useState, useEffect } from "react";
import {
    AppBar,
    Box,
    Button,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const navItems = ["Strona główna", "O nas", "Wydarzenia", "Kontakt"];

const Navigation = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    // Style kontenera nawigacji z użyciem theme.spacing oraz breakpointów
    const containerSx = {
        width: "100%",
        mx: "auto",
        boxSizing: "border-box",
        px: { xs: theme.spacing(2), sm: theme.spacing(3) },
        display: "flex",
        alignItems: "center",
        color: theme.palette.text.primary,
        height: "var(--layout-header-mobile-height, 56px)",
        [theme.breakpoints.up("md")]: {
            height: "var(--layout-header-desktop-height, 72px)",
        },
        [theme.breakpoints.up("lg")]: {
            maxWidth: "1200px",
        },
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
            <Typography variant="h6" sx={{ my: theme.spacing(2) }}>
                <Box
                    component="img"
                    src="/result.png"
                    alt="Sportowa Platforma"
                    sx={{ width: 160, height: "auto", my: theme.spacing(2) }}
                />
            </Typography>
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemText primary={item} sx={{ textAlign: "center" }} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <>
            <AppBar
                sx={{
                    position: "sticky",
                    backgroundColor: scrolled
                        ? "rgba(255, 255, 255, 0.7)"
                        : "rgba(255, 255, 255, 0.1)",
                    backdropFilter: scrolled ? "blur(10px)" : "none",
                    transition: "all 0.3s ease",
                    boxShadow: scrolled ? theme.shadows[4] : "none",
                    color: "#000",
                }}
            >
                <Box sx={containerSx}>
                    {isMobile && (
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: theme.spacing(2) }}
                        >
                            <MenuIcon />
                        </IconButton>
                    )}
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Box
                            component="img"
                            src="/result.png"
                            alt="Sportowa Platforma"
                            sx={{ width: 45, height: "auto", my: theme.spacing(2) }}
                        />
                    </Typography>
                    {!isMobile &&
                        navItems.map((item) => (
                            <Button
                                key={item}
                                sx={{
                                    color: "inherit",
                                    textTransform: "none",
                                    fontWeight: 500,
                                    ml: theme.spacing(1),
                                }}
                            >
                                {item}
                            </Button>
                        ))}
                    <Button sx={{ color: "inherit", textTransform: "none", ml: theme.spacing(2) }}>
                        Log in
                    </Button>
                </Box>
            </AppBar>
            <Drawer
                anchor="left"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{ keepMounted: true }}
                sx={{
                    display: { xs: "block", sm: "none" },
                    "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
                }}
            >
                {drawer}
            </Drawer>
        </>
    );
};

export default Navigation;
