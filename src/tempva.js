let studentDetails = [
    {
        studentname: "Venkatesh",
        studentage: 23,
        studentemail: "eshsv2432@gmail.com",
        studentplace: "Namakkal",
        pinnumber: 637203
    },
    {
        studentname: "Arun",
        studentage: 28,
        studentemail: "sarun234@gmail.com ",
        studentplace: "Salem",
        pinnumber: 638504
    }
];



export let Create = (obj) => {
    studentDetails.push(obj);
}
export const Listall = () => {
    return studentDetails;
}
export const Read = (myindex) => {
    return studentDetails[myindex];
}