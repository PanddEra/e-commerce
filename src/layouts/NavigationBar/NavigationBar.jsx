import {AppBar, Toolbar, Typography, Box, InputBase, IconButton, Menu, MenuItem, Button} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

import React from "react";
import {useGetCategoryListQuery} from "@app/API/baseApi.js";
import {useNavigate} from "react-router";

const NavigationBar = () => {
    const {data, isLoading, error} = useGetCategoryListQuery();
    const navigate = useNavigate();
    const id = React.useId();
    const buttonId = `${id}-button`;
    const menuId = `${id}-menu`;
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const categories = Array.isArray(data) ? data : (data && (data.products || data.categories) ? (data.products || data.categories) : []);

    return (
        <AppBar
            position="static"
            elevation={0}
            sx={{
                backgroundColor: "#fff", color: "#000", borderBottom: "1px solid #eee", height: 100
            }}
        >
            <Toolbar sx={{display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", height: "100%", "@media (min-width:600px)": {px: 0}}}>
                <Box sx={{display: "flex", alignItems: "center", gap: 3}}>
                    <Typography variant="h5" sx={{fontWeight: 800, cursor: 'pointer'}} onClick={() => navigate('/')}>SHOP.CO</Typography>
                    <Box sx={{display: "flex", gap: 2, alignItems: "center"}}>
                        <Button id={buttonId} aria-controls={open ? menuId : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined} onClick={handleClick} variant="text">Shop</Button>
                        <Menu
                            id={menuId}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{ 'aria-labelledby': buttonId }}
                        >
                            {categories && categories.length > 0 ? categories.map((category, index) => {
                                const name = typeof category === 'string' ? category : (category.name || String(category));
                                const idVal = typeof category === 'string' ? category : (category.id || name);
                                return (
                                    <MenuItem key={index} onClick={() => { navigate(`/category?category=${encodeURIComponent(idVal)}`); handleClose(); }}>{name}</MenuItem>
                                )
                            }) : (
                                <MenuItem disabled>Loading...</MenuItem>
                            )}
                        </Menu>
                        <Button variant="text" onClick={() => navigate('/category')}>On Sale</Button>
                        <Button variant="text" onClick={() => navigate('/category')}>New Arrivals</Button>
                        <Button variant="text" onClick={() => navigate('/category')}>Brands</Button>
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
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                const q = e.target.value;
                                if (q && q.trim()) navigate(`/category?search=${encodeURIComponent(q.trim())}`);
                            }
                        }}
                    />
                </Box>
                <Box sx={{display: "flex", alignItems: "center"}}>
                    <IconButton onClick={() => navigate('/cart')} aria-label="cart">
                        <ShoppingCartOutlinedIcon/>
                    </IconButton>
                    <IconButton onClick={() => navigate('/login')} aria-label="account">
                        <AccountCircleOutlinedIcon/>
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>);
}
export default NavigationBar;