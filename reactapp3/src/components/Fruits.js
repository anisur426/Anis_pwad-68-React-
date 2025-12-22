import React from 'react'

function Fruits() {

  const fruits = ["Mango", "Orange", "Grape", "Guava", "jakfruit"];
  return (
    <div>
      <table>
        <tr>
          <th>Fruit name</th>
        </tr>
        {fruits.map(fruit => {
          return (<tr><td>{fruit}</td></tr>)
        })}

      </table>



    </div>
  )
}

export default Fruits