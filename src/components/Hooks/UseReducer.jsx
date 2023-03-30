import React, { useReducer } from 'react';


const reducer = (state, action) => {
    if (action === 'increment') {
        state = state + 1;
    }
    if (state > 0 && action === 'decrement') {
        state = state - 1;
    }
    return state;
}

const UseReducer = () => {

const [state, dispach] = useReducer(reducer, 10)

    return (
        <div>
            <p>{state}</p>
            <button onClick={() => dispach('increment')}>increment</button>
            <button onClick={() => dispach('decrement')}>decrement</button>
        </div>
    );
};

export default UseReducer;