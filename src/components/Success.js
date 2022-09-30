import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Success = ({ nextStep, prevStep, handleChange, values }) => {
    return (
        <Box p={5}>
            <Grid>
                <Grid item xs={12}>
                    <Typography variant="h3" gutterBottom>
                        Successfully submitted your details!
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Success