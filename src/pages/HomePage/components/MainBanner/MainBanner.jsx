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
                    <Typography>
                        FIND THINGS THAT MATCHES YOUR STYLE
                    </Typography>
                    <Typography>
                        Browse through our diverse range of meticulously crafted garments, designed to bring out your
                        individuality and cater to your sense of style.
                    </Typography>
                    <Button>
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

            </Container>
        </Container>
    )
}

export default MainBanner;
