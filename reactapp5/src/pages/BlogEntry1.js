import axios from "axios";
import { useForm } from "react-hook-form"

function BlogEntry1() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        //console.log(data)
        blogPost(data);

    }
    const blogPost = (data) => {
        axios.post("http://localhost/api/Blog/adblog.php", data).then(function (response) {
            alert(response.data)
        })
    }
    return (


        <div className='container' >
            <h2>Blog Entry (1)</h2>
            <form className='form' onSubmit={handleSubmit(onSubmit)}>
                <input type='text' name='title' className='form-control'{...register('title')} placeholder='enter title' /><br />
                <textarea name='details' className='form-control'{...register('details')}></textarea>

                <button className='btn btn-primary' type='submit'  > Submit</button>
            </form>

        </div>


    )
}

export default BlogEntry1