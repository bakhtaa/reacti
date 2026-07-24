
import React from "react";
import ReactDOM from "react-dom/client";

//React functionnal Component is just a react function which returns some piece of jsx:=> returns a react element

/*
header
-logo / home_butt about_butt panier_butt
body 
-search butt
-Cards Container:
   -restaurant cards :
       restaurant card: 
        - image
        -title of the restaurant
        -cuisines
        -rating
        -delivery time
footer
-copyright / links / contact / adress
*/



const Header=()=>{
     return(
          <div className="header">
          <div  className="logo-container">
          <img src="https://images-platform.99static.com/PqkxPzdIGHYlwJzMzFSLbWCaI0g=/0x0:1181x1181/500x500/top/smart/99designs-contests-attachments/134/134197/attachment_134197839"></img>
          </div>
          <div className="nav-items">
               <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
               </ul>
          </div>
          </div>

     )
}
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


const Applayout= ()=>{
     return (
          <div className="app">
               <Header/> 
               <Body/>
          </div>
     )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Applayout/>);
