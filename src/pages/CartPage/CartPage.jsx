import {useEffect} from "react";
import CartProductsList from "@pages/CartPage/components/CartProductsList/index.js";
import Card from "@mui/material/Card";
import {CardHeader, Divider, Button, Box} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {useSelector} from 'react-redux';

const CartPage = () => {
    const products = useSelector(state => state.cart.items || []);

    useEffect(() => {
    }, [products]);

    const subtotal = products.reduce((acc, product) => acc + (Number(product.price) * Number(product.quantity)), 0);
    const discount = products.reduce((acc, product) => acc + (Number(product.price) * Number(product.quantity)) * (Number(product.discountPercentage) / 100 || 0), 0);
    const delivery = products.length ? 15 : 0;
    const total = (subtotal - discount) + delivery;

    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "24px",
            width: "1240px",
            margin: "0 auto",
            minHeight: "50vh"
        }}>
            <CartProductsList products={products}/>

            {products.length === 0 ? (<></>) : (
                <Card sx={{width: 400, position: 'sticky', top: 32}}>
                    <CardHeader title="Order Summary"/>
                    <CardContent>
                        <Box sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
                            <div>
                                <Typography variant="body2">Subtotal</Typography>
                                <Typography variant="body1">${subtotal.toFixed(2)}</Typography>
                            </div>
                            <div>
                                <Typography variant="body2">Discount</Typography>
                                <Typography variant="body1">-${discount.toFixed(2)}</Typography>
                            </div>
                            <div>
                                <Typography variant="body2">Delivery Fee</Typography>
                                <Typography variant="body1">${delivery}</Typography>
                            </div>
                            <Divider/>
                            <div>
                                <Typography variant="body1">Total</Typography>
                                <Typography variant="body1">${total.toFixed(2)}</Typography>
                            </div>

                            <Button
                                variant="contained"
                                color="primary"
                                sx={{mt: 2, width: '100%', py: 1.5, fontWeight: 700}}
                                onClick={() => alert('Order placed!')}
                            >
                                Place Order
                            </Button>
                        </Box>
                    </CardContent>
                </Card>)}
        </div>
    )
}
export default CartPage;