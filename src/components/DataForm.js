import React, { Component } from "react";
import UserDetails from "./UserDetails";
import PokemonSelect from "./PokemonSelect";
import Review from "./Review";
import Success from "./Success";

export default class DataForm extends Component {
    state = {
        step: 1,
        firstName: "",
        lastName: "",
        phoneNumber: "",
        address: "",
        pokemon: "",
    };

    prevStep = () => {
        const { step } = this.state;
        this.setState({ step: step - 1 });
    };

    nextStep = () => {
        const { step } = this.state;
        this.setState({ step: step + 1 });
    };

    handleChange = (data) => {
        this.setState({ firstName: data.firstName, lastName: data.lastName, phoneNumber: data.phoneNumber, address: data.address, pokemon: data.pokemon })
    }

    // handleChange = (input) => (e) => {
    //     this.setState({ [input]: e.target.value });
    // };

    render() {
        const { step } = this.state;
        const { firstName, lastName, phoneNumber, address, pokemon } = this.state;
        const values = { firstName, lastName, phoneNumber, address, pokemon };

        switch (step) {
            case 1:
                return (
                    <UserDetails
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 2:
                return (
                    <PokemonSelect
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 3:
                return (
                    <Review
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 4:
                return (
                    <Success
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            default:
        }
    }
}
