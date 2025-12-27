import { useEffect, useState } from 'react'
import axios from 'axios';

function Blog() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    getBlog();
  }, []);
  function getBlog() {
    axios.get("http://localhost/api/Blog/").then(function (respons) {
      setBlogs(respons.data)
    })
  }

  return (

    <div className='container-fluid py-5'>
      <div className='container'>
        <h1>Blog Item</h1>

        <table className="table table-bordered">

          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Details</th>
          </tr>
          {blogs.map((blog) =>
            <tr>
              <td>{blog.id}</td>
              <td>{blog.title}</td>
              <td>{blog.details}</td>
            </tr>

          )}

        </table>
      </div>
    </div>
  )


}

export default Blog