
import React, {useEffect, useState}from "react";
import './../styles/App.css';

const App = () => {
  const [data,setData]= useState(null)

  useEffect(()=> {
    const fetchData= async () =>{
      const responce = await fetch('https://dummyjson.com/products')
      const result = await responce.json()

      setData(result)
    }
    fetchData()
  }, [])
  return (
    <div id="main">
        {/* Do not remove the main div */}
        <pre>{JSON.stringify(data,null,2)}</pre>
    </div>
  )
}

export default App
