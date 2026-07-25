
import RestaurantCard from "./RestaurantCard";
import { useState , useEffect} from "react";





const Body=()=>{

const [recipec, setrecipes]= useState([]);

     useEffect(()=>{
          console.log("baed ma lpage trendri we will fetch the data");
          fetchData();

     }, []);


     const fetchData=async ()=>{
          const response= await   fetch('https://dummyjson.com/recipes');
          const {recipes}= await response.json();
          setrecipes(recipes);
          console.log(recipes);
          console.log(recipec);
     }

     return (
          <div className="body">
         <div className="filter">
        <button  className="btn" onClick={()=>{
          console.log("weyy");
        }}>
       top ratedd ya seeehbiii
        </button>
         </div>
         <div className="res-container">
          
          { recipec.length!= 0 ? (
           recipec.map((recipe) => {
            return( <RestaurantCard  id= {recipe.id} title={recipe.name} text={recipe.ingredients} review={recipe.rating} time={recipe.prepTimeMinutes} img={recipe.image} />) })
           ) : <h1></h1>
          
          }
         </div>
          </div>
     )
}

export default Body;