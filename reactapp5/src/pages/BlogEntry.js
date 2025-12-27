import axios from 'axios';
import React, { useState } from 'react'

function BlogEntry() {
    const [inputs, setInputs] = useState({});
    const hnadleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value
        setInputs(values => ({ ...values, [name]: value }));
    }
    function hnadleSubmit(e) {
        e.preventDefult();
        blogPost();

    }
    const blogPost = () => {
        axios.post("http://localhost/api/Blog/adblog.php", inputs).then(function (response) {
            alert(response.data);

        });
    }


    return (
        <div className='container'>
            <h2>Blog Entry</h2>
            <form className='form'>
                <input type='text' name='title' value={inputs.title} onChange={hnadleChange}
                    className='form-control' placeholder='enter title' /><br />
                <textarea name='details' value={inputs.details} onChange={hnadleChange} className='form-control'></textarea>
                {/* <input type='submit' name="submit" className='btn btn-primary' /> */}
                <button className='btn btn-primary' type='submit'  > Submit</button>
            </form>
            {console.log(inputs)}
        </div>

    )
}

export default BlogEntry