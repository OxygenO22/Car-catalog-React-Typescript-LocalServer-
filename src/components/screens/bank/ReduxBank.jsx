import { addCash, getCash } from "../../../store/cashReducer/cashSlice";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../ui/buttons/Button";
import { Header } from "../../ui/header/Header";
import styles from "./ReduxBank.module.scss";




export const ReduxBank = () => {
  const dispatch = useDispatch();
  const {cash} = useSelector(state => state.cash);

  return (
    <div className={styles.reduxbank__wrapper}>
      <Header place="bank" />
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
