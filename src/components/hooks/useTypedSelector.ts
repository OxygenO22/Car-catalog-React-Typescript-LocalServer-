import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import { TypeRootState, AppDispatch } from "../../store/store";

export const useTypedSelector: TypedUseSelectorHook<TypeRootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();