import React from 'react'

//passing props dynamically
export default function WorkSample({year, experience, institute}) {
  return (
    <div>
      <span>{year}</span>
      <h2>{experience}</h2>
      <p>{institute}</p>
    </div>
  )
}
