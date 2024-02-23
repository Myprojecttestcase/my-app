import { useEffect, useState } from "react";
import { Form } from "./form";
import { Readp } from "./Read";
import { Deletestd } from "./valu";
import { Updatepage1 } from "./Update";

export let Main=()=>{
    const[createpage,setCreatepage]=useState(true);
    const[readpage,setReadpage]=useState(false);
    const[Updatepage,setUpdatepage]=useState(false);
    const[Deletepage,setDeletepage]=useState(false);
    const[Pos,Setpos]=useState(1);
    const [obj, setObj] = useState([]);
    const[getter,sete]=useState({
        Name:"",
        Pass:""
});

    let setter=(input)=>{
        const{name,value}=input.target;
       sete(
        (inputcontent)=>{ 
            // alert(name+value);
            return{
            ...inputcontent,
            [name]:value,
        }}
       );
    }
   const Findind=(name1,pass)=>{
    let std=[""];
    if(localStorage.getItem("Data") === null){
        alert('No User Registered');
        return;
    }
    std=JSON.parse(localStorage.getItem("Data"));
    std.map((data,index)=>{if((name1==data.stdName&&pass==data.stdPass)){
    Setpos(index);
    setObj(data);
    setReadpage(true);
    setCreatepage(false);
    return;
    }
    if(index==(std.length-1)){alert('Username or Password is wrong');}
    });
}
    

    return(

        <>{
            (createpage)?<> <div className="ms-3"> 
            <div className="row justify-content-center " > 
            <div className="col-6 mt-5" style={{border:'2px solid green','borderRadius':'30px'}}>
            <div className="row justify-content-center mt-5" >
            
            <label className="form-label col-2" >Name : </label>
                <input className="form-control col me-3" onChange={setter} type="text" value={getter.Name} name="Name" placeholder="Enter Name"/>
           </div>
            <div className="row mt-2">
                 <label className="form-label col-2">Password : </label>
            <input className="form-control col me-3" onChange={setter} type="password" value={getter.Pass} name="Pass" placeholder="Enter password"/>
            
           </div>
            
            <div className="row justify-content-center">
            <button className="btn btn-outline-success mt-3 mb-4 col-3" onClick={()=>{Findind(getter.Name,getter.Pass);}} >Login </button>
            </div></div>
            
            </div>
            </div>
            <h5 className="text-center">Don't have an account <p className="text-primary" onClick={()=>{setCreatepage(false);}} >Register here</p></h5></>:
            (readpage)?<><Readp who={Pos} />
            <div className=' mt-3 row justify-content-center'>
            <button className='btn btn-outline-warning col-2 me-2'
                onClick={()=>{setUpdatepage(true);setReadpage(false);}}>Update</button>
            <button className='btn btn-outline-danger col-2'
                onClick={()=>{setDeletepage(true);setReadpage(false);}}>Delete</button>
        </div>
            <div className=' mt-3 row justify-content-center'>
            <button className='btn btn-outline-secondary col-3'
                onClick={()=>{setCreatepage(true);setReadpage(false);}}>Back</button>
        </div>
            </>:
            (Updatepage)?<><Updatepage1 who={Pos} caon={obj}/>
             <div className=' mt-3 row justify-content-center'>
            <button className='btn btn-outline-danger col-3'
                onClick={()=>{setCreatepage(true);setUpdatepage(false);}}>Back</button>
        </div>
            </>:
            (Deletepage)?
            <><Readp who={Pos}/> 
            <h1 className="text-danger mt-5 mb-5 text-center">Deleted</h1> 
            <div className=' mt-5 row justify-content-center'>
            <button className='btn btn-outline-success col-3'
            onClick={ () => {Deletestd(Pos);setCreatepage(true);setDeletepage(false);
            }}>Back
            </button>
            </div></>
            :
            <>
            <Form/> <div className=' mt-3 row justify-content-center'>
            <button className='btn btn-outline-danger col-3'
                onClick={()=>{setCreatepage(true)}}>Cancel</button>
        </div>
</>

        }</>
    );
}
