const RatingTab = ({product}) => {
    return (
        <div>
            <h3>Rating & Reviews</h3>
            <div>
                <p>Rating: {product.rating}/5</p>
                <p>Reviews: {product.reviews ? product.reviews.length : 0}</p>
            </div>
        </div>
    );
}

export default RatingTab;