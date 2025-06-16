// src/components/BookingSection.jsx
'use client';

import { Box, Container, Typography } from '@mui/material';
import { InlineWidget } from 'react-calendly';

function BookingSection() {
    return (
        // Damos um 'id' a esta seção para que os links possam apontar para ela
        <Box component="section" id="agendamento" sx={{ py: 8 }}>
            <Container maxWidth="md">
                <Typography
                    variant="h3"
                    component="h2"
                    textAlign="center"
                    fontWeight="bold"
                    gutterBottom
                >
                    Agende sua Consulta
                </Typography>
                <Typography
                    variant="h6"
                    color="text.secondary"
                    textAlign="center"
                    sx={{ mb: 5 }}
                >
                    Escolha abaixo o melhor dia e horário disponível para você.
                </Typography>

                {/* Widget do Calendly */}
                <Box sx={{ minHeight: '700px', borderRadius: '8px', overflow: 'hidden' }}>
                    <InlineWidget url="https://calendly.com/seu-usuario/seu-evento" />
                </Box>
            </Container>
        </Box>
    );
}

export default BookingSection;