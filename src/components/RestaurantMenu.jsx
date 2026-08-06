import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../../utils/useRestaurantMenu";

const RestaurantMenu=()=>{

    const [resInfo, setResInfo]= useState(null); 
    const {resId} = useParams();
    
const json= useRestaurantMenu();

        setResInfo(json); 
        
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