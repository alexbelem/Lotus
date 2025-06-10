// src/components/HeroSection.js
'use client';

import { Box, Container, Grid, Typography, Button, Stack } from '@mui/material';
import Image from 'next/image';
import heroImage from '../assets/psi_notas.jpg'; // Importando a imagem da pasta assets

function HeroSection() {
    return (
        // Usamos 'component="section"' para manter a semântica do HTML
        <Box component="section" id="heroe" sx={{ py: 8, bgcolor: 'background.paper' }}>
            <Container maxWidth="lg">
                <Grid
                    container
                    spacing={5}
                    alignItems="center"
                    // Inverte a ordem em telas pequenas (imagem em cima)
                    direction={{ xs: 'column-reverse', lg: 'row' }}
                >
                    {/* --- Coluna de Texto --- */}
                    {/* CORRIGIDO: A prop 'item' foi removida */}
                    <Grid xs={12} lg={6}>
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
                        <Stack direction="row" spacing={2}>
                            <Button variant="contained" size="large">Agendar Consulta</Button>
                            <Button variant="outlined" size="large">Saiba Mais</Button>
                        </Stack>
                    </Grid>

                    {/* --- Coluna da Imagem --- */}
                    {/* CORRIGIDO: A prop 'item' foi removida */}
                    <Grid xs={12} sm={8} lg={6}>
                        {/* CORRIGIDO: Este Box agora tem position: 'relative' para o 'fill' da imagem funcionar */}
                        <Box sx={{
                            position: 'relative',
                            width: '100%',
                            // Mantém a proporção da imagem (altura / largura * 100%)
                            paddingTop: '71.42%',
                            borderRadius: '8px',
                            overflow: 'hidden'
                        }}>
                            <Image
                                src={heroImage}
                                alt="Psicóloga fazendo anotações"
                                fill // 'fill' preenche o espaço do Box pai
                                style={{ objectFit: 'cover' }} // Garante que a imagem cubra o espaço sem distorcer
                                placeholder="blur" // Efeito de blur enquanto carrega
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Ajuda o Next.js a carregar o tamanho certo da imagem
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default HeroSection;