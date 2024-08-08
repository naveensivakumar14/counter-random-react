// import React from "react";
// import ReactDOM from "react-dom/client";
// import { useState } from "react";

import { useState } from "react"

// // Form component (input)
// function Formcomp(){
//     //React useState()
//     const [myname,setMyname]=useState("");
//     // handleChange() function
//     function handleChange(event){
//         setMyname(event.target.value);
//         console.log(myname);
//     }
//     //HTML Apperance 
//     return(
//     <>
//     <form>
//         {/* Two way binding*/}
//         <input value={myname} onChange={handleChange}></input>
//         <button>Submit</button>
//     </form>
//     </>
//     )
// }

// function Cart(){
//     //react useState (dynamic changes)
//     const[item,setItem]=useState("");
//     const[result,setResult]=useState("Your Bag: ")
//     //function addproducts
//     function addCart(event){
//         setItem(event.target.value);
//         console.log(item);
//     }
//     //function showing result
//     function handleResult(event){
//         event.preventDefault();
//         setResult(item);
//     }
//     //HTML Appearance
//     return(
//         <>
//             {/* oneway binding */}
//             <input onChange={addCart}></input>
//             <button onClick={handleResult}>Submit</button>
//             <h1>{result}</h1>
//         </>
//     )
// }

// export default Cart




/*----Controlled components-----*/



//two way bindng 

// function Formcomp(){
//     //state
//     const [myname,setMyname]=useState("Arjun")
//     const [result,setResult]=useState("UserName")

//     //data functions
//     const handleChange=(event)=>{
//         setMyname(event.target.value)
//     }
//     const showResult=(event)=>{
//         //restrict the sudden loading when click the submit button
//         event.preventDefault(); 
//         setResult(myname);
//     }

//     //Apperance
//     return(
//         <>
//             <input value={myname} onChange={handleChange} type="text" />
//             <button onClick={showResult}>Submit</button>
//             <h1>{result}</h1>
//         </>
//     )
// }

// export default Formcomp


function Formcomp(){

    //react state for dynamic UI elements
    var [fname,setFname]=useState();
    var [lname,setLname]=useState();
    var [result,setResult]=useState("Result")

    //Logic
    const handleFname=(event)=>{
        setFname(event.target.value);
    }
    const handleLname=(event)=>{
        setLname(event.target.value);
    }
    const handleResult=(event)=>{
        event.preventDefault();
        setResult(fname+lname);
    }

    //Appearnce
    return(
        <>
            <input value={fname} type="text" onChange={handleFname} />
            <br/>
            <input value={lname} type="text" onChange={handleLname} />
            <br/>
            <input type="submit" onClick={handleResult} />
            <h1>{result}</h1>
        </>
    )
}
export default Formcomp