// src/components/HeroSection.js
'use client';

import { Box, Container, Typography, Button, Stack } from '@mui/material';
import Image from 'next/image';
import heroImage from '../../assets/psi_notas.jpg';

function HeroSection() {
    return (
        <Box component="section" id="heroe" sx={{ py: 8, bgcolor: 'background.paper' }}>
            <Container maxWidth="lg">
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 5,
                    flexDirection: { xs: 'column-reverse', md: 'row' }
                }}>

                    <Box sx={{
                        width: { xs: '100%', md: '50%' },
                        textAlign: { xs: 'center', md: 'left' }
                    }}>
                        <Typography
                            variant="h2"
                            component="h1"
                            fontWeight="bold"
                            gutterBottom
                        >
                            Venha se consultar com a gente
                        </Typography>
                        <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
                            Às vezes não precisamos de um plano, precisamos apenas tirar um tempinho para cuidar da nossa mente e do nosso corpo.
                        </Typography>
                        <Stack
                            direction="row"
                            spacing={2}
                            justifyContent={{ xs: 'center', md: 'flex-start' }}
                        >
                            {/* BOTÃO PRINCIPAL COM TRANSIÇÃO */}
                            <Button
                                variant="contained"
                                size="large"
                                component= "a"
                                href="#booking"
                                sx={{
                                    backgroundColor: '#5B86A3',
                                    color: '#FFFFFF',
                                    borderRadius: '6px',
                                    textTransform: 'none',

                                    fontWeight: 'bold',
                                    padding: '10px 24px',
                                    transition: 'background-color 0.3s ease', // << TRANSIÇÃO SUAVE
                                    '&:hover': {
                                        backgroundColor: '#4A6F8A',
                                    },
                                }}
                            >
                                Agendar Consulta
                            </Button>
                            {/* BOTÃO SECUNDÁRIO COM COR DE DESTAQUE E TRANSIÇÃO */}
                            <Button
                                variant="outlined"
                                size="large"
                                sx={{
                                    borderRadius: '6px',
                                    textTransform: 'none',
                                    fontWeight: 'bold',
                                    padding: '10px 24px',
                                    borderColor: '#E3A39A', // << COR DE DESTAQUE
                                    color: '#E3A39A',       // << COR DE DESTAQUE
                                    transition: 'background-color 0.3s ease, color 0.3s ease', // << TRANSIÇÃO SUAVE
                                    '&:hover': {
                                        backgroundColor: '#E3A39A', // Preenche com a cor de destaque
                                        color: '#FFFFFF',          // Texto fica branco
                                    },
                                }}
                            >
                                Saiba Mais
                            </Button>
                        </Stack>
                    </Box>

                    <Box sx={{ width: { xs: '100%', md: '50%' } }}>
                        <Image
                            src={heroImage}
                            alt="Psicóloga fazendo anotações em uma prancheta"
                            width={800}
                            height={600}
                            placeholder="blur"
                            style={{
                                width: '100%',
                                height: 'auto',
                                borderRadius: '8px',
                            }}
                        />
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

export default HeroSection;