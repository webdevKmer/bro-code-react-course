import { useState } from "react"

const Counter = () => {
    const [counter, setCounter] = useState(0)

    const increaseCounter = () => setCounter(counter + 1)
    const resetCounter = () => setCounter(0)
    const decreaseCounter = () => setCounter(counter - 1)
    
  return (
    <>
        <h2>My Counter App</h2>
        <p>{counter}</p>
        <div>
            <button onClick={increaseCounter}>Increase</button>
            <button onClick={resetCounter}>Reset</button>
            <button onClick={decreaseCounter}>Decrease</button>
        </div>
    </>
  )
}

export default Counter