import {useGetProductsQuery} from "@app/API/baseApi.js";
import MainBanner from "@pages/HomePage/components/MainBanner";
import ProductsBlock from "@pages/HomePage/components/ProductsBlock";
import {Button, Divider} from "@mui/material";
import SecondaryBanner from "@pages/HomePage/components/SecondaryBanner";
import ReviewsBlock from "@pages/HomePage/components/ReviewsBlock";

const HomePage = () => {
    return (
        <div id="MYDIV" style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "1240px", margin: "0 auto"}}>
            <MainBanner />
            <div style={{marginTop: "50px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                <ProductsBlock title="NEW ARRIVALS" hook={useGetProductsQuery} hookParams={{sortBy: "createdAt", limit: 4, skip: 0}} />
                <Button variant="outlined" sx={{margin: "50px 0 50px 0", width: "218px", height: "52px"}}>View All</Button>
            </div>
            <Divider sx={{width:'100%'}}/>
            <div style={{marginTop: "50px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                <ProductsBlock title="TOP RATED" hook={useGetProductsQuery} hookParams={{sortBy: "rating", limit: 4, skip: 0}} />
                <Button variant="outlined" sx={{margin: "50px 0 50px 0", width: "218px", height: "52px"}}>View All</Button>
            </div>
            <SecondaryBanner />
            <ReviewsBlock title="OUR HAPPY CUSTOMERS" />
        </div>
    )
}

export default HomePage;
