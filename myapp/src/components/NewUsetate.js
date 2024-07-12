import React, { useState } from 'react'

const NewUsetate = () => {

    const [number, setNumber] = useState(0);

    console.log(number)
    return (
        <div>
            {/* <h1>{number}</h1> */}
            {/* <button onClick={() => setNumber(number + 1)}> increase me</button> */}
        </div>
    )
}

export default NewUsetate