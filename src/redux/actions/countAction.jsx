import { COUNT_DECREMENT, COUNT_INCREMENT } from "../type"


export function increment(step) {
    return { type: COUNT_INCREMENT, payload: step }
}
export function decrement(step) {
    return { type: COUNT_DECREMENT, payload: step }
}