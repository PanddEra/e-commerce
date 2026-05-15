import {useGetProductByIdQuery} from "@app/API/baseApi.js";
import ProductCard from "@features/products/components/ProductCard";
import {useParams} from "react-router";
import ProductDetailsTabs from "@pages/ProductDetailsPage/components/Tabs";


const ProductDetailsPage = () => {
    const params = useParams();
    const {data, isLoading, error} = useGetProductByIdQuery(params.id);
    if (isLoading) {
        return (
            <div>Loading...</div>
        )
    }
    if (error) {
        return (
            <div>Error: {error?.message}</div>
        )
    }
    if (data) {
        return (
            <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "1240px", margin: "0 auto"}}>
                <ProductCard product={data}></ProductCard>
                <ProductDetailsTabs product={data}></ProductDetailsTabs>
            </div>
        )
    }
}

export default ProductDetailsPage;
