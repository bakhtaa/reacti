
import React from "react";
import ReactDOM from "react-dom/client";

//React functionnal Component is just a react function which returns some piece of jsx:=> returns a react element

/*
header
-logo / home_butt about_butt panier_butt
body 
-search butt
-Cards Container:
   -restaurant cards 
footer
-copyright / links / contact / adress
*/





const Title = ()=>{
     return (
     <div>
          <h2>ija njarbou nrundriw component fi west component</h2>
     </div>)
}
const HeaderComponent=()=>{
     return (
          <div>
<h1> awel react component</h1>
<Title/>
          </div>
     ) 
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent/>);
