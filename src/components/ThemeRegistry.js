// src/components/ThemeRegistry.js
'use client';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import CssBaseline from '@mui/material/CssBaseline';

// Crie seu tema aqui. Você pode customizar cores, fontes, etc.
const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2', // Um azul como exemplo
        },
        secondary: {
            main: '#dc004e', // Um rosa/vermelho como exemplo
        },
    },
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif',
    },
});

export default function ThemeRegistry({ children }) {
    return (
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </AppRouterCacheProvider>
    );
}