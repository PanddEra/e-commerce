import {useGetProductsQuery} from "@app/API/baseApi.js";
import MainBanner from "@pages/HomePage/components/MainBanner";
import ProductsBlock from "@pages/HomePage/components/ProductsBlock";
import {Button, Divider} from "@mui/material";
import SecondaryBanner from "@pages/HomePage/components/SecondaryBanner/index.js";

const HomePage = () => {
    return (
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "90%", margin: "0 auto"}}>
            <MainBanner />
            <div style={{marginTop: "50px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                <ProductsBlock title="NEW ARRIVALS" hook={useGetProductsQuery} hookParams={{sortBy: "createdAt", limit: 4, skip: 0}} />
                <Button variant="outlined" sx={{margin: "50px 0 50px 0"}}>View All</Button>
                <Divider sx={{width:'100%'}}/>
            </div>
            <div style={{marginTop: "50px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                <ProductsBlock title="TOP SELLING" hook={useGetProductsQuery} hookParams={{sortBy: "rating", limit: 4, skip: 0}} />
                <Button variant="outlined" sx={{margin: "50px 0 50px 0"}}>View All</Button>
            </div>
            <SecondaryBanner />
        </div>
    )
}

export default HomePage;
