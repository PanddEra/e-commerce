import {useGetProductByIdQuery, useGetProductsQuery} from "@app/API/baseApi.js";
import ProductCard from "@features/products/components/ProductCard";
import {useParams} from "react-router";
import ProductDetailsTabs from "@pages/ProductDetailsPage/components/Tabs";
import ProductsBlock from "@pages/HomePage/components/ProductsBlock/index.js";


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
            <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "1240px", margin: "0 auto 50px auto"}}>
                <ProductCard product={data}></ProductCard>
                <ProductDetailsTabs product={data}></ProductDetailsTabs>
                <ProductsBlock title="YOU MIGHT ALSO LIKE" hook={useGetProductsQuery} hookParams={{category: data.category, sortBy: "rating", order: "desc", limit: 4, skip: 0}} />
            </div>
        )
    }
}

export default ProductDetailsPage;
