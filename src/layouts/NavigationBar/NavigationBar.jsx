import {AppBar, Toolbar, Typography, Box, InputBase, IconButton} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const NavigationBar = () => {
    return (
        <AppBar
            position="static"
            elevation={0}
            sx={{
                backgroundColor: "#fff", color: "#000", borderBottom: "1px solid #eee", px: 4,
            }}
        >
            <Toolbar sx={{display: "flex", justifyContent: "space-between"}}>
                <Box sx={{display: "flex", alignItems: "center", gap: 3}}>
                    <Typography variant="h5" sx={{fontWeight: 800}}>SHOP.CO</Typography>
                    <Box sx={{display: "flex", gap: 2, alignItems: "center"}}>
                        <Typography>Shop <KeyboardArrowDownIcon fontSize="small"/></Typography>
                        <Typography>On Sale</Typography>
                        <Typography>New Arrivals</Typography>
                        <Typography>Brands</Typography>
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        backgroundColor: "#f2f2f2",
                        borderRadius: "50px",
                        px: 2,
                        width: "100%",
                        maxWidth: 500,
                    }}
                >
                    <SearchIcon sx={{color: "#888", mr: 1}}/>
                    <InputBase
                        placeholder="Search for products..."
                        sx={{width: "100%"}}
                    />
                </Box>
                <Box sx={{display: "flex", alignItems: "center"}}>
                    <IconButton>
                        <ShoppingCartOutlinedIcon/>
                    </IconButton>
                    <IconButton>
                        <AccountCircleOutlinedIcon/>
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>);
}
export default NavigationBar;