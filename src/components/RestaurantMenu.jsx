import { useEffect } from "react";
import { useState } from "react";

const RestaurantMenu=()=>{

    const [resInfo, setResInfo]= useState(null); 

    useEffect(()=>{
      fetchMenu();
    }, []);
    const fetchMenu=async ()=>{
        const data = await fetch("https://dummyjson.com/recipes");
        const json =await data.json();
        console.log(json);
        setResInfo(json.recipes); 
        }
    return(
        <div className="menu">
            <h1>gogo</h1>
            <h2>menu</h2>
            <ul>
                <li>biryani</li>
                <li>burgers</li>
                <li>Diet coke</li>
            </ul>

        </div>
    )
}

export default RestaurantMenu;