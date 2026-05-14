import {Button, Container, Divider} from "@mui/material";
import Typography from "@mui/material/Typography";
import {useTheme} from "@mui/material";
import MainBannerGroup from '@assets/MainBannerGroup.png';

const MainBanner = () => {
    const theme = useTheme();
    return (
        <div style={{width: "100%", height: 663, margin: 0, padding: 0, display: "flex", flexDirection: "column", alignItems: "center"}}>
            <div style={{width: "100%", height: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: theme.palette.secondary.main}}>
                <Container sx={{display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 3, margin: "auto"}}>
                    <Typography variant="h1" sx={{fontFamily: "IntegralCF"}}>
                        FIND THINGS THAT CURATE YOUR LIFESTYLE
                    </Typography>
                    <Typography variant="body2">
                        Browse through our diverse range of meticulously crafted products, designed to bring out your
                        individuality and cater to your sense of style.
                    </Typography>
                    <Button variant="button" sx={{width: 210, height: 52, backgroundColor: "black", color: "white", borderRadius: "62px"}}>
                        Shop Now
                    </Button>
                    <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                        <div>
                            <Typography variant="h3" sx={{fontSize: "40px"}}>200+</Typography>
                            <Typography variant="body2">International Brands</Typography>
                        </div>
                        <Divider variant="divider" orientation="vertical" flexItem />
                        <div>
                            <Typography variant="h3" sx={{fontSize: "40px"}}>2,000+</Typography>
                            <Typography variant="body2">High-Quality Products</Typography>
                        </div>
                        <Divider variant="divider" orientation="vertical" flexItem />
                        <div>
                            <Typography variant="h3" sx={{fontSize: "40px"}}>30,000+</Typography>
                            <Typography variant="body2">Happy Customers</Typography>
                        </div>
                    </div>
                </Container>
                <Container>
                    <img src={MainBannerGroup} alt="Main Banner"/>
                </Container>
            </div>
            <div style={{width: "100%", backgroundColor: theme.palette.primary.main , height: 122, color: theme.palette.primary.contrastText, display: 'flex', justifyContent: 'space-around', alignItems: 'center', gap: 10}}>
                <Typography variant="h3" sx={{fontSize: "33px", fontFamily: "IntegralCF", textAlign: "center"}}>BEAUTY</Typography>
                <Typography variant="h3" sx={{fontSize: "33px", fontFamily: "IntegralCF", textAlign: "center"}}>ELECTRONICS</Typography>
                <Typography variant="h3" sx={{fontSize: "33px", fontFamily: "IntegralCF", textAlign: "center"}}>CLOTHES</Typography>
                <Typography variant="h3" sx={{fontSize: "33px", fontFamily: "IntegralCF", textAlign: "center"}}>ACCESSORIES</Typography>
                <Typography variant="h3" sx={{fontSize: "33px", fontFamily: "IntegralCF", textAlign: "center"}}>VEHICLES</Typography>
            </div>
        </div>
    )
}

export default MainBanner;
