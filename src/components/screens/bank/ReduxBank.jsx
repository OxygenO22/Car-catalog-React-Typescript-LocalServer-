import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../ui/buttons/Button";
import { MainTitle } from "../../ui/title/MainTitle";
import { RouteButton } from "../../ui/buttons/RouteButton";
import styles from "./ReduxBank.module.scss";
import { addCash, getCash } from "../../../store/cashReducer/cashSlice";




export const ReduxBank = () => {
  const dispatch = useDispatch();
  const {cash} = useSelector(state => state.cash);

  return (
    <div className={styles.reduxbank__wrapper}>
      <MainTitle name="Bank (Redux Toolkit)" />
      <RouteButton path="/" name="Back" />
      <div className={styles.cash__wrapper}>
        <p className={styles.cash__text}>{cash}</p>
      </div>
      <div className={styles.cashbutton__wrapper}>
        <Button onClick={() => dispatch(addCash())} name="Add Cash"/>
        <Button onClick={() => dispatch(getCash())} name="Get Cash"/>
      </div>

    </div>
  );
};
