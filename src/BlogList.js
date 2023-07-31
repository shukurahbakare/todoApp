import { Link } from "react-router-dom";

const BlogList = ({blogs,title}) => {

    return ( 
        <div className="home">
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}> 
                        <h2>{blog.todo}</h2>
                        <p>Status: {blog.completed}</p>
                    </Link>
                    
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;