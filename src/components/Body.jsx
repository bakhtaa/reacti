
import RestaurantCard from  "./RestaurantCard";
import PromotedRestaurantCard from  "./RestaurantCard";
import Shimmer from "./Shimmer.jsx";
import { useState , useEffect} from "react";
import { Link } from "react-router-dom";




const Body=()=>{

const [recipec, setrecipes]= useState([]);
const [search, setsearch]= useState("");
const [filteredrecipes,filterrecipes]=useState([]);


const PromotedCard= PromotedRestaurantCard(RestaurantCard);
//whenever a state variable update , react triggers a render of the component
console.log(filteredrecipes);
     useEffect(()=>{
          console.log("baed ma lpage trendri we will fetch the data");
          fetchData();

     }, []);


     const fetchData=async ()=>{
          const response= await   fetch('https://dummyjson.com/recipes');
          const {recipes}= await response.json();
          setrecipes(recipes);
          filterrecipes(recipes);
          console.log(recipes);
          console.log(recipec);
     }

     return (
          <div className="body">
            
         <div className="filter">
       
        <input    type="text"  value= {search} onChange={(event)=>
        {
          setsearch(event.target.value); 
               //filter the restaurants cards and update the UI 
             
               
               console.log(search);
               filterrecipes(recipec.filter((recipe)=>{return recipe.name.toLowerCase().includes(event.target.value.toLowerCase())}));
               console.log(filteredrecipes);
               
              

          
        }}>
      
        </input> 
        <button onClick={
          ()=>{
               //filter the restaurants cards and update the UI 
               console.log(search);
               filterrecipes(recipec.filter((recipe)=>{return recipe.name.toLowerCase().includes(search)}));
               console.log(filteredrecipes);
               
            

          }
        }>
          search
        </button>
       
         </div>
         <div className="res-container">
          
          { filteredrecipes.length!= 0 ? (
           filteredrecipes.map((recipe) => {
            return( <Link key={recipe.id}  to={'/restaurants/'+recipe.id}><RestaurantCard   id= {recipe.id} title={recipe.name} text={recipe.ingredients} review={recipe.rating} time={recipe.prepTimeMinutes} img={recipe.image} /> </Link> )})
           ) : <Shimmer/>
          
          }
         </div>
          </div>
     )
}

export default Body;