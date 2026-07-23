import Typography from "@mui/material/Typography";
import {Image} from "@mui/icons-material";
import NumberSpinner from "@features/products/components/ProductCard/components/NumberSpinner.jsx";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useDispatch } from 'react-redux';
import { updateQuantity, removeItem } from '@features/cart/cartSlice.js';

const CartProductsListItem = ({ product }) => {
    const dispatch = useDispatch();

    const handleQtyChange = (next) => {
        dispatch(updateQuantity({ id: product.id, quantity: next }));
    };

    const handleRemove = () => {
        dispatch(removeItem(product.id));
    };

    return (
        <div style={{display: 'flex', gap: 12, alignItems: 'center'}}>
            <Image src={product.thumbnail || product.images?.[0]} alt={product.title} width={124} height={124} />
            <div style={{flex: 1}}>
                <Typography variant="body1">{product.title}</Typography>
                <Typography variant="body2">Stock: {product.stock}</Typography>
                <Typography variant="body2">Minimum quantity: {product.minimumOrderQuantity}</Typography>
                <Typography variant="body1">${product.price}</Typography>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8}}>
                <DeleteForeverIcon onClick={handleRemove} sx={{color: 'error.main', cursor: 'pointer'}}/>
                <NumberSpinner
                    value={product.quantity}
                    min={product.minimumOrderQuantity}
                    max={product.stock}
                    onChange={handleQtyChange}
                />
            </div>
        </div>
    )
}

export default CartProductsListItem;