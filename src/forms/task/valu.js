
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
export let Insertvaluse=(obj)=>{
    var std="";
if (localStorage.getItem("Data")==null) {
}
else{
    std=JSON.parse(localStorage.getItem("Data"));
    
}
    std.splice(std.length,0,obj);
    localStorage.setItem("Data",JSON.stringify(std));
    
}
export const Listall=()=>{

    return std;
}
export const Read = (myindex) => {
    var std="";
    if (localStorage.getItem("Data")==null) {
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
    localStorage.setItem("Data",JSON.stringify(std));
    // replace
}