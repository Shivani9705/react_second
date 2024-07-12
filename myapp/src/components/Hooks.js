import React, { useState, useEffect } from 'react';

const Hooks = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `you clicked ${count} times`;
    }, [count])
    return (
        <div>
            <button onClick={() => setCount((prevcount) => prevcount + 1)}>click {count} times</button>
        </div>
    );
}

export default Hooks;
