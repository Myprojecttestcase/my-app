export let Insertvaluse=(obj)=>{
  var std="";
if (localStorage.getItem("Data")==null) {
    std=[ {
        stdName:"Admin",
        stdage:21,
        stdplace:"Trichy",
        stdPass:"Not",
        stdCPass:"Not",
        stdemail:"eshs****@gmail.com",
        pinNumber:621010
    },{
        stdName:"Ad",
        stdage:21,
        stdplace:"Trichy",
        stdPass:"Not",
        stdCPass:"Not",
        stdemail:"eshs****@gmail.com",
        pinNumber:621010
    }
    ];
    localStorage.setItem("Data", JSON.stringify(std));
}
else{
    std=JSON.parse(localStorage.getItem("Data"));
    
}   
    if(Validi(obj)&&Chec(obj)){
    std.push(obj);
    localStorage.setItem("Data",JSON.stringify(std));}
    
}
export const Listall=()=>{
var std="";
if (localStorage.getItem("Data")==null) {
    std=[ {
        stdName:"Admin",
        stdage:21,
        stdplace:"Trichy",
        stdPass:"Not",
        stdCPass:"Not",
        stdemail:"eshs****@gmail.com",
        pinNumber:621010
    },{
        stdName:"Ad",
        stdage:21,
        stdplace:"Trichy",
        stdPass:"Not",
        stdCPass:"Not",
        stdemail:"eshs****@gmail.com",
        pinNumber:621010
    }
    ];
    localStorage.setItem("Data", JSON.stringify(std));
}
else{
    std=JSON.parse(localStorage.getItem("Data"));
    
}
    return std;
}
export const Read = (myindex) => {
    var std="";
if (localStorage.getItem("Data")==null) {
    std=[ {
        stdName:"Admin",
        stdage:21,
        stdplace:"Trichy",
        stdPass:"Not",
        stdCPass:"Not",
        stdemail:"eshs****@gmail.com",
        pinNumber:621010
    },{
        stdName:"Ad",
        stdage:21,
        stdplace:"Trichy",
        stdPass:"Not",
        stdCPass:"Not",
        stdemail:"eshs****@gmail.com",
        pinNumber:621010
    }
    ];
    localStorage.setItem("Data", JSON.stringify(std));
}
else{
    std=JSON.parse(localStorage.getItem("Data"));
    
}
        localStorage.setItem("Data",JSON.stringify(std));
    return std[myindex];
}
export const Deletestd = (myindex) => {
    var std="";
    if (localStorage.getItem("Data")==null) {
        std=[{
            stdName:"Admin",
            stdage:21,
            stdplace:"Trichy",
            stdPass:"Not",
            stdCPass:"Not",
            stdemail:"eshs****@gmail.com",
            pinNumber:621010
        },{
            stdName:"Ad",
            stdage:21,
            stdplace:"Trichy",
            stdPass:"Not",
            stdCPass:"Not",
            stdemail:"eshs****@gmail.com",
            pinNumber:621010
        }];
    }
    else{
        std=JSON.parse(localStorage.getItem("Data"));
        
    }
   std.splice(myindex,1);
   localStorage.setItem("Data",JSON.stringify(std));
}
export const Fetchexact = (name) => {
    var std="";
if (localStorage.getItem("Data")==null) {
    std=[ {
        stdName:"Admin",
        stdage:21,
        stdplace:"Trichy",
        stdPass:"Not",
        stdCPass:"Not",
        stdemail:"eshs****@gmail.com",
        pinNumber:621010
    },{
        stdName:"Ad",
        stdage:21,
        stdplace:"Trichy",
        stdPass:"Not",
        stdCPass:"Not",
        stdemail:"eshs****@gmail.com",
        pinNumber:621010
    }
    ];
    localStorage.setItem("Data", JSON.stringify(std));
}
else{
    std=JSON.parse(localStorage.getItem("Data"));
    
}
    const temp = std.filter(
        (datn, index) => {
            return datn.stdName === name;
        }
    )
    return temp[0];
}

