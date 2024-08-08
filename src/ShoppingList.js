import { useState } from "react";
import "./index.css"


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faTrash } from '@fortawesome/free-solid-svg-icons'


const ShoppingList=()=>{

    // const mylist=["Orange","Rice","Tomato","Oil","Sugar"];
    //state
    const [mylist,setMylist]=useState(["Wheat","Rice","Tomato","Sugar"])
    const [items,setMyitem]=useState("")
    // const [remove,setRemove]=useState("")

    //add shopping items to items variable
    const handleChange=(event)=>{
        setMyitem(event.target.value);
        console.log(items);

    }
    //add shopping items on web page via mylist usestate
    const handleAdd=()=>{
        if(items.trim()!==""){
            setMylist([...mylist,items]);
            setMyitem("")
        }  
    }

    // // removing  items from mylist array 
    // const handleDel=(event)=>{
    //     // setRemove(mylist.splice(event.target.value,1));
    //     console.log(remove);
    // }
    const handleDel = (index) => {
        const newItems = mylist.filter((_, i) => i !== index);
        setMylist(newItems);
      };




    //appearance
    return(
        <div className="shopping">
            <div className="box">
                <h3>Shopping List</h3>
                <input  type="text" onChange={handleChange}/>
                <button onClick={handleAdd} >Add</button>
            
                <ul className="mainList">
                    {
                        mylist.map(function(item,index){
                        return(
                                <div className="list_item">
                                    <li>{item}<button onClick={()=>handleDel(index)}><FontAwesomeIcon  icon={faTrash} /></button></li>
                                </div>
                            ) 
                        })
                    }
                </ul>   
            </div>
        </div>
    )
}

export default ShoppingList

