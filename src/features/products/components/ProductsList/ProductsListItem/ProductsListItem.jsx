import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import {Chip, Rating} from "@mui/material";
import PropTypes from "prop-types";
import {theme} from "@app/Theme";


const ProductsListItem = ({product}) => {
    return (
        <Card id={product.id.toString()} sx={{width: 295, height: 410, display: "flex", justifyContent: "space-between", gap: 5, backgroundColor: theme.palette.background.default, border: "none", boxShadow: "none"}}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    width="295px"
                    image={product.thumbnail}
                    alt={product.title}
                    sx={{backgroundColor: theme.palette.background.paper, borderRadius: "20px"}}
                />
                <CardContent sx={{m: "10px 0", p: 0}}>
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
                        gap: 1,
                        mb: "10px"
                    }}>
                        <Rating name="read-only" value={product.rating} precision={0.1} readOnly/> {product.rating}/5
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{
                        fontFamily: 'Satoshi',
                        fontWeight: 700,
                        fontStyle: 'bold',
                        fontSize: '24px',
                        display: 'flex',
                        alignItems: 'center',
                    }}>
                        {product.discountPercentage > 0.4 ?
                            <span>
                                ${((product.price * (1 - product.discountPercentage / 100)).toFixed(2))}
                                <s style={{color: "#00000066"}}>${product.price.toFixed(2)}</s>
                                <Chip color='error' sx={{ml: 1, height:'28px', width: '65px', fontSize: '12px'}} variant='outlined' label={"-" + product.discountPercentage.toFixed(0) + "%"}/></span>
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