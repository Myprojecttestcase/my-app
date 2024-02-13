import { useState } from 'react';
export function Dec(){
    return(
      <>
      
      <ul>
        <li style={{backgroundColor:'red'}}>
          hai
        </li>
        <li className="bg-warning">
          bye
        </li>
      </ul>
     
      </>
    );
  }
export const Firstform=()=>{

    let [gname,sname]=useState("");
    function isname(temp){
        sname(temp.target.value)
    }
    function igname(){
        alert("Welcome "+gname)
    }
    return(
        <> <input onChange={isname}/>
        <button className="btn" onClick={igname}>clic me!</button></>
    );
}