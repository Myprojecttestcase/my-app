import { useState } from "react"
import { Form1 } from "./form";

export let Code=()=>{
    const[createpage,setcreatpage]=useState(false);
    return(<>
    {(createpage)?
        <><Form1/>
        <button onClick={()=>{
            setcreatpage(false);
        }} className="btn btn-outline-danger mt-5 ms-5">cancel</button>
        </>:<>
        <button onClick={()=>{
            setcreatpage(true);
        }} className="btn btn-outline-success text-center mt-5">Register</button>
        </>
    }
    </>)
}