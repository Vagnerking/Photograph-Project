import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import HeaderNavbar from '../../components/navbar';
import Fab from '@mui/material/Fab';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ShareIcon from '@mui/icons-material/Share';
import EmailIcon from '@mui/icons-material/Email';
import { Grid, Paper } from '@mui/material';
import CardFoto from '../../components/card-foto';

export default function Home() {
    return (
        <Box sx={{ display: 'flex', flexGrow: 1, flexDirection: 'column', height: 'auto', backgroundColor: 'background.paper', gap: 4 }}>
            <HeaderNavbar />
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', mx: 2, py: 4 }}>
                <Typography variant="h2" sx={{ fontWeight: 200, color: 'text.primary', mb: 1, textAlign: 'center' }}>
                    XP Fotografias
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 500, maxWidth: '600px', color: 'text.secondary', textAlign: 'center' }}>
                    Conheça nossos serviços e se surpreenda com a qualidade e o carinho que temos com sua comemoração. Você pode visualizar abaixo todos os meus trabalhos.
                </Typography>
                <Box sx={{ display: 'flex', mt: 4, gap: 4 }}>
                    <Fab className='fabWhatsapp' aria-label="add" sx={{ backgroundColor: '#0DC143' }}>
                        <WhatsAppIcon sx={{ color: 'common.white' }} />
                    </Fab>
                    <Fab className='fabShare' color="info" aria-label="add">
                        <ShareIcon sx={{ color: 'common.white' }} />
                    </Fab>
                    <Fab className='fabEmail' aria-label="add" sx={{ backgroundColor: '#FD4648' }}>
                        <EmailIcon sx={{ color: 'common.white' }} />
                    </Fab>
                </Box>
            </Box>
            <Box component={Paper} elevation={1} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0, 0.03)', flexDirection: 'column', pb: 2, borderRadius: 0 }}>
                <Typography variant="h5" sx={{ fontWeight: 400, color: 'text.primary', textAlign: 'center', mt: 4 }}>
                    Meus Trabalhos
                </Typography>
                <Grid sx={{ px: 4, py: 4, display: 'flex', justifyContent: 'center' }}>
                    <Grid container spacing={2} sx={{ display: 'flex', flexWrap: 'wrap' }}>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <CardFoto />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <CardFoto />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <CardFoto />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <CardFoto />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <CardFoto />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <CardFoto />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <CardFoto />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <CardFoto />
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                <Typography variant="h6" sx={{ fontWeight: 500, color: 'text.secondary', textAlign: 'center', mb: 1 }}>
                    Entre em contato conosco
                </Typography>
                <Typography variant="h7" sx={{ fontWeight: 200, color: 'text.secondary', textAlign: 'center' }}>
                    📞 (00) 00000-0000
                </Typography>
                <Typography variant="h7" sx={{ fontWeight: 200, color: 'text.secondary', textAlign: 'center' }}>
                    📧 xptocompany@xpto.com
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0, 0.03)', py: 1 }} component={Paper}>
                <Typography variant="h7" sx={{ fontWeight: 200, color: 'text.secondary', textAlign: 'center' }}>
                    © 2011-2022 Xpto Company Co. - Todos os direitos reservados.
                </Typography>
            </Box>
        </Box >
    );
}