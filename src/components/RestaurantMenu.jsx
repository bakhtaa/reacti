import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const RestaurantMenu=()=>{

    const [resInfo, setResInfo]= useState(null); 
    const {resId} = useParams();

    useEffect(()=>{
      fetchMenu();
    }, []);
    const fetchMenu=async ()=>{
        const data = await fetch(`https://dummyjson.com/recipes/${resId}`);
        const json =await data.json();
        console.log(json);
        setResInfo(json); 
        }
        if (resInfo === null) {
    return <Shimmer/>;
}
    return(
        <div className="menu">
          
                <ul key={resInfo.id} >
                    <li>{resInfo.name}   </li>
                    <li> {resInfo.cuisine}</li>
                <li>{resInfo.ingredients.join(',')}</li>

                  </ul>
            
        
        
        
          
        </div>
    )
}

export default RestaurantMenu;