import React from 'react'

//passing props dynamically
export default function WorkSample({year, experience, institute}) {
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
      <span>{year}</span>
      <h2>{experience}</h2>
      <p>{institute}</p>
    </div>
  )
}
