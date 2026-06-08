import Card from "@mui/material/Card";
import CartProductsListItem from "@pages/CartPage/components/CartProductsListItem";
import {Divider} from "@mui/material";

const CartProductsList = ({ idList }) => {
    return (
        <Card sx={{width: 715, display: "flex", flexDirection: "column", gap: "24px", padding: "20px 24px 20px 24px"}}>
            {idList.map(id => (
                <>
                    <CartProductsListItem key={id} id={id} />
                    <Divider/>
                </>
            ))}
        </Card>
    )
}

export default CartProductsList;