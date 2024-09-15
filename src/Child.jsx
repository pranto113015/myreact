import React, { useContext } from 'react'
import { DataContextAPI } from './DataContext'

export default function Child() {
  const ring= useContext(DataContextAPI)
  return (
    <div className='p-3 border w-70 border-warning m-3'>
    Child 🧞‍♂️ {ring}
    
  </div>
  )
}
