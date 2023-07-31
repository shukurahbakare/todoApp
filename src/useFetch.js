import {useState,useEffect} from React;

const [data,setData] = useState ([null]);
const [isPending, setIsPending] = useState(true);
const [error,setError] = useState(null)


const useFetch = (url) => {
    useEffect(() => {
        fetch(url)
            .then(res => {
                if(!res.ok) {
                    throw Error ('The data is not available')
                }
              return res.json()
            })
            .  
            then((data) => {
                setData(data.todos);
                setIsPending(false);
                setError(null)
             })
            .catch(err => {
                setError(err.message)
            })
    },[url]);

    return  {data,isPending,error}
}

export default useFetch;

// custom hooks in react need to start with the word 'use'