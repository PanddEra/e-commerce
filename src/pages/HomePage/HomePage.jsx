import ProductsList from "@features/products/components/ProductsList";
import {useGetProductsQuery} from "@app/API/baseApi.js";
import {Skeleton, Snackbar} from "@mui/material";

const HomePage = () => {
    const { data, isLoading, error } = useGetProductsQuery({})

    if (isLoading) return (
        <>
            <Skeleton variant="rounded" width={200} height={200}></Skeleton>
            <Skeleton variant="rounded" width={200} height={200}></Skeleton>
            <Skeleton variant="rounded" width={200} height={200}></Skeleton>
        </>
    )
    if (error) return (
        <Snackbar
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            open={true}
            autoHideDuration={5000}
            message="Error fetching products. Please try again later."
        />
    )
    return (
        <>
            <div>
                <ProductsList products={data.products}/>
            </div>
        </>
     )
}

export default HomePage;
