import React, { useState } from 'react'

function RegistrationForm() {
    const [inputs, setInputs] = useState({});
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({
            ...values, [name]: value

        }))
        const handleSubmit = (e) => {

            alert(name);
        }
    }
    return (
        <>
            <h1>RegistrationForm</h1>
            <form>
                <input type='text' name='fullname' onChange={handleChange} placeholder='Enter name' /><br />
                <input type='number' name='age' onChange={handleChange} placeholder='Enter age' /><br />
                <input type='email' name='email' onChange={handleChange} placeholder='ente email' /><br />

                <select name='district'>
                    <option>Select one</option>
                    <option>Dhaka</option>
                    <option>sylhet</option>
                </select><br />
                <input type='submit' />
            </form>
            {console.log(inputs)}
        </>
    )
}

export default RegistrationForm