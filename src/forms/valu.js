let std=[ {
    stdName:"Venkat",
    stdage:21,
    stdplace:"Trichy",
    stdemail:"eshsv2019@gmail.com",
    pinNumber:621010
},{
    stdName:"naan",
    stdage:22,
    stdplace:"Trichy",
    stdemail:"eshsv2020@gmail.com",
    pinNumber:621014
}
];
export let Insertvaluse=(obj)=>{
    std.push(obj);
}
export const Listall=()=>{
    return std;
}
export const Read = (myindex) => {
    return std[myindex];
}
export const Deletestd = (myindex) => {
   delete std[myindex];
}