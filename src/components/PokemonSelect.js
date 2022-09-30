import { Autocomplete, Box, Button, Container, Grid, TextField, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import axios from 'axios'
import { Controller, useForm } from "react-hook-form";

const PokemonSelect = ({ nextStep, prevStep, handleChange, values }) => {

    const { handleSubmit, register, reset, control } = useForm()

    const onSubmit = (data) => {
        values.pokemon = data.Pokemon
        handleChange(values)
        nextStep()
    }

    const Previous = e => {
        e.preventDefault();
        prevStep();
    }
    const [pokeData, setPokeData] = React.useState([]);
    useEffect(() => {
        (async () => {
            var config = {
                method: "get",
                url: "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
            };

            axios(config)
                .then(function (response) {
                    let pokes = []
                    for (let i = 0; i < response.data.results.length; i++) {
                        pokes[i] = response.data.results[i].name;
                    }
                    setPokeData([...pokes]);
                })
                .catch(function (error) {
                    console.log(error);
                });
        })();
    }, []);

    return (
        <Box p={5}>
            <Container component="main" maxWidth="xs">
                < div >
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Typography variant="h3" gutterBottom>
                                    Tell us about your favourite Pokemon.
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <Controller
                                    name={"Pokemon"}
                                    control={control}
                                    render={({ field: { onChange, value } }) => (
                                        <Autocomplete
                                            id="pokemon"
                                            options={pokeData}
                                            renderInput={(params) => (
                                                <TextField
                                                    {...params} label="Select Pokemon" />
                                            )}
                                            onChange={(_, data) => {
                                                onChange(data);
                                                return data;
                                            }}
                                        />
                                    )} />

                            </Grid>
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
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                >
                                    Next
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </div >
            </Container>
        </Box>
    )
}

export default PokemonSelect