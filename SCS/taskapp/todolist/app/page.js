"use client"
import React, { useState } from "react";

const page = () => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [maintask, setMaintask] = useState([])


  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(title);
    console.log(description);
    setMaintask([...maintask,{title,description}])
    console.log(maintask);
    setTitle("")
    setDescription("")
}

const deletehandle = (index)=>{
  let copie = [...maintask]
  copie.splice(index,1);
  setMaintask(copie)
}

let renderTask = <h2>No data available</h2>

if (maintask.length>0 )  {renderTask = maintask.map((i,index)=>{
  return (
    <li key={index} className="list-none flex justify-between items-center">
      <div className="p-4 bg-white rounded mb-2 w-2/3">
    <h1 className="text-3xl font-medium ">{i.title}</h1>
    <h1 className="text-2xl font-normal">{i.description}</h1>
  </div>
  <button onClick={()=>{deletehandle(index)}} className="text-3xl text-white bg-black px-4 py-2 rounded">Delete</button>
    </li>
  )
})}
  return (
    <>
      <h1 className="bg-black text-white p-5 text-5xl font-sans font-bold text-center">
        Maulik's To-Do List
      </h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="border-2 m-5 px-4 py-2 text-2xl border-zinc-800 rounded"
          placeholder="Enter your task"
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
        />
        <input
          type="text"
          className="border-2 m-5 px-4 py-2 text-2xl border-zinc-800 rounded"
          placeholder="Enter your Description"
          value={description}
          onChange={(e)=>setDescription(e.target.value)}
        />
        <button className="bg-black text-white px-4 py-2 text-2xl font-bold rounded m-5" >Add task</button>
      </form>

      <div className="p-8 bg-slate-500">
        {renderTask}
      </div>
    </>
  );
};

export default page;
