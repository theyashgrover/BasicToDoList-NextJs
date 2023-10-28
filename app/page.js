"use client"
import React, { useState } from "react"

const page = () => {
  const [title,settitle] = useState("");
  const [desc,setdesc] = useState("");
  const [mainTask,setMainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault() //this is an inbuilt method which prevents the page from reloading and form from being submitted.
    // console.log(desc);
    // console.log(title);
    setMainTask([...mainTask,{title,desc}]);
    settitle("");
    setdesc("");
    console.log(mainTask);
  }

  const deleteHandler = (i) => {
    let copytask = [...mainTask]
    copytask.splice(i,1) //deleting the element from the array whose key is being passed here
    setMainTask(copytask)
  }

  let renderTask = <h2>No Tasks Available</h2>
  if(mainTask.length>0){
    renderTask = mainTask.map((t,i) => {
      return (
        <li key={i} className="flex items-center justify-between mb-8">
          <div className="flex justify-between mb-5 w-2/3">
          <h4 className="text-3xl font-semibold">{t.title}</h4>
          <h5 className="text-xl ">{t.desc}</h5>
          </div>
          <button onClick={()=>{
            deleteHandler(i)
          }} 
          className="bg-red-400 text-white px-4 py-2 rounded font-bold">Delete</button>
        </li>
        
      );
    });
  }//Variable and Function Declarations End here..

  return(
    <>
    <h1 className="bg-black text-white p-5 text-5xl font-bold text-center">Grover's To-Do-List</h1>
    <form onSubmit={submitHandler}>
      <input type="text" 
      className="text-2xl border-zinc-800 border-4 m-8 px-4 py-2" 
      placeholder="Enter Title Here"
      value={title}
      //the funda of two way binding exists here , we are basically telling react what we are inputting along with showing the changes to the user..
      onChange={(e)=>{
        settitle(e.target.value)
      }}/>
      <input type="text" 
      className="text-2xl border-zinc-800 border-4 m-8 px-4 py-2" 
      placeholder="Enter Description Here"
      value={desc}
      onChange={(e)=>{
        setdesc(e.target.value)
      }}/>
      <button className="bg-black text-white m-7 px-4 py-2 font-bold rounded">+ Add Task</button>
    </form>
    <hr/>
    <div className="p-8 bg-slate-200">
      <ul>
        {renderTask}
      </ul>
    </div>
    </>
  ) 
}

export default page