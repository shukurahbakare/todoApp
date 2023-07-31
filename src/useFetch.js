import {useState,useEffect} from 'react';


const useFetch = (url) => {
    const [data,setData] = useState ([null]);
const [isPending, setIsPending] = useState(true);
const [error,setError] = useState(null)
    useEffect(() => {

        const abortCont = new AbortController();

        fetch(url, {signal: abortCont.signal})
            .then(res => {
                if(!res.ok) {
                    throw Error ('The data is not available')
                }
              return res.json()
            })
            .then((data) => {
                console.log(data);
                setData(data.todos);
                setIsPending(false);
                setError(null)
             })
            .catch(err => {
                if(err.name === 'AbortError'){

                }
                else{
                    setIsPending(false);
                setError(err.message);
                }
                
            });

        return () => abortCont.abort()
    },[url]);

    return  {data,isPending,error}
}

export default useFetch;

// custom hooks in react need to start with the word 'use'