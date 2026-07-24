
import RestaurantCard from "./RestaurantCard";


const Body=()=>{
     return (
          <div className="body">
         <div className="search">search</div>
         <div className="res-container">
          <RestaurantCard  title="momento" text="restau lhouma" review="5 stars" time= "35minutas" img="https://images.ctfassets.net/trvmqu12jq2l/6FV4Opt7wUyR91t2FXyOIr/f32972fce10fc87585e831b334ea17ef/header.jpg?q=60&w=1200&h=1073&fm=webp&f=faces&fit=fill" />
         <RestaurantCard  title="chapati msakra" text="restau lhouma" review="5 stars" time= "6minutas" img="https://lh3.googleusercontent.com/grass-cs/ACvplmP5gan_vNj3AFojkiaPmQy-S6uJtsjPNv9PWgL2PICDx5NLSF8YSK7u9kRQLJq03-vVuwAYUljESCvsQiAyUweqcY0OhOMoY2vk4DOhAFpBzY7Ts12S0WbZ5urYqiiMsle_NwGzoXfYybFX=s294-w294-h220-n-k-no" />
          
         </div>
          </div>
     )
}

export default Body;