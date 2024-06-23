import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { UserContext } from './context/UserContext';
import {navbarList}  from "../data"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RouterLayout from './layout/RouterLayout';
import Header from './components/header/Header';
import Card from './components/card/Card';
import Fantastik from './page/fantastik/Fantastik';
import Comedy from './page/Comedy/Comedy';
import Crime from './page/Crime/Crime';
import Drama from './page/Mystery/Mystery';
function App() {
  const [data, setData] = useState([]);
  const [card,setCard]=useState([])
  useEffect(() => {
    const fetchData = async () => {


const options = {
  method: 'GET',
  url: 'https://movies-api14.p.rapidapi.com/shows',
  headers: {
    'X-RapidAPI-Key': '3fcca8f72bmsh1cbbdb0bd1c97aep1080c9jsn407c93b00372',
    'X-RapidAPI-Host': 'movies-api14.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	setData(response.data.movies);
} catch (error) {
	console.error(error);
}
        
    };
    fetchData(); 
  }, []); 
  const router = createBrowserRouter([
    { 
      path: "/",
      element: <RouterLayout/>,
      children:[
       {
        index:true,
        element:<Header/>
       },{
        path:"/about",
        element:<Fantastik/>
       },
       {
        path:"/serial",
        element:<Comedy/>
       },
       {
        path:"/janir",
        element:<Crime/>
       },
       {
        path:"/conturi",
        element:<Drama/>
        
       },
       {
        path:"/card",
        element:<Card card={card} />
       },
      ]
    },
  ]);

  return (
    <UserContext.Provider value={{data,navbarList, setCard}}> 
      <RouterProvider router={router} />
    </UserContext.Provider>
  );
}
export default App;
