import { useState } from "react";
import im from './Kaw.webp';
export let Wheather =()=>{
    let [geti,seti]=useState("");
    let [css,setcss]=useState({});
    function setw(temp)
    {
        seti(temp.target.value);
    }
    function getw(){
        !geti.localeCompare("spring",undefined,{sensitivity:'accent'})?setcss({backgroundImage:`url(${im})`}) :
         !geti.localeCompare("winter",undefined,{sensitivity:'accent'})?setcss({backgroundImage:"url('https://thumbs.dreamstime.com/z/merry-christmas-happy-new-year-greeting-card-copy-space-snowman-standing-winter-landscape-snow-82233888.jpg?w=992')",backgroundColor:'skyblue'}):
         !geti.localeCompare("summer",undefined,{sensitivity:'accent'})?setcss({backgroundImage:"url('./Kaw.webp')",backgroundColor:'Green'}):
         !geti.localeCompare("fall",undefined,{sensitivity:'accent'})?setcss({backgroundImage:`url('./Kaw.webp')`,backgroundColor:'orange'}):
         setcss({backgroundImage:`url(${im})`})
    }
    return(<>
    <div >
    <input onChange={setw}/>
    <button className="btn btn-outline-dark" onClick={getw}>click Me!</button>
    </div>
    <div style={css}><pre>sda</pre></div>
    </>);
}