



const RestaurantCard=({title,text,review,time, img})=>{
     return(
          <div className="card-component">
               <img src={img}></img>
               <h3>{title}</h3>
               <h4>{text}</h4>
               <h4>{review}</h4>
               <h4>{time}</h4>

          </div>
     )
}



export const PromotedRestauCard=(RestaurantCard)=>{
  return(
     ()=>{
     return(
       <div>
        <label>promoted</label>  
        <RestaurantCard/>
       </div>
          )
     }
  )
}

export default RestaurantCard;