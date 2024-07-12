import React from 'react';

function Garage(props) {
    return <li>I am a {props.brand}</li>
}

const Car = () => {
    const cars = ['ford', 'BMW', 'Audi']
    return (
        <div>
            <h1>These are my car list</h1>
            <ul>
                {cars.map((a) => <Garage brand={a} />)}
            </ul>
        </div>
    );
}

export default Car;
