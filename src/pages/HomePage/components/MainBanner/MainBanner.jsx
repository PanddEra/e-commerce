import {Button, Container, Divider} from "@mui/material";
import Typography from "@mui/material/Typography";


const MainBanner = () => {
    return (
        <Container sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(242, 240, 241, 1)"
        }}>
            <Container>
                <Container>
                    <Typography sx={{fontSize: "264px", fontWeight: "700", fontFamily: "IntegralCF, sans-serif"}}>
                        FIND THINGS THAT CURATE YOUR LIFESTYLE
                    </Typography>
                    <Typography sx={{fontSize: "16px", fontWeight: "400", fontFamily: "Satoshi, sans-serif"}}>
                        Browse through our diverse range of meticulously crafted products, designed to bring out your
                        individuality and cater to your sense of style.
                    </Typography>
                    <Button sx={{width: 210, height: 52, backgroundColor: "black", color: "white", borderRadius: "62px"}}>
                        Shop Now
                    </Button>
                    <div>
                        <div>
                            <Typography>200+</Typography>
                            <Typography>International Brands</Typography>
                        </div>
                        <Divider orientation="vertical"/>
                        <div>
                            <Typography>2,000+</Typography>
                            <Typography>High-Quality Products</Typography>
                        </div>
                        <Divider orientation="vertical"/>
                        <div>
                            <Typography>30,000+</Typography>
                            <Typography>Happy Customers</Typography>
                        </div>
                    </div>
                </Container>
                <Container>
                </Container>
            </Container>
            <Container>
                <img src="@assets/MainBannerGroup.png" alt="Main Banner"/>
            </Container>
        </Container>
    )
}

export default MainBanner;
