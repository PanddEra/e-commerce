import {Container, Rating, Skeleton, Snackbar} from "@mui/material";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import reviews from "./reviews.js"

const ReviewsBlock = ({title, hook, hookParams}) => {
    const reviews =
    return (
        <div>
            <div style={{
                display: "flex",
                justifyContent: "center",
                fontFamily: 'Integral',
                fontWeight: 700,
                fontStyle: 'bold',
                fontSize: "48px"
            }}>{title}</div>

            {isLoading ? (
                <>
                    <Skeleton variant="rounded" width={400} height={250}></Skeleton>
                    <Skeleton variant="rounded" width={400} height={250}></Skeleton>
                    <Skeleton variant="rounded" width={400} height={250}></Skeleton>
                    <Skeleton variant="rounded" width={400} height={250}></Skeleton>
                </>
            ) : (
                <Container sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    gap: 2,
                    flexWrap: "wrap"
                }}>
                    {reviews.map((review) => (
                            <Card key={review.id}
                                  style={{
                                      width: "400px",
                                      height: "250px",
                                  }}
                            >
                                <Rating name="read-only" value={review.rating} precision={1} readOnly/>
                                {review?.reviewerName || "Anonymous"}
                                {review?.comment || "No comment"}
                            </Card>
                        ))
                    }
                </Container>
            )

            }

            {error && (
                <Snackbar
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                    open={true}
                    message="Error fetching reviews. Please try again later."
                    autoHideDuration={6000}
                >
                </Snackbar>
            )}
        </div>
    )
}
PropTypes.ReviewsBlock = {
    title: PropTypes.string.isRequired,
    hook: PropTypes.func.isRequired,
    hookParams: PropTypes.object
}

export default ReviewsBlock;
