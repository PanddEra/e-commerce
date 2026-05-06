import {useGetProductByIdQuery} from "@app/API/baseApi.js";

import Footer from "@layouts/Footer";

const HomePage = () => {
    return (
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "1240px", margin: "0 auto"}}>
            
            <Footer/>
        </div>
    )
}

export default HomePage;
