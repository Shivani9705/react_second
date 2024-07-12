import React from 'react';

const Home = (props) => {
    const cars = props.vehicle
    return (
        <div>
            <h2>I have {cars[1]} {cars[0]} {cars[2]}cars</h2>
        </div>
    );
}

export default Home;
