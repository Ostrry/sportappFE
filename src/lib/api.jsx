import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8080",
    // Możesz dodać inne ustawienia, np. interceptory
});
// Endpointy przepisów
export const getTournaments = () => axios.get(`${instance}/recipes`);

export default instance;