import ProductsList from "@features/products/components/ProductsList";
import {useGetImageQuery, useGetProductsQuery} from "@app/API/baseApi.js";
import {Skeleton, Snackbar} from "@mui/material";

const HomePage = () => {
    const {data: products, isLoading: isLoadingProducts, error: errorProducts} = useGetProductsQuery({});
    const {data: banner, isLoading: isLoadingBanner, error: errorBanner} = useGetImageQuery({width: 600, height: 400});
    return (
        <>
            {isLoadingBanner ? (
                <Skeleton variant="rounded" width={200} height={200}></Skeleton>
            ) : (
                <img alt="banner" src={banner} />
            )}

            {isLoadingProducts ? (
                <div style={{display: 'flex', justifyContent: 'center', gap: 2}}>
                    <Skeleton variant="rounded" width={200} height={200}></Skeleton>
                    <Skeleton variant="rounded" width={200} height={200}></Skeleton>
                    <Skeleton variant="rounded" width={200} height={200}></Skeleton>
                </div>
            ) : (
                <div>
                    <ProductsList products={products.products}/>
                </div>
            )}

            {errorProducts && (
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
            {errorBanner && (
                <Snackbar
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                    open={true}
                    message="Error fetching banner. Please try again later."
                    autoHideDuration={6000}
                >
                </Snackbar>
            )}
        </>
    )
}

export default HomePage;
