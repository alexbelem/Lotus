// src/components/ServicesSection.js
'use client';

import { Container, Grid, Typography, Box } from '@mui/material';
import Image from 'next/image';
// --- IMPORTS DE ÍCONES CORRIGIDOS ---
import PsychologyIcon from '@mui/icons-material/Psychology';
import ScienceIcon from '@mui/icons-material/Science'; // <-- SUBSTITUTO PARA O BiotechIcon
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement'; // <-- SUBSTITUTO PARA O AccessibilityNewIcon
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import caixaLogo from '../../assets/caixa saude.png';
import nuclepLogo from '../../assets/nuclep_logo.jpg';





// Array de dados com os ícones corretos
const services = [
    {
        icon: <PsychologyIcon fontSize="large" color="primary" />,
        title: 'Terapia Cognitivo-Comportamental',
        text: 'Uma abordagem estruturada para identificar e modificar pensamentos e comportamentos disfuncionais.'
    },
    {
        icon: <ScienceIcon fontSize="large" color="primary" />, // <-- ÍCONE CORRIGIDO
        title: 'Avaliação Neuropsicológica',
        text: 'Altas habilidades, transtornos do neurodesenvolvimento e demências.'
    },
    {
        icon: <SelfImprovementIcon fontSize="large" color="primary" />, // <-- ÍCONE CORRIGIDO
        title: 'Reabilitação Neuropsicológica',
        text: 'Intervenções para recuperar ou compensar déficits cognitivos.'
    },
    {
        icon: <WorkIcon fontSize="large" color="primary" />,
        title: 'Saúde Ocupacional',
        text: 'Análise dos aspectos psicossociais relacionados ao ambiente de trabalho.'
    },
    {
        icon: <CreditCardIcon fontSize="large" color="primary" />,
        title: 'Atendimento por Convênio',
        text: 'Aceitamos Saúde Caixa e NUCLEP. Consulte condições para seu plano.'
    },
    {
        icon: <Image src={caixaLogo} alt="Logo Saúde Caixa" width={40} height={40} />,
        title: 'Atendimento em Convênio',
        text: 'Saúde Caixa.'
    },
    {
        icon: <Image src={nuclepLogo} alt="Logo Nuclep" width={40} height={40} />,
        title: 'Aceitamos Nuclep Convênio',
        text: 'Consulte as condições para associados.'
    },
];

function ServicesSection() {
    return (
        <Box sx={{ py: 8, bgcolor: 'grey.100' }}>
        <Container maxWidth="lg">
                <Typography variant="h3" component="h2" textAlign="center" gutterBottom sx={{ fontWeight: 'bold' }}>
                    Nossos Serviços
                </Typography>
                <Grid container spacing={4} sx={{ mt: 5 }}>
                    {services.map((service) => (
                        <Grid xs={12} sm={6} md={4} key={service.title}>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Box sx={{ mr: 2 }}>{service.icon}</Box>
                                <Box>
                                    <Typography variant="h6" component="h3" fontWeight="bold">{service.title}</Typography>
                                    <Typography variant="body2" color="text.secondary">{service.text}</Typography>
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}
export default ServicesSection;