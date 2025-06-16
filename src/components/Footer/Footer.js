'use client';

import { useState } from 'react';
import { Text, Container, ActionIcon, Group, TextInput, Button } from '@mantine/core';
import { IconBrandInstagram, IconBrandWhatsapp } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';
import logoLotus from '../../assets/Lotus_icone.png';
import classes from './Footer.module.css';
import {WhatsAppButton} from "@/components/WhatsAppButton/WhatsAppButton";
const data = [
  {
    title: 'Navegue',
    links: [
      { label: 'Home', link: '/' },
      { label: 'Serviços', link: '/servicos' },
      { label: 'Sobre Nós', link: '/sobre' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Termos de Uso', link: '/termos' },
      { label: 'Política de Privacidade', link: '/privacidade' },
    ],
  },
];

export function Footer() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email.includes('@') || email.trim() === '') {
      setError('Por favor, insira um e-mail válido.');
    } else {
      setError('');
      console.log('E-mail enviado:', email);
    }
  };

  const groups = data.map((group) => (
    <div className={classes.wrapper} key={group.title}>
      <Text className={classes.title}>{group.title}</Text>
      {group.links.map((link, index) => (
        <Text key={index} className={classes.link} component="a" href={link.link}>
          {link.label}
        </Text>
      ))}
    </div>
  ));

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <Link href="/">
            <Image src={logoLotus} alt="Logo da Clínica Lotus" height={40} />
          </Link>
          <Text size="xs" c="dimmed" className={classes.description}>
            Cuidando da sua saúde com profissionalismo e empatia.
          </Text>
        </div>
        <div className={classes.groups}>
          {groups}
          <div className={classes.wrapper}>
            <Text className={classes.title}>Entre em Contato</Text>
            <form onSubmit={handleSubmit}>
              <TextInput
                placeholder="Seu e-mail"
                mb="sm"
                value={email}
                onChange={(event) => setEmail(event.currentTarget.value)}
                error={error}
                classNames={{ input: error ? classes.invalid : '' }}
              />
              <Button type="submit" size="sm" fullWidth>
                Enviar
              </Button>
            </form>
          </div>
        </div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text c="dimmed" size="sm">
          © {new Date().getFullYear()} Clínica Lótus. Todos os direitos reservados.
        </Text>
        <Group gap={0} className={classes.social} justify="flex-end" wrap="nowrap">
          <WhatsAppButton variant="inline" message="Olá! Vi seu site e gostaria de mais informações."/>
          <ActionIcon size="lg" color="gray" variant="subtle" component="a" href="https://www.instagram.com/lotussmesst/">
            <IconBrandInstagram size={18} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}