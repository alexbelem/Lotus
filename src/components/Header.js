// src/components/Header.js
'use client';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import Image from 'next/image';
import logoImage from '../assets/lotus_logo.png';

function Header() {
    return (
        <AppBar position="static" color="default" elevation={1}>
            <Toolbar>
                <Box sx={{ flexGrow: 1 }}>
                    <Image src={logoImage} alt="Logo da Lótus" width={50} height={45} />
                </Box>
                <Button color="inherit">Home</Button>
                <Button color="inherit">Serviços</Button>
                <Button color="inherit">Sobre Nós</Button>
                <Button color="inherit">Contato</Button>
            </Toolbar>
        </AppBar>
    );
}
export default Header;