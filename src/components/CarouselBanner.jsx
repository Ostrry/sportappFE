import React, { useState } from "react";
import { Box, useTheme } from "@mui/material";
import Banner from "./Banner";

const CarouselBanner = () => {
    const theme = useTheme();
    const slides = [
        {
            backgroundImage: "", // możesz ustawić tło lub pozostawić puste
            imageSrc: "/Sp1.png",
            header: "Dołącz do Sportowej Rywalizacji",
            subheader: "Znajdź mecze, turnieje i drużyny w Twojej okolicy!",
            buttonText: "ZAREJESTRUJ SIĘ TERAZ",
        },
        {
            backgroundImage: "https://source.unsplash.com/random/800x600?fitness",
            imageSrc: "/Sp1.png",
            header: "Bądź w formie z nami",
            subheader: "Odkryj najlepsze treningi i wyzwania sportowe.",
            buttonText: "ZACZNIJ TERAZ",
        },
        {
            backgroundImage: "https://source.unsplash.com/random/800x600?team",
            imageSrc: "/Sp1.png",
            header: "Dołącz do zespołu",
            subheader: "Twórz drużyny i rywalizuj na najwyższym poziomie.",
            buttonText: "DOŁĄCZ DO NAS",
        },
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    const handleDotClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <>
            <Box sx={{ position: "relative", overflow: "hidden" }}>
                <Box sx={{ position: "relative", width: "100%", minHeight: 400 }}>
                    {slides.map((slide, index) => (
                        <Box
                            key={index}
                            sx={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                minHeight: 400,
                                transition: "opacity 0.5s ease-in-out",
                                opacity: index === activeIndex ? 1 : 0,
                                pointerEvents: index === activeIndex ? "auto" : "none",
                            }}
                        >
                            <Banner {...slide} />
                        </Box>
                    ))}
                </Box>
            </Box>

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 1,
                    mt: theme.spacing(1),
                }}
            >
                {slides.map((_, index) => {
                    const isActive = index === activeIndex;
                    return (
                        <Box
                            key={index}
                            onClick={() => handleDotClick(index)}
                            sx={{
                                width: isActive ? 18 : 10,
                                height: 10,
                                borderRadius: 5,
                                background: isActive
                                    ? "linear-gradient(to right, #2bc0e2, #0084ff)"
                                    : "#ccc",
                                cursor: "pointer",
                                transition: "all 0.3s",
                            }}
                        />
                    );
                })}
            </Box>
        </>
    );
};

export default CarouselBanner;
