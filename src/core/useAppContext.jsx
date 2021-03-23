import { useContext } from "react";
import { Context } from "./AppProver";

export default function useAppContext() {
    return useContext(Context)
}