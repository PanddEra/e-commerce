import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import {Rating} from "@mui/material";

export default function MultiActionAreaCard({product}) {
    return (
        <Card id={product.id} sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={product.thumbnail}
                    alt={product.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {product.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        <Rating name="read-only" value={product.rating} readOnly /> {product.rating}/5
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {product.discountPercentage > 0 && (
                            <span>
                                <s>${product.price.toFixed(2)}</s> ${((product.price * (1 - product.discountPercentage / 100)).toFixed(2))}
                            </span>
                        )}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}