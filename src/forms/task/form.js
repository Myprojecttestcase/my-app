import { useState } from "react";
import { Insertvaluse } from "./valu";

export let Form =()=>{
    const [std,setstd]=useState(
        {
            stdName:"",
            stdage:0,
            stdPass:"",
            stdCPass:"",
            stdplace:"",
            stdemail:"",
            pinNumber:0
        }
    );
    let setter=(input)=>{
        const{name,value}=input.target;
       setstd(
        (inputcontent)=>{ 
            // alert(name+value);
            return{
            ...inputcontent,
            [name]:value,
        }}
       );
    }
    let vaild=()=>{if(std.stdName==""||std.stdage==0||std.stdplace==""||std.stdemail==""||std.pinNumber==0){
        
        return false}
        else if(std.stdCPass!=std.stdPass){
            return false;
        }
        else{return true;}
}
    let register=()=>{
        Insertvaluse(std);
    }
    return(
        <>
        <div className="row justify-content-center">
        <div className='col-lg-7 col-sm-12  col-md-10'>
                    <h1 className='text-center mt-2 text-warning'>REGISTERATION FORM</h1>
                    <div className='row'>
                        <div className="col">
                            <label className="form-label">Name : </label>
                            <input className="form-control" onChange={setter}
                            type="text" name="stdName" value={std.stdName} placeholder="Enter Name"/> 
                        </div>
                        <div className='row mt-1'></div>
                        <div className="col">
                            <label className="form-label">Password : </label>
                            <input className="form-control" onChange={setter}
                            type="text" name="stdPass" value={std.stdPass} placeholder="Enter Password"/> 
                        </div>
                        <div className="col">
                            <label className="form-label">Confirm Password : </label>
                            <input className="form-control" onChange={setter}
                            type="text" name="stdCPass" value={std.stdCPass} placeholder="Confirm Password"/> 
                        </div>
                        <div className='row'></div>
                        <div className="col">
                            <label className="form-label">Age : </label>
                            <input className="form-control" onChange={setter}
                            type="number" name="stdage" value={std.stdage} placeholder="Enter Age"/>
                        </div>
                        <div className='row'></div>
                        <div className="col">
                            <label className="form-label">place : </label>
                            <input className="form-control" onChange={setter}
                            type="text" name="stdplace" value={std.stdplace} placeholder="Enter Place"/>
                        </div>
                        <div className='row'></div>
                        <div className="col">
                            <label className="form-label">Email : </label>
                            <input className="form-control" onChange={setter}
                            type="email" name="stdemail" value={std.stdemail} placeholder="Enter Email"/> 
                        </div>
                        <div className='row'></div>
                        <div className="col">
                            <label className="form-label">Pin Number : </label>
                            <input className="form-control" onChange={setter}
                            type="number" name="pinNumber" value={std.pinNumber} placeholder="Enter Pinnumber"/> 
                        </div>
                    </div>
        </div>
        </div>
        <div className=' mt-5 row justify-content-center'>
                            <button className='btn btn-outline-success col-3'
                                onClick={register}>Register</button>
                        </div>
        
        </>
    );
}