import {useEffect, useState} from "react";
import CartProductsList from "@pages/CartPage/components/CartProductsList/index.js";
import Card from "@mui/material/Card";
import {CardHeader, Divider} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const CartPage = () => {
    const [products, setProducts] = useState(JSON.parse(localStorage.getItem('cart')) || []);
    useEffect(() => {
        console.log(products);
        console.log(products.reduce((acc, product) => acc + (product.price * product.quantity), 0));
    }, []);
    return (
        <div style={{display: "flex", justifyContent: "center", alignItems: "flex-start", gap: "24px", width: "1240px", margin: "0 auto"}}>
            <CartProductsList products={products}/>
            <Card>
                <CardHeader title="Order Summary"/>
                <CardContent>
                    <div>
                        <Typography variant="body2">Subtotal</Typography>
                        <Typography
                            variant="body1">${products.reduce((acc, product) => acc + (product.price * product.quantity), 0)}</Typography>
                    </div>
                    <div>
                        <Typography variant="body2">Discount</Typography>
                        <Typography
                            variant="body1">-{products.reduce((acc, product) => acc + (Number(product.price) * Number(product.quantity)) * (Number(product.discountPercentage) / 100), 0)}</Typography>
                    </div>
                    <div>
                        <Typography variant="body2">Delivery Fee</Typography>
                        <Typography variant="body1">$15</Typography>
                    </div>
                    <Divider/>
                    <div>
                        <Typography variant="body1">Total</Typography>
                        <Typography
                            variant="body1">${products.reduce((acc, product) => acc + Number(product.price) * Number(product.quantity) - (Number(product.price) * Number(product.quantity)) * (Number(product.discountPercentage) / 100), 0).toFixed(2) + 15}</Typography>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
export default CartPage;