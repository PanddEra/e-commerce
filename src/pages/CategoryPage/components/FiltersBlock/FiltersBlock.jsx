import {Button, Chip, Divider, Skeleton, Slider, Snackbar} from "@mui/material";
import Typography from "@mui/material/Typography";
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import {theme} from "@app/Theme/index.js";
import {useState} from "react";

const FiltersBlock = ({hook, hookParams, minPrice, maxPrice, tags}) => {
    const [data, isLoading, error] = hook(hookParams);
    const [sliderValue, setSliderValue] = useState([20, 37]);
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
                <>
                    <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                        <Typography variant="body1">Filters</Typography>
                        <Typography variant="body1"><TuneRoundedIcon /></Typography>
                    </div>
                    <Divider />
                    <div>
                        {data.map(category => (
                            <Button key={data.indexOf(category)} variant="body1" sx={{ cursor: "pointer" }} onClick={(e) => {
                                e.target.setAttribute("data-filters-category-select", category);
                                e.target.style.backgroundColor = theme.palette.secondary.main;
                            }}>
                                {category}
                            </Button>
                        ))}
                    </div>
                    <Divider />
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
                </>
            )}
        </div>
    )
}
export default FiltersBlock;