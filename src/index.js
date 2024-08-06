// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css"

// const root=ReactDOM.createRoot(document.getElementById("root"));
//React Components

//Navbar Component

/*
function Navbar(){
  return(
    <div >
     
      <ul class="nav">
        <h4>Perfumy</h4>
        <li><a href="#">Home</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
    </div>
  )
}

function About(){
  return(
    <div>
      <h2>About us</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam dolorum blanditiis hic, nesciunt quam porro. Deserunt aspernatur totam quaerat eaque, veritatis, iusto temporibus nulla, officia molestias in quisquam. Suscipit temporibus doloremque ex perspiciatis non consequatur pariatur repellendus aliquid corporis quam! Praesentium unde ea atque enim esse reprehenderit fugiat perferendis facere temporibus hic possimus perspiciatis repellat amet consectetur, dolore debitis itaque facilis rem harum obcaecati quo deleniti? Commodi sed, expedita tempora, explicabo, vel similique esse animi rerum ratione non modi? Iure iste consectetur eum earum at aspernatur officia animi soluta a numquam voluptatibus dolore commodi consequatur repellendus dolores delectus, ex quod!</p>
    </div>
  )
}

root.render(
  <div>
    <Navbar></Navbar>
    <Navbar></Navbar>
    <About></About>
    <Navbar></Navbar>

  </div>
  
)*/


// var names=["Vicky","Madhu","Naveen"]

// root.render(
//   <div>
//     {
//       names.map(function(item){
//         return <h2>{item}</h2>
//       })
//     }
//   </div>
// )




/* Section 27 Props Task */

// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css"

// const root=ReactDOM.createRoot(document.getElementById("root"));
/*
//  student component
function Student(props){
  return(
    <div>
      <h1>{props.myname}</h1>
      <p>{props.dept}</p>
    </div>
  )
}

var person=[
  {
    myname:"Arjun",
    dept:"CSE"
  },
  {
    myname:"Balaji",
    dept:"ECE"
  },
  {
    myname:"Karthi",
    dept:"MECH"
  },
  {
    myname:"Sathish",
    dept:"EEE"
  }
]
*/
// var name=["Naveen","Santhosh","Deepak"]
// var dept=["EEE","ECE","CSE"]

/*
root.render(
    <div>
    {
      person.map(function(item,index){
        return <Student myname={item.myname} dept={item.dept}></Student>
      })
    }
    </div>
)*/



// section 27 task -- week 6 React.js
//Search Component

// function Search(){
//   return(
//     <div className="search">
//       <input type="text" placeholder="Search" />
//     </div>
//   )
// }

// Message Component
// function Message(props){

//   return(
//     <div>
//       <div className="box">
//         <div className="box1">
//           <h4>{props.name}</h4>
//           <p>{props.text}</p>
//         </div>
//         <div className="box2">
//           <p>{props.time}</p>
//           <p>{props.rating}</p>
//         </div>
//       </div>
//     </div>
//   )
// }


//Arrays of Object ------ Message details
// var data=[
//   {

//     userName: "Arjun",
//     msg: "We have a meeting on 4",
//     time: "2.35 pm",
//     rating:"★★★"
//   },
//   {
//     userName: "Kavin",
//     msg: "Share your address",
//     time: "2.15 pm",
//     rating:"★★"
//   },
//   {
//     userName: "Lisa",
//     msg: "Yeah, great job",
//     time: "1.17 pm",
//     rating:"★★★"
//   },
//   {
//     userName: "Stephen",
//     msg: "pls check you mail",
//     time: "12.04 pm",
//     rating:"★★"
//   }
// ]

// root.render(
//   <div className="main">
//       <div>
//         <Search></Search> 
//         <div>
//         {
//           data.map(function(item){
//             return(
//             <Message name={item.userName} text={item.msg} time={item.time} rating={item.rating}></Message>
//           )
//           })
//         }
//         </div>
//       </div>
//   </div>
// )


// import React from "react";
// import ReactDOM from "react-dom/client";
// import { useState } from "react";
// import "./index.css"
// // import Formcomp from "./Formcomp";
// // import Cart from "./Formcomp";

// //root 
// const root=ReactDOM.createRoot(document.getElementById("root"));


// root.render(
//   <div>
//     <Cart></Cart>
//   </div>
// )


import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import "./index.css";

//root 
const root=ReactDOM.createRoot(document.getElementById("root"));

//component

// function ChangemyCity(){

//   //state
//   var [mycity,setmyCity]=useState("Erode")

//   //function to change state value
//   function change(){
//     setmyCity("Coimbatore");
//   }

//   //appearance
//   return(
//     <div>
//     <h1>{mycity}</h1>
//     <button onClick={change}>Change</button>
//     </div>
//   )
// }


// root.render(
//   <ChangemyCity/>
// )


//Counter App 

//coomponent

function Counter(){

  //state
  var [count,setmyCount]=useState(0);
  var [random,setRandom]=useState(0);


  ///counter functions
  //increment 
  function increment(){
    setmyCount(count+1);
  }
  //reset count
  function reset(){
    setmyCount(0);
  }
  //decrement
  function decrement(){
    setmyCount(count-1);
  }

  //function create random numbers

  function randomGen(){
    var r=Math.floor(Math.random()*100);
    setRandom(r);

  }


  //appearence
  return(
    <div className="main">

      <div className="counter">
        <h3>Counter</h3>
        <h1>{count}</h1>
        <button onClick={decrement}>Dec</button>
        <button onClick={reset}>Reset</button>
        <button onClick={increment}>Inc</button>
      </div>
     

      <div className="random">
        <h3>Random number</h3>
        <h1>{random}</h1>
        <button onClick={randomGen}>Create</button>
      </div>

    </div>
    
  )


}

root.render(
  <Counter/>
)













