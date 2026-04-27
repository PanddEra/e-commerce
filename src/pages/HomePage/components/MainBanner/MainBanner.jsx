import {useGetImageQuery} from "@app/API/baseApi.js";
import {Skeleton, Snackbar} from "@mui/material";

const MainBanner = () => {
    const {data, isLoading, error} = useGetImageQuery({width: document.documentElement.clientWidth, height: document.documentElement.clientHeight * 0.7});

    if (isLoading) {
        return (
            <Skeleton variant="rounded" width={document.documentElement.clientWidth} height={document.documentElement.clientHeight * 0.7}></Skeleton>
        )
    }
    if (error) {
        return (
            <>
                <Skeleton variant="rounded" width={document.documentElement.clientWidth} height={document.documentElement.clientHeight * 0.7}></Skeleton>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                    open={true}
                    message="Error fetching banner. Please try again later."
                    autoHideDuration={1000}
                >
                </Snackbar>
            </>
        )
    }
    if (data) {
        return (
            <img alt="banner" src={URL.createObjectURL(data)} />
        )
    }
}

export default MainBanner;
