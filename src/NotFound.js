const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry,not Sorry</h2>
            <p>That page cannot be found</p>
            <Link to='/'>Back to Home Page</Link>
        </div>
     );
}
 
export default NotFound;