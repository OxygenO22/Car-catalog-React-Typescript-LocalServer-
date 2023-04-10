import React from "react";
import styles from "./ReduxBank.module.scss"
import { RouteButton } from "../ui/buttons/RouteButton";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../ui/buttons/Button";




export const ReduxBank = () => {
  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash);

  const addCash = () => {
    dispatch({type: "ADD_CASH", payload: 5});
    console.log("i work")
  }

  const getCash = () => {
    dispatch({type: "GET_CASH", payload: 5});
     console.log("i'm too work")
  }

  return (
    <div className={styles.reduxbank__wrapper}>
      <RouteButton path="/" name="Back" />
      <div className={styles.cash__wrapper}>
        <p className={styles.cash__text}>{cash}</p>
      </div>
      <div className={styles.cashbutton__wrapper}>
        <button onClick={() => addCash()}>Add Cash</button>
        <button onClick={() => getCash()}>Get Cash</button>
        {/* <Button onClick={() => addCash()} name="Add Cash"/>
        <Button onClick={() => getCash()} name="Get Cash"/> */}
      </div>

    </div>
  )
}
