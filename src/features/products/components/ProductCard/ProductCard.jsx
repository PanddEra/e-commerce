import React, {useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './styles.css';

import {FreeMode, Navigation, Thumbs} from 'swiper/modules';
import CardContent from "@mui/material/CardContent";
import {CardActions, Chip, Rating} from "@mui/material";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

function ProductCard({product}) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <>
            <div style={{display: "flex", gap: 20, width: "50%"}}>
                <Swiper
                    spaceBetween={10}
                    navigation
                    thumbs={{swiper: thumbsSwiper}}
                    modules={[Navigation, Thumbs]}
                    style={{width: 444}}
                >
                    {product.images.map(image => {
                        return (
                            <SwiperSlide>
                                <img src={image} alt={product.name}/>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
                <Swiper
                    onSwiper={setThumbsSwiper}
                    direction={'vertical'}
                    spaceBetween={10}
                    slidesPerView={4}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper"
                    style={{width: "152px", height: "168px"}}
                >
                    {product.images.map(image => {
                        return (
                            <SwiperSlide>
                                <img src={image} alt={product.name}/>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>

            <Card sx={{ width: "50%", display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                <CardContent>
                    <Typography sx={{fontFamily: "IntegralCF, sans-serif", fontSize: 40, fontWeight: 700}}>
                        {product.name}
                    </Typography>
                    <Typography sx={{
                        color: 'text.secondary',
                        height: '19px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1
                    }}>
                        <Rating name="read-only" value={product.rating} precision={0.1} readOnly/> {product.rating}/5
                    </Typography>
                    <Typography sx={{
                        fontFamily: 'Satoshi',
                        fontWeight: 700,
                        fontStyle: 'bold',
                        fontSize: '32px',
                        display: 'flex',
                        alignItems: 'center',
                    }}>
                        {product.discountPercentage > 0.4 ?
                            <span>
                                ${((product.price * (1 - product.discountPercentage / 100)).toFixed(2))}
                                <s style={{color: "#00000066"}}>${product.price.toFixed(2)}</s>
                                <Chip color='error' sx={{ml: 1, height:'28px', width: '65px', fontSize: '12px'}} variant='outlined' label={"-" + product.discountPercentage.toFixed(0) + "%"}/></span>
                            : <span>${product.price}</span>
                        }
                    </Typography>
                </CardContent>
                <CardActions>

                </CardActions>
            </Card>

        </>
    );
}

export default ProductCard;