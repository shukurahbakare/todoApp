import BlogList from "./BlogList";
import useFetch from "./useFetch";


const Home = () => {
    const { data, isPending,error} = useFetch('https://dummyjson.com/todo');
    console.log(data)


    return ( 
        <div className="home">
            { error && <div>{ error}</div>}
            {isPending && <div>Loading...</div>}
           {data && <BlogList  blogs={data.todos} title='All Blogs' /> }
        </div>
     );
}
 
export default Home; 