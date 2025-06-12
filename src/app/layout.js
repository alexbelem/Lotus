// src/app/layout.js
import ThemeRegistry from '../components/ThemeRegistry';
import { HeaderSimple } from '../components/Header/HeaderSimple';
import Footer from '../components/Footer/Footer';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import {theme} from "@/app/theme";

export const metadata = {
    title: 'Lótus Saúde Mental e Ocupacional',
    description: 'Cuidando da sua saúde com profissionalismo e empatia.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="pt-br">
        <body>
        <ThemeRegistry>
            <MantineProvider theme={theme}>
            <HeaderSimple />
            {children}
            <Footer />
            </MantineProvider>
        </ThemeRegistry>
        </body>
        </html>
    );
}