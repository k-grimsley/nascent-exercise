import React from "react";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Container } from "@mui/system";

const schema = yup
    .object({
        firstName: yup.string().required("Please enter your first name"),
        lastName: yup.string().required("Please enter your last name"),
        phoneNumber: yup
            .number("Please enter a valid phone number")
            .typeError("Please enter a valid phone number")
            .required("Please enter your phone number"),
        address: yup.string().required("Please enter your address"),
    })
    .required();

const UserDetails = ({ nextStep, handleChange }) => {

    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });

    const onSubmit = (data) => {
        handleChange(data)
        nextStep()
    }

    return (
        <Box p={5}>
            <Container component="main" maxWidth="xs">
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Typography variant="h3" gutterBottom>
                                    Lets get some personal details.
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <Controller
                                    name={"firstName"}
                                    control={control}
                                    rules={{
                                        required: true,
                                    }}
                                    render={({ field: { onChange, value } }) => (
                                        <TextField
                                            fullWidth
                                            value={value}
                                            onChange={onChange}
                                            label={"First name"}
                                            error={errors.firstName ? true : false}
                                            helperText={errors.firstName ? errors.firstName.message : ""}
                                        />
                                    )}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <Controller
                                    name={"lastName"}
                                    control={control}
                                    rules={{
                                        required: true,
                                    }}
                                    render={({ field: { onChange, value } }) => (
                                        <TextField
                                            fullWidth
                                            onChange={onChange}
                                            value={value}
                                            label={"Last name"}
                                            error={errors.lastName ? true : false}
                                            helperText={errors.lastName ? errors.lastName.message : ""}
                                        />
                                    )}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <Controller
                                    name={"phoneNumber"}
                                    control={control}
                                    rules={{
                                        required: true,
                                    }}
                                    render={({ field: { onChange, value } }) => (
                                        <TextField
                                            fullWidth
                                            onChange={onChange}
                                            value={value}
                                            label={"Phone Number"}
                                            error={errors.phoneNumber ? true : false}
                                            helperText={errors.phoneNumber ? errors.phoneNumber.message : ""}
                                        />
                                    )}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <Controller
                                    name={"address"}
                                    control={control}
                                    rules={{
                                        required: true,
                                    }}
                                    render={({ field: { onChange, value } }) => (
                                        <TextField
                                            fullWidth
                                            onChange={onChange}
                                            value={value}
                                            label={"Address"}
                                            error={errors.address ? true : false}
                                            helperText={errors.address ? errors.address.message : ""}
                                        />
                                    )}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <Button type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary">Next</Button>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>
        </Box>
    );
};

export default UserDetails;
