import React from 'react'
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <div className='h-full flex justify-center items-center'>
        <h1>Page not Found!</h1>
    <Link to="/">Go to HOme</Link>
      
    </div>
  )
}

export default PageNotFound
