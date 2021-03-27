import { useEffect, useState } from "react"

export default function useStateSession(initState, name) {
    let v = JSON.parse(sessionStorage.getItem(name)) || initState
    let [state, setState] = useState(v)

    useEffect(() => {
        sessionStorage.setItem(name, JSON.stringify(state))
    }, [state])

    return [state, setState]
}