// src/components/Header/HeaderActions.jsx
'use client';

import { Group, Button, Menu, Text, rem } from '@mantine/core';
import { IconMapPin, IconExternalLink, IconMessageCircle } from '@tabler/icons-react';

export function HeaderActions({ onContactClick }) {
    // A lógica de links e active state foi removida, pois não é mais necessária

    const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.394749302613!2d-43.12595068887532!3d-22.89883307916538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9983e1b7ed4359%3A0x69b336531386de2c!2sR.%20Dr.%20Bormann%2C%2023%20-%20sala%20816%20-%20Centro%2C%20Niter%C3%B3i%20-%20RJ%2C%2024020-320!5e0!3m2!1spt-BR!2sbr!4v1672878912345";
    const mapPageUrl = "https://maps.google.com/?cid=14916940155185953341";

    return (
        <Group gap="sm" visibleFrom="xs">
            {/* 1. Botão Home */}
            <Button component="a" href="#" variant="light">
                Home
            </Button>

            {/* 2. Botão Serviços */}
            <Button component="a" href="#features" variant="light">
                Serviços
            </Button>

            {/* 3. Botão para abrir o Popup de Contato */}
            <Button
                onClick={onContactClick}
                variant="light"
                leftSection={<IconMessageCircle size={16}/>}
            >
                Fale Conosco
            </Button>

            {/* 4. Menu de Localização */}
            <Menu shadow="md" width={300} position="bottom-end">
                <Menu.Target>
                    <Button
                        variant="light"
                        leftSection={<IconMapPin size={16} />}
                    >
                        Localização
                    </Button>
                </Menu.Target>

                <Menu.Dropdown>
                    <Menu.Label>Clínica Lótus - Niterói, RJ</Menu.Label>
                    <Text size="xs" c="dimmed" px="xs" pb="xs">
                        R. Dr. Bormann, 23 - sala 816 - Centro
                    </Text>

                    <iframe
                        src={mapEmbedUrl}
                        width="100%"
                        height="250"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>

                    <Menu.Divider />

                    <Menu.Item
                        leftSection={<IconExternalLink style={{ width: rem(14), height: rem(14) }} />}
                        component="a"
                        href={mapPageUrl}
                        target="_blank"
                    >
                        Abrir no Google Maps
                    </Menu.Item>
                </Menu.Dropdown>
            </Menu>
        </Group>
    );
}