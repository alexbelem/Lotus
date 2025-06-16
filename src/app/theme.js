// theme.js

"use client";

import { createTheme } from '@mantine/core';

// Paleta "Serenidade Moderna"
// Fundo: #F8F9FA (Branco Neve)
// Primária: #4A6A8A (Azul Sereno)
// Destaque: #E9ECEF (Cinza Suave)
// Texto: #343A40 (Grafite Escuro)
// CTA: #C0A06E (Dourado Sutil)

export const theme = createTheme({
    // Define a fonte padrão para o corpo do texto
    fontFamily: 'Open Sans, sans-serif',

    // Define a fonte para os títulos (h1, h2, etc.)
    headings: {
        fontFamily: 'Montserrat, sans-serif',
    },

    // Define a cor primária que será usada em botões, links, etc.
    primaryColor: 'azul-sereno',

    // Aqui criamos nossas paletas de cores customizadas.
    // O Mantine espera um array de 10 tons para cada cor.
    colors: {
        'azul-sereno': [
            "#eaf2f8",
            "#d1e3f0",
            "#b8d4e8",
            "#9fc6e0",
            "#86b8d8",
            "#6da9d0",
            "#4A6A8A", // Cor principal no índice 6
            "#3b566e",
            "#2c4153",
            "#1d2d38"
        ],
        'dourado-sutil': [
            "#f9f6f1",
            "#f0e9d9",
            "#e6dcc2",
            "#dcd0ab",
            "#d2c394",
            "#c9b77d",
            "#C0A06E", // Cor principal no índice 6
            "#9a8058",
            "#736042",
            "#4d402c"
        ]
    },
});