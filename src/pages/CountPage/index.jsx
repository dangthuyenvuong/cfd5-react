import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from '../../redux/actions/countAction'

export default function CountPage() {
    const dispatch = useDispatch()
    const state = useSelector(state => state.count)
    return (
        <div style={{ padding: 100, margin: '0 auto' }}>
            {state.count} Count <br />
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(increment(10))}>++++++++</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(decrement(10))}>-------</button>
        </div>
    )
}
