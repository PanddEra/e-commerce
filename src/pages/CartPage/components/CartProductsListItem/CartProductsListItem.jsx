import Typography from "@mui/material/Typography";
import {Image} from "@mui/icons-material";
import NumberSpinner from "@features/products/components/ProductCard/components/NumberSpinner.jsx";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const CartProductsListItem = ({ product }) => {
    return (
        <div>
            <Image src={product.thumbnail} alt={product.title} width={124} height={124} />
            <div>
                <Typography variant="body1">{product.title}</Typography>
                <Typography variant="body2">Stock: {product.stock}</Typography>
                <Typography variant="body2">Minimum quantity: {product.minimumOrderQuantity}</Typography>
                <Typography variant="body1">${product.price}</Typography>
            </div>
            <div>
                <DeleteForeverIcon sx={{backgroundColor: 'error.main'}}/>
                <NumberSpinner
                    value={product.quantity}
                    min={product.minimumOrderQuantity}
                    max={product.stock}
                />
            </div>
        </div>
    )
}

export default CartProductsListItem;