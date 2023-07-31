import { useState,useEffect } from "react";
import BlogList from "./BlogList";
import useFecth from "./useFetch";


const Home = () => {
    const { data: blogs, isPending,error} = useFecth('https://dummyjson.com/todo')


    return ( 
        <div className="home">
            { error && <div>{ error}</div>}
            {isPending && <div>Loading...</div>}
           {blogs && <BlogList  blogs={blogs} title='All Blogs' /> }
        </div>
     );
}
 
export default Home; 