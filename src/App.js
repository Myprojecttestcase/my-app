import React from 'react';
function App(){
  return(
    <>
    <h1 className="text-primary" >
      hai
    </h1>
   <Dec />
    </>
  )
}
function Dec(){
  let as={backgroundColor :'orange'}
  return(
    <>
    
    <ul>
      <li style={{backgroundColor:'red'}}>
        hai
      </li>
      <li style={as}>
        bye
      </li>
    </ul>
    </>
  )
}
export {App};
