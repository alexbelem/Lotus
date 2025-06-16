// src/components/FeaturesCards/FeaturesCards.jsx
"use client";

import React from 'react'; // A LINHA QUE FALTAVA
import { IconUser } from '@tabler/icons-react';
import { RiMentalHealthLine } from "react-icons/ri";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import {
    Badge,
    Card,
    Container,
    Group,
    SimpleGrid,
    Text,
    Title,
    useMantineTheme,
} from '@mantine/core';
import classes from './FeaturesCards.module.css';

const mockdata = [
    {
        title: 'Avaliação neuropsicológica',
        description:
            'um procedimento clínico que utiliza testes, tarefas e\n' +
            'observações padronizadas para avaliar o funcionamento cognitivo, emocional e\n' +
            'comportamental de um indivíduo...',
        icon: RiMentalHealthLine,
    },
    {
        title: 'Reabilitação neuropsicológica ',
        description:
            'é um processo terapêutico especializado que visa\n' +
            'ajudar indivíduos na restaurações das funções cognitivas...',
        icon: IconUser,
    },
    {
        title: 'Atendimento em convênio',
        description:
            'Aceitamos Saúde Caixa e Nuclep',
        icon: MdOutlineHealthAndSafety,
    },
];

// Corrigi o nome da função para exportação.
export function FeaturesCards() {
    const theme = useMantineTheme();
    const features = mockdata.map((feature) => (
        <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
            <feature.icon size={50} color={theme.colors['azul-sereno'][6]} />
            <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
                {feature.title}
            </Text>
            <Text fz="sm" c="dimmed" mt="sm" className={classes.cardDescription}>
                {feature.description}
            </Text>
        </Card>
    ));

    return (
        <div className={classes.featuresSection}>
            <Container size="lg" py="xl">
                <Group justify="center">
                    <Badge variant="filled" size="lg">
                        Trabalhamos com
                    </Badge>
                </Group>

                <Title order={2} className={classes.title} ta="center" mt="sm">
                    Terapia Cognitivo-Comportamental (TCC)
                </Title>

                <Text c="dimmed" className={classes.description} ta="center" mt="md">
                    é uma abordagem psicológica estruturada, que busca identificar e modificar pensamentos e comportamentos
                    disfuncionais que contribuem para problemas emocionais e de comportamento.
                </Text>

                <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
                    {features}
                </SimpleGrid>
            </Container>
        </div>
    );
}

// Adicione uma exportação default se preferir
export default FeaturesCards;