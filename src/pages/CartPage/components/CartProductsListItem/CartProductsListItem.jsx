import Typography from "@mui/material/Typography";
import NumberSpinner from "@features/products/components/ProductCard/components/NumberSpinner.jsx";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useDispatch } from 'react-redux';
import { updateQuantity, removeItem } from '@features/cart/cartSlice.js';
import Box from '@mui/material/Box';

const CartProductsListItem = ({ product }) => {
    const dispatch = useDispatch();

    const handleQtyChange = (next) => {
        dispatch(updateQuantity({ id: product.id, quantity: next }));
    };

    const handleRemove = () => {
        dispatch(removeItem(product.id));
    };

    return (
        <Box sx={{display: 'flex', gap: 2, alignItems: 'center'}}>
            <img src={product.thumbnail || product.images?.[0]} alt={product.title} width={124} height={124} style={{objectFit: 'cover', borderRadius: 8}} />
            <Box sx={{flex: 1}}>
                <Typography variant="body1" sx={{fontWeight: 700}}>{product.title}</Typography>
                <Typography variant="body2">Stock: {product.stock}</Typography>
                <Typography variant="body2">Minimum quantity: {product.minimumOrderQuantity}</Typography>
                <Typography variant="body1" sx={{mt: 1}}>${product.price}</Typography>
            </Box>
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1}}>
                <DeleteForeverIcon onClick={handleRemove} sx={{color: 'error.main', cursor: 'pointer'}}/>
                <NumberSpinner
                    value={product.quantity}
                    min={product.minimumOrderQuantity}
                    max={product.stock}
                    onChange={handleQtyChange}
                />
            </Box>
        </Box>
    )
}

export default CartProductsListItem;