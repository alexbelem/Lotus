"use client";
import { useState } from 'react';
import { Burger, Container, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import logoLotus from '../../assets/Lotus_icone.png';
import textoLotus from '../../assets/lotus_texto.png'
import classes from './HeaderSimple.module.css';
import Image from 'next/image';
import Link from 'next/link';

const links = [
    { link: '/about', label: 'Features' },
    { link: '/pricing', label: 'Pricing' },
    { link: '/learn', label: 'Learn' },
    { link: '/community', label: 'Community' },
];

export function HeaderSimple() {
    const [opened, { toggle }] = useDisclosure(false);
    const [active, setActive] = useState(links[0].link);

    const items = links.map((link) => (
        <a
            key={link.label}
            href={link.link}
            className={classes.link}
            data-active={active === link.link || undefined}
            onClick={(event) => {
                event.preventDefault();
                setActive(link.link);
            }}
        >
            {link.label}
        </a>
    ));

    return (
        <header className={classes.header}>
            <Container size="md" className={classes.inner}>

                <Link href="https://www.lotussmst.com.br/">
                    <Group gap="xs" align="center"> {/* 'align' centraliza verticalmente */}
                        <Image src={logoLotus} alt="Ícone da clínica Lotus" height={45} width={50} style={{ objectFit: 'contain' }} />
                        <Image src={textoLotus} alt="Texto da logo da clínica Lotus" height={25} width={100} style={{ objectFit: 'contain' }} />
                    </Group>
                </Link>

                <Group gap={5} visibleFrom="xs">
                    {items}
                </Group>

                <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
            </Container>
        </header>
    );
}