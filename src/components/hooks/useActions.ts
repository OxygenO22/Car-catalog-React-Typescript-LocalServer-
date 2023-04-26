import { bindActionCreators } from "@reduxjs/toolkit";
import { cartActions } from "../../store/cart/cart.slice";
import { useDispatch } from "react-redux";

const allActions = {...cartActions,};

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(allActions, dispatch);
};