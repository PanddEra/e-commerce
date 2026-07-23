import Card from "@mui/material/Card";
import CartProductsListItem from "@pages/CartPage/components/CartProductsListItem";
import {Divider, Typography, Box, Button} from "@mui/material";

const CartProductsList = ({ products }) => {
    if (!products || products.length === 0) {
        return (
            <Card sx={{width: 715, display: "flex", flexDirection: "column", gap: "24px", padding: "40px", alignItems: 'center'}}>
                <Typography variant="h3">Your cart is empty</Typography>
                <Typography variant="body2" color="text.secondary">Looks like you haven't added anything to your cart yet.</Typography>
                <Box sx={{mt: 2}}>
                    <Button component="a" href="/" variant="contained" color="primary" sx={{height: 40}}>Shop products</Button>
                </Box>
            </Card>
        )
    }

    return (
        <Card sx={{width: 715, display: "flex", flexDirection: "column", gap: "24px", padding: "20px 24px 20px 24px"}}>
            {products.map((product, idx) => (
                <Box key={product.id}>
                    <CartProductsListItem product={product} />
                    {idx < products.length - 1 && <Divider sx={{my: 2}} />}
                </Box>
            ))}
        </Card>
    )
}

export default CartProductsList;