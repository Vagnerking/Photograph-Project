import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Festa from '../../img/festa.jpg';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Paper } from '@mui/material';

export default function CardPhoto() {
    return (
        <Card component={Paper} elevation={6}>
            <CardMedia
                component="img"
                height="140"
                image={Festa}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Festa do Tubarão
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Paixona não, porque aqui é só tubarão, enquanto tu tá apaixonada nóis empurra no mundão...
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Compartilhar</Button>
                <Button size="small">Ver Album</Button>
            </CardActions>
        </Card>
    )
}