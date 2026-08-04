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
           <h1>{resInfo?.[0]?.name} </h1>
            <h2>{resInfo?.[0]?.cuisine} </h2>
            <ul>
                <li>{resInfo?.[0]?.ingredients.join(',')}</li>
                <li>burgers</li>
                <li>Diet coke</li>
            </ul>

        </div>
    )
}

export default RestaurantMenu;