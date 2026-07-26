
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer.jsx";
import { useState , useEffect} from "react";





const Body=()=>{

const [recipec, setrecipes]= useState([]);
const [search, setsearch]= useState("");
const [filteredrecipes,filterrecipes]=useState([]);
//whenever a state variable update , react triggers a render of the component

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
       
        <input    type="text"  value= {search} onChange={(event)=>
        {
          setsearch(event.target.value); 
          
          
        }}>
      
        </input> 
        <button onClick={
          ()=>{
               //filter the restaurants cards and update the UI 
               console.log(search);
               filteredrecipes(recipec.filter((element)=>{element in content}));

          }
        }>
          search
        </button>
       
         </div>
         <div className="res-container">
          
          { recipec.length!= 0 ? (
           recipec.map((recipe) => {
            return( <RestaurantCard  id= {recipe.id} title={recipe.name} text={recipe.ingredients} review={recipe.rating} time={recipe.prepTimeMinutes} img={recipe.image} />) })
           ) : <Shimmer/>
          
          }
         </div>
          </div>
     )
}

export default Body;