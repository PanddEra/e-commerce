const DescriptionTab = ({product})  => {
    return (
        <div style={{display: "flex", flexDirection: "column", gap: "20px"}}>
            <div>
                <h3>Description</h3>
                <p>{product.description}</p>
            </div>
            <div>
                <h3>Stock</h3>
                <p>{product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}</p>
            </div>
            <div>
                <h3>Tags</h3>
                <div style={{display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
                    {product.tags.map((tag) => {
                        return <span style={{
                            padding: "5px 10px",
                            backgroundColor: "#f0f0f0",
                            borderRadius: "5px",
                            fontSize: "12px"
                        }}>{tag}</span>;
                    })}
                </div>
            </div>
        </div>
    )
}

export default DescriptionTab;