import { useState } from "react";
import { useNavigate} from 'react-router-dom';

const Create = () => {
  const [todo, setTitle] = useState('');
  const [completed, setBody] = useState('');
  const [userId, setUserId] = useState('');
  const [isPending,setIsPending] = useState(false);
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {todo ,completed, userId};
    setIsPending(true)
   
    fetch('https://dummyjson.com/todos/add',{
        method:'POST',
        headers:{ 'Content-Type':'application/json'},
        body:JSON.stringify(data)
    })
    .then( () => {
        setIsPending(false);
        navigate.push('/')
    });

    
  }

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Todo :</label>
        <input 
          type="text" 
          required 
          value={todo}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Status:</label>
        <textarea
          required
          value={completed}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>User Id:</label>
        <input
          required
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        ></input>
        { !isPending && <button>Add Todo</button>}
        { isPending && <button disabled>Adding Todo</button>}
      </form>
    </div>
  );
}
 
export default Create;