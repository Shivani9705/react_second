import React, { useEffect, useState } from 'react';

const Usestate = () => {
    // const [color, setColor] = useState("red")
    const [count, setCount] = useState(0)


    useEffect(() => {
        setTimeout(() => {
            setCount((count) => count + 1)
            console.log(count)
        }, 2000)
    })

    return (
        <div>
            {/* <h1>My favorite color is {color}</h1> */}
            <h1>I have rendered  {count} times</h1>
            {/* <button type='button' onClick={() => setColor("blue")}>Click me</button> */}
            {/* <button type='button' onClick={() => setCount(count + 1)}>increment me</button> */}
            {/* <button type='button' onClick={() => setCount(count - 1)}>decrement me</button> */}
        </div>
    );
}

export default Usestate;
