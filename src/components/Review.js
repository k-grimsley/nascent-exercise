import { Box, Button, Container, Grid, List, ListItem, ListItemText, Typography } from '@mui/material';
import React from 'react'

const Review = ({ nextStep, prevStep, values }) => {
    const Continue = e => {
        e.preventDefault();
        nextStep();
    }

    const Previous = e => {
        e.preventDefault();
        prevStep();
    }

    const { firstName, lastName, phoneNumber, address, pokemon } = values

    return (
        <Box p={5}>
            <Container component="main" maxWidth="xs">
                <div>
                    <Grid container spacing={2}>
                        <List>
                            <Grid container>
                                <Grid item xs={12}>
                                    <Typography variant="h3" gutterBottom>
                                        Almost done! <br /> Just double check your details.
                                    </Typography>
                                </Grid>
                                <Grid item xs={6} sm={6}>
                                    <ListItem>
                                        <ListItemText primary="First name" secondary={firstName} />
                                    </ListItem>
                                </Grid>
                                <Grid item xs={6} sm={6}>
                                    <ListItem>
                                        <ListItemText primary="Last name" secondary={lastName} />
                                    </ListItem>
                                </Grid>
                                <Grid item xs={6} sm={6}>
                                    <ListItem>
                                        <ListItemText primary="Phone number" secondary={phoneNumber} />
                                    </ListItem>
                                </Grid>
                                <Grid item xs={6} sm={6}>
                                    <ListItem>
                                        <ListItemText primary="Address" secondary={address} />
                                    </ListItem>
                                </Grid>
                                <ListItem>
                                    <ListItemText primary="Pokemon" secondary={pokemon} />
                                </ListItem>
                            </Grid>
                        </List>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <Button
                                    onClick={Previous}
                                    type="submit"
                                    fullWidth
                                    variant="outlined"
                                    color="primary"
                                >
                                    Previous
                                </Button>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Button
                                    onClick={Continue}
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                >
                                    Confirm &amp; Continue
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </Box>
    )
}

export default Review