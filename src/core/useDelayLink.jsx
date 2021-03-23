import { useContext } from "react"
import { Context } from "./AppProver"

export default function useDelayLink() {
    let { delayLink } = useContext(Context)
    return delayLink
}