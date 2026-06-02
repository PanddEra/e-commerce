import {Button, CardActions, FormControl, TextField, CircularProgress, Snackbar} from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {useLoginUserMutation} from "@app/API/baseApi.js";
import {useState} from "react";

const LoginPage = () => {
    const [loginUser, {isLoading, isError}] = useLoginUserMutation()
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const username = data.get('username');
        const password = data.get('password');

        try {
            const result = await loginUser({username, password}).unwrap();

            if (result.accessToken) {
                localStorage.setItem('token', result.accessToken);
                setIsLoggedIn(true);
            }
        } catch (error) {
            console.error(error);
            setIsLoggedIn(false);
        }
    }
    const handleLogout = () => {
        localStorage.removeItem('token');
        location.reload();
        setIsLoggedIn(false);
    }
    if (isLoggedIn) {
        return (
            <Card sx={{
                display: "flex", flexDirection: "column", justifyContent: "center",
                alignItems: "center", width: "100%", height: "500px",
                margin: "100px auto", padding: "30px", borderRadius: "20px"
            }}>
                <CardContent>
                    <Typography variant="h3" component="div">
                        You are already logged in
                    </Typography>
                </CardContent>
                <CardActions sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column"
                }}>
                    <Button
                        type="submit"
                        sx={{width: "100%", height: "60px"}}
                        variant="contained"
                        disabled={isLoading}
                        onClick={handleLogout}
                    >
                        {isLoading ? <CircularProgress size={24} color="inherit"/> : 'Logout'}
                    </Button>
                </CardActions>
            </Card>
        )
    } else {
        return (
            <Card sx={{
                display: "flex", flexDirection: "column", justifyContent: "center",
                alignItems: "center", width: "100%", height: "500px",
                margin: "100px auto", padding: "30px", borderRadius: "20px"
            }}>
                <CardContent>
                    <Typography variant="h3" component="div">
                        Login to your account
                    </Typography>
                </CardContent>
                <CardActions sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column"
                }}>
                    <form onSubmit={handleSubmit} style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 20,
                        width: "80%",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }}>

                        <FormControl sx={{width: "100%"}}>
                            <TextField name="username" id="username" variant="outlined" required={true}
                                       label="Username"/>
                        </FormControl>

                        <FormControl sx={{width: "100%"}}>
                            <TextField name="password" id="password" variant="outlined" type="password" required={true}
                                       label="Password"/>
                        </FormControl>

                        {isError && (
                            <>
                                <Typography color="error" variant="body2">
                                    Login failed. Please check your credentials.
                                </Typography>
                                <Snackbar
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'center',
                                    }}
                                    open={true}
                                    message="Login failed. Please check your credentials."
                                    autoHideDuration={6000}
                                >
                                </Snackbar>
                            </>
                        )}
                        <Button
                            type="submit"
                            sx={{width: "100%", height: "60px"}}
                            variant="contained"
                            disabled={isLoading}
                        >
                            {isLoading ? <CircularProgress size={24} color="inherit"/> : 'Login'}
                        </Button>

                    </form>
                </CardActions>
            </Card>
        );
    }
}
export default LoginPage;