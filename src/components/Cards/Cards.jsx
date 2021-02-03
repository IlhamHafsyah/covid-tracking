import React from "react";
import styles from "./Cards.module.css";
import Grid from "@material-ui/core/Grid";
import CardComponent from "./Card/Card";

const Cards = ({ data: { confirmed, recovered, deaths } }) => {
  if (!confirmed) {
    return "Loading...";
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <CardComponent
          cardTitle="Kasus"
          subtitle="Jumlah angka kasus covid-19"
          value={confirmed.value}
          className={styles.confirmed}
        />
        <CardComponent
          cardTitle="Sembuh"
          subtitle="Jumlah angka sembuh covid-19"
          value={recovered.value}
          className={styles.recovered}
        />
        <CardComponent
          cardTitle="Meninggal"
          subtitle="Jumlah angka meninggal covid-19"
          value={deaths.value}
          className={styles.deaths}
        />
      </Grid>
    </div>
  );
};

export default Cards;
