import * as React from 'react';
import { Box, Button, Typography } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';

export default function NumberSpinner({
                                          value = 0,
                                          min = 0,
                                          max = 999,
                                          step = 1,
                                      }) {
    const [valueState, setValueState] = useState(value);


    const handleDec = () => {
        const next = Math.max(min, valueState - step);
        setValueState(next);
    };

    const handleInc = () => {
        const next = Math.min(max, valueState + step);
        setValueState(next);
    };

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                borderRadius: "20px",
                bgcolor: '#f2f2f2',
                width: 'fit-content',
                height: '100%',
            }}
        >
            <Button
                onClick={handleDec}
                disabled={valueState <= min}
                sx={{
                    minWidth: 36,
                    height: 36,
                    borderRadius: '50%',
                }}
            >
                <RemoveIcon />
            </Button>

            <Typography
                sx={{
                    minWidth: 40,
                    textAlign: 'center',
                    fontWeight: 500,
                }}
            >
                {valueState}
            </Typography>

            <Button
                onClick={handleInc}
                disabled={valueState >= max}
                sx={{
                    minWidth: 36,
                    height: 36,
                    borderRadius: '50%',
                }}
            >
                <AddIcon />
            </Button>
        </Box>
    );
}