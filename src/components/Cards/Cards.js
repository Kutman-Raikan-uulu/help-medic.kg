import React from "react";
import classes from "./Cards.module.css";
import Card from "./Card/Card";

function Cards(props) {
  return (
    <div className={classes.Cards}>
      <Card></Card>
    </div>
  );
}

export default Cards;
