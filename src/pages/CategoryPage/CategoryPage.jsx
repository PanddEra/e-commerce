import FiltersBlock from "@pages/CategoryPage/components/FiltersBlock";
import {useGetProductsQuery} from "@app/API/baseApi.js";
import ProductsList from "@features/products/components/ProductsList";
import {Pagination} from "@mui/material";
import {useEffect, useState} from "react";

const CategoryPage = () => {
    const searchParams = new URLSearchParams(window.location.search);
    const currentPage = Number(searchParams.get('page') || '1');

    useEffect(() => {
        // ensure URL has page param without forcing a reload
        if (!searchParams.get("page")) {
            searchParams.set("page", "1");
            // replace the current history entry so the URL shows page=1
            window.history.replaceState(null, '', '?' + searchParams.toString());
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onFiltersSubmit = (data) => {
        const next = new URLSearchParams(window.location.search);
        if (data.tags?.length > 0) {
            next.set("tags", data.tags.join(","));
        } else {
            next.delete("tags");
        }
        if (data.category) {
            next.set("category", data.category);
        } else {
            next.delete("category");
        }
        if (data.minPrice != null) next.set("priceMin", String(data.minPrice));
        if (data.maxPrice != null) next.set("priceMax", String(data.maxPrice));
        // navigate
        window.location.search = next.toString();
    }

    const [productQueryParams, setProductQueryParams] = useState({limit: 30, skip: Math.max(0, (currentPage - 1) * 30)});

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
    if (!tagsIsLoading && !tagsError && tags && Array.isArray(tags.products)) {
        tags.products.forEach(prod => {
            (prod.tags || []).forEach(tag => {
                if (arrTags.indexOf(tag) === -1) arrTags.push(tag);
            })
        })
    }

    const totalPages = products && products.total ? Math.max(1, Math.ceil(products.total / productQueryParams.limit)) : 1;

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
                        <FiltersBlock tags={arrTags.sort()} maxPrice={Math.ceil((maxPrice?.products?.[0]?.price) || 0)}
                                      minPrice={Math.floor((minPrice?.products?.[0]?.price) || 0)}
                                      onSubmit={onFiltersSubmit}/>
                    </div>
                    <div>
                        <ProductsList products={products?.products || []}/>
                        <Pagination
                            sx={{mt: 2, display: "flex", justifyContent: "center", alignItems: "center"}}
                            count={totalPages}
                            page={currentPage}
                            onChange={(e, value) => {
                                const next = new URLSearchParams(window.location.search);
                                next.set('page', String(value));
                                // update URL to reflect page and reload
                                window.location.search = next.toString();
                                // update local params for immediate query (if page reload prevented)
                                setProductQueryParams({limit: 30, skip: Math.max(0, (value - 1) * 30)});
                            }}
                        />
                    </div>
                </>
            )}
        </div>
    )
}

export default CategoryPage;
