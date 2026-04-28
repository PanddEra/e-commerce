import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay, Navigation} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import { Box, Card, Typography, Rating } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { reviews } from "./reviews.js";

const ReviewsBlock = ({ title }) => {
    return (
        <Box sx={{ p: 5, width: "100%"}}>
            <Typography sx={{ fontSize: 28, fontWeight: 800, mb: 4 }}>
                {title}
            </Typography>

            <Swiper
                modules={[Navigation, Autoplay]}
                navigation
                loop
                spaceBetween={20}
                slidesPerView={3}
                autoplay={{ delay: 3000 }}
                style={{
                    "--swiper-navigation-color": "rgb(0 0 0 / 0.28)"
                }}
            >
                {reviews.map((review) => (
                    <SwiperSlide key={review.id}>
                        <Card sx={{
                            p: 3,
                            borderRadius: 4,
                            border: '1px solid #eee',
                            boxShadow: 'none',
                            height: '100%'
                        }}>
                            <Rating value={review.rating} readOnly sx={{fontSize: 30}}/>

                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 2, mb: 2 }}>
                                <Typography sx={{ fontWeight: 700, fontSize: 20 }}>
                                    {review.reviewerName}
                                </Typography>
                                <CheckCircleIcon sx={{ color: '#01AB31', fontSize: 20 }} />
                            </Box>

                            <Typography sx={{ color: '#00000099', fontSize: 16, fontWeight: 400 }}>
                                {review.comment}
                            </Typography>
                        </Card>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
};

export default ReviewsBlock;