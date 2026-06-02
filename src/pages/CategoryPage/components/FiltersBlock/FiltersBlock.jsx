import {Button, Chip, Divider, Skeleton, Slider, Snackbar} from "@mui/material";
import Typography from "@mui/material/Typography";
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import {theme} from "@app/Theme/index.js";
import {useState} from "react";
import {useGetCategoryListQuery} from "@app/API/baseApi.js";

const FiltersBlock = ({minPrice, maxPrice, tags, onSubmit}) => {
    const {data, isLoading, error} = useGetCategoryListQuery();
    const [sliderValue, setSliderValue] = useState([minPrice, maxPrice]);
    const [category, setCategory] = useState();
    const [selectedTags, setSelectedTags] = useState([]);
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
                <div style={{width: "315px", border: `1px solid ${theme.palette.divider}`, borderRadius: "20px", padding: "18px"}}>

                    <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px"}}>
                        <Typography variant="body1">Filters</Typography>
                        <Typography variant="body1"><TuneRoundedIcon/></Typography>
                    </div>
                    <Divider/>
                    <Typography variant="body1" sx={{mb: 2, mt: 2}}>Price:</Typography>
                    <div style={{marginBottom: "10px"}}>
                        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px"}}>
                            <label htmlFor="min-price"><Typography variant="body2">From:</Typography></label>
                            <input style={{
                                width: 100,
                                height: 48,
                                borderRadius: 64,
                                padding: "12px 16px",
                                border: `1px solid ${theme.palette.divider}`,
                            }} id="min-price" type="number" min={minPrice} max={maxPrice} value={sliderValue[0]}
                                   onChange={(e) => setSliderValue([Number(e.target.value), sliderValue[1]])}/>
                            <label htmlFor="max-price"><Typography variant="body2">To:</Typography></label>
                            <input style={{
                                width: 100,
                                height: 48,
                                borderRadius: 64,
                                padding: "12px 16px",
                                border: `1px solid ${theme.palette.divider}`,
                            }} id="max-price" type="number" min={minPrice} max={maxPrice} value={sliderValue[1]}
                                   onChange={(e) => setSliderValue([sliderValue[0], Number(e.target.value)])}/>
                        </div>
                        <div style={{padding: "0 10px"}}>
                        <Slider
                            min={minPrice}
                            max={maxPrice}
                            value={sliderValue}
                            onChange={handleSliderChange}
                            valueLabelDisplay="auto"
                            attr="price-range-slider"
                        />
                            </div>
                    </div>
                    <Divider/>
                    <Typography variant="body1" sx={{mb: 2, mt: 2}}>Categories:</Typography>
                    <ul data-category-list-filters style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: "10px",
                        marginBottom: "20px",
                        paddingLeft: "18px"
                    }}>
                        {data.map(category => (
                            <li key={data.indexOf(category)}>
                                <Button variant="body1" sx={{
                                    cursor: "pointer",
                                    border: "1px solid",
                                    borderColor: theme.palette.primary.main
                                }} onClick={(e) => {
                                    if (e.target.hasAttribute("data-filters-category-select")) {
                                        e.target.removeAttribute("data-filters-category-select");
                                        e.target.style.backgroundColor = "transparent";
                                        document.querySelectorAll('[data-category-list-filters] button:not([data-filters-category-select])').forEach(button => {
                                            button.style.color = theme.palette.text.primary;
                                            button.style.borderColor = theme.palette.primary.main;
                                            button.disabled = false;
                                        })
                                        setCategory(null);
                                        return;
                                    }
                                    e.target.setAttribute("data-filters-category-select", category);
                                    e.target.style.backgroundColor = theme.palette.divider;
                                    document.querySelectorAll('[data-category-list-filters] button:not([data-filters-category-select])').forEach(button => {
                                        button.style.color = theme.palette.text.secondary;
                                        button.style.borderColor = theme.palette.divider;
                                        button.disabled = true;
                                    })
                                    setCategory(category);
                                }}>
                                    {category}
                                </Button>
                            </li>
                        ))}
                    </ul>
                    <Divider/>
                    <Typography variant="body1" sx={{mb: 2, mt: 2}}>Tags:</Typography>
                    <div style={{display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "space-between", marginTop: "10px", marginBottom: "20px"}}>
                        {tags.map((tag) => (
                            <Chip key={tags.indexOf(tag)} label={tag} variant="outlined" sx={{borderColor: theme.palette.divider}}
                                  onClick={(e) => {
                                      const chip = e.target.closest("div");
                                      if (chip.hasAttribute("data-filters-tag-select")) {
                                          chip.removeAttribute("data-filters-tag-select");
                                          chip.style.backgroundColor = "transparent";
                                          chip.style.borderColor = theme.palette.divider;
                                          setSelectedTags(selectedTags.filter(selectedTag => selectedTag !== tag));
                                          return;
                                      }
                                      chip.setAttribute("data-filters-tag-select", tag);
                                      chip.style.backgroundColor = theme.palette.background.paper;
                                      chip.style.borderColor = theme.palette.primary.main;
                                      setSelectedTags([...selectedTags, tag]);
                                  }}/>
                        ))}
                    </div>
                    <Divider/>
                    <div style={{marginTop: "20px"}}>
                        <Button variant="button"
                                sx={{backgroundColor: 'primary.main', color: 'white', width: '100%', height: '40px'}} onClick={() => {onSubmit({minPrice: sliderValue[0], maxPrice: sliderValue[1], category: category, tags: selectedTags})}}>Apply
                            filters</Button>
                    </div>
                </div>
            )}
        </div>
    )
}
export default FiltersBlock;