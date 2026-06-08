import {useState} from "react";
import {useGetProductByIdQuery} from "@app/API/baseApi.js";
import CartProductsList from "@pages/CartPage/components/CartProductsList/index.js";
import Card from "@mui/material/Card";
import {CardHeader, Divider} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const CartPage = () => {
    const [products, setProducts] = useState([]);
    if (isLoading) {
        return (
            <div>Loading...</div>
        )
    }
    if (error) {
        return (
            <div>Error: {error?.message}</div>
        )
    }
    if(data.length <= 0){
        return (
            <div>Cart is empty</div>
        )
    }else{
        return (
            <>
                <CartProductsList idList={data.map(product => product.id)} />
                <Card>
                    <CardHeader title="Order Summary" />
                    <CardContent>
                        <div>
                            <Typography variant="body2">Subtotal</Typography>
                            <Typography variant="body1">${products.reduce((acc, product) => acc + product.price * product.quantity, 0)}</Typography>
                        </div>
                        <div>
                            <Typography variant="body2">Discount</Typography>
                            <Typography variant="body1">-{products.reduce((acc, product) => acc + (product.price * product.quantity) * (product.discountPercentage / 100), 0)}</Typography>
                        </div>
                        <div>
                            <Typography variant="body2">Delivery Fee</Typography>
                            <Typography variant="body1">$15</Typography>
                        </div>
                        <Divider />
                        <div>
                            <Typography variant="body1">Total</Typography>
                            <Typography variant="body1">${products.reduce((acc, product) => acc + product.price * product.quantity - (product.price * product.quantity) * (product.discountPercentage / 100), 0).toFixed(2) + 15}</Typography>
                        </div>
                    </CardContent>
                </Card>
            </>
        )
    }
};

export default CartPage;