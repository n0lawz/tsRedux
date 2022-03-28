import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "../redux";

// this is what we call when we want to get some state out of our store, instead of useSelector directly
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;