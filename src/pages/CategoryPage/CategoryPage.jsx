import FiltersBlock from "@pages/CategoryPage/components/FiltersBlock";
import {useGetProductsQuery} from "@app/API/baseApi.js";
import ProductsList from "@features/products/components/ProductsList";
import {Pagination} from "@mui/material";
import {useEffect, useState} from "react";

const CategoryPage = () => {
    const searchParams = new URLSearchParams(window.location.search);
    useEffect(() => {
        if (!searchParams.get("page")) {
            searchParams.set("page", "1");
    }});
    const onFiltersSubmit = (data) => {
        if (data.tags.length > 0) {
            searchParams.set("tags", data.tags.join(","));
        } else {
            searchParams.delete("tags");
        }
        if (data.category) {
            searchParams.set("category", data.category);
        }
        searchParams.set("priceMin", data.minPrice);
        searchParams.set("priceMax", data.maxPrice);
        window.location.search = searchParams.toString();
    }
    const [productQueryParams, setProductQueryParams] = useState({limit: 30, skip: (Number(searchParams.get("page") - 1) * 30)});
    const {data: tags, isLoading: tagsIsLoading, error: tagsError} = useGetProductsQuery({select: "tags", limit: 200});
    const {data: maxPrice, isLoading: maxPriceIsLoading, error: maxPriceError} = useGetProductsQuery({
        select: "price",
        limit: 1,
        sortBy: "price",
        order: "desc"
    });
    const {data: minPrice, isLoading: minPriceIsLoading, error: minPriceError} = useGetProductsQuery({
        select: "price",
        limit: 1,
        sortBy: "price",
        order: "asc"
    });
    const {data: products, isLoading: productsIsLoading, error: productsError} = useGetProductsQuery(productQueryParams);

    let arrTags = [];
    if (!tagsIsLoading && !tagsError) {
        tags.products.forEach(product => {
            product.tags.map(tag => {
                if (arrTags.indexOf(tag) === -1) {
                    arrTags.push(tag);
                }
            })
        })
    }
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "1240px",
            margin: "0 auto"
        }}>
            {tagsIsLoading || maxPriceIsLoading || minPriceIsLoading || productsIsLoading ? (
                <div>Loading...</div>
            ) : (
                <>
                    <div style={{position: "sticky", top: "0", alignSelf: "flex-start", marginRight: "10px"}}>
                        <FiltersBlock tags={arrTags.sort()} maxPrice={Math.ceil(maxPrice.products[0].price)}
                                      minPrice={Math.floor(minPrice.products[0].price)}
                                      onSubmit={onFiltersSubmit}/>
                    </div>
                    <div>
                        <ProductsList products={products.products}/>
                        <Pagination sx={{mt: 2, display: "flex", justifyContent: "center", alignItems: "center"}} count={Math.ceil(products.total/productQueryParams.limit)} page={Number(searchParams.get("page"))} onClick={(e) => {
                            searchParams.set("page", e.target.closest("button").textContent);
                            window.location.search = searchParams.toString();
                            console.log(Number(searchParams.get("page")) * 30);
                            setProductQueryParams({limit: 30, skip: (Number(searchParams.get("page") - 1) * 30)});
                        }}/>
                    </div>
                </>
            )}
        </div>
    )
}

export default CategoryPage;
