// plik: src/components/TournamentSection.jsx
import React from "react";
import {
    Container,
    Grid,
    Card,
    CardContent,
    CardMedia,
    Typography,
    CardActions,
    Button,
    Box,
} from "@mui/material";
import { keyframes, useTheme } from "@mui/system";

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

// Przykładowe dane turniejów
const tournaments = [
    {
        title: "Turniej Piłki Nożnej - Poznań",
        image: "https://picsum.photos/seed/football/800/600",
        date: "2025-03-15",
    },
    {
        title: "Mistrzostwa Siatkówki - Warszawa",
        image: "https://picsum.photos/seed/volleyball/800/600",
        date: "2025-04-10",
    },
    {
        title: "Bieg Miejski - Kraków",
        image: "https://picsum.photos/seed/running/800/600",
        date: "2025-05-05",
    },
    {
        title: "Turniej Koszykówki - Gdańsk",
        image: "https://picsum.photos/seed/basketball/800/600",
        date: "2025-06-20",
    },
    {
        title: "Turniej Tenisa - Wrocław",
        image: "https://picsum.photos/seed/tennis/800/600",
        date: "2025-07-12",
    },
    {
        title: "Bieg Przełajowy - Łódź",
        image: "https://picsum.photos/seed/crosscountry/800/600",
        date: "2025-08-01",
    },
    {
        title: "Mistrzostwa Rugby - Lublin",
        image: "https://picsum.photos/seed/rugby/800/600",
        date: "2025-09-15",
    },
    {
        title: "Turniej E-sportowy - Katowice",
        image: "https://picsum.photos/seed/esports/800/600",
        date: "2025-10-05",
    },
    {
        title: "Rajd Rowerowy - Szczecin",
        image: "https://picsum.photos/seed/cycling/800/600",
        date: "2025-11-10",
    },
    {
        title: "Turniej Piłki Ręcznej - Białystok",
        image: "https://picsum.photos/seed/handball/800/600",
        date: "2025-12-20",
    },
];

const TournamentSection = () => {
    const theme = useTheme();

    return (
        <Container sx={{ my: theme.spacing(4) }}>
            <Typography
                variant="h4"
                gutterBottom
                sx={{
                    fontFamily: theme.typography.fontFamily,
                    fontWeight: 800,
                    mb: theme.spacing(3),
                }}
            >
                Najnowsze Turnieje
            </Typography>
            <Grid container spacing={theme.spacing(2)}>
                {tournaments.map((tournament, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card
                            sx={{
                                height: "100%",
                                animation: `${fadeInUp} 0.5s ease-out forwards`,
                                animationDelay: `${index * 0.1}s`,
                            }}
                        >
                            <Box
                                sx={{
                                    transform: "translateY(0) scale(1)",
                                    transition: "transform 0.3s",
                                    "&:hover": { transform: "translateY(0) scale(1.03)" },
                                }}
                            >
                                <CardMedia
                                component="img"
                                height="140"
                                image={tournament.image}
                                alt={tournament.title}
                            />
                            <CardContent>
                                <Typography variant="subtitle1" component="div" gutterBottom>
                                    {tournament.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {new Date(tournament.date).toLocaleDateString()}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Zobacz szczegóły</Button>
                            </CardActions>
                            </Box>
                            </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default TournamentSection;
