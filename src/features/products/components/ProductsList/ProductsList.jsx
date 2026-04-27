import ProductsListItem from './ProductsListItem';
import {Grid} from "@mui/material";
import PropTypes from 'prop-types';

const ProductsList = ({products}) => {
    return (
        <Grid container spacing={3} sx={{width:'100%'}}>
            {products.map(product => (
                    <Grid sx={{xs: 12, sm: 6, md: 4, lg: 3}} item key={product.id}>
                        <ProductsListItem product={product} />
                    </Grid>
                ))
            }
        </Grid>
    )
}
ProductsList.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            discountPercentage: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired,
            thumbnail: PropTypes.string.isRequired
            }
        )
    )
}

export default ProductsList;