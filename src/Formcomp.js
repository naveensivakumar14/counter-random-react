import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";

// Form component (input)
function Formcomp(){
    //React useState()
    const [myname,setMyname]=useState("");
    // handleChange() function
    function handleChange(event){
        setMyname(event.target.value);
        console.log(myname);
    }
    //HTML Apperance 
    return(
    <>
    <form>
        {/* Two way binding*/}
        <input value={myname} onChange={handleChange}></input>
        <button>Submit</button>
    </form>
    </>
    )
}

function Cart(){
    //react useState (dynamic changes)
    const[item,setItem]=useState("");
    const[result,setResult]=useState("Result")
    //function addproducts
    function addCart(event){
        setItem(event.target.value);
        console.log(item);
    }
    //function showing result
    function handleResult(event){
        event.preventDefault();
        setResult(item);
    }
    //HTML Appearance
    return(
        <>
            {/* oneway binding */}
            <input onChange={addCart}></input>
            <button onClick={handleResult}>Submit</button>
            <h1>{result}</h1>
        </>
    )
}
export default Cart