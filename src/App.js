import React, { useRef, useState } from 'react'
import './App.css';

function App() {

  const [list,setList] = useState([]);

  const [newTask, setNew] = useState('');

  const inputRef = useRef();

  const addTask = () => {
    if(newTask != null || newTask!== ''){
      setList([...list,newTask]);
      setNew("");
      inputRef.current.value = "";
    }
  }

  const deleteTask = val => {
    setList( list.filter( ele => {
        return ele !== val;
      })
    )
  };

  return (
    <div className="App">

      <h1 className="heading"> Todo List </h1>

      <div>

        <input onKeyDown={ e => { if(e.keyCode===13) addTask() } } ref={inputRef} type="text" placeholder="Task to add" onChange={ e => { setNew(e.target.value) } }/>

        <button onClick={addTask} > Add </button>

      </div>

      <hr />

      <ul>
        {list.map( (val,key) => {
            return (
              <div className='item'>
                <li key={key}> {val} </li>
                <button> &#10003; </button>
                <button onClick={() => deleteTask(val) } > X </button>
              </div>
            )
        } )}
      </ul>
    </div>
  );
}

export default App;
