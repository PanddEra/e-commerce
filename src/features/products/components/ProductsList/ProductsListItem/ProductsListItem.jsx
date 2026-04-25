import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import {Rating} from "@mui/material";
import PropTypes from "prop-types";

const ProductsListItem = ({product}) => {
    return (
        <Card id={product.id.toString()} sx={{width: 295, height: 400}}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="298px"
                    width="295px"
                    image={product.thumbnail}
                    alt={product.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={{
                        fontFamily: 'Satoshi',
                        fontWeight: 700,
                        fontSize: '20px',
                        height: '27px',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden'
                    }}>
                        {product.title}
                    </Typography>
                    <Typography variant="body2" sx={{
                        color: 'text.secondary',
                        height: '19px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1
                    }}>
                        <Rating name="read-only" value={product.rating} precision={0.1} readOnly/> {product.rating}/5
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {product.discountPercentage > 0.4 ?
                            <span> <s>${product.price.toFixed(2)}</s> ${((product.price * (1 - product.discountPercentage / 100)).toFixed(2))}</span>
                            : <span>${product.price}</span>
                        }
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
ProductsListItem.propTypes = {
    product: PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            discountPercentage: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired,
            thumbnail: PropTypes.string.isRequired
        }
    )
};

export default ProductsListItem;