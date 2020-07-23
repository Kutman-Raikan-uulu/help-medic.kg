import React from "react";
import classes from "./Card.module.css";

function Card(props) {
  return (
    <div className={classes.Card}>
      <h3>advertisement title</h3>
      <p>
        кол: <span></span>
      </p>
      <p>
        адрес: <span></span>
      </p>
      <p>
        дата объявления: <span></span>
        <span></span>
      </p>
      <button>узнать больше</button>
    </div>
  );
}

export default Card;
