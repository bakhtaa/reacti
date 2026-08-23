import { useEffect, useState } from "react";

const useOnlineStatus=()=>{
    //input hatchay output online status
    //when we want an action to be done once : we use useEffect

    const [onlinestatus,setonlinestatus]= useState(true);
    useEffect(()=>{
      window.addEventListener("offline", ()=>{
        setonlinestatus(false);

      })

      window.addEventListener("online", ()=>{
        setonlinestatus(true);

      })
    }, [])

    //boolean value
    //using the online event listener 
    return onlinestatus;

}

export default useOnlineStatus;