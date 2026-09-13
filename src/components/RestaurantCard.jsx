



const RestaurantCard=({ name, image, rating, reviewCount, cookTimeMinutes })=>{
     return(
          <div className="card-component">
            <img src={image} />
            <h3>{name}</h3>
            <h4>{rating}</h4>
            <h4>{reviewCount}</h4>
            <h4>{cookTimeMinutes} min</h4>
          </div>
     )
}



export const PromotedRestauCard=(RestaurantCard)=>{
  return(
     (props)=>{
     return(
       <div>
        <label>promoted</label>  
        <RestaurantCard {...props}/>
       </div>
          )
     }
  )
}

export default RestaurantCard;