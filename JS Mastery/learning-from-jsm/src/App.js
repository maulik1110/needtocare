import './App.css';
import { useState, useEffect } from "react";

function Person(){
  const name = "Maulik";
  // const name = null;
  const seeingname  = true;
  return (
    <div className="App">
      <h1>Hi , {seeingname ? name : "no idea"}</h1>
      {name ? (
        <>
        <h1>{name} ! Good Morning</h1>
        <h2>Name is print</h2>
        </>
      ) : (
        <>
        <h1>Name not present</h1>
        <h2>Name is not print</h2>
        </>
      )}
    </div>
  );
}

const Dataofperson = (props) => {

  return(
    <div className = "App">
      <>
        <h1>Name= {props.name}</h1>
        <h2>Lastname1 = {props.lname}</h2>
        <h2>Age = {props.age}</h2>  
      </>
    </div>
  )
}

const Miniapp = () =>{
  const [counter , setCounter] = useState(0);
  return (
    <div className='App'>
      <button onClick={()=>setCounter(counter-1)}> - </button>
      <h1>{counter}</h1>
      <button onClick={()=> setCounter(counter+1)}> + </button>
    </div>   
  )
}
const Usage = () =>{
  const [counter , setCounter] = useState(0);
  useEffect(()=>{
    alert('Counter update to '  + counter)
    // setCounter(100)
  },[counter]);
  
  return (
    <div className='App'>
      <button onClick={()=>setCounter(counter-1)}> - </button>
      <h1>{counter}</h1>
      <button onClick={()=> setCounter(counter+1)}> + </button>
    </div>   
  )
}


function App() {
  return (
    <>
    <Usage/>
    <Miniapp/>
    <Person/>
    <Dataofperson name = {"Gotu"} lname = {"is maulik"} age={"21"}/>
    <Dataofperson name = "Booik" lname = "is also maulik" age="21"/>
    </>
  )
}

export default App;
