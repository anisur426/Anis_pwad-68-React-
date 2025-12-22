import React, { useState } from 'react'

function MyForm() {
    const [name, setName] = useState("anis");
    const handleChange = (e) => {
        setName(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefult();
        alert(name);
    }
    return (
        <>
            <div>MyForm</div>
            <form onSubmit={handleSubmit}>
                <input type='text' onChange={handleChange} value={name} placeholder='enter yor name' />
                <input type='submit' />
            </form>
        </>
    )
}

export default MyForm