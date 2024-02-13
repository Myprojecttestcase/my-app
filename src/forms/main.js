import { useEffect, useState } from "react";
import { Deletestd, Listall } from "./valu";
import { Form } from "./form";
import { Readp } from "./Read";
export let Main=()=>{
    
    const[createpage,setCreatepage]=useState(false);
    const[tempvalue,setTempvalues]=useState([]);
    const [readpage, setReadpage] = useState(false);
    const [dpage, setdpage] = useState(false);
    const [position, setPosition] = useState(0);
    useEffect(()=>{
        setTempvalues(Listall);
    });
    return(
    <>
    {(createpage)?
    <>
    <Form />
    <div className=' mt-5 row justify-content-center'>
        <button className='btn btn-outline-danger col-3'
        onClick={() => {
        setCreatepage(false)}}>Cancel
    </button></div>
    </>:
    (readpage)?<><Readp who={position}/>
    <div className=' mt-5 row justify-content-center'>
        <button className='btn btn-outline-danger col-3'
        onClick={ () => {
        setReadpage(false)}}>Close
    </button></div></>
    :(dpage)?<><Readp who={position}/> 
            <h1 className="text-danger mt-5 mb-5 text-center">Deleted</h1> 
            <div className=' mt-5 row justify-content-center'>
            <button className='btn btn-outline-success col-3'
            onClick={ () => {Deletestd(position);
            setdpage(false)}}>Back
            </button>
            </div>
    </>:
    <>
    <div className=' mt-5 row justify-content-center'>
        <div> <h1 className="text-center mb-3 text-info">Register Here</h1></div>
    <button className='btn btn-outline-success col-3'
        onClick={ () => {
        setCreatepage(true)}}>Register
    </button></div>
    <div className='container mt-5'>
    <table className='table table-striped table-bordered'>
    <thead>
        <tr>
            <th>Student NAME</th>
            <th>Student AGE</th>
            <th>Student PLACE</th>
            <th>Student MAILID</th>
            <th>PIN CODE</th>
            <th>ACTIONS</th>
        </tr>
    </thead>
    <tbody>
    {
    tempvalue.map(
    (element, index) =>
        <>
            <tr>
                <td>{element.stdName}</td>
                <td>{element.stdage}</td>
                <td>{element.stdplace}</td>
                <td>{element.stdemail}</td>
                <td>{element.pinNumber}</td>
                <td>
                    <button className="btn btn-outline-dark" onClick={()=>{setReadpage(true);setPosition(index)}}>READ</button>
                    <button className="btn btn-outline-dark">UPDATE</button>
                    <button className="btn btn-outline-dark" onClick={()=>{setdpage(true);setPosition(index)}}> DELETE</button>
                </td>
            </tr>
        </>
            )
            }
        </tbody>
        </table>
        </div>
        </>
        }
    </>
    );
}