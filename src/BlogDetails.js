import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const {id} = useParams();
    const { data,error,isPending} = useFetch(`https://dummyjson.com/todo/${id}`);

    return ( 
    <div className="blog-details">
        <h2>Hello</h2>
        {isPending && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {data && (
            <div>
                <h2>Todo:{data.todo}</h2>
            </div>
        )}
    </div> );
}
 
export default BlogDetails;