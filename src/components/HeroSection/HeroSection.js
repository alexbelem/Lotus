// src/components/HeroSection.js
'use client';

import { Box, Container, Typography, Button, Stack } from '@mui/material';
import Image from 'next/image';
import heroImage from '../../assets/psi_notas.jpg';

function HeroSection() {
    // 1. Definimos os dados do WhatsApp aqui, como no seu outro componente.
    const numeroTelefone = '5521967759758';
    const mensagemPadrao = 'Olá! Gostaria de marcar uma consulta!';
    const urlWhatsApp = `https://wa.me/${numeroTelefone}?text=${encodeURIComponent(mensagemPadrao)}`;

    // Função de rolagem suave (mantida para o botão "Saiba Mais")
    const handleScroll = (event, targetId) => {
        event.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

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
                            {/* ===== BOTÃO AGENDAR CONSULTA (MODIFICADO) ===== */}
                            <Button
                                variant="contained"
                                size="large"
                                component="a" // Mantém como um link
                                href={urlWhatsApp} // 2. Aponta para a URL do WhatsApp
                                target="_blank" // 3. Abre em uma nova aba
                                rel="noopener noreferrer" // 4. Boa prática de segurança para nova aba
                                sx={{
                                    backgroundColor: '#5B86A3',
                                    color: '#FFFFFF',
                                    borderRadius: '6px',
                                    textTransform: 'none',
                                    fontWeight: 'bold',
                                    padding: '10px 24px',
                                    transition: 'background-color 0.3s ease',
                                    '&:hover': {
                                        backgroundColor: '#4A6F8A',
                                    },
                                }}
                            >
                                Agendar Consulta
                            </Button>

                            {/* BOTÃO SAIBA MAIS (Permanece com a rolagem suave) */}
                            <Button
                                variant="outlined"
                                size="large"
                                href="#featuresCards"
                                onClick={(e) => handleScroll(e, 'featuresCards')}
                                sx={{
                                    borderRadius: '6px',
                                    textTransform: 'none',
                                    fontWeight: 'bold',
                                    padding: '10px 24px',
                                    borderColor: '#E3A39A',
                                    color: '#E3A39A',
                                    transition: 'background-color 0.3s ease, color 0.3s ease',
                                    '&:hover': {
                                        backgroundColor: '#E3A39A',
                                        color: '#FFFFFF',
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