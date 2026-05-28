import {Button, Chip, Divider, Skeleton, Slider, Snackbar} from "@mui/material";
import Typography from "@mui/material/Typography";
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import {theme} from "@app/Theme/index.js";
import {useState} from "react";
import {useGetCategoryListQuery} from "@app/API/baseApi.js";

const FiltersBlock = ({minPrice, maxPrice, tags}) => {
    const {data, isLoading, error} = useGetCategoryListQuery();
    const [sliderValue, setSliderValue] = useState([minPrice, maxPrice]);
    const handleSliderChange = (event, newValue) => {
        setSliderValue(newValue);
    };
    return (
        <div>
            {isLoading && (
                    <Skeleton variant="rounded" width={295} height={1220}></Skeleton>
            )}
            {error && (
                <Snackbar
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                    open={true}
                    message="Error fetching filters. Please try again later."
                    autoHideDuration={6000}
                >
                </Snackbar>
            )}
            {data && (
                <div style={{ width: "295px"}}>
                    <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                        <Typography variant="body1">Filters</Typography>
                        <Typography variant="body1"><TuneRoundedIcon /></Typography>
                    </div>
                    <Divider />
                    <Typography variant="body1">CATEGORIES:</Typography>
                    <ul style={{display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "10px", marginBottom: "20px"}}>
                        {data.map(category => (
                            <li>
                                <Button key={data.indexOf(category)} variant="body1" sx={{ cursor: "pointer" }} onClick={(e) => {
                                    if(e.target.hasAttribute("data-filters-category-select")) {
                                        e.target.removeAttribute("data-filters-category-select");
                                        e.target.style.backgroundColor = "transparent";
                                        return;
                                }
                                e.target.setAttribute("data-filters-category-select", category);
                                e.target.style.backgroundColor = theme.palette.secondary.main;
                            }}>
                                {category}
                            </Button>
                            </li>
                            ))}
                    </ul>
                    <Divider />
                    <Typography variant="body1">PRICE:</Typography>
                    <div>
                        <Slider
                            min={minPrice}
                            max={maxPrice}
                            value={sliderValue}
                            onChange={handleSliderChange}
                            valueLabelDisplay="auto"
                            attr="price-range-slider"
                        />
                    </div>
                    <Divider />
                    <Typography variant="body1">TAGS:</Typography>
                    <div>
                        {tags.map((tag) => (
                            <Chip label={tag} variant="outlined" />
                        ))}
                    </div>
                    <Divider />
                    <div>
                        <Button variant="button"
                                sx={{backgroundColor: 'primary.main', color: 'white', width: '100%'}}>Apply filters</Button>
                    </div>
                </div>
            )}
        </div>
    )
}
export default FiltersBlock;