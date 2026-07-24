
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";


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

