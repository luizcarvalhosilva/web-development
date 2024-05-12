import React, {useState} from "react";


function Counter() {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count+1);
    }
    const decrement = () => {
        setCount(count-1);
    }
    const reset = () => {
        setCount(0);    
    }

    return(
        <main className="counter-container">
            <p className="countDisplay">{count}</p>
            <button className="counter-button" id="increment" onClick={increment}>Increment</button>
            <button className="counter-button" id="decrement" onClick={decrement}>Decrement</button>
            <button className="counter-button" id="reset" onClick={reset}>Reset</button>
        </main>
    )
}

export default Counter;