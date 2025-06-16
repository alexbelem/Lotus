// src/components/Header/HeaderSimple.jsx
'use client';

import { Burger, Container, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Image from 'next/image';
import Link from 'next/link';
import logoLotus from '../../assets/Lotus_icone.png';
import textoLotus from '../../assets/lotus_texto.png';
import classes from './HeaderSimple.module.css';
import { HeaderActions } from '../Header/HeaderActions/HeaderActions';
import { ContactModal } from '../ContactModal/ContactModal';

export function HeaderSimple() {
    const [burgerOpened, { toggle: toggleBurger }] = useDisclosure(false);
    const [modalOpened, { open: openModal, close: closeModal }] = useDisclosure(false);

    return (
        <>
            <ContactModal opened={modalOpened} onClose={closeModal} />

            <header className={classes.header}>
                <Container size="md" className={classes.inner}>
                    <Link href="/">
                        <Group gap={2} align="center">
                            <Image
                                src={logoLotus}
                                alt="Ícone da clínica Lotus"
                                height={42}
                                width={60}
                                style={{ objectFit: 'contain' }}
                            />
                            <Image
                                src={textoLotus}
                                alt="Texto da logo da clínica Lotus"
                                height={42}
                                width={128}
                                style={{ objectFit: 'contain' }}
                            />
                        </Group>
                    </Link>

                    <HeaderActions onContactClick={openModal} />

                    <Burger opened={burgerOpened} onClick={toggleBurger} hiddenFrom="xs" size="sm" />
                </Container>
            </header>
        </>
    );
}