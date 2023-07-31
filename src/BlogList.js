const BlogList = ({blogs,title, handleDelete}) => {

    return ( 
        <div className="home">
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.todo}</h2>
                    <p>Status: {blog.completed}</p>
                    <button onClick={() =>handleDelete(blog.id)}>Delete Blog</button>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;