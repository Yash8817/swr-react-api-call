import React, { useState } from "react";

import useSWR from 'swr'
import './App.css';

const fetcher = (...args) => fetch(...args).then(res => res.json())


function App()
{
 
    const [pageno ,setpageno] = useState(1)
    const { data, error, isLoading } = useSWR(`https://jsonplaceholder.typicode.com/todos/${pageno}`, fetcher)
 
  if (error) return <div>failed to load</div>
  if (isLoading) return <div className="loading">Loading</div>
 
  // render data
  return <div className="center-text">
  <h1 className="blue-text">User Information</h1>
  <p className="user-id">User ID: {data?.id} </p>
  <p className="user-title">Title: {data.title } </p>
  <p className="user-status">Status: {data.completed}   </p>


{pageno != 1 && <button onClick={() => setpageno((page) => page - 1)} className="prevNextButton" > Previous ({pageno - 1}) </button> }
      <button className="currentPageButton"> Current Page ({pageno}) </button>
      <button onClick={() => setpageno((page) => page + 1)} className="prevNextButton" > Next ({pageno + 1}) </button>



</div>


}

export default App