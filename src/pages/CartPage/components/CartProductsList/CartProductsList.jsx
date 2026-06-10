import Card from "@mui/material/Card";
import CartProductsListItem from "@pages/CartPage/components/CartProductsListItem";
import {Divider} from "@mui/material";

const CartProductsList = ({ products }) => {
    return (
        <Card sx={{width: 715, display: "flex", flexDirection: "column", gap: "24px", padding: "20px 24px 20px 24px"}}>
            {products.map(product => (
                <>
                    <CartProductsListItem key={product.id} product={product} />
                    <Divider/>
                </>
            ))}
        </Card>
    )
}

export default CartProductsList;