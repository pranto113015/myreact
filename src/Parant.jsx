import React from 'react'
import Child from './Child'

export default function Parant() {
  return (
    <div className='p-3 border w-70 border-info m-3'>
      Parent 👴
      <Child/>
    </div>
  )
}
