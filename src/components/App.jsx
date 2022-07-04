import React from "react";
import Login from "./Login";

var isLoggedIn = false;
const currentTime = new Date().getHours();
console.log(currentTime);

function App() {
  return (
    <div className="container">
      {
        /* 
        I want to be able to carry out functions inline style:
        ... but if i copy function to the place that i call it from
        ... its not work .... and i get an error 

        
        ... why?
        ... because when we use JSX, everything that goes inside 
        these curly braces must be an expression.
        
        ... in Javascropt we have statments and expressions
        ... if and for structures is a statment ... so its not work

        
        // so Javascript hase something called The ternary operator.
        
        */

        /*
        Ternary operator  
        Condition      ?    Do If True     :  Do If False
        example:
        isCloudy === true ? bringUmbrella() : bringSuncreen()

        */

        // if ...                 do           else   do
        // isLoggedIn === true ? <h1>hello</h1> : <Login />
        // currentTime > 0 ? <h1> why are you working ? </h1> : null

        // only if statment
        currentTime > 0 && <h1> why are you working ? </h1>
        // else >>> null
      }
    </div>
  );
}

export default App;
