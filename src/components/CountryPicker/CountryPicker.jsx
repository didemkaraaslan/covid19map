import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./countryPicker.module.css";
import { fetchCountries } from "../../api/index";

const CountryPicker = ({ handleCountryChange }) => {
    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            setFetchedCountries(await fetchCountries());
        }
        fetchApi();
    },[setFetchedCountries])

    return (
        <FormControl className="formControl">
            <NativeSelect defaultValue="" onChange={event => handleCountryChange(event.target.value)}>
                <option value="">Global</option>
                { fetchedCountries.map((country, index) => 
                    <option key={index} value={country}>{country}</option>
                )}
            </NativeSelect>
        </FormControl>
    );
}

export default CountryPicker;