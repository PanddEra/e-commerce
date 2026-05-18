import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {Box, Card, Container, Rating, Typography} from "@mui/material";
import React from "react";

const RatingTab = ({product}) => {
    return (
        <div style={{ margin: "50px 0", display: "flex", flexDirection: "column", gap: "20px" }}>
            {product.reviews.map((review) => (
                <Container key={review.id}>
                    <Card sx={{
                        p: 3,
                        borderRadius: "20px",
                        border: '1px solid #eee',
                        boxShadow: 'none',
                        height: '100%',
                        background: "none",
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
                        <Typography sx={{ color: '#00000099', fontSize: 16, fontWeight: 400, mt: 2 }}>
                            {new Date(review.date).toLocaleDateString()}
                        </Typography>
                    </Card>
                </Container>
            ))}
        </div>
    );
}

export default RatingTab;