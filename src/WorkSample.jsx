import React from 'react'

//passing props dynamically
export default function WorkSample({work}) {
  const mystyle = {
    border: "1px solid red",
    backgroundColor:"green",
    color:"white",
    borderRadius:"10px" ,
    padding:"10px",
    marginTop:"10px",
  }
  return (
    <div style={mystyle}>
      <span>{work.year}</span>
      <h2>{work.experience}</h2>
      <p>{work.institute}</p>
    </div>
  )
}
