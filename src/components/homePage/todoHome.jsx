
import React from 'react';

import { useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';

import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import { Button } from '@mui/material';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { text } from 'express';


function HomePage() {

   const Todos = useSelector((store) => store.AllTodos)
   
   let [todo, setTodo] = useState('')

   const dispatch = useDispatch()
    
 useEffect(() => {
    dispatch({ type: "FETCH_ALL_TODOS" });

       window.scrollTo(0, 0);
 }, []);
   
   const newTodo = (event) => {
      event.preventDefault();
      dispatch({
         type: "POST_TODOS",
         payload:{todo: todo}
      }
      );
      setTodo('')
    


   }

   return (
   
      <div>
         <input className='inputTodo' type="text"
            value={todo}
            onChange={(event) => setTodo(event.target.value)}
         />
         <button onClick={newTodo}>submit</button>
      </div>
      
    
)
}
export default HomePage;