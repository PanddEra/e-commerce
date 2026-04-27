import ProductsList from "@features/products/components/ProductsList";
import {Skeleton, Snackbar} from "@mui/material";
import PropTypes from "prop-types";

const ProductsBlock = ({title, hook, hookParams}) => {
    const {data, isLoading, error} = hook(hookParams);
    return (
        <div>
            <div style={{display: "flex", justifyContent: "center",     fontFamily: 'Integral', fontWeight: 700, fontStyle: 'bold', fontSize: "48px"}}>{title}</div>

            {isLoading ? (
                <>
                    <Skeleton variant="rounded" width={295} height={400}></Skeleton>
                    <Skeleton variant="rounded" width={295} height={400}></Skeleton>
                    <Skeleton variant="rounded" width={295} height={400}></Skeleton>
                    <Skeleton variant="rounded" width={295} height={400}></Skeleton>
                </>
            ) : <ProductsList products={data.products}/>}

            {error && (
                <Snackbar
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                    open={true}
                    message="Error fetching products. Please try again later."
                    autoHideDuration={6000}
                >
                </Snackbar>
            )}
        </div>
    )
}
PropTypes.ProductsBlock = {
    title: PropTypes.string.isRequired,
    hook: PropTypes.func.isRequired,
    hookParams: PropTypes.object
}

export default ProductsBlock;
