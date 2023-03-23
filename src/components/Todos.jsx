import React from 'react'
import { useState,useEffect } from 'react'
import databases from "../appwrite/appwriteConfig.ts"

const Todos = () => {

  const [todos, setTodos] = useState()

  const [loader, setLoader] = useState(false)
  
  useEffect(() => {
   setLoader(true)
   const getTodos = databases.listDocuments("64187e3b0c4e988035e2")

   getTodos.then(
    function (response) {
      setTodos(response.document)
    },function(error){
      console.log(error);
    }
   )
  }, [])
  

  return (
    <div>Todos</div>
  )
}

export default Todos