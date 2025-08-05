// src/components/FeaturesCards/FeaturesCards.jsx
'use client';

import React from 'react';
import { IconUser, IconInfoCircle } from '@tabler/icons-react';
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
    Tooltip,
    Table,
} from '@mantine/core';
import classes from './FeaturesCards.module.css';

// --- Conteúdo do Tooltip com Estilo Melhorado ---
/*
const ConveniosTooltipContent = () => {
    const theme = useMantineTheme();
    const convenios = [
        { orgao: 'Câmara dos deputados', plano: 'Pró-Saúde' },
        { orgao: 'Senado Federal', plano: 'SIS - Servidores' },
        { orgao: 'Senado Federal', plano: 'SIS - Senadores' },
        { orgao: 'TRF 1° Região DF', plano: 'Pro-social' },
        { orgao: 'STF', plano: 'STF MED' },
        { orgao: 'TRT 5° Região BA', plano: 'TRT Saúde' },
        { orgao: 'TST', plano: 'TST' },
    ];

    return (
        <Table fz="xs" verticalSpacing="xs">
            <Table.Thead>
                <Table.Tr>
                    <Table.Th>Órgão</Table.Th>
                    <Table.Th>Plano/Programa</Table.Th>
                </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
                {convenios.map((item) => (
                    <Table.Tr key={item.orgao + item.plano}>
                        <Table.Td>{item.orgao}</Table.Td>
                        <Table.Td>{item.plano}</Table.Td>
                    </Table.Tr>
                ))}
            </Table.Tbody>
        </Table>
    );
};
*/

// --- Dados dos Cards ---
const mockdata = [
    {
        title: 'Psicanálise',
        description: 'O paciente é convidado a falar sem censuras, possibilitando que os pensamentos reprimidos ganhem voz e que o sujeito escute a si mesmo.',
        icon: RiMentalHealthLine,
    },
    {
        title: 'Fenomenológica Existencial',
        description: 'Escuta humanista que busca compreender " aqui e agora" o SER HUMANO em sua totalidade.',
        icon: IconUser,
    },
    {
        title: 'Terapia Cognitivo Comportamental',
        description: 'Escuta terapêutica estruturada com objetivo em identificar e modificar padrões de pensamentos disfuncionais..',
        icon: MdOutlineHealthAndSafety,
        //tooltipContent: ConveniosTooltipContent,
    },
];


// --- Componente Principal ---
export function FeaturesCards() {
    const theme = useMantineTheme();
    const features = mockdata.map((feature) => (
        <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
            <feature.icon size={50} color={theme.colors['azul-sereno'][6]} />

            {/* Título do Card com o Tooltip ao lado */}
            <Group gap="xs" mt="md">
                <Text fz="lg" fw={500} className={classes.cardTitle}>
                    {feature.title}
                </Text>
            </Group>

            <Text fz="sm" c="dimmed" mt="sm" className={classes.cardDescription}>
                {feature.description}
            </Text>
        </Card>
    ));

    return (
        <div id="featuresCards" className={classes.featuresSection}>
            <Container size="lg" py="xl">
                <Group justify="center">
                    <Badge variant="filled" size="xl" style={{ textTransform: 'none' }}>
                        Nossos serviços!
                    </Badge>
                </Group>

                <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
                    {features}
                </SimpleGrid>
            </Container>
        </div>
    );
}

export default FeaturesCards;