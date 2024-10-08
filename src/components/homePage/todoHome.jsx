
import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';

import AddAnime from '../AddAnime/addAnime';
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import { Button } from '@mui/material';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";


function HomePage() {

const Todos = useSelector((store) => store.AllTodos)
    
 useEffect(() => {
    dispatch({ type: "FETCH_ALL_ANIME" });

       window.scrollTo(0, 0);
 }, []);


}
export default HomePage;