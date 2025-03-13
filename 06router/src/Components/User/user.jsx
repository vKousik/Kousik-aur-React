import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userId} = useParams()
  return (
    <div className='bg-gray-600 text-white text-3xl py-10 my-20'>User : {userId}</div>
  )
}

export default User