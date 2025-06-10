// src/components/Footer.js
import { Box, Container, Grid, Typography, Link, TextField, Button } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
    return (
        <Box component="footer" sx={{ bgcolor: 'grey.100', py: 6, mt: 8 }}>
            <Container maxWidth="lg">
                <Grid container spacing={5}>
                    <Grid xs={12} sm={4}>
                        <Typography variant="h6" gutterBottom>Clínica Lótus</Typography>
                        <Typography variant="body2" color="text.secondary">
                            Cuidando da sua saúde mental com profissionalismo, empatia e as melhores técnicas disponíveis.
                        </Typography>
                    </Grid>
                    <Grid xs={6} sm={2}>
                        <Typography variant="h6" gutterBottom>Navegue</Typography>
                        <Link href="#" color="inherit" display="block" underline="hover">Home</Link>
                        <Link href="#" color="inherit" display="block" underline="hover">Serviços</Link>
                        <Link href="#" color="inherit" display="block" underline="hover">Sobre</Link>
                        <Link href="#" color="inherit" display="block" underline="hover">Contato</Link>
                    </Grid>
                    <Grid xs={12} sm={6}>
                        <Typography variant="h6" gutterBottom>Entre em Contato</Typography>
                        <Typography variant="body2" color="text.secondary" gutterBottom>
                            Deixe seu e-mail e retornaremos o mais breve possível.
                        </Typography>
                        <Box component="form" sx={{ display: 'flex', gap: 1, mt: 2 }}>
                            <TextField size="small" variant="outlined" placeholder="Seu e-mail" fullWidth />
                            <Button variant="contained" type="submit">Enviar</Button>
                        </Box>
                    </Grid>
                </Grid>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 6, pt: 3, borderTop: 1, borderColor: 'divider' }}>
                    <Typography variant="body2" color="text.secondary">
                        © {new Date().getFullYear()} Clínica Lótus. Todos os direitos reservados.
                    </Typography>
                    <Box sx={{ mt: { xs: 3, sm: 0 } }}> {/* Adicionamos margem só em telas pequenas */}
                        <Link href="#" color="inherit" sx={{ mr: 2 }}><WhatsAppIcon /></Link>
                        <Link href="#" color="inherit"><InstagramIcon /></Link>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}
export default Footer;