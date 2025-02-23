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
    Toolbar,
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

    // Główne style AppBar – z efektem mlecznej szyby (jeśli go potrzebujesz).
    const appBarStyles = {
        position: "sticky",
        backgroundColor: scrolled
            ? "rgba(255, 255, 255, 0.7)"
            : "rgba(255, 255, 255, 0.1)",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        transition: "all 0.3s ease",
        boxShadow: scrolled ? theme.shadows[4] : "none",
        color: "#000",
    };

    // To jest kluczowe miejsce, w którym odwzorowujemy Twoje reguły CSS:
    // .css-o4pa05 + media queries
    const containerSx = {
        width: "100%",
        marginLeft: "auto",
        marginRight: "auto",
        boxSizing: "border-box",
        paddingLeft: "calc(2 * var(--spacing))",
        paddingRight: "calc(2 * var(--spacing))",
        display: "flex",
        alignItems: "center",
        color: "var(--color)",
        // domyślna wysokość (mobile)
        height: "var(--layout-header-mobile-height)",

        // breakpoints MUI:
        // (min-width: 600px) => theme.breakpoints.up("sm")
        [theme.breakpoints.up("sm")]: {
            paddingLeft: "calc(3 * var(--spacing))",
            paddingRight: "calc(3 * var(--spacing))",
        },
        // (min-width: 900px) => theme.breakpoints.up("md")
        [theme.breakpoints.up("md")]: {
            height: "var(--layout-header-desktop-height)",
        },
        // (min-width: 1200px) => theme.breakpoints.up("lg")
        [theme.breakpoints.up("lg")]: {
            maxWidth: "1200px",
        },
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                <Box
                    component="img"
                    src="/result.png"
                    alt="Sportowa Platfsorma"
                    sx={{ width: 160, height: "auto", my: 2 }}
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
            <AppBar sx={appBarStyles}>
                {/*
          Zamiast domyślnego <Toolbar>,
          użyjemy <Box> z naszymi stylami containerSx.
          Możesz też wstawić Toolbar wewnątrz Boxa,
          ale kluczowe jest, by Box miał te style.
        */}
                <Box sx={containerSx}>
                    {isMobile && (
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                    )}
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Box
                            component="img"
                            src="/result.png"
                            alt="Sportowa Platforma"
                            sx={{ width: 45, height: "auto", my: 2 }}
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
                                    ml: 1,
                                }}
                            >
                                {item}
                            </Button>
                        ))}
                    <Button sx={{ color: "inherit", textTransform: "none", ml: 2 }}>
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
