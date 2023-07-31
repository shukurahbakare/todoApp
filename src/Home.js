import { useState,useEffect } from "react";
import BlogList from "./BlogList";


const Home = () => {
    const [blogs,setBlogs] = useState ([null]);
    const [isPending, setIsPending] = useState(true)

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id)
        setBlogs(newBlogs)
    }

    useEffect(() => {
        fetch('https://dummyjson.com/todo')
            .then(res => {
              return res.json()
            })
            .  
            then((data) => {
                setBlogs(data.todos);
                setIsPending(false)
             })
    },[])

    return ( 
        <div className="home">
            {isPending && <div>Loading...</div>}
           {blogs && <BlogList  blogs={blogs} title='All Blogs' handleDelete={handleDelete}/> }
        </div>
     );
}
 
export default Home; 