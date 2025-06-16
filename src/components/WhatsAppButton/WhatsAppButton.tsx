// src/components/WhatsAppButton/WhatsAppButton.jsx
'use client';

import React from "react";
import { ActionIcon, Tooltip } from '@mantine/core';
import { IconBrandWhatsapp } from '@tabler/icons-react';
import classes from './WhatsAppButton.module.css';


const numeroTelefone = '5521967759758';
const mensagemPadrao = 'Olá! Gostaria de marcar uma consulta!';

// Adicionamos a prop 'variant' e 'message'
export function WhatsAppButton({ message, variant = 'floating' }) {
    const textoFinal = message || mensagemPadrao;
    const urlWhatsApp = `https://wa.me/${numeroTelefone}?text=${encodeURIComponent(textoFinal)}`;

    // Se a variante for 'inline', renderizamos apenas o ícone simples
    if (variant === 'inline') {
        return (
            <ActionIcon
                component="a"
                href={urlWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                color="gray"
                variant="subtle"
            >
                <IconBrandWhatsapp size={18} stroke={1.5} />
            </ActionIcon>
        );
    }

    // Por padrão (ou se variant === 'floating'), renderizamos o botão flutuante
    return (
        <Tooltip label="Fale Conosco no WhatsApp" position="left" withArrow>
            <ActionIcon
                component="a"
                href={urlWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                size="xl"
                radius="xl"
                variant="filled"
                color="green"

                style={{
                    position: 'fixed',
                    bottom: 25,
                    right: 25,
                    zIndex: 1000,
                }}
            >
                <IconBrandWhatsapp size={28} stroke={1.5} />
            </ActionIcon>
        </Tooltip>
    );
}