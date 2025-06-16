// src/components/Header/ContactModal.jsx
'use client';

import { Modal, Button, Stack, Text } from '@mantine/core';
import { IconBrandWhatsapp, IconBrandInstagram, IconMail } from '@tabler/icons-react';

export function ContactModal({ opened, onClose }) {
    return (
        <Modal opened={opened} onClose={onClose} title="Nossos Contatos" centered>
            <Stack gap="md">
                <Text>Entre em contato conosco através dos nossos canais de atendimento.</Text>
                <Button
                    component="a"
                    href="https://wa.me/5521998059758?text=Ol%C3%A1!%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
                    target="_blank"
                    leftSection={<IconBrandWhatsapp size={18} />}
                    variant="outline"
                    fullWidth
                >
                    WhatsApp
                </Button>
                <Button
                    component="a"
                    href="https://www.instagram.com/lotussmesst/"
                    target="_blank"
                    leftSection={<IconBrandInstagram size={18} />}
                    variant="outline"
                    color="pink"
                    fullWidth
                >
                    Instagram
                </Button>
                <Button
                    component="a"
                    href="mailto:contato@clinicallotus.com"
                    leftSection={<IconMail size={18} />}
                    variant="outline"
                    color="gray"
                    fullWidth
                >
                    contato@clinicallotus.com
                </Button>
            </Stack>
        </Modal>
    );
}