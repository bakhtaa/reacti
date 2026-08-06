
import { useEffect, useState } from "react";

const useRestaurantMenu= (resId)=>{

const [resInfo, setResInfo]= useState(null);
    useEffect(()=>{
      fetchMenu();
    }, []);
    const fetchMenu=async ()=>{
        const data = await fetch(`https://dummyjson.com/recipes/${resId}`);
        const json =await data.json();
        console.log(json);
        setResInfo(json); 
        }


    return resInfo;
}

export default useRestaurantMenu;