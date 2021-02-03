import React from "react";
import { Grid, Card, CardContent, Typography } from "@material-ui/core";
import CountUp from "react-countup";
import cn from "classnames";
import styles from "./Card.module.css";

const CardComponent = ({ cardTitle, subtitle, value, className }) => {
  return (
    <Grid
      item
      xs={12}
      md={3}
      component={Card}
      className={cn(styles.card, className)} //className={styles.card, styles.confirmed}
    >
      <CardContent>
        <Typography color="textSecondary">{cardTitle}</Typography>
        <Typography variant="h4">
          <CountUp start={0} end={value} duration={1.5} separator="," />
        </Typography>
        <Typography color="textSecondary">Orang</Typography>
        <Typography variant="body2">{subtitle}</Typography>
      </CardContent>
    </Grid>
  );
};

export default CardComponent;
