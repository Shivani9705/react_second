import React from 'react';

function Car(props) {
    return <li> {props.key} I am a {props.brand} and my id is</li>
}

const Object = () => {
    const cars = [
        { id: 1, brand: 'ford' },
        { id: 2, brand: 'BMW' },
        { id: 3, brand: 'Audi' }
    ]
    return (
        <div>
            <h1>this is my object list</h1>
            <ul>
                {cars.map((car) => <Car key={car.id} brand={car.brand} />)}
                {/* {cars.map((car) => <Car key={car.id} />)} */}
            </ul>
        </div>
    );
}

export default Object;
