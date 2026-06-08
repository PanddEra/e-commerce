import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {Button, CardActions, Chip, Divider, Rating} from "@mui/material";
import NumberSpinner from "@features/products/components/ProductCard/components/NumberSpinner.jsx";
import {theme} from "@app/Theme";

function ProductCard({product}) {
    const handleAddToCart = () => {
        alert("Added to cart");
        const quantity = document.querySelector('[data-number-spinner-add-to-cart]')?.value;
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const existingProduct = cart.find(item => item.id === product.id);
        if (existingProduct) {
            existingProduct.quantity += quantity;
            cart.replace(cart.findIndex(item => item.id === product.id), existingProduct);
            localStorage.setItem('cart', JSON.stringify(cart));
        } else {
            cart.push({...product, quantity: quantity});
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    }
    return (
        <Card sx={{
            backgroundColor: theme.palette.background.default,
            border: "none",
            boxShadow: "none",
            display: "flex",
            mt: "50px",
            mb: "50px"
        }}>
            <CardMedia
                component="img"
                image={product.images[0]}
                title={product.title}
                sx={{backgroundColor: theme.palette.background.paper, borderRadius: "20px", height: "530px"}}
            />
            <CardContent sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "0 0 0 30px",
                '&:last-child': {paddingBottom: 0}
            }}>
                <Typography variant="h2">
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
                <Typography variant="body1" sx={{
                    fontFamily: 'Satoshi',
                    fontWeight: 700,
                    fontStyle: 'bold',
                    fontSize: '32px',
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    {product.discountPercentage > 0.4 ?
                        <div style={{display: 'flex', alignItems: 'center', gap: "12px"}}>
                                ${((product.price * (1 - product.discountPercentage / 100)).toFixed(2))}
                            <s style={{color: "#00000066"}}>${product.price.toFixed(2)}</s>
                                <Chip color='error' sx={{ml: 1, height: '28px', width: '65px', fontSize: '12px'}}
                                      variant='outlined'
                                      label={"-" + product.discountPercentage.toFixed(0) + "%"}/></div>
                        : <div>${product.price}</div>
                    }
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {product.description}
                </Typography>
                <Divider variant="divider"/>
                <div>
                    <Typography variant="body2" sx={{ml: 1, display: 'inline-block'}}>
                        {product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}
                    </Typography>
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    gap: 15,
                    flexWrap: 'wrap'
                }}>
                    <Typography variant="body2" sx={{ml: 1, display: 'inline-block'}}>
                        Tags:
                    </Typography>
                    {product.tags.map((tag) => {
                        return <Chip label={tag}/>;
                    })}
                </div>
                <Divider variant="divider"/>
                <CardActions sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    height: "52px",
                    padding: 0
                }}>
                    <NumberSpinner data-number-spinner-add-to-cart min={product.minimumOrderQuantity} max={product.stock}
                                   value={product.minimumOrderQuantity} step={1}/>
                    <Button onClick={() => handleAddToCart()} disabled={product.stock === 0} variant="button"
                            sx={{backgroundColor: 'primary.main', color: 'white', width: '100%', height: "100%"}}>Add to
                        cart</Button>
                </CardActions>
            </CardContent>
        </Card>
    )
}

export default ProductCard;