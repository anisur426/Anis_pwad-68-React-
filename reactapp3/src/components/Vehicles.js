import React from 'react'

function Vehicles() {
    const vehicles = ["Rickshaw", "toyta", "Mitshubishi"];
    const [x, y, z] = vehicles
    return (
        <div>
            <h1> Vehicles</h1>
            our vehicles  is {x}<br />
            our vehicles  is {y}<br />
            our vehicles  is {z}<br />
        </div>
    )
}

export default Vehicles