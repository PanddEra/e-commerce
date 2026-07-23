import {useEffect} from "react";
import CartProductsList from "@pages/CartPage/components/CartProductsList/index.js";
import Card from "@mui/material/Card";
import {CardHeader, Divider} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useSelector } from 'react-redux';

const CartPage = () => {
    const products = useSelector(state => state.cart.items || []);

    useEffect(() => {
        // debug logs removed in prod, kept minimal here
        // console.log('Cart items', products);
    }, [products]);

    const subtotal = products.reduce((acc, product) => acc + (Number(product.price) * Number(product.quantity)), 0);
    const discount = products.reduce((acc, product) => acc + (Number(product.price) * Number(product.quantity)) * (Number(product.discountPercentage) / 100 || 0), 0);
    const delivery = products.length ? 15 : 0;
    const total = (subtotal - discount) + delivery;

    return (
        <div style={{display: "flex", justifyContent: "center", alignItems: "flex-start", gap: "24px", width: "1240px", margin: "0 auto"}}>
            <CartProductsList products={products}/>
            <Card>
                <CardHeader title="Order Summary"/>
                <CardContent>
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
                </CardContent>
            </Card>
        </div>
    )
}
export default CartPage;