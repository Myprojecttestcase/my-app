import { useState } from "react";
import { replace } from "./valu";
export let Updatepage1 =(pos)=>{
    const [std,setstd]=useState(
        {
            stdName:pos.caon.stdName,
            stdage:pos.caon.stdage,
            stdplace:pos.caon.stdplace,
            stdPass:pos.caon.stdPass,
            stdCPass:pos.caon.stdCPass,
            stdemail:pos.caon.stdemail,
            pinNumber:pos.caon.pinNumber
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
        
        return false}else{return true;}
}
    let register=()=>{
        replace(std,pos.who);
    }
    return(
        <>
        <div className="row justify-content-center">
        <div className='col-lg-7 col-sm-12  col-md-10'>
                    <h1 className='text-center  text-warning'>UPDATION FORM</h1>
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
                            type="Password" name="stdPass" value={std.stdPass} placeholder="Enter Password"/> 
                        </div>
                        <div className="col">
                            <label className="form-label">Confirm Password : </label>
                            <input className="form-control" onChange={setter}
                            type="Password" name="stdCPass" value={std.stdCPass} placeholder="Confirm Password"/> 
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
                                onClick={
                                
                                    register}
                                >UPDATE</button>
                        </div>
        
        </>
    );
}