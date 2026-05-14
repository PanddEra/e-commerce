import {useGetCategoryListQuery} from "@app/API/baseApi.js";
import {Skeleton, Snackbar} from "@mui/material";
import {theme} from "@app/Theme/index.js";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";

const SecondaryBanner = () => {
    const {data, isLoading, error} = useGetCategoryListQuery();

    if (isLoading) {
         return (
            <Skeleton variant="rounded" width={1240} height={866}></Skeleton>
        )
    }
    if (error) {
        return (
            <>
                <Skeleton variant="rounded" width={"100%"} height={866}></Skeleton>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={true}
                    message="Error fetching banner. Please try again later."
                    autoHideDuration={5000}
                >
                </Snackbar>
            </>
        )
    }
    if (data) {
        const displayData = [];
        for (let i = 0; i < 4; i++) {
            // eslint-disable-next-line react-hooks/purity
            const randomIndex = Math.floor(Math.random() * data.length);
            displayData.push(data[randomIndex]);
        }
        return (
            <div style={{width: "100%", height: 866, marginBottom: "50px", display: "flex", justifyContent: "space-around", alignItems: "center", flexWrap: "wrap", gap: 10, backgroundColor: theme.palette.secondary.main, color: theme.palette.secondary.contrastText, borderRadius: "40px", padding: "50px 25px"}}>
                <Typography variant="h3" sx={{width: "100%", textAlign: "center", fontFamily: "IntegralCF"}}>BROWSE BY CATEGORIES</Typography>
                <Card style={{width: "23%", height: "289px", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: theme.palette.background.default, borderRadius: "20px"}}>
                    <CardActionArea sx={{width: "100%", height: "100%"}}>
                        <CardContent>
                            <Typography variant="h3">{displayData[0]}</Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card style={{width: "73%", height: "289px", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: theme.palette.background.default, borderRadius: "20px"}}>
                    <CardActionArea sx={{width: "100%", height: "100%"}}>
                        <CardContent>
                            <Typography variant="h3">{displayData[1]}</Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card style={{width: "73%", height: "289px", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: theme.palette.background.default, borderRadius: "20px"}}>
                    <CardActionArea sx={{width: "100%", height: "100%"}}>
                        <CardContent>
                            <Typography variant="h3">{displayData[2]}</Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card style={{width: "23%", height: "289px", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: theme.palette.background.default, borderRadius: "20px"}}>
                    <CardActionArea sx={{width: "100%", height: "100%"}}>
                        <CardContent>
                            <Typography variant="h3">{displayData[3]}</Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        )
    }
}

export default SecondaryBanner;
