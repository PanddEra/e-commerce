import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useState } from 'react';

import DescriptionTab from '@pages/ProductDetailsPage/components/Tabs/components/DescriptionTab';
import RatingTab from '@pages/ProductDetailsPage/components/Tabs/components/RatingTab';
import FAQTab from '@pages/ProductDetailsPage/components/Tabs/components/FAQTab';

const ProductDetailsTabs = ({ product }) => {
    const [value, setValue] = useState(0);

    return (
        <Box sx={{ width: '100%' }}>
            <Tabs
                sx={{
                    borderBottom: 1,
                    borderColor: 'divider',
                    mb: 2,
                }}
                value={value}
                variant="fullWidth"
                onChange={(_, newValue) => setValue(newValue)}
            >
                <Tab label="Product Details" />
                <Tab label="Rating & Reviews" />
                <Tab label="FAQs" />
            </Tabs>

            {value === 0 && <DescriptionTab product={product} />}
            {value === 1 && <RatingTab product={product} />}
            {value === 2 && <FAQTab product={product} />}
        </Box>
    );
};

export default ProductDetailsTabs;