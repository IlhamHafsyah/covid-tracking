import React, { useEffect, useState } from "react";
import styles from "./Country.module.css";
import { FormControl, NativeSelect } from "@material-ui/core";
import axios from "axios";

const Country = ({ countryChangeHandle }) => {
  const [countries, setCountries] = useState([]);
  //countries = untuk menyimpan datanya
  //setCountries = untuk memanipulasi data

  useEffect(() => {
    getCountry();
  }, []);

  function getCountry() {
    axios
      .get("https://covid19.mathdro.id/api/countries")
      .then((res) => {
        // console.log(res.data.countries);
        setCountries(res.data.countries);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect onChange={(event) => countryChangeHandle(event)}>
        <option value="">Global</option>
        {countries.map((item, index) => (
          <option key={index} value={item.name}>
            {item.name}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default Country;
