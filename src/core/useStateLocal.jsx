import { useEffect, useState } from "react";

export default function useStateLocal(value, name) {

    let v = localStorage.getItem(name)

    let [state, setState] = useState(v || value)

    useEffect(() => {
        localStorage.setItem(name, state)

        return () => {
            localStorage.removeItem(name)
        }
    }, [state])

    return [state, setState]
}