export const replace = (data, pos) => {
    var std="";
    if (localStorage.getItem("Data")==null) {
        std=[{
            stdName:"Admin",
            stdage:21,
            stdplace:"Trichy",
            stdPass:"Not",
            stdCPass:"Not",
            stdemail:"eshs****@gmail.com",
            pinNumber:621010
        },{
            stdName:"Ad",
            stdage:21,
            stdplace:"Trichy",
            stdPass:"Not",
            stdCPass:"Not",
            stdemail:"eshs****@gmail.com",
            pinNumber:621010
        }];
    }
    else{
        std=JSON.parse(localStorage.getItem("Data"));
    }
std[pos] = data;
    if(Validi(std[pos])&&ChecUp(std[pos],pos)){ 
        alert(JSON.stringify(std[pos]));
        localStorage.setItem("Data",JSON.stringify(std));}
    // replace
}
export let Validi=(obj)=>{
    var std="";
    if (localStorage.getItem("Data")==null) {
        std=[{
            stdName:"Admin",
            stdage:21,
            stdplace:"Trichy",
            stdPass:"Not",
            stdCPass:"Not",
            stdemail:"eshs****@gmail.com",
            pinNumber:621010
        },{
            stdName:"Ad",
            stdage:21,
            stdplace:"Trichy",
            stdPass:"Not",
            stdCPass:"Not",
            stdemail:"eshs****@gmail.com",
            pinNumber:621010
        }];
    }
    else{
        std=JSON.parse(localStorage.getItem("Data"));
    }

    if(obj.stdName===""){alert("User Name Must be Filled"); return false;}
    else if(obj.stdPass===""){alert("Password Must be Filled"); return false;}
    else if(!(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?\s]).{8,}$/).test(obj.stdPass)){
                alert(" Number should be 1 uppercase ,1 specialcharacter and atleast 1 number , Total 8 charecter");
                return false;
            }
    else if(!(/^(?=.*[a-z])(?=.*[A-Z]).{2,}$/).test(obj.stdName)){
                alert(" Name should be 1 uppercase and atleast 1 number , Total 2 charecter");
                return false;
            }
    else if(obj.stdCPass===""){alert("User CPassword Must be Filled"); return false;}
    else if(obj.stdCPass!==obj.stdPass){alert("User Password Must be Matched"); return false;}
    else if(obj.stdage==""){alert("User Age Must be Filled"); return false;}
    else if(obj.stdplace==""){alert("User Placce Must be Filled"); return false;}
    else if(obj.stdemail==""){alert("User Email Address Must be Filled"); return false;}
    else if(obj.pinNumber==""){alert("User Pin Number Must be Filled"); return false;}
    return true;
}
export let Chec=(obj)=>{
    var std="";
    if (localStorage.getItem("Data")==null) {
        std=[{
            stdName:"Admin",
            stdage:21,
            stdplace:"Trichy",
            stdPass:"Not",
            stdCPass:"Not",
            stdemail:"eshs****@gmail.com",
            pinNumber:621010
        },{
            stdName:"Ad",
            stdage:21,
            stdplace:"Trichy",
            stdPass:"Not",
            stdCPass:"Not",
            stdemail:"eshs****@gmail.com",
            pinNumber:621010
        }];
    }
    else{
        std=JSON.parse(localStorage.getItem("Data"));
    }

    var testIt=obj.stdName;
    var i=0, k=0, indx=[];
    for ( i=0; i<std.length; i++) 
      {  if (std[i].stdName === testIt){ indx = [i,k]; break; }   }
    if(typeof indx[0] == "undefined" || typeof indx[1] == "undefined"){ return true; }
    else {
        alert("User Name Is Already Taken");
        return false;}
}
export let ChecUp=(obj,posi)=>{
    var std="";
    if (localStorage.getItem("Data")==null) {
        std=[{
            stdName:"Admin",
            stdage:21,
            stdplace:"Trichy",
            stdPass:"Not",
            stdCPass:"Not",
            stdemail:"eshs****@gmail.com",
            pinNumber:621010
        },{
            stdName:"Ad",
            stdage:21,
            stdplace:"Trichy",
            stdPass:"Not",
            stdCPass:"Not",
            stdemail:"eshs****@gmail.com",
            pinNumber:621010
        }];
    }
    else{
        std=JSON.parse(localStorage.getItem("Data"));
    }

    var testIt=obj.stdName;
    var i=0, k=0, indx=[];
    for ( i=0; i<std.length; i++) 
      {  if (std[i].stdName === testIt && i!==posi){ indx = [i,k]; break; }   }
    if(typeof indx[0] == "undefined" || typeof indx[1] == "undefined"){ return true; }
    else {
        alert("User Name Is Already Taken");
        return false;}
}