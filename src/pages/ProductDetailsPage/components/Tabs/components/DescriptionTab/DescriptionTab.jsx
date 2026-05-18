import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow
} from "@mui/material";

const DescriptionTab = ({product})  => {
    return (
        <div style={{ margin: "50px 0"}}>
            <TableContainer component={Paper}>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                Title
                            </TableCell>
                            <TableCell>{product.title}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                Stock
                            </TableCell>
                            <TableCell>{product.stock} items</TableCell>
                        </TableRow>
                        {product?.brand && (
                            <TableRow>
                                <TableCell>
                                    Brand
                                </TableCell>
                                <TableCell>{product.brand}</TableCell>
                            </TableRow>
                        )}
                        <TableRow>
                            <TableCell>
                                Warranty
                            </TableCell>
                            <TableCell>{product.warrantyInformation}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                Shipping
                            </TableCell>
                            <TableCell>{product.shippingInformation}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                Return
                            </TableCell>
                            <TableCell>{product.returnPolicy}</TableCell>
                        </TableRow>
                        <TableRow>
                        <TableCell>
                            Weight
                        </TableCell>
                        <TableCell>{product.weight} kg</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            Dimensions
                        </TableCell>
                        <TableCell>{product.dimensions.width} x {product.dimensions.height} x {product.dimensions.depth}</TableCell>
                    </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default DescriptionTab;