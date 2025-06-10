// src/app/layout.js
import ThemeRegistry from '../components/ThemeRegistry';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
    title: 'Lótus Saúde Mental e Ocupacional',
    description: 'Cuidando da sua saúde com profissionalismo e empatia.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="pt-br">
        <body>
        <ThemeRegistry>
            <Header />
            <main>{children}</main>
            <Footer />
        </ThemeRegistry>
        </body>
        </html>
    );
}