import FiltersBlock from "@pages/CategoryPage/components/FiltersBlock";
import {useGetProductsQuery} from "@app/API/baseApi.js";

const CategoryPage = () => {
    const {data: tags, isLoading: tagsIsLoading, error: tagsError} = useGetProductsQuery({select: "tags", limit: 200});
    const {data: maxPrice, isLoading: maxPriceIsLoading, error: maxPriceError} = useGetProductsQuery({select: "price", limit: 1, sortBy: "price", order: "desc"});
    const {data: minPrice, isLoading: minPriceIsLoading, error: minPriceError} = useGetProductsQuery({select: "price", limit: 1, sortBy: "price", order: "asc"});

    let arrTags = [];
    if(!tagsIsLoading && !tagsError) {
        tags.products.forEach(product => {
            product.tags.map(tag => {
                if (arrTags.indexOf(tag) === -1) {
                    arrTags.push(tag);
                }
            })
        })
    }
    return (
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "1240px", margin: "0 auto"}}>
            {tagsIsLoading || maxPriceIsLoading || minPriceIsLoading ? (
                <div>Loading...</div>
            ) : (
                <FiltersBlock tags={arrTags} maxPrice={maxPrice.products[0].price} minPrice={minPrice.products[0].price}/>
            )}
        </div>
    )
}

export default CategoryPage;
