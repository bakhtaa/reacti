
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import RestaurantMenu from "./components/RestaurantMenu";
import Grocery from "./components/Grocery";


//chunking , dynamic bundling, code splitting, lazy loading



const Applayout= ()=>{
     return (
          <div className="app">
               <Header/> 
  {/*  if path is / then we should have the body component
  if path is /aboout we should have the child component 
  if path is contact we should have contact component */ }
       <Outlet/>


             
          </div>
     )
}





const appRouter=createBrowserRouter(
     [
          {path : '/', 
          element: <Applayout/>, 
          children: [

                {
               index:true, 
               element: <Body/>
               
          },
           {
               path : '/about', 
               element: <About/>
               
          }, {
                path : '/contact', 
               element: <Contact/>
               
          }, 
          {
               path: '/restaurants/:resId',
               element: <RestaurantMenu/>
          },
           {
               path: '/grocery',
               element: <Grocery/>
          },
          ], 
          errorElement: <Error/>

          }, 
          


     ]
)





const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router= {appRouter}/>);